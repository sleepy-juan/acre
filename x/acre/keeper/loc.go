package keeper

import (
	"acre/x/acre/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"encoding/binary"
)

// SetLoc set a specific loc in the store from its index
func (k Keeper) SetLoc(ctx sdk.Context, loc types.Loc) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocKeyPrefix))
	b := k.cdc.MustMarshal(&loc)
	store.Set(types.LocKey(
		loc.Index,
	), b)
}

// GetLoc returns a loc from its index
func (k Keeper) GetLoc(
	ctx sdk.Context,
	index string,

) (val types.Loc, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocKeyPrefix))

	b := store.Get(types.LocKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// get loc with addr
func (k Keeper) GetLocWithAddr(ctx sdk.Context, addr string) (val types.Loc, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Loc
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if val.Addr == addr {
			return val, true
		}
	}

	return val, false
}

// RemoveLoc removes a loc from the store
func (k Keeper) RemoveLoc(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocKeyPrefix))
	store.Delete(types.LocKey(
		index,
	))
}

// GetAllLoc returns all loc
func (k Keeper) GetAllLoc(ctx sdk.Context) (list []types.Loc) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Loc
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// Adds

func (k Keeper) GetLocCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.LocCountKey))
  
	byteKey := []byte(types.LocCountKey)
	bz := store.Get(byteKey)
  
	if bz == nil {
	  return 0
	}

	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetLocCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.LocCountKey))
  
	byteKey := []byte(types.LocCountKey)
  
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
  
	store.Set(byteKey, bz)
}