/* eslint-disable */
import { Params } from "../acre/params";
import { Whatis } from "../acre/whatis";
import { Loc } from "../acre/loc";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "acre.acre";

/** GenesisState defines the acre module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  whatisList: Whatis[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  locList: Loc[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.whatisList) {
      Whatis.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.locList) {
      Loc.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.whatisList = [];
    message.locList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.whatisList.push(Whatis.decode(reader, reader.uint32()));
          break;
        case 3:
          message.locList.push(Loc.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.whatisList = [];
    message.locList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.whatisList !== undefined && object.whatisList !== null) {
      for (const e of object.whatisList) {
        message.whatisList.push(Whatis.fromJSON(e));
      }
    }
    if (object.locList !== undefined && object.locList !== null) {
      for (const e of object.locList) {
        message.locList.push(Loc.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.whatisList) {
      obj.whatisList = message.whatisList.map((e) =>
        e ? Whatis.toJSON(e) : undefined
      );
    } else {
      obj.whatisList = [];
    }
    if (message.locList) {
      obj.locList = message.locList.map((e) => (e ? Loc.toJSON(e) : undefined));
    } else {
      obj.locList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.whatisList = [];
    message.locList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.whatisList !== undefined && object.whatisList !== null) {
      for (const e of object.whatisList) {
        message.whatisList.push(Whatis.fromPartial(e));
      }
    }
    if (object.locList !== undefined && object.locList !== null) {
      for (const e of object.locList) {
        message.locList.push(Loc.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
