package keeper

import (
	"context"

	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) InitContract(goCtx context.Context, msg *types.MsgInitContract) (*types.MsgInitContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	whatis, isFound := k.GetWhatis(ctx, msg.Addr)

	if isFound {
		price1, _ := sdk.ParseCoinsNormalized(whatis.Price1)

		owner, _ := sdk.AccAddressFromBech32(whatis.Owner)
		buyer, _ := sdk.AccAddressFromBech32(msg.Creator)

		// k.bankKeeper.SendCoins(ctx, buyer, owner, price1)
		k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, price1)

		newWhatis := types.Whatis{
			Index:  msg.Addr,
			Addr:   msg.Addr,
			Owner:  owner.String(),
			Buyer:  buyer.String(),
			Price1: whatis.Price1,
			Price2: whatis.Price2,
			Price3: whatis.Price3,
			Status: "1",
		}

		k.SetWhatis(ctx, newWhatis)
	} else {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Property does not exist.")
	}

	return &types.MsgInitContractResponse{}, nil
}
