import * as _m0 from 'protobufjs/minimal';
import { SecurityTradingStatus, Ping, Quotation } from './common';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export declare enum SubscriptionAction {
    SUBSCRIPTION_ACTION_UNSPECIFIED = 0,
    SUBSCRIPTION_ACTION_SUBSCRIBE = 1,
    SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2,
    UNRECOGNIZED = -1
}
export declare function subscriptionActionFromJSON(object: any): SubscriptionAction;
export declare function subscriptionActionToJSON(object: SubscriptionAction): string;
export declare enum SubscriptionInterval {
    SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0,
    SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1,
    SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2,
    UNRECOGNIZED = -1
}
export declare function subscriptionIntervalFromJSON(object: any): SubscriptionInterval;
export declare function subscriptionIntervalToJSON(object: SubscriptionInterval): string;
export declare enum SubscriptionStatus {
    SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
    SUBSCRIPTION_STATUS_SUCCESS = 1,
    SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2,
    SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3,
    SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4,
    SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5,
    SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6,
    SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7,
    UNRECOGNIZED = -1
}
export declare function subscriptionStatusFromJSON(object: any): SubscriptionStatus;
export declare function subscriptionStatusToJSON(object: SubscriptionStatus): string;
export declare enum TradeDirection {
    TRADE_DIRECTION_UNSPECIFIED = 0,
    TRADE_DIRECTION_BUY = 1,
    TRADE_DIRECTION_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function tradeDirectionFromJSON(object: any): TradeDirection;
export declare function tradeDirectionToJSON(object: TradeDirection): string;
export declare enum CandleInterval {
    CANDLE_INTERVAL_UNSPECIFIED = 0,
    CANDLE_INTERVAL_1_MIN = 1,
    CANDLE_INTERVAL_5_MIN = 2,
    CANDLE_INTERVAL_15_MIN = 3,
    CANDLE_INTERVAL_HOUR = 4,
    CANDLE_INTERVAL_DAY = 5,
    UNRECOGNIZED = -1
}
export declare function candleIntervalFromJSON(object: any): CandleInterval;
export declare function candleIntervalToJSON(object: CandleInterval): string;
export interface MarketDataRequest {
    subscribeCandlesRequest: SubscribeCandlesRequest | undefined;
    subscribeOrderBookRequest: SubscribeOrderBookRequest | undefined;
    subscribeTradesRequest: SubscribeTradesRequest | undefined;
    subscribeInfoRequest: SubscribeInfoRequest | undefined;
    subscribeLastPriceRequest: SubscribeLastPriceRequest | undefined;
}
export interface MarketDataResponse {
    subscribeCandlesResponse: SubscribeCandlesResponse | undefined;
    subscribeOrderBookResponse: SubscribeOrderBookResponse | undefined;
    subscribeTradesResponse: SubscribeTradesResponse | undefined;
    subscribeInfoResponse: SubscribeInfoResponse | undefined;
    candle: Candle | undefined;
    trade: Trade | undefined;
    orderbook: OrderBook | undefined;
    tradingStatus: TradingStatus | undefined;
    ping: Ping | undefined;
    subscribeLastPriceResponse: SubscribeLastPriceResponse | undefined;
    lastPrice: LastPrice | undefined;
}
export interface SubscribeCandlesRequest {
    subscriptionAction: SubscriptionAction;
    instruments: CandleInstrument[];
}
export interface CandleInstrument {
    figi: string;
    interval: SubscriptionInterval;
}
export interface SubscribeCandlesResponse {
    trackingId: string;
    candlesSubscriptions: CandleSubscription[];
}
export interface CandleSubscription {
    figi: string;
    interval: SubscriptionInterval;
    subscriptionStatus: SubscriptionStatus;
}
export interface SubscribeOrderBookRequest {
    subscriptionAction: SubscriptionAction;
    instruments: OrderBookInstrument[];
}
export interface OrderBookInstrument {
    figi: string;
    depth: number;
}
export interface SubscribeOrderBookResponse {
    trackingId: string;
    orderBookSubscriptions: OrderBookSubscription[];
}
export interface OrderBookSubscription {
    figi: string;
    depth: number;
    subscriptionStatus: SubscriptionStatus;
}
export interface SubscribeTradesRequest {
    subscriptionAction: SubscriptionAction;
    instruments: TradeInstrument[];
}
export interface TradeInstrument {
    figi: string;
}
export interface SubscribeTradesResponse {
    trackingId: string;
    tradeSubscriptions: TradeSubscription[];
}
export interface TradeSubscription {
    figi: string;
    subscriptionStatus: SubscriptionStatus;
}
export interface SubscribeInfoRequest {
    subscriptionAction: SubscriptionAction;
    instruments: InfoInstrument[];
}
export interface InfoInstrument {
    figi: string;
}
export interface SubscribeInfoResponse {
    trackingId: string;
    infoSubscriptions: InfoSubscription[];
}
export interface InfoSubscription {
    figi: string;
    subscriptionStatus: SubscriptionStatus;
}
export interface SubscribeLastPriceRequest {
    subscriptionAction: SubscriptionAction;
    instruments: LastPriceInstrument[];
}
export interface LastPriceInstrument {
    figi: string;
}
export interface SubscribeLastPriceResponse {
    trackingId: string;
    lastPriceSubscriptions: LastPriceSubscription[];
}
export interface LastPriceSubscription {
    figi: string;
    subscriptionStatus: SubscriptionStatus;
}
export interface Candle {
    figi: string;
    interval: SubscriptionInterval;
    open: Quotation | undefined;
    high: Quotation | undefined;
    low: Quotation | undefined;
    close: Quotation | undefined;
    volume: number;
    time: Date | undefined;
    lastTradeTs: Date | undefined;
}
export interface OrderBook {
    figi: string;
    depth: number;
    isConsistent: boolean;
    bids: Order[];
    asks: Order[];
    time: Date | undefined;
    limitUp: Quotation | undefined;
    limitDown: Quotation | undefined;
}
export interface Order {
    price: Quotation | undefined;
    quantity: number;
}
export interface Trade {
    figi: string;
    direction: TradeDirection;
    price: Quotation | undefined;
    quantity: number;
    time: Date | undefined;
}
export interface TradingStatus {
    figi: string;
    tradingStatus: SecurityTradingStatus;
    time: Date | undefined;
    limitOrderAvailableFlag: boolean;
    marketOrderAvailableFlag: boolean;
}
export interface GetCandlesRequest {
    figi: string;
    from: Date | undefined;
    to: Date | undefined;
    interval: CandleInterval;
}
export interface GetCandlesResponse {
    candles: HistoricCandle[];
}
export interface HistoricCandle {
    open: Quotation | undefined;
    high: Quotation | undefined;
    low: Quotation | undefined;
    close: Quotation | undefined;
    volume: number;
    time: Date | undefined;
    isComplete: boolean;
}
export interface GetLastPricesRequest {
    figi: string[];
}
export interface GetLastPricesResponse {
    lastPrices: LastPrice[];
}
export interface LastPrice {
    figi: string;
    price: Quotation | undefined;
    time: Date | undefined;
}
export interface GetOrderBookRequest {
    figi: string;
    depth: number;
}
export interface GetOrderBookResponse {
    figi: string;
    depth: number;
    bids: Order[];
    asks: Order[];
    lastPrice: Quotation | undefined;
    closePrice: Quotation | undefined;
    limitUp: Quotation | undefined;
    limitDown: Quotation | undefined;
}
export interface GetTradingStatusRequest {
    figi: string;
}
export interface GetTradingStatusResponse {
    figi: string;
    tradingStatus: SecurityTradingStatus;
    limitOrderAvailableFlag: boolean;
    marketOrderAvailableFlag: boolean;
}
export interface GetLastTradesRequest {
    figi: string;
    from: Date | undefined;
    to: Date | undefined;
}
export interface GetLastTradesResponse {
    trades: Trade[];
}
export declare const MarketDataRequest: {
    encode(message: MarketDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MarketDataRequest;
    fromJSON(object: any): MarketDataRequest;
    toJSON(message: MarketDataRequest): unknown;
    fromPartial(object: DeepPartial<MarketDataRequest>): MarketDataRequest;
};
export declare const MarketDataResponse: {
    encode(message: MarketDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MarketDataResponse;
    fromJSON(object: any): MarketDataResponse;
    toJSON(message: MarketDataResponse): unknown;
    fromPartial(object: DeepPartial<MarketDataResponse>): MarketDataResponse;
};
export declare const SubscribeCandlesRequest: {
    encode(message: SubscribeCandlesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeCandlesRequest;
    fromJSON(object: any): SubscribeCandlesRequest;
    toJSON(message: SubscribeCandlesRequest): unknown;
    fromPartial(object: DeepPartial<SubscribeCandlesRequest>): SubscribeCandlesRequest;
};
export declare const CandleInstrument: {
    encode(message: CandleInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CandleInstrument;
    fromJSON(object: any): CandleInstrument;
    toJSON(message: CandleInstrument): unknown;
    fromPartial(object: DeepPartial<CandleInstrument>): CandleInstrument;
};
export declare const SubscribeCandlesResponse: {
    encode(message: SubscribeCandlesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeCandlesResponse;
    fromJSON(object: any): SubscribeCandlesResponse;
    toJSON(message: SubscribeCandlesResponse): unknown;
    fromPartial(object: DeepPartial<SubscribeCandlesResponse>): SubscribeCandlesResponse;
};
export declare const CandleSubscription: {
    encode(message: CandleSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CandleSubscription;
    fromJSON(object: any): CandleSubscription;
    toJSON(message: CandleSubscription): unknown;
    fromPartial(object: DeepPartial<CandleSubscription>): CandleSubscription;
};
export declare const SubscribeOrderBookRequest: {
    encode(message: SubscribeOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeOrderBookRequest;
    fromJSON(object: any): SubscribeOrderBookRequest;
    toJSON(message: SubscribeOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<SubscribeOrderBookRequest>): SubscribeOrderBookRequest;
};
export declare const OrderBookInstrument: {
    encode(message: OrderBookInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderBookInstrument;
    fromJSON(object: any): OrderBookInstrument;
    toJSON(message: OrderBookInstrument): unknown;
    fromPartial(object: DeepPartial<OrderBookInstrument>): OrderBookInstrument;
};
export declare const SubscribeOrderBookResponse: {
    encode(message: SubscribeOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeOrderBookResponse;
    fromJSON(object: any): SubscribeOrderBookResponse;
    toJSON(message: SubscribeOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<SubscribeOrderBookResponse>): SubscribeOrderBookResponse;
};
export declare const OrderBookSubscription: {
    encode(message: OrderBookSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderBookSubscription;
    fromJSON(object: any): OrderBookSubscription;
    toJSON(message: OrderBookSubscription): unknown;
    fromPartial(object: DeepPartial<OrderBookSubscription>): OrderBookSubscription;
};
export declare const SubscribeTradesRequest: {
    encode(message: SubscribeTradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeTradesRequest;
    fromJSON(object: any): SubscribeTradesRequest;
    toJSON(message: SubscribeTradesRequest): unknown;
    fromPartial(object: DeepPartial<SubscribeTradesRequest>): SubscribeTradesRequest;
};
export declare const TradeInstrument: {
    encode(message: TradeInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradeInstrument;
    fromJSON(object: any): TradeInstrument;
    toJSON(message: TradeInstrument): unknown;
    fromPartial(object: DeepPartial<TradeInstrument>): TradeInstrument;
};
export declare const SubscribeTradesResponse: {
    encode(message: SubscribeTradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeTradesResponse;
    fromJSON(object: any): SubscribeTradesResponse;
    toJSON(message: SubscribeTradesResponse): unknown;
    fromPartial(object: DeepPartial<SubscribeTradesResponse>): SubscribeTradesResponse;
};
export declare const TradeSubscription: {
    encode(message: TradeSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradeSubscription;
    fromJSON(object: any): TradeSubscription;
    toJSON(message: TradeSubscription): unknown;
    fromPartial(object: DeepPartial<TradeSubscription>): TradeSubscription;
};
export declare const SubscribeInfoRequest: {
    encode(message: SubscribeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeInfoRequest;
    fromJSON(object: any): SubscribeInfoRequest;
    toJSON(message: SubscribeInfoRequest): unknown;
    fromPartial(object: DeepPartial<SubscribeInfoRequest>): SubscribeInfoRequest;
};
export declare const InfoInstrument: {
    encode(message: InfoInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InfoInstrument;
    fromJSON(object: any): InfoInstrument;
    toJSON(message: InfoInstrument): unknown;
    fromPartial(object: DeepPartial<InfoInstrument>): InfoInstrument;
};
export declare const SubscribeInfoResponse: {
    encode(message: SubscribeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeInfoResponse;
    fromJSON(object: any): SubscribeInfoResponse;
    toJSON(message: SubscribeInfoResponse): unknown;
    fromPartial(object: DeepPartial<SubscribeInfoResponse>): SubscribeInfoResponse;
};
export declare const InfoSubscription: {
    encode(message: InfoSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InfoSubscription;
    fromJSON(object: any): InfoSubscription;
    toJSON(message: InfoSubscription): unknown;
    fromPartial(object: DeepPartial<InfoSubscription>): InfoSubscription;
};
export declare const SubscribeLastPriceRequest: {
    encode(message: SubscribeLastPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeLastPriceRequest;
    fromJSON(object: any): SubscribeLastPriceRequest;
    toJSON(message: SubscribeLastPriceRequest): unknown;
    fromPartial(object: DeepPartial<SubscribeLastPriceRequest>): SubscribeLastPriceRequest;
};
export declare const LastPriceInstrument: {
    encode(message: LastPriceInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LastPriceInstrument;
    fromJSON(object: any): LastPriceInstrument;
    toJSON(message: LastPriceInstrument): unknown;
    fromPartial(object: DeepPartial<LastPriceInstrument>): LastPriceInstrument;
};
export declare const SubscribeLastPriceResponse: {
    encode(message: SubscribeLastPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubscribeLastPriceResponse;
    fromJSON(object: any): SubscribeLastPriceResponse;
    toJSON(message: SubscribeLastPriceResponse): unknown;
    fromPartial(object: DeepPartial<SubscribeLastPriceResponse>): SubscribeLastPriceResponse;
};
export declare const LastPriceSubscription: {
    encode(message: LastPriceSubscription, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LastPriceSubscription;
    fromJSON(object: any): LastPriceSubscription;
    toJSON(message: LastPriceSubscription): unknown;
    fromPartial(object: DeepPartial<LastPriceSubscription>): LastPriceSubscription;
};
export declare const Candle: {
    encode(message: Candle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Candle;
    fromJSON(object: any): Candle;
    toJSON(message: Candle): unknown;
    fromPartial(object: DeepPartial<Candle>): Candle;
};
export declare const OrderBook: {
    encode(message: OrderBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OrderBook;
    fromJSON(object: any): OrderBook;
    toJSON(message: OrderBook): unknown;
    fromPartial(object: DeepPartial<OrderBook>): OrderBook;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    fromPartial(object: DeepPartial<Order>): Order;
};
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    fromPartial(object: DeepPartial<Trade>): Trade;
};
export declare const TradingStatus: {
    encode(message: TradingStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradingStatus;
    fromJSON(object: any): TradingStatus;
    toJSON(message: TradingStatus): unknown;
    fromPartial(object: DeepPartial<TradingStatus>): TradingStatus;
};
export declare const GetCandlesRequest: {
    encode(message: GetCandlesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCandlesRequest;
    fromJSON(object: any): GetCandlesRequest;
    toJSON(message: GetCandlesRequest): unknown;
    fromPartial(object: DeepPartial<GetCandlesRequest>): GetCandlesRequest;
};
export declare const GetCandlesResponse: {
    encode(message: GetCandlesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCandlesResponse;
    fromJSON(object: any): GetCandlesResponse;
    toJSON(message: GetCandlesResponse): unknown;
    fromPartial(object: DeepPartial<GetCandlesResponse>): GetCandlesResponse;
};
export declare const HistoricCandle: {
    encode(message: HistoricCandle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HistoricCandle;
    fromJSON(object: any): HistoricCandle;
    toJSON(message: HistoricCandle): unknown;
    fromPartial(object: DeepPartial<HistoricCandle>): HistoricCandle;
};
export declare const GetLastPricesRequest: {
    encode(message: GetLastPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastPricesRequest;
    fromJSON(object: any): GetLastPricesRequest;
    toJSON(message: GetLastPricesRequest): unknown;
    fromPartial(object: DeepPartial<GetLastPricesRequest>): GetLastPricesRequest;
};
export declare const GetLastPricesResponse: {
    encode(message: GetLastPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastPricesResponse;
    fromJSON(object: any): GetLastPricesResponse;
    toJSON(message: GetLastPricesResponse): unknown;
    fromPartial(object: DeepPartial<GetLastPricesResponse>): GetLastPricesResponse;
};
export declare const LastPrice: {
    encode(message: LastPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LastPrice;
    fromJSON(object: any): LastPrice;
    toJSON(message: LastPrice): unknown;
    fromPartial(object: DeepPartial<LastPrice>): LastPrice;
};
export declare const GetOrderBookRequest: {
    encode(message: GetOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrderBookRequest;
    fromJSON(object: any): GetOrderBookRequest;
    toJSON(message: GetOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<GetOrderBookRequest>): GetOrderBookRequest;
};
export declare const GetOrderBookResponse: {
    encode(message: GetOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrderBookResponse;
    fromJSON(object: any): GetOrderBookResponse;
    toJSON(message: GetOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<GetOrderBookResponse>): GetOrderBookResponse;
};
export declare const GetTradingStatusRequest: {
    encode(message: GetTradingStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTradingStatusRequest;
    fromJSON(object: any): GetTradingStatusRequest;
    toJSON(message: GetTradingStatusRequest): unknown;
    fromPartial(object: DeepPartial<GetTradingStatusRequest>): GetTradingStatusRequest;
};
export declare const GetTradingStatusResponse: {
    encode(message: GetTradingStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTradingStatusResponse;
    fromJSON(object: any): GetTradingStatusResponse;
    toJSON(message: GetTradingStatusResponse): unknown;
    fromPartial(object: DeepPartial<GetTradingStatusResponse>): GetTradingStatusResponse;
};
export declare const GetLastTradesRequest: {
    encode(message: GetLastTradesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastTradesRequest;
    fromJSON(object: any): GetLastTradesRequest;
    toJSON(message: GetLastTradesRequest): unknown;
    fromPartial(object: DeepPartial<GetLastTradesRequest>): GetLastTradesRequest;
};
export declare const GetLastTradesResponse: {
    encode(message: GetLastTradesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastTradesResponse;
    fromJSON(object: any): GetLastTradesResponse;
    toJSON(message: GetLastTradesResponse): unknown;
    fromPartial(object: DeepPartial<GetLastTradesResponse>): GetLastTradesResponse;
};
export declare const MarketDataServiceDefinition: {
    readonly name: "MarketDataService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataService";
    readonly methods: {
        readonly getCandles: {
            readonly name: "GetCandles";
            readonly requestType: {
                encode(message: GetCandlesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCandlesRequest;
                fromJSON(object: any): GetCandlesRequest;
                toJSON(message: GetCandlesRequest): unknown;
                fromPartial(object: DeepPartial<GetCandlesRequest>): GetCandlesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetCandlesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetCandlesResponse;
                fromJSON(object: any): GetCandlesResponse;
                toJSON(message: GetCandlesResponse): unknown;
                fromPartial(object: DeepPartial<GetCandlesResponse>): GetCandlesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getLastPrices: {
            readonly name: "GetLastPrices";
            readonly requestType: {
                encode(message: GetLastPricesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastPricesRequest;
                fromJSON(object: any): GetLastPricesRequest;
                toJSON(message: GetLastPricesRequest): unknown;
                fromPartial(object: DeepPartial<GetLastPricesRequest>): GetLastPricesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLastPricesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastPricesResponse;
                fromJSON(object: any): GetLastPricesResponse;
                toJSON(message: GetLastPricesResponse): unknown;
                fromPartial(object: DeepPartial<GetLastPricesResponse>): GetLastPricesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getOrderBook: {
            readonly name: "GetOrderBook";
            readonly requestType: {
                encode(message: GetOrderBookRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrderBookRequest;
                fromJSON(object: any): GetOrderBookRequest;
                toJSON(message: GetOrderBookRequest): unknown;
                fromPartial(object: DeepPartial<GetOrderBookRequest>): GetOrderBookRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrderBookResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOrderBookResponse;
                fromJSON(object: any): GetOrderBookResponse;
                toJSON(message: GetOrderBookResponse): unknown;
                fromPartial(object: DeepPartial<GetOrderBookResponse>): GetOrderBookResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getTradingStatus: {
            readonly name: "GetTradingStatus";
            readonly requestType: {
                encode(message: GetTradingStatusRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTradingStatusRequest;
                fromJSON(object: any): GetTradingStatusRequest;
                toJSON(message: GetTradingStatusRequest): unknown;
                fromPartial(object: DeepPartial<GetTradingStatusRequest>): GetTradingStatusRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetTradingStatusResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTradingStatusResponse;
                fromJSON(object: any): GetTradingStatusResponse;
                toJSON(message: GetTradingStatusResponse): unknown;
                fromPartial(object: DeepPartial<GetTradingStatusResponse>): GetTradingStatusResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getLastTrades: {
            readonly name: "GetLastTrades";
            readonly requestType: {
                encode(message: GetLastTradesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastTradesRequest;
                fromJSON(object: any): GetLastTradesRequest;
                toJSON(message: GetLastTradesRequest): unknown;
                fromPartial(object: DeepPartial<GetLastTradesRequest>): GetLastTradesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetLastTradesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastTradesResponse;
                fromJSON(object: any): GetLastTradesResponse;
                toJSON(message: GetLastTradesResponse): unknown;
                fromPartial(object: DeepPartial<GetLastTradesResponse>): GetLastTradesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export declare const MarketDataStreamServiceDefinition: {
    readonly name: "MarketDataStreamService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService";
    readonly methods: {
        readonly marketDataStream: {
            readonly name: "MarketDataStream";
            readonly requestType: {
                encode(message: MarketDataRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MarketDataRequest;
                fromJSON(object: any): MarketDataRequest;
                toJSON(message: MarketDataRequest): unknown;
                fromPartial(object: DeepPartial<MarketDataRequest>): MarketDataRequest;
            };
            readonly requestStream: true;
            readonly responseType: {
                encode(message: MarketDataResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MarketDataResponse;
                fromJSON(object: any): MarketDataResponse;
                toJSON(message: MarketDataResponse): unknown;
                fromPartial(object: DeepPartial<MarketDataResponse>): MarketDataResponse;
            };
            readonly responseStream: true;
            readonly options: {};
        };
    };
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
