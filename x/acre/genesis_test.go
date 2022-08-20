package acre_test

import (
	"testing"

	keepertest "acre/testutil/keeper"
	"acre/testutil/nullify"
	"acre/x/acre"
	"acre/x/acre/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		WhatisList: []types.Whatis{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.AcreKeeper(t)
	acre.InitGenesis(ctx, *k, genesisState)
	got := acre.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.WhatisList, got.WhatisList)
	// this line is used by starport scaffolding # genesis/test/assert
}
