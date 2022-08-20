package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// WhatisKeyPrefix is the prefix to retrieve all Whatis
	WhatisKeyPrefix = "Whatis/value/"
)

// WhatisKey returns the store key to retrieve a Whatis from the index fields
func WhatisKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
