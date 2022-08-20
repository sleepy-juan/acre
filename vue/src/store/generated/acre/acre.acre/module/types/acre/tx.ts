/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "acre.acre";

export interface MsgInitContract {
  creator: string;
  addr: string;
}

export interface MsgInitContractResponse {}

export interface MsgCreateContract {
  creator: string;
  addr: string;
  price1: string;
  price2: string;
  price3: string;
}

export interface MsgCreateContractResponse {}

const baseMsgInitContract: object = { creator: "", addr: "" };

export const MsgInitContract = {
  encode(message: MsgInitContract, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgInitContract } as MsgInitContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitContract {
    const message = { ...baseMsgInitContract } as MsgInitContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: MsgInitContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgInitContract>): MsgInitContract {
    const message = { ...baseMsgInitContract } as MsgInitContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseMsgInitContractResponse: object = {};

export const MsgInitContractResponse = {
  encode(_: MsgInitContractResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgInitContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgInitContractResponse,
    } as MsgInitContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgInitContractResponse {
    const message = {
      ...baseMsgInitContractResponse,
    } as MsgInitContractResponse;
    return message;
  },

  toJSON(_: MsgInitContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgInitContractResponse>
  ): MsgInitContractResponse {
    const message = {
      ...baseMsgInitContractResponse,
    } as MsgInitContractResponse;
    return message;
  },
};

const baseMsgCreateContract: object = {
  creator: "",
  addr: "",
  price1: "",
  price2: "",
  price3: "",
};

export const MsgCreateContract = {
  encode(message: MsgCreateContract, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.price1 !== "") {
      writer.uint32(26).string(message.price1);
    }
    if (message.price2 !== "") {
      writer.uint32(34).string(message.price2);
    }
    if (message.price3 !== "") {
      writer.uint32(42).string(message.price3);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateContract {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateContract } as MsgCreateContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addr = reader.string();
          break;
        case 3:
          message.price1 = reader.string();
          break;
        case 4:
          message.price2 = reader.string();
          break;
        case 5:
          message.price3 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateContract {
    const message = { ...baseMsgCreateContract } as MsgCreateContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
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
    return message;
  },

  toJSON(message: MsgCreateContract): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.addr !== undefined && (obj.addr = message.addr);
    message.price1 !== undefined && (obj.price1 = message.price1);
    message.price2 !== undefined && (obj.price2 = message.price2);
    message.price3 !== undefined && (obj.price3 = message.price3);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateContract>): MsgCreateContract {
    const message = { ...baseMsgCreateContract } as MsgCreateContract;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
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
    return message;
  },
};

const baseMsgCreateContractResponse: object = {};

export const MsgCreateContractResponse = {
  encode(
    _: MsgCreateContractResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateContractResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateContractResponse,
    } as MsgCreateContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateContractResponse {
    const message = {
      ...baseMsgCreateContractResponse,
    } as MsgCreateContractResponse;
    return message;
  },

  toJSON(_: MsgCreateContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateContractResponse>
  ): MsgCreateContractResponse {
    const message = {
      ...baseMsgCreateContractResponse,
    } as MsgCreateContractResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  InitContract(request: MsgInitContract): Promise<MsgInitContractResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateContract(
    request: MsgCreateContract
  ): Promise<MsgCreateContractResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  InitContract(request: MsgInitContract): Promise<MsgInitContractResponse> {
    const data = MsgInitContract.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Msg", "InitContract", data);
    return promise.then((data) =>
      MsgInitContractResponse.decode(new Reader(data))
    );
  }

  CreateContract(
    request: MsgCreateContract
  ): Promise<MsgCreateContractResponse> {
    const data = MsgCreateContract.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Msg", "CreateContract", data);
    return promise.then((data) =>
      MsgCreateContractResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
