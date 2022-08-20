/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../acre/params";
import { Whatis } from "../acre/whatis";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Loc } from "../acre/loc";

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

export interface QueryContractsRequest {}

export interface QueryContractsResponse {
  addr: string;
  owner: string;
  buyer: string;
  price1: string;
  price2: string;
  price3: string;
  status: string;
}

export interface QueryGetLocRequest {
  index: string;
}

export interface QueryGetLocResponse {
  loc: Loc | undefined;
}

export interface QueryAllLocRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLocResponse {
  loc: Loc[];
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

const baseQueryContractsRequest: object = {};

export const QueryContractsRequest = {
  encode(_: QueryContractsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryContractsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractsRequest } as QueryContractsRequest;
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

  fromJSON(_: any): QueryContractsRequest {
    const message = { ...baseQueryContractsRequest } as QueryContractsRequest;
    return message;
  },

  toJSON(_: QueryContractsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryContractsRequest>): QueryContractsRequest {
    const message = { ...baseQueryContractsRequest } as QueryContractsRequest;
    return message;
  },
};

const baseQueryContractsResponse: object = {
  addr: "",
  owner: "",
  buyer: "",
  price1: "",
  price2: "",
  price3: "",
  status: "",
};

export const QueryContractsResponse = {
  encode(
    message: QueryContractsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    if (message.price1 !== "") {
      writer.uint32(34).string(message.price1);
    }
    if (message.price2 !== "") {
      writer.uint32(42).string(message.price2);
    }
    if (message.price3 !== "") {
      writer.uint32(50).string(message.price3);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryContractsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryContractsResponse } as QueryContractsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.buyer = reader.string();
          break;
        case 4:
          message.price1 = reader.string();
          break;
        case 5:
          message.price2 = reader.string();
          break;
        case 6:
          message.price3 = reader.string();
          break;
        case 7:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryContractsResponse {
    const message = { ...baseQueryContractsResponse } as QueryContractsResponse;
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

  toJSON(message: QueryContractsResponse): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.owner !== undefined && (obj.owner = message.owner);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.price1 !== undefined && (obj.price1 = message.price1);
    message.price2 !== undefined && (obj.price2 = message.price2);
    message.price3 !== undefined && (obj.price3 = message.price3);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryContractsResponse>
  ): QueryContractsResponse {
    const message = { ...baseQueryContractsResponse } as QueryContractsResponse;
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

const baseQueryGetLocRequest: object = { index: "" };

export const QueryGetLocRequest = {
  encode(
    message: QueryGetLocRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLocRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLocRequest } as QueryGetLocRequest;
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

  fromJSON(object: any): QueryGetLocRequest {
    const message = { ...baseQueryGetLocRequest } as QueryGetLocRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetLocRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetLocRequest>): QueryGetLocRequest {
    const message = { ...baseQueryGetLocRequest } as QueryGetLocRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetLocResponse: object = {};

export const QueryGetLocResponse = {
  encode(
    message: QueryGetLocResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.loc !== undefined) {
      Loc.encode(message.loc, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLocResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLocResponse } as QueryGetLocResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loc = Loc.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLocResponse {
    const message = { ...baseQueryGetLocResponse } as QueryGetLocResponse;
    if (object.loc !== undefined && object.loc !== null) {
      message.loc = Loc.fromJSON(object.loc);
    } else {
      message.loc = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLocResponse): unknown {
    const obj: any = {};
    message.loc !== undefined &&
      (obj.loc = message.loc ? Loc.toJSON(message.loc) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetLocResponse>): QueryGetLocResponse {
    const message = { ...baseQueryGetLocResponse } as QueryGetLocResponse;
    if (object.loc !== undefined && object.loc !== null) {
      message.loc = Loc.fromPartial(object.loc);
    } else {
      message.loc = undefined;
    }
    return message;
  },
};

const baseQueryAllLocRequest: object = {};

export const QueryAllLocRequest = {
  encode(
    message: QueryAllLocRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLocRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLocRequest } as QueryAllLocRequest;
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

  fromJSON(object: any): QueryAllLocRequest {
    const message = { ...baseQueryAllLocRequest } as QueryAllLocRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLocRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllLocRequest>): QueryAllLocRequest {
    const message = { ...baseQueryAllLocRequest } as QueryAllLocRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLocResponse: object = {};

export const QueryAllLocResponse = {
  encode(
    message: QueryAllLocResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.loc) {
      Loc.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLocResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLocResponse } as QueryAllLocResponse;
    message.loc = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loc.push(Loc.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllLocResponse {
    const message = { ...baseQueryAllLocResponse } as QueryAllLocResponse;
    message.loc = [];
    if (object.loc !== undefined && object.loc !== null) {
      for (const e of object.loc) {
        message.loc.push(Loc.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLocResponse): unknown {
    const obj: any = {};
    if (message.loc) {
      obj.loc = message.loc.map((e) => (e ? Loc.toJSON(e) : undefined));
    } else {
      obj.loc = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllLocResponse>): QueryAllLocResponse {
    const message = { ...baseQueryAllLocResponse } as QueryAllLocResponse;
    message.loc = [];
    if (object.loc !== undefined && object.loc !== null) {
      for (const e of object.loc) {
        message.loc.push(Loc.fromPartial(e));
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
  /** Queries a list of Contracts items. */
  Contracts(request: QueryContractsRequest): Promise<QueryContractsResponse>;
  /** Queries a Loc by index. */
  Loc(request: QueryGetLocRequest): Promise<QueryGetLocResponse>;
  /** Queries a list of Loc items. */
  LocAll(request: QueryAllLocRequest): Promise<QueryAllLocResponse>;
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

  Contracts(request: QueryContractsRequest): Promise<QueryContractsResponse> {
    const data = QueryContractsRequest.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Query", "Contracts", data);
    return promise.then((data) =>
      QueryContractsResponse.decode(new Reader(data))
    );
  }

  Loc(request: QueryGetLocRequest): Promise<QueryGetLocResponse> {
    const data = QueryGetLocRequest.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Query", "Loc", data);
    return promise.then((data) => QueryGetLocResponse.decode(new Reader(data)));
  }

  LocAll(request: QueryAllLocRequest): Promise<QueryAllLocResponse> {
    const data = QueryAllLocRequest.encode(request).finish();
    const promise = this.rpc.request("acre.acre.Query", "LocAll", data);
    return promise.then((data) => QueryAllLocResponse.decode(new Reader(data)));
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
