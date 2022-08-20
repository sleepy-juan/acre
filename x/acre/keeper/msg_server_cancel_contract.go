package keeper

import (
	"context"

	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CancelContract(goCtx context.Context, msg *types.MsgCancelContract) (*types.MsgCancelContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loc, isFound := k.GetLocWithAddr(ctx, msg.Addr)

	if isFound {
		if loc.Status == "0" {
			if loc.Owner == msg.Creator {
				k.RemoveLoc(ctx, loc.Index)
			} else {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Unauthorized deletion: You are not permitted to delete this contract.")
			}
		} else if loc.Status == "1" {
			price1, _ := sdk.ParseCoinsNormalized(loc.Price1)
			owner, _ := sdk.AccAddressFromBech32(loc.Owner)
			buyer, _ := sdk.AccAddressFromBech32(loc.Buyer)
			if msg.Creator == loc.Owner {
				k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, price1)
				k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, price1)
				k.RemoveLoc(ctx, loc.Index)
			} else if msg.Creator == loc.Buyer {
				k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price1)
				k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price1)
				k.RemoveLoc(ctx, loc.Index)
			} else {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Unauthorized deletion: You are not permitted to delete this contract.")
			}
		} else if loc.Status == "2" {
			price1, _ := sdk.ParseCoinsNormalized(loc.Price1)
			price2, _ := sdk.ParseCoinsNormalized(loc.Price2)
			owner, _ := sdk.AccAddressFromBech32(loc.Owner)
			buyer, _ := sdk.AccAddressFromBech32(loc.Buyer)
			if msg.Creator == loc.Buyer {
				k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price1)
				k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, price2)
				k.RemoveLoc(ctx, loc.Index)
			} else {
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Unauthorized deletion: You are not permitted to delete this contract.")
			}
		} else {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Critical Error!")
		}
	} else {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Contract has not been initiated.")
	}

	return &types.MsgCancelContractResponse{}, nil
}
