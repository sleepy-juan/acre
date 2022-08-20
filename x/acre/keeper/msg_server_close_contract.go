package keeper

import (
	"context"

	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CloseContract(goCtx context.Context, msg *types.MsgCloseContract) (*types.MsgCloseContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loc, isFound := k.GetLocWithAddr(ctx, msg.Addr)

	if isFound {
		// buyer 잔금 보내고 owner 전액 수령
		buyer, _ := sdk.AccAddressFromBech32(msg.Creator)
		owner, _ := sdk.AccAddressFromBech32(loc.Owner)
		price1, _ := sdk.ParseCoinsNormalized(loc.Price1)
		price2, _ := sdk.ParseCoinsNormalized(loc.Price2)
		price3, _ := sdk.ParseCoinsNormalized(loc.Price3)
		notenoughbuyer := k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, price3)
		if notenoughbuyer != nil {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "<J>The buyer does not have enough balance in the account.<J>")
		}

		k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price1)
		k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price2)
		k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price3)

		// remove closed contract
		k.RemoveLoc(ctx, loc.Index)
	} else {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "<J>Contract has not been initiated.<J>")
	}

	return &types.MsgCloseContractResponse{}, nil
}
