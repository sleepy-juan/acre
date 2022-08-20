package keeper

import (
	"context"
	"strconv"

	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) InitContract(goCtx context.Context, msg *types.MsgInitContract) (*types.MsgInitContractResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	loc, isFound := k.GetLocWithAddr(ctx, msg.Addr)
	count := k.GetLocCount(ctx)

	if isFound {
		price1, _ := sdk.ParseCoinsNormalized(loc.Price1)

		owner, _ := sdk.AccAddressFromBech32(loc.Owner)
		buyer, _ := sdk.AccAddressFromBech32(msg.Creator)

		oldBuyer, _ := sdk.AccAddressFromBech32(loc.Buyer)

		k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, price1)
		
		if oldBuyer.String() == "" {
			newLoc := types.Loc{
				Index:  loc.Index,
				Cid: loc.Cid,
				Addr:   msg.Addr,
				Owner:  owner.String(),
				Buyer:  buyer.String(),
				Price1: loc.Price1,
				Price2: loc.Price2,
				Price3: loc.Price3,
				Status: "1",
			}

			k.SetLoc(ctx, newLoc)
		} else {
			newLoc := types.Loc{
				Index:  strconv.Itoa(int(count)),
				Cid: strconv.Itoa(int(count)),
				Addr:   msg.Addr,
				Owner:  owner.String(),
				Buyer:  buyer.String(),
				Price1: loc.Price1,
				Price2: loc.Price2,
				Price3: loc.Price3,
				Status: "1",
			}

			k.SetLoc(ctx, newLoc)
			k.SetLocCount(ctx, count+1)
		}

		
	} else {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Property does not exist.")
	}

	return &types.MsgInitContractResponse{}, nil
}
