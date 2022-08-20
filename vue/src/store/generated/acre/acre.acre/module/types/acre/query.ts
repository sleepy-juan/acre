/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../acre/params";
import { Whatis } from "../acre/whatis";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "acre.acre";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhatisRequest {
  index: string;
}

export interface QueryGetWhatisResponse {
  whatis: Whatis | undefined;
}

export interface QueryAllWhatisRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhatisResponse {
  whatis: Whatis[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetWhatisRequest: object = { index: "" };

export const QueryGetWhatisRequest = {
  encode(
    message: QueryGetWhatisRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhatisRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhatisRequest } as QueryGetWhatisRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhatisRequest {
    const message = { ...baseQueryGetWhatisRequest } as QueryGetWhatisRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetWhatisRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhatisRequest>
  ): QueryGetWhatisRequest {
    const message = { ...baseQueryGetWhatisRequest } as QueryGetWhatisRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetWhatisResponse: object = {};

export const QueryGetWhatisResponse = {
  encode(
    message: QueryGetWhatisResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whatis !== undefined) {
      Whatis.encode(message.whatis, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhatisResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhatisResponse } as QueryGetWhatisResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whatis = Whatis.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhatisResponse {
    const message = { ...baseQueryGetWhatisResponse } as QueryGetWhatisResponse;
    if (object.whatis !== undefined && object.whatis !== null) {
      message.whatis = Whatis.fromJSON(object.whatis);
    } else {
      message.whatis = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhatisResponse): unknown {
    const obj: any = {};
    message.whatis !== undefined &&
      (obj.whatis = message.whatis ? Whatis.toJSON(message.whatis) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhatisResponse>
  ): QueryGetWhatisResponse {
    const message = { ...baseQueryGetWhatisResponse } as QueryGetWhatisResponse;
    if (object.whatis !== undefined && object.whatis !== null) {
      message.whatis = Whatis.fromPartial(object.whatis);
    } else {
      message.whatis = undefined;
    }
    return message;
  },
};

const baseQueryAllWhatisRequest: object = {};

export const QueryAllWhatisRequest = {
  encode(
    message: QueryAllWhatisRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhatisRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhatisRequest } as QueryAllWhatisRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhatisRequest {
    const message = { ...baseQueryAllWhatisRequest } as QueryAllWhatisRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhatisRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhatisRequest>
  ): QueryAllWhatisRequest {
    const message = { ...baseQueryAllWhatisRequest } as QueryAllWhatisRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWhatisResponse: object = {};

export const QueryAllWhatisResponse = {
  encode(
    message: QueryAllWhatisResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whatis) {
      Whatis.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhatisResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhatisResponse } as QueryAllWhatisResponse;
    message.whatis = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whatis.push(Whatis.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhatisResponse {
    const message = { ...baseQueryAllWhatisResponse } as QueryAllWhatisResponse;
    message.whatis = [];
    if (object.whatis !== undefined && object.whatis !== null) {
      for (const e of object.whatis) {
        message.whatis.push(Whatis.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhatisResponse): unknown {
    const obj: any = {};
    if (message.whatis) {
      obj.whatis = message.whatis.map((e) =>
        e ? Whatis.toJSON(e) : undefined
      );
    } else {
      obj.whatis = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhatisResponse>
  ): QueryAllWhatisResponse {
    const message = { ...baseQueryAllWhatisResponse } as QueryAllWhatisResponse;
    message.whatis = [];
    if (object.whatis !== undefined && object.whatis !== null) {
      for (const e of object.whatis) {
        message.whatis.push(Whatis.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Whatis by index. */
  Whatis(request: QueryGetWhatisRequest): Promise<QueryGetWhatisResponse>;
  /** Queries a list of Whatis items. */
  WhatisAll(request: QueryAllWhatisRequest): Promise<QueryAllWhatisResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Whatis(request: QueryGetWhatisRequest): Promise<QueryGetWhatisResponse> {
    const data = QueryGetWhatisRequest.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Query", "Whatis", data);
    return promise.then((data) =>
      QueryGetWhatisResponse.decode(new Reader(data))
    );
  }

  WhatisAll(request: QueryAllWhatisRequest): Promise<QueryAllWhatisResponse> {
    const data = QueryAllWhatisRequest.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Query", "WhatisAll", data);
    return promise.then((data) =>
      QueryAllWhatisResponse.decode(new Reader(data))
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
