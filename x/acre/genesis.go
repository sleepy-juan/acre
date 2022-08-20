package acre

import (
	"acre/x/acre/keeper"
	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the whatis
	for _, elem := range genState.WhatisList {
		k.SetWhatis(ctx, elem)
	}
	// Set all the loc
	for _, elem := range genState.LocList {
		k.SetLoc(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.WhatisList = k.GetAllWhatis(ctx)
	genesis.LocList = k.GetAllLoc(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
