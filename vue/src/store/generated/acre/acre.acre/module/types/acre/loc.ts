/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "acre.acre";

export interface Loc {
  index: string;
  cid: string;
  addr: string;
  owner: string;
  buyer: string;
  price1: string;
  price2: string;
  price3: string;
  status: string;
}

const baseLoc: object = {
  index: "",
  cid: "",
  addr: "",
  owner: "",
  buyer: "",
  price1: "",
  price2: "",
  price3: "",
  status: "",
};

export const Loc = {
  encode(message: Loc, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.addr !== "") {
      writer.uint32(26).string(message.addr);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    if (message.price1 !== "") {
      writer.uint32(50).string(message.price1);
    }
    if (message.price2 !== "") {
      writer.uint32(58).string(message.price2);
    }
    if (message.price3 !== "") {
      writer.uint32(66).string(message.price3);
    }
    if (message.status !== "") {
      writer.uint32(74).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Loc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoc } as Loc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.cid = reader.string();
          break;
        case 3:
          message.addr = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.buyer = reader.string();
          break;
        case 6:
          message.price1 = reader.string();
          break;
        case 7:
          message.price2 = reader.string();
          break;
        case 8:
          message.price3 = reader.string();
          break;
        case 9:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Loc {
    const message = { ...baseLoc } as Loc;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.price1 !== undefined && object.price1 !== null) {
      message.price1 = String(object.price1);
    } else {
      message.price1 = "";
    }
    if (object.price2 !== undefined && object.price2 !== null) {
      message.price2 = String(object.price2);
    } else {
      message.price2 = "";
    }
    if (object.price3 !== undefined && object.price3 !== null) {
      message.price3 = String(object.price3);
    } else {
      message.price3 = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: Loc): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.cid !== undefined && (obj.cid = message.cid);
    message.addr !== undefined && (obj.addr = message.addr);
    message.owner !== undefined && (obj.owner = message.owner);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price1 !== undefined && (obj.price1 = message.price1);
    message.price2 !== undefined && (obj.price2 = message.price2);
    message.price3 !== undefined && (obj.price3 = message.price3);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<Loc>): Loc {
    const message = { ...baseLoc } as Loc;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.price1 !== undefined && object.price1 !== null) {
      message.price1 = object.price1;
    } else {
      message.price1 = "";
    }
    if (object.price2 !== undefined && object.price2 !== null) {
      message.price2 = object.price2;
    } else {
      message.price2 = "";
    }
    if (object.price3 !== undefined && object.price3 !== null) {
      message.price3 = object.price3;
    } else {
      message.price3 = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
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
