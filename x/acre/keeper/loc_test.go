package keeper_test

import (
	"strconv"
	"testing"

	keepertest "acre/testutil/keeper"
	"acre/testutil/nullify"
	"acre/x/acre/keeper"
	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNLoc(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Loc {
	items := make([]types.Loc, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetLoc(ctx, items[i])
	}
	return items
}

func TestLocGet(t *testing.T) {
	keeper, ctx := keepertest.AcreKeeper(t)
	items := createNLoc(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLoc(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestLocRemove(t *testing.T) {
	keeper, ctx := keepertest.AcreKeeper(t)
	items := createNLoc(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLoc(ctx,
			item.Index,
		)
		_, found := keeper.GetLoc(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestLocGetAll(t *testing.T) {
	keeper, ctx := keepertest.AcreKeeper(t)
	items := createNLoc(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLoc(ctx)),
	)
}
