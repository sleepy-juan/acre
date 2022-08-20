package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		WhatisList: []Whatis{},
		LocList:    []Loc{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in whatis
	whatisIndexMap := make(map[string]struct{})

	for _, elem := range gs.WhatisList {
		index := string(WhatisKey(elem.Index))
		if _, ok := whatisIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for whatis")
		}
		whatisIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in loc
	locIndexMap := make(map[string]struct{})

	for _, elem := range gs.LocList {
		index := string(LocKey(elem.Index))
		if _, ok := locIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for loc")
		}
		locIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
