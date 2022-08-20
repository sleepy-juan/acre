package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LocKeyPrefix is the prefix to retrieve all Loc
	LocKeyPrefix = "Loc/value/"
)

// LocKey returns the store key to retrieve a Loc from the index fields
func LocKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
