package keeper

import (
	"acre/x/acre/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetWhatis set a specific whatis in the store from its index
func (k Keeper) SetWhatis(ctx sdk.Context, whatis types.Whatis) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhatisKeyPrefix))
	b := k.cdc.MustMarshal(&whatis)
	store.Set(types.WhatisKey(
		whatis.Index,
	), b)
}

// GetWhatis returns a whatis from its index
func (k Keeper) GetWhatis(
	ctx sdk.Context,
	index string,

) (val types.Whatis, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhatisKeyPrefix))

	b := store.Get(types.WhatisKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWhatis removes a whatis from the store
func (k Keeper) RemoveWhatis(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhatisKeyPrefix))
	store.Delete(types.WhatisKey(
		index,
	))
}

// GetAllWhatis returns all whatis
func (k Keeper) GetAllWhatis(ctx sdk.Context) (list []types.Whatis) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhatisKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Whatis
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
