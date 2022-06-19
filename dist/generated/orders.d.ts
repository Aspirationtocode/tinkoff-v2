import * as _m0 from 'protobufjs/minimal';
import { Ping, Quotation, MoneyValue } from './common';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export declare enum OrderDirection {
    ORDER_DIRECTION_UNSPECIFIED = 0,
    ORDER_DIRECTION_BUY = 1,
    ORDER_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function orderDirectionFromJSON(object: any): OrderDirection;
export declare function orderDirectionToJSON(object: OrderDirection): string;
export declare enum OrderType {
    ORDER_TYPE_UNSPECIFIED = 0,
    ORDER_TYPE_LIMIT = 1,
    ORDER_TYPE_MARKET = 2,
    UNRECOGNIZED = -1
}
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export declare enum OrderExecutionReportStatus {
    EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
    EXECUTION_REPORT_STATUS_FILL = 1,
    EXECUTION_REPORT_STATUS_REJECTED = 2,
    EXECUTION_REPORT_STATUS_CANCELLED = 3,
    EXECUTION_REPORT_STATUS_NEW = 4,
    EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5,
    UNRECOGNIZED = -1
}
export declare function orderExecutionReportStatusFromJSON(object: any): OrderExecutionReportStatus;
export declare function orderExecutionReportStatusToJSON(object: OrderExecutionReportStatus): string;
export interface TradesStreamRequest {
}
export interface TradesStreamResponse {
    orderTrades: OrderTrades | undefined;
    ping: Ping | undefined;
}
export interface OrderTrades {
    orderId: string;
    createdAt: Date | undefined;
    direction: OrderDirection;
    figi: string;
    trades: OrderTrade[];
    accountId: string;
}
export interface OrderTrade {
    dateTime: Date | undefined;
    price: Quotation | undefined;
    quantity: number;
}
export interface PostOrderRequest {
    figi: string;
    quantity: number;
    price: Quotation | undefined;
    direction: OrderDirection;
    accountId: string;
    orderType: OrderType;
    orderId: string;
}
export interface PostOrderResponse {
    orderId: string;
    executionReportStatus: OrderExecutionReportStatus;
    lotsRequested: number;
    lotsExecuted: number;
    initialOrderPrice: MoneyValue | undefined;
    executedOrderPrice: MoneyValue | undefined;
    totalOrderAmount: MoneyValue | undefined;
    initialCommission: MoneyValue | undefined;
    executedCommission: MoneyValue | undefined;
    aciValue: MoneyValue | undefined;
    figi: string;
    direction: OrderDirection;
    initialSecurityPrice: MoneyValue | undefined;
    orderType: OrderType;
    message: string;
    initialOrderPricePt: Quotation | undefined;
}
export interface CancelOrderRequest {
    accountId: string;
    orderId: string;
}
export interface CancelOrderResponse {
    time: Date | undefined;
}
export interface GetOrderStateRequest {
    accountId: string;
    orderId: string;
}
export interface GetOrdersRequest {
    accountId: string;
}
export interface GetOrdersResponse {
    orders: OrderState[];
}
export interface OrderState {
    orderId: string;
    executionReportStatus: OrderExecutionReportStatus;
    lotsRequested: number;
    lotsExecuted: number;
    initialOrderPrice: MoneyValue | undefined;
    executedOrderPrice: MoneyValue | undefined;
    totalOrderAmount: MoneyValue | undefined;
    averagePositionPrice: MoneyValue | undefined;
    initialCommission: MoneyValue | undefined;
    executedCommission: MoneyValue | undefined;
    figi: string;
    direction: OrderDirection;
    initialSecurityPrice: MoneyValue | undefined;
    stages: OrderStage[];
    serviceCommission: MoneyValue | undefined;
    currency: string;
    orderType: OrderType;
    orderDate: Date | undefined;
}
export interface OrderStage {
    price: MoneyValue | undefined;
    quantity: number;
    tradeId: string;
}
export declare const TradesStreamRequest: {
    encode(_: TradesStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradesStreamRequest;
    fromJSON(_: any): TradesStreamRequest;
    toJSON(_: TradesStreamRequest): unknown;
    fromPartial(_: DeepPartial<TradesStreamRequest>): TradesStreamRequest;
};
export declare const TradesStreamResponse: {
    encode(message: TradesStreamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradesStreamResponse;
    fromJSON(object: any): TradesStreamResponse;
    toJSON(message: TradesStreamResponse): unknown;
    fromPartial(object: DeepPartial<TradesStreamResponse>): TradesStreamResponse;
};
export declare const OrderTrades: {
    encode(message: OrderTrades, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderTrades;
    fromJSON(object: any): OrderTrades;
    toJSON(message: OrderTrades): unknown;
    fromPartial(object: DeepPartial<OrderTrades>): OrderTrades;
};
export declare const OrderTrade: {
    encode(message: OrderTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderTrade;
    fromJSON(object: any): OrderTrade;
    toJSON(message: OrderTrade): unknown;
    fromPartial(object: DeepPartial<OrderTrade>): OrderTrade;
};
export declare const PostOrderRequest: {
    encode(message: PostOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostOrderRequest;
    fromJSON(object: any): PostOrderRequest;
    toJSON(message: PostOrderRequest): unknown;
    fromPartial(object: DeepPartial<PostOrderRequest>): PostOrderRequest;
};
export declare const PostOrderResponse: {
    encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostOrderResponse;
    fromJSON(object: any): PostOrderResponse;
    toJSON(message: PostOrderResponse): unknown;
    fromPartial(object: DeepPartial<PostOrderResponse>): PostOrderResponse;
};
export declare const CancelOrderRequest: {
    encode(message: CancelOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelOrderRequest;
    fromJSON(object: any): CancelOrderRequest;
    toJSON(message: CancelOrderRequest): unknown;
    fromPartial(object: DeepPartial<CancelOrderRequest>): CancelOrderRequest;
};
export declare const CancelOrderResponse: {
    encode(message: CancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelOrderResponse;
    fromJSON(object: any): CancelOrderResponse;
    toJSON(message: CancelOrderResponse): unknown;
    fromPartial(object: DeepPartial<CancelOrderResponse>): CancelOrderResponse;
};
export declare const GetOrderStateRequest: {
    encode(message: GetOrderStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrderStateRequest;
    fromJSON(object: any): GetOrderStateRequest;
    toJSON(message: GetOrderStateRequest): unknown;
    fromPartial(object: DeepPartial<GetOrderStateRequest>): GetOrderStateRequest;
};
export declare const GetOrdersRequest: {
    encode(message: GetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrdersRequest;
    fromJSON(object: any): GetOrdersRequest;
    toJSON(message: GetOrdersRequest): unknown;
    fromPartial(object: DeepPartial<GetOrdersRequest>): GetOrdersRequest;
};
export declare const GetOrdersResponse: {
    encode(message: GetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrdersResponse;
    fromJSON(object: any): GetOrdersResponse;
    toJSON(message: GetOrdersResponse): unknown;
    fromPartial(object: DeepPartial<GetOrdersResponse>): GetOrdersResponse;
};
export declare const OrderState: {
    encode(message: OrderState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderState;
    fromJSON(object: any): OrderState;
    toJSON(message: OrderState): unknown;
    fromPartial(object: DeepPartial<OrderState>): OrderState;
};
export declare const OrderStage: {
    encode(message: OrderStage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderStage;
    fromJSON(object: any): OrderStage;
    toJSON(message: OrderStage): unknown;
    fromPartial(object: DeepPartial<OrderStage>): OrderStage;
};
export declare const OrdersStreamServiceDefinition: {
    readonly name: "OrdersStreamService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersStreamService";
    readonly methods: {
        readonly tradesStream: {
            readonly name: "TradesStream";
            readonly requestType: {
                encode(_: TradesStreamRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradesStreamRequest;
                fromJSON(_: any): TradesStreamRequest;
                toJSON(_: TradesStreamRequest): unknown;
                fromPartial(_: DeepPartial<TradesStreamRequest>): TradesStreamRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: TradesStreamResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradesStreamResponse;
                fromJSON(object: any): TradesStreamResponse;
                toJSON(message: TradesStreamResponse): unknown;
                fromPartial(object: DeepPartial<TradesStreamResponse>): TradesStreamResponse;
            };
            readonly responseStream: true;
            readonly options: {};
        };
    };
};
export declare const OrdersServiceDefinition: {
    readonly name: "OrdersService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersService";
    readonly methods: {
        readonly postOrder: {
            readonly name: "PostOrder";
            readonly requestType: {
                encode(message: PostOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostOrderRequest;
                fromJSON(object: any): PostOrderRequest;
                toJSON(message: PostOrderRequest): unknown;
                fromPartial(object: DeepPartial<PostOrderRequest>): PostOrderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PostOrderResponse;
                fromJSON(object: any): PostOrderResponse;
                toJSON(message: PostOrderResponse): unknown;
                fromPartial(object: DeepPartial<PostOrderResponse>): PostOrderResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly cancelOrder: {
            readonly name: "CancelOrder";
            readonly requestType: {
                encode(message: CancelOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelOrderRequest;
                fromJSON(object: any): CancelOrderRequest;
                toJSON(message: CancelOrderRequest): unknown;
                fromPartial(object: DeepPartial<CancelOrderRequest>): CancelOrderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelOrderResponse;
                fromJSON(object: any): CancelOrderResponse;
                toJSON(message: CancelOrderResponse): unknown;
                fromPartial(object: DeepPartial<CancelOrderResponse>): CancelOrderResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getOrderState: {
            readonly name: "GetOrderState";
            readonly requestType: {
                encode(message: GetOrderStateRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrderStateRequest;
                fromJSON(object: any): GetOrderStateRequest;
                toJSON(message: GetOrderStateRequest): unknown;
                fromPartial(object: DeepPartial<GetOrderStateRequest>): GetOrderStateRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OrderState, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderState;
                fromJSON(object: any): OrderState;
                toJSON(message: OrderState): unknown;
                fromPartial(object: DeepPartial<OrderState>): OrderState;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getOrders: {
            readonly name: "GetOrders";
            readonly requestType: {
                encode(message: GetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrdersRequest;
                fromJSON(object: any): GetOrdersRequest;
                toJSON(message: GetOrdersRequest): unknown;
                fromPartial(object: DeepPartial<GetOrdersRequest>): GetOrdersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrdersResponse;
                fromJSON(object: any): GetOrdersResponse;
                toJSON(message: GetOrdersResponse): unknown;
                fromPartial(object: DeepPartial<GetOrdersResponse>): GetOrdersResponse;
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
