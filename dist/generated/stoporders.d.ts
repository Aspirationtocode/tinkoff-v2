import * as _m0 from 'protobufjs/minimal';
import { Quotation, MoneyValue } from './common';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export declare enum StopOrderDirection {
    STOP_ORDER_DIRECTION_UNSPECIFIED = 0,
    STOP_ORDER_DIRECTION_BUY = 1,
    STOP_ORDER_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function stopOrderDirectionFromJSON(object: any): StopOrderDirection;
export declare function stopOrderDirectionToJSON(object: StopOrderDirection): string;
export declare enum StopOrderExpirationType {
    STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED = 0,
    STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL = 1,
    STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE = 2,
    UNRECOGNIZED = -1
}
export declare function stopOrderExpirationTypeFromJSON(object: any): StopOrderExpirationType;
export declare function stopOrderExpirationTypeToJSON(object: StopOrderExpirationType): string;
export declare enum StopOrderType {
    STOP_ORDER_TYPE_UNSPECIFIED = 0,
    STOP_ORDER_TYPE_TAKE_PROFIT = 1,
    STOP_ORDER_TYPE_STOP_LOSS = 2,
    STOP_ORDER_TYPE_STOP_LIMIT = 3,
    UNRECOGNIZED = -1
}
export declare function stopOrderTypeFromJSON(object: any): StopOrderType;
export declare function stopOrderTypeToJSON(object: StopOrderType): string;
export interface PostStopOrderRequest {
    figi: string;
    quantity: number;
    price: Quotation | undefined;
    stopPrice: Quotation | undefined;
    direction: StopOrderDirection;
    accountId: string;
    expirationType: StopOrderExpirationType;
    stopOrderType: StopOrderType;
    expireDate: Date | undefined;
}
export interface PostStopOrderResponse {
    stopOrderId: string;
}
export interface GetStopOrdersRequest {
    accountId: string;
}
export interface GetStopOrdersResponse {
    stopOrders: StopOrder[];
}
export interface CancelStopOrderRequest {
    accountId: string;
    stopOrderId: string;
}
export interface CancelStopOrderResponse {
    time: Date | undefined;
}
export interface StopOrder {
    stopOrderId: string;
    lotsRequested: number;
    figi: string;
    direction: StopOrderDirection;
    currency: string;
    orderType: StopOrderType;
    createDate: Date | undefined;
    activationDateTime: Date | undefined;
    expirationTime: Date | undefined;
    price: MoneyValue | undefined;
    stopPrice: MoneyValue | undefined;
}
export declare const PostStopOrderRequest: {
    encode(message: PostStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostStopOrderRequest;
    fromJSON(object: any): PostStopOrderRequest;
    toJSON(message: PostStopOrderRequest): unknown;
    fromPartial(object: DeepPartial<PostStopOrderRequest>): PostStopOrderRequest;
};
export declare const PostStopOrderResponse: {
    encode(message: PostStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostStopOrderResponse;
    fromJSON(object: any): PostStopOrderResponse;
    toJSON(message: PostStopOrderResponse): unknown;
    fromPartial(object: DeepPartial<PostStopOrderResponse>): PostStopOrderResponse;
};
export declare const GetStopOrdersRequest: {
    encode(message: GetStopOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStopOrdersRequest;
    fromJSON(object: any): GetStopOrdersRequest;
    toJSON(message: GetStopOrdersRequest): unknown;
    fromPartial(object: DeepPartial<GetStopOrdersRequest>): GetStopOrdersRequest;
};
export declare const GetStopOrdersResponse: {
    encode(message: GetStopOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStopOrdersResponse;
    fromJSON(object: any): GetStopOrdersResponse;
    toJSON(message: GetStopOrdersResponse): unknown;
    fromPartial(object: DeepPartial<GetStopOrdersResponse>): GetStopOrdersResponse;
};
export declare const CancelStopOrderRequest: {
    encode(message: CancelStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelStopOrderRequest;
    fromJSON(object: any): CancelStopOrderRequest;
    toJSON(message: CancelStopOrderRequest): unknown;
    fromPartial(object: DeepPartial<CancelStopOrderRequest>): CancelStopOrderRequest;
};
export declare const CancelStopOrderResponse: {
    encode(message: CancelStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelStopOrderResponse;
    fromJSON(object: any): CancelStopOrderResponse;
    toJSON(message: CancelStopOrderResponse): unknown;
    fromPartial(object: DeepPartial<CancelStopOrderResponse>): CancelStopOrderResponse;
};
export declare const StopOrder: {
    encode(message: StopOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopOrder;
    fromJSON(object: any): StopOrder;
    toJSON(message: StopOrder): unknown;
    fromPartial(object: DeepPartial<StopOrder>): StopOrder;
};
export declare const StopOrdersServiceDefinition: {
    readonly name: "StopOrdersService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.StopOrdersService";
    readonly methods: {
        readonly postStopOrder: {
            readonly name: "PostStopOrder";
            readonly requestType: {
                encode(message: PostStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostStopOrderRequest;
                fromJSON(object: any): PostStopOrderRequest;
                toJSON(message: PostStopOrderRequest): unknown;
                fromPartial(object: DeepPartial<PostStopOrderRequest>): PostStopOrderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostStopOrderResponse;
                fromJSON(object: any): PostStopOrderResponse;
                toJSON(message: PostStopOrderResponse): unknown;
                fromPartial(object: DeepPartial<PostStopOrderResponse>): PostStopOrderResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getStopOrders: {
            readonly name: "GetStopOrders";
            readonly requestType: {
                encode(message: GetStopOrdersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStopOrdersRequest;
                fromJSON(object: any): GetStopOrdersRequest;
                toJSON(message: GetStopOrdersRequest): unknown;
                fromPartial(object: DeepPartial<GetStopOrdersRequest>): GetStopOrdersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetStopOrdersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetStopOrdersResponse;
                fromJSON(object: any): GetStopOrdersResponse;
                toJSON(message: GetStopOrdersResponse): unknown;
                fromPartial(object: DeepPartial<GetStopOrdersResponse>): GetStopOrdersResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly cancelStopOrder: {
            readonly name: "CancelStopOrder";
            readonly requestType: {
                encode(message: CancelStopOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelStopOrderRequest;
                fromJSON(object: any): CancelStopOrderRequest;
                toJSON(message: CancelStopOrderRequest): unknown;
                fromPartial(object: DeepPartial<CancelStopOrderRequest>): CancelStopOrderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CancelStopOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelStopOrderResponse;
                fromJSON(object: any): CancelStopOrderResponse;
                toJSON(message: CancelStopOrderResponse): unknown;
                fromPartial(object: DeepPartial<CancelStopOrderResponse>): CancelStopOrderResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
