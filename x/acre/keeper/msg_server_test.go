package keeper_test

import (
	"context"
	"testing"

	keepertest "acre/testutil/keeper"
	"acre/x/acre/keeper"
	"acre/x/acre/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.AcreKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
