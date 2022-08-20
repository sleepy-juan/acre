package keeper

import (
	"context"

	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateContract(goCtx context.Context, msg *types.MsgCreateContract) (*types.MsgCreateContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetWhatis(ctx, msg.Addr)

	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Property already exists.")
	} else {
		owner, _ := sdk.AccAddressFromBech32(msg.Creator)
		price1, _ := sdk.ParseCoinsNormalized(msg.Price1)

		k.bankKeeper.SendCoinsFromAccountToModule(ctx, owner, types.ModuleName, price1)

		newWhatis := types.Whatis {
			Index:  msg.Addr,
			Addr:   msg.Addr,
			Owner:  owner.String(),
			Buyer:  "",
			Price1: msg.Price1,
			Price2: msg.Price2,
			Price3: msg.Price3,
			Status: "0",
		}

		k.SetWhatis(ctx, newWhatis)
	}

	return &types.MsgCreateContractResponse{}, nil
}
