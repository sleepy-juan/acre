package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInitContract = "init_contract"

var _ sdk.Msg = &MsgInitContract{}

func NewMsgInitContract(creator string, addr string) *MsgInitContract {
	return &MsgInitContract{
		Creator: creator,
		Addr:    addr,
	}
}

func (msg *MsgInitContract) Route() string {
	return RouterKey
}

func (msg *MsgInitContract) Type() string {
	return TypeMsgInitContract
}

func (msg *MsgInitContract) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInitContract) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInitContract) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
