package keeper

import (
	"context"

	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CancelContract(goCtx context.Context, msg *types.MsgCancelContract) (*types.MsgCancelContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loclist := k.GetAllLocWithAddrExceptMe(ctx, msg.Addr, ".")
	if len(loclist) == 0 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "<J>Contract has not been initiated.<J>")
	} else {
		for _, loc := range loclist {
			if loc.Status == "0" {
				if loc.Owner == msg.Creator {
					k.RemoveLoc(ctx, loc.Index)
					return &types.MsgCancelContractResponse{}, nil
				}
			} else if loc.Status == "1" {
				price1, _ := sdk.ParseCoinsNormalized(loc.Price1)
				owner, _ := sdk.AccAddressFromBech32(loc.Owner)
				buyer, _ := sdk.AccAddressFromBech32(loc.Buyer)
				if msg.Creator == loc.Owner {
					k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, price1)
					k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, buyer, price1)
					k.RemoveLoc(ctx, loc.Index)
					return &types.MsgCancelContractResponse{}, nil
				} else if msg.Creator == loc.Buyer {
					k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price1)
					k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, price1)
					k.RemoveLoc(ctx, loc.Index)
					return &types.MsgCancelContractResponse{}, nil
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
					return &types.MsgCancelContractResponse{}, nil
				}
			}
		}
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "<J>Unauthorized deletion: You are not permitted to delete this contract.<J>")
	}
}
