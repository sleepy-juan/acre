package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCloseContract = "close_contract"

var _ sdk.Msg = &MsgCloseContract{}

func NewMsgCloseContract(creator string, addr string) *MsgCloseContract {
	return &MsgCloseContract{
		Creator: creator,
		Addr:    addr,
	}
}

func (msg *MsgCloseContract) Route() string {
	return RouterKey
}

func (msg *MsgCloseContract) Type() string {
	return TypeMsgCloseContract
}

func (msg *MsgCloseContract) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCloseContract) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCloseContract) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
