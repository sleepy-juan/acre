package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgProceedContract = "proceed_contract"

var _ sdk.Msg = &MsgProceedContract{}

func NewMsgProceedContract(creator string, addr string) *MsgProceedContract {
	return &MsgProceedContract{
		Creator: creator,
		Addr:    addr,
	}
}

func (msg *MsgProceedContract) Route() string {
	return RouterKey
}

func (msg *MsgProceedContract) Type() string {
	return TypeMsgProceedContract
}

func (msg *MsgProceedContract) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgProceedContract) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgProceedContract) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
