package keeper

import (
	"context"

	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ProceedContract(goCtx context.Context, msg *types.MsgProceedContract) (*types.MsgProceedContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loc, isFound := k.GetLocWithAddrAndBuyer(ctx, msg.Addr, msg.Creator)

	if isFound {
		// 돈 돌려주기
		buyer, _ := sdk.AccAddressFromBech32(msg.Creator)
		price2, _ := sdk.ParseCoinsNormalized(loc.Price2)
		notenoughbuyer := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, price2)
		if notenoughbuyer != nil {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "The buyer does not have enough balance in the account.")
		}

		owner, _ := sdk.AccAddressFromBech32(loc.Owner)
		price1, _ := sdk.ParseCoinsNormalized(loc.Price1)
		k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price1)

		// 업데이트
		loc.Status = "2"
		k.SetLoc(ctx, loc)

		// 나머지 끊어버리기
		cutContracts := k.GetAllLocWithAddrExceptMe(ctx, msg.Addr, msg.Creator)
		for _, cont := range cutContracts {
			price1, _ := sdk.ParseCoinsNormalized(cont.Price1)
			contBuyer, _ := sdk.AccAddressFromBech32(cont.Buyer)
			k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, contBuyer, price1)
			k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, contBuyer, price1)

			k.RemoveLoc(ctx, cont.Index)
		}
	} else {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Contract has not been initiated.")
	}

	return &types.MsgProceedContractResponse{}, nil
}
