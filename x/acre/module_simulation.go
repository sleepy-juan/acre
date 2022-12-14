package acre

import (
	"math/rand"

	"acre/testutil/sample"
	acresimulation "acre/x/acre/simulation"
	"acre/x/acre/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = acresimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgInitContract = "op_weight_msg_init_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInitContract int = 100

	opWeightMsgCreateContract = "op_weight_msg_create_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateContract int = 100

	opWeightMsgProceedContract = "op_weight_msg_proceed_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgProceedContract int = 100

	opWeightMsgCloseContract = "op_weight_msg_close_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCloseContract int = 100

	opWeightMsgCancelContract = "op_weight_msg_cancel_contract"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCancelContract int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	acreGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&acreGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgInitContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInitContract, &weightMsgInitContract, nil,
		func(_ *rand.Rand) {
			weightMsgInitContract = defaultWeightMsgInitContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInitContract,
		acresimulation.SimulateMsgInitContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateContract, &weightMsgCreateContract, nil,
		func(_ *rand.Rand) {
			weightMsgCreateContract = defaultWeightMsgCreateContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateContract,
		acresimulation.SimulateMsgCreateContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgProceedContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgProceedContract, &weightMsgProceedContract, nil,
		func(_ *rand.Rand) {
			weightMsgProceedContract = defaultWeightMsgProceedContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgProceedContract,
		acresimulation.SimulateMsgProceedContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCloseContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCloseContract, &weightMsgCloseContract, nil,
		func(_ *rand.Rand) {
			weightMsgCloseContract = defaultWeightMsgCloseContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCloseContract,
		acresimulation.SimulateMsgCloseContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCancelContract int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCancelContract, &weightMsgCancelContract, nil,
		func(_ *rand.Rand) {
			weightMsgCancelContract = defaultWeightMsgCancelContract
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCancelContract,
		acresimulation.SimulateMsgCancelContract(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
