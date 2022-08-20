package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgInitContract{}, "acre/InitContract", nil)
	cdc.RegisterConcrete(&MsgCreateContract{}, "acre/CreateContract", nil)
	cdc.RegisterConcrete(&MsgProceedContract{}, "acre/ProceedContract", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgInitContract{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateContract{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgProceedContract{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
