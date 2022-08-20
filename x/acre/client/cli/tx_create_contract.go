package cli

import (
	"strconv"

	"acre/x/acre/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateContract() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-contract [addr] [price-1] [price-2] [price-3]",
		Short: "Broadcast message create-contract",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAddr := args[0]
			argPrice1 := args[1]
			argPrice2 := args[2]
			argPrice3 := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateContract(
				clientCtx.GetFromAddress().String(),
				argAddr,
				argPrice1,
				argPrice2,
				argPrice3,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
