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

func (k Keeper) WhatisAll(c context.Context, req *types.QueryAllWhatisRequest) (*types.QueryAllWhatisResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var whatiss []types.Whatis
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	whatisStore := prefix.NewStore(store, types.KeyPrefix(types.WhatisKeyPrefix))

	pageRes, err := query.Paginate(whatisStore, req.Pagination, func(key []byte, value []byte) error {
		var whatis types.Whatis
		if err := k.cdc.Unmarshal(value, &whatis); err != nil {
			return err
		}

		whatiss = append(whatiss, whatis)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWhatisResponse{Whatis: whatiss, Pagination: pageRes}, nil
}

func (k Keeper) Whatis(c context.Context, req *types.QueryGetWhatisRequest) (*types.QueryGetWhatisResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetWhatis(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetWhatisResponse{Whatis: val}, nil
}
