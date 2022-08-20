package keeper

import (
	"context"

	"acre/x/acre/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) LocAll(c context.Context, req *types.QueryAllLocRequest) (*types.QueryAllLocResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var locs []types.Loc
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	locStore := prefix.NewStore(store, types.KeyPrefix(types.LocKeyPrefix))

	pageRes, err := query.Paginate(locStore, req.Pagination, func(key []byte, value []byte) error {
		var loc types.Loc
		if err := k.cdc.Unmarshal(value, &loc); err != nil {
			return err
		}

		locs = append(locs, loc)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLocResponse{Loc: locs, Pagination: pageRes}, nil
}

func (k Keeper) Loc(c context.Context, req *types.QueryGetLocRequest) (*types.QueryGetLocResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLoc(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetLocResponse{Loc: val}, nil
}
