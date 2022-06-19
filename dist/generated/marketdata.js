"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderBookRequest = exports.LastPrice = exports.GetLastPricesResponse = exports.GetLastPricesRequest = exports.HistoricCandle = exports.GetCandlesResponse = exports.GetCandlesRequest = exports.TradingStatus = exports.Trade = exports.Order = exports.OrderBook = exports.Candle = exports.LastPriceSubscription = exports.SubscribeLastPriceResponse = exports.LastPriceInstrument = exports.SubscribeLastPriceRequest = exports.InfoSubscription = exports.SubscribeInfoResponse = exports.InfoInstrument = exports.SubscribeInfoRequest = exports.TradeSubscription = exports.SubscribeTradesResponse = exports.TradeInstrument = exports.SubscribeTradesRequest = exports.OrderBookSubscription = exports.SubscribeOrderBookResponse = exports.OrderBookInstrument = exports.SubscribeOrderBookRequest = exports.CandleSubscription = exports.SubscribeCandlesResponse = exports.CandleInstrument = exports.SubscribeCandlesRequest = exports.MarketDataResponse = exports.MarketDataRequest = exports.candleIntervalToJSON = exports.candleIntervalFromJSON = exports.CandleInterval = exports.tradeDirectionToJSON = exports.tradeDirectionFromJSON = exports.TradeDirection = exports.subscriptionStatusToJSON = exports.subscriptionStatusFromJSON = exports.SubscriptionStatus = exports.subscriptionIntervalToJSON = exports.subscriptionIntervalFromJSON = exports.SubscriptionInterval = exports.subscriptionActionToJSON = exports.subscriptionActionFromJSON = exports.SubscriptionAction = exports.protobufPackage = void 0;
exports.MarketDataStreamServiceDefinition = exports.MarketDataServiceDefinition = exports.GetLastTradesResponse = exports.GetLastTradesRequest = exports.GetTradingStatusResponse = exports.GetTradingStatusRequest = exports.GetOrderBookResponse = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const common_1 = require("./common");
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
var SubscriptionAction;
(function (SubscriptionAction) {
    SubscriptionAction[SubscriptionAction["SUBSCRIPTION_ACTION_UNSPECIFIED"] = 0] = "SUBSCRIPTION_ACTION_UNSPECIFIED";
    SubscriptionAction[SubscriptionAction["SUBSCRIPTION_ACTION_SUBSCRIBE"] = 1] = "SUBSCRIPTION_ACTION_SUBSCRIBE";
    SubscriptionAction[SubscriptionAction["SUBSCRIPTION_ACTION_UNSUBSCRIBE"] = 2] = "SUBSCRIPTION_ACTION_UNSUBSCRIBE";
    SubscriptionAction[SubscriptionAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionAction = exports.SubscriptionAction || (exports.SubscriptionAction = {}));
function subscriptionActionFromJSON(object) {
    switch (object) {
        case 0:
        case 'SUBSCRIPTION_ACTION_UNSPECIFIED':
            return SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED;
        case 1:
        case 'SUBSCRIPTION_ACTION_SUBSCRIBE':
            return SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE;
        case 2:
        case 'SUBSCRIPTION_ACTION_UNSUBSCRIBE':
            return SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SubscriptionAction.UNRECOGNIZED;
    }
}
exports.subscriptionActionFromJSON = subscriptionActionFromJSON;
function subscriptionActionToJSON(object) {
    switch (object) {
        case SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED:
            return 'SUBSCRIPTION_ACTION_UNSPECIFIED';
        case SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE:
            return 'SUBSCRIPTION_ACTION_SUBSCRIBE';
        case SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE:
            return 'SUBSCRIPTION_ACTION_UNSUBSCRIBE';
        default:
            return 'UNKNOWN';
    }
}
exports.subscriptionActionToJSON = subscriptionActionToJSON;
var SubscriptionInterval;
(function (SubscriptionInterval) {
    SubscriptionInterval[SubscriptionInterval["SUBSCRIPTION_INTERVAL_UNSPECIFIED"] = 0] = "SUBSCRIPTION_INTERVAL_UNSPECIFIED";
    SubscriptionInterval[SubscriptionInterval["SUBSCRIPTION_INTERVAL_ONE_MINUTE"] = 1] = "SUBSCRIPTION_INTERVAL_ONE_MINUTE";
    SubscriptionInterval[SubscriptionInterval["SUBSCRIPTION_INTERVAL_FIVE_MINUTES"] = 2] = "SUBSCRIPTION_INTERVAL_FIVE_MINUTES";
    SubscriptionInterval[SubscriptionInterval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionInterval = exports.SubscriptionInterval || (exports.SubscriptionInterval = {}));
function subscriptionIntervalFromJSON(object) {
    switch (object) {
        case 0:
        case 'SUBSCRIPTION_INTERVAL_UNSPECIFIED':
            return SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED;
        case 1:
        case 'SUBSCRIPTION_INTERVAL_ONE_MINUTE':
            return SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;
        case 2:
        case 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES':
            return SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SubscriptionInterval.UNRECOGNIZED;
    }
}
exports.subscriptionIntervalFromJSON = subscriptionIntervalFromJSON;
function subscriptionIntervalToJSON(object) {
    switch (object) {
        case SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED:
            return 'SUBSCRIPTION_INTERVAL_UNSPECIFIED';
        case SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE:
            return 'SUBSCRIPTION_INTERVAL_ONE_MINUTE';
        case SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES:
            return 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES';
        default:
            return 'UNKNOWN';
    }
}
exports.subscriptionIntervalToJSON = subscriptionIntervalToJSON;
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_UNSPECIFIED"] = 0] = "SUBSCRIPTION_STATUS_UNSPECIFIED";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_SUCCESS"] = 1] = "SUBSCRIPTION_STATUS_SUCCESS";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND"] = 2] = "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID"] = 3] = "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_DEPTH_IS_INVALID"] = 4] = "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID"] = 5] = "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED"] = 6] = "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED";
    SubscriptionStatus[SubscriptionStatus["SUBSCRIPTION_STATUS_INTERNAL_ERROR"] = 7] = "SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    SubscriptionStatus[SubscriptionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
function subscriptionStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'SUBSCRIPTION_STATUS_UNSPECIFIED':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED;
        case 1:
        case 'SUBSCRIPTION_STATUS_SUCCESS':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS;
        case 2:
        case 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND;
        case 3:
        case 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID;
        case 4:
        case 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID;
        case 5:
        case 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID;
        case 6:
        case 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED;
        case 7:
        case 'SUBSCRIPTION_STATUS_INTERNAL_ERROR':
            return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SubscriptionStatus.UNRECOGNIZED;
    }
}
exports.subscriptionStatusFromJSON = subscriptionStatusFromJSON;
function subscriptionStatusToJSON(object) {
    switch (object) {
        case SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED:
            return 'SUBSCRIPTION_STATUS_UNSPECIFIED';
        case SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS:
            return 'SUBSCRIPTION_STATUS_SUCCESS';
        case SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND:
            return 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND';
        case SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID:
            return 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID';
        case SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID:
            return 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID';
        case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID:
            return 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID';
        case SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED:
            return 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED';
        case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR:
            return 'SUBSCRIPTION_STATUS_INTERNAL_ERROR';
        default:
            return 'UNKNOWN';
    }
}
exports.subscriptionStatusToJSON = subscriptionStatusToJSON;
var TradeDirection;
(function (TradeDirection) {
    TradeDirection[TradeDirection["TRADE_DIRECTION_UNSPECIFIED"] = 0] = "TRADE_DIRECTION_UNSPECIFIED";
    TradeDirection[TradeDirection["TRADE_DIRECTION_BUY"] = 1] = "TRADE_DIRECTION_BUY";
    TradeDirection[TradeDirection["TRADE_DIRECTION_SELL"] = 2] = "TRADE_DIRECTION_SELL";
    TradeDirection[TradeDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TradeDirection = exports.TradeDirection || (exports.TradeDirection = {}));
function tradeDirectionFromJSON(object) {
    switch (object) {
        case 0:
        case 'TRADE_DIRECTION_UNSPECIFIED':
            return TradeDirection.TRADE_DIRECTION_UNSPECIFIED;
        case 1:
        case 'TRADE_DIRECTION_BUY':
            return TradeDirection.TRADE_DIRECTION_BUY;
        case 2:
        case 'TRADE_DIRECTION_SELL':
            return TradeDirection.TRADE_DIRECTION_SELL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TradeDirection.UNRECOGNIZED;
    }
}
exports.tradeDirectionFromJSON = tradeDirectionFromJSON;
function tradeDirectionToJSON(object) {
    switch (object) {
        case TradeDirection.TRADE_DIRECTION_UNSPECIFIED:
            return 'TRADE_DIRECTION_UNSPECIFIED';
        case TradeDirection.TRADE_DIRECTION_BUY:
            return 'TRADE_DIRECTION_BUY';
        case TradeDirection.TRADE_DIRECTION_SELL:
            return 'TRADE_DIRECTION_SELL';
        default:
            return 'UNKNOWN';
    }
}
exports.tradeDirectionToJSON = tradeDirectionToJSON;
var CandleInterval;
(function (CandleInterval) {
    CandleInterval[CandleInterval["CANDLE_INTERVAL_UNSPECIFIED"] = 0] = "CANDLE_INTERVAL_UNSPECIFIED";
    CandleInterval[CandleInterval["CANDLE_INTERVAL_1_MIN"] = 1] = "CANDLE_INTERVAL_1_MIN";
    CandleInterval[CandleInterval["CANDLE_INTERVAL_5_MIN"] = 2] = "CANDLE_INTERVAL_5_MIN";
    CandleInterval[CandleInterval["CANDLE_INTERVAL_15_MIN"] = 3] = "CANDLE_INTERVAL_15_MIN";
    CandleInterval[CandleInterval["CANDLE_INTERVAL_HOUR"] = 4] = "CANDLE_INTERVAL_HOUR";
    CandleInterval[CandleInterval["CANDLE_INTERVAL_DAY"] = 5] = "CANDLE_INTERVAL_DAY";
    CandleInterval[CandleInterval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CandleInterval = exports.CandleInterval || (exports.CandleInterval = {}));
function candleIntervalFromJSON(object) {
    switch (object) {
        case 0:
        case 'CANDLE_INTERVAL_UNSPECIFIED':
            return CandleInterval.CANDLE_INTERVAL_UNSPECIFIED;
        case 1:
        case 'CANDLE_INTERVAL_1_MIN':
            return CandleInterval.CANDLE_INTERVAL_1_MIN;
        case 2:
        case 'CANDLE_INTERVAL_5_MIN':
            return CandleInterval.CANDLE_INTERVAL_5_MIN;
        case 3:
        case 'CANDLE_INTERVAL_15_MIN':
            return CandleInterval.CANDLE_INTERVAL_15_MIN;
        case 4:
        case 'CANDLE_INTERVAL_HOUR':
            return CandleInterval.CANDLE_INTERVAL_HOUR;
        case 5:
        case 'CANDLE_INTERVAL_DAY':
            return CandleInterval.CANDLE_INTERVAL_DAY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CandleInterval.UNRECOGNIZED;
    }
}
exports.candleIntervalFromJSON = candleIntervalFromJSON;
function candleIntervalToJSON(object) {
    switch (object) {
        case CandleInterval.CANDLE_INTERVAL_UNSPECIFIED:
            return 'CANDLE_INTERVAL_UNSPECIFIED';
        case CandleInterval.CANDLE_INTERVAL_1_MIN:
            return 'CANDLE_INTERVAL_1_MIN';
        case CandleInterval.CANDLE_INTERVAL_5_MIN:
            return 'CANDLE_INTERVAL_5_MIN';
        case CandleInterval.CANDLE_INTERVAL_15_MIN:
            return 'CANDLE_INTERVAL_15_MIN';
        case CandleInterval.CANDLE_INTERVAL_HOUR:
            return 'CANDLE_INTERVAL_HOUR';
        case CandleInterval.CANDLE_INTERVAL_DAY:
            return 'CANDLE_INTERVAL_DAY';
        default:
            return 'UNKNOWN';
    }
}
exports.candleIntervalToJSON = candleIntervalToJSON;
function createBaseMarketDataRequest() {
    return {
        subscribeCandlesRequest: undefined,
        subscribeOrderBookRequest: undefined,
        subscribeTradesRequest: undefined,
        subscribeInfoRequest: undefined,
        subscribeLastPriceRequest: undefined,
    };
}
exports.MarketDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscribeCandlesRequest !== undefined) {
            exports.SubscribeCandlesRequest.encode(message.subscribeCandlesRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.subscribeOrderBookRequest !== undefined) {
            exports.SubscribeOrderBookRequest.encode(message.subscribeOrderBookRequest, writer.uint32(18).fork()).ldelim();
        }
        if (message.subscribeTradesRequest !== undefined) {
            exports.SubscribeTradesRequest.encode(message.subscribeTradesRequest, writer.uint32(26).fork()).ldelim();
        }
        if (message.subscribeInfoRequest !== undefined) {
            exports.SubscribeInfoRequest.encode(message.subscribeInfoRequest, writer.uint32(34).fork()).ldelim();
        }
        if (message.subscribeLastPriceRequest !== undefined) {
            exports.SubscribeLastPriceRequest.encode(message.subscribeLastPriceRequest, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscribeCandlesRequest = exports.SubscribeCandlesRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscribeOrderBookRequest = exports.SubscribeOrderBookRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subscribeTradesRequest = exports.SubscribeTradesRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subscribeInfoRequest = exports.SubscribeInfoRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.subscribeLastPriceRequest = exports.SubscribeLastPriceRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
                ? exports.SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
                : undefined,
            subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
                ? exports.SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
                : undefined,
            subscribeTradesRequest: isSet(object.subscribeTradesRequest)
                ? exports.SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
                : undefined,
            subscribeInfoRequest: isSet(object.subscribeInfoRequest)
                ? exports.SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
                : undefined,
            subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
                ? exports.SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscribeCandlesRequest !== undefined &&
            (obj.subscribeCandlesRequest = message.subscribeCandlesRequest
                ? exports.SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest)
                : undefined);
        message.subscribeOrderBookRequest !== undefined &&
            (obj.subscribeOrderBookRequest = message.subscribeOrderBookRequest
                ? exports.SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest)
                : undefined);
        message.subscribeTradesRequest !== undefined &&
            (obj.subscribeTradesRequest = message.subscribeTradesRequest
                ? exports.SubscribeTradesRequest.toJSON(message.subscribeTradesRequest)
                : undefined);
        message.subscribeInfoRequest !== undefined &&
            (obj.subscribeInfoRequest = message.subscribeInfoRequest
                ? exports.SubscribeInfoRequest.toJSON(message.subscribeInfoRequest)
                : undefined);
        message.subscribeLastPriceRequest !== undefined &&
            (obj.subscribeLastPriceRequest = message.subscribeLastPriceRequest
                ? exports.SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarketDataRequest();
        message.subscribeCandlesRequest =
            object.subscribeCandlesRequest !== undefined && object.subscribeCandlesRequest !== null
                ? exports.SubscribeCandlesRequest.fromPartial(object.subscribeCandlesRequest)
                : undefined;
        message.subscribeOrderBookRequest =
            object.subscribeOrderBookRequest !== undefined && object.subscribeOrderBookRequest !== null
                ? exports.SubscribeOrderBookRequest.fromPartial(object.subscribeOrderBookRequest)
                : undefined;
        message.subscribeTradesRequest =
            object.subscribeTradesRequest !== undefined && object.subscribeTradesRequest !== null
                ? exports.SubscribeTradesRequest.fromPartial(object.subscribeTradesRequest)
                : undefined;
        message.subscribeInfoRequest =
            object.subscribeInfoRequest !== undefined && object.subscribeInfoRequest !== null
                ? exports.SubscribeInfoRequest.fromPartial(object.subscribeInfoRequest)
                : undefined;
        message.subscribeLastPriceRequest =
            object.subscribeLastPriceRequest !== undefined && object.subscribeLastPriceRequest !== null
                ? exports.SubscribeLastPriceRequest.fromPartial(object.subscribeLastPriceRequest)
                : undefined;
        return message;
    },
};
function createBaseMarketDataResponse() {
    return {
        subscribeCandlesResponse: undefined,
        subscribeOrderBookResponse: undefined,
        subscribeTradesResponse: undefined,
        subscribeInfoResponse: undefined,
        candle: undefined,
        trade: undefined,
        orderbook: undefined,
        tradingStatus: undefined,
        ping: undefined,
        subscribeLastPriceResponse: undefined,
        lastPrice: undefined,
    };
}
exports.MarketDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscribeCandlesResponse !== undefined) {
            exports.SubscribeCandlesResponse.encode(message.subscribeCandlesResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.subscribeOrderBookResponse !== undefined) {
            exports.SubscribeOrderBookResponse.encode(message.subscribeOrderBookResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.subscribeTradesResponse !== undefined) {
            exports.SubscribeTradesResponse.encode(message.subscribeTradesResponse, writer.uint32(26).fork()).ldelim();
        }
        if (message.subscribeInfoResponse !== undefined) {
            exports.SubscribeInfoResponse.encode(message.subscribeInfoResponse, writer.uint32(34).fork()).ldelim();
        }
        if (message.candle !== undefined) {
            exports.Candle.encode(message.candle, writer.uint32(42).fork()).ldelim();
        }
        if (message.trade !== undefined) {
            exports.Trade.encode(message.trade, writer.uint32(50).fork()).ldelim();
        }
        if (message.orderbook !== undefined) {
            exports.OrderBook.encode(message.orderbook, writer.uint32(58).fork()).ldelim();
        }
        if (message.tradingStatus !== undefined) {
            exports.TradingStatus.encode(message.tradingStatus, writer.uint32(66).fork()).ldelim();
        }
        if (message.ping !== undefined) {
            common_1.Ping.encode(message.ping, writer.uint32(74).fork()).ldelim();
        }
        if (message.subscribeLastPriceResponse !== undefined) {
            exports.SubscribeLastPriceResponse.encode(message.subscribeLastPriceResponse, writer.uint32(82).fork()).ldelim();
        }
        if (message.lastPrice !== undefined) {
            exports.LastPrice.encode(message.lastPrice, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscribeCandlesResponse = exports.SubscribeCandlesResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscribeOrderBookResponse = exports.SubscribeOrderBookResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.subscribeTradesResponse = exports.SubscribeTradesResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.subscribeInfoResponse = exports.SubscribeInfoResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.candle = exports.Candle.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.trade = exports.Trade.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.orderbook = exports.OrderBook.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.tradingStatus = exports.TradingStatus.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.ping = common_1.Ping.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.subscribeLastPriceResponse = exports.SubscribeLastPriceResponse.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.lastPrice = exports.LastPrice.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscribeCandlesResponse: isSet(object.subscribeCandlesResponse)
                ? exports.SubscribeCandlesResponse.fromJSON(object.subscribeCandlesResponse)
                : undefined,
            subscribeOrderBookResponse: isSet(object.subscribeOrderBookResponse)
                ? exports.SubscribeOrderBookResponse.fromJSON(object.subscribeOrderBookResponse)
                : undefined,
            subscribeTradesResponse: isSet(object.subscribeTradesResponse)
                ? exports.SubscribeTradesResponse.fromJSON(object.subscribeTradesResponse)
                : undefined,
            subscribeInfoResponse: isSet(object.subscribeInfoResponse)
                ? exports.SubscribeInfoResponse.fromJSON(object.subscribeInfoResponse)
                : undefined,
            candle: isSet(object.candle) ? exports.Candle.fromJSON(object.candle) : undefined,
            trade: isSet(object.trade) ? exports.Trade.fromJSON(object.trade) : undefined,
            orderbook: isSet(object.orderbook) ? exports.OrderBook.fromJSON(object.orderbook) : undefined,
            tradingStatus: isSet(object.tradingStatus) ? exports.TradingStatus.fromJSON(object.tradingStatus) : undefined,
            ping: isSet(object.ping) ? common_1.Ping.fromJSON(object.ping) : undefined,
            subscribeLastPriceResponse: isSet(object.subscribeLastPriceResponse)
                ? exports.SubscribeLastPriceResponse.fromJSON(object.subscribeLastPriceResponse)
                : undefined,
            lastPrice: isSet(object.lastPrice) ? exports.LastPrice.fromJSON(object.lastPrice) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscribeCandlesResponse !== undefined &&
            (obj.subscribeCandlesResponse = message.subscribeCandlesResponse
                ? exports.SubscribeCandlesResponse.toJSON(message.subscribeCandlesResponse)
                : undefined);
        message.subscribeOrderBookResponse !== undefined &&
            (obj.subscribeOrderBookResponse = message.subscribeOrderBookResponse
                ? exports.SubscribeOrderBookResponse.toJSON(message.subscribeOrderBookResponse)
                : undefined);
        message.subscribeTradesResponse !== undefined &&
            (obj.subscribeTradesResponse = message.subscribeTradesResponse
                ? exports.SubscribeTradesResponse.toJSON(message.subscribeTradesResponse)
                : undefined);
        message.subscribeInfoResponse !== undefined &&
            (obj.subscribeInfoResponse = message.subscribeInfoResponse
                ? exports.SubscribeInfoResponse.toJSON(message.subscribeInfoResponse)
                : undefined);
        message.candle !== undefined && (obj.candle = message.candle ? exports.Candle.toJSON(message.candle) : undefined);
        message.trade !== undefined && (obj.trade = message.trade ? exports.Trade.toJSON(message.trade) : undefined);
        message.orderbook !== undefined &&
            (obj.orderbook = message.orderbook ? exports.OrderBook.toJSON(message.orderbook) : undefined);
        message.tradingStatus !== undefined &&
            (obj.tradingStatus = message.tradingStatus ? exports.TradingStatus.toJSON(message.tradingStatus) : undefined);
        message.ping !== undefined && (obj.ping = message.ping ? common_1.Ping.toJSON(message.ping) : undefined);
        message.subscribeLastPriceResponse !== undefined &&
            (obj.subscribeLastPriceResponse = message.subscribeLastPriceResponse
                ? exports.SubscribeLastPriceResponse.toJSON(message.subscribeLastPriceResponse)
                : undefined);
        message.lastPrice !== undefined &&
            (obj.lastPrice = message.lastPrice ? exports.LastPrice.toJSON(message.lastPrice) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarketDataResponse();
        message.subscribeCandlesResponse =
            object.subscribeCandlesResponse !== undefined && object.subscribeCandlesResponse !== null
                ? exports.SubscribeCandlesResponse.fromPartial(object.subscribeCandlesResponse)
                : undefined;
        message.subscribeOrderBookResponse =
            object.subscribeOrderBookResponse !== undefined && object.subscribeOrderBookResponse !== null
                ? exports.SubscribeOrderBookResponse.fromPartial(object.subscribeOrderBookResponse)
                : undefined;
        message.subscribeTradesResponse =
            object.subscribeTradesResponse !== undefined && object.subscribeTradesResponse !== null
                ? exports.SubscribeTradesResponse.fromPartial(object.subscribeTradesResponse)
                : undefined;
        message.subscribeInfoResponse =
            object.subscribeInfoResponse !== undefined && object.subscribeInfoResponse !== null
                ? exports.SubscribeInfoResponse.fromPartial(object.subscribeInfoResponse)
                : undefined;
        message.candle =
            object.candle !== undefined && object.candle !== null ? exports.Candle.fromPartial(object.candle) : undefined;
        message.trade = object.trade !== undefined && object.trade !== null ? exports.Trade.fromPartial(object.trade) : undefined;
        message.orderbook =
            object.orderbook !== undefined && object.orderbook !== null ? exports.OrderBook.fromPartial(object.orderbook) : undefined;
        message.tradingStatus =
            object.tradingStatus !== undefined && object.tradingStatus !== null
                ? exports.TradingStatus.fromPartial(object.tradingStatus)
                : undefined;
        message.ping = object.ping !== undefined && object.ping !== null ? common_1.Ping.fromPartial(object.ping) : undefined;
        message.subscribeLastPriceResponse =
            object.subscribeLastPriceResponse !== undefined && object.subscribeLastPriceResponse !== null
                ? exports.SubscribeLastPriceResponse.fromPartial(object.subscribeLastPriceResponse)
                : undefined;
        message.lastPrice =
            object.lastPrice !== undefined && object.lastPrice !== null ? exports.LastPrice.fromPartial(object.lastPrice) : undefined;
        return message;
    },
};
function createBaseSubscribeCandlesRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeCandlesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.CandleInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeCandlesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.CandleInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments)
                ? object.instruments.map((e) => exports.CandleInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.CandleInstrument.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeCandlesRequest();
        message.subscriptionAction = (_a = object.subscriptionAction) !== null && _a !== void 0 ? _a : 0;
        message.instruments = ((_b = object.instruments) === null || _b === void 0 ? void 0 : _b.map(e => exports.CandleInstrument.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCandleInstrument() {
    return { figi: '', interval: 0 };
}
exports.CandleInstrument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.interval !== 0) {
            writer.uint32(16).int32(message.interval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCandleInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.interval = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.interval !== undefined && (obj.interval = subscriptionIntervalToJSON(message.interval));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCandleInstrument();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.interval = (_b = object.interval) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSubscribeCandlesResponse() {
    return { trackingId: '', candlesSubscriptions: [] };
}
exports.SubscribeCandlesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trackingId !== '') {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.candlesSubscriptions) {
            exports.CandleSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeCandlesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.candlesSubscriptions.push(exports.CandleSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
            candlesSubscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.candlesSubscriptions)
                ? object.candlesSubscriptions.map((e) => exports.CandleSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.candlesSubscriptions) {
            obj.candlesSubscriptions = message.candlesSubscriptions.map(e => (e ? exports.CandleSubscription.toJSON(e) : undefined));
        }
        else {
            obj.candlesSubscriptions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeCandlesResponse();
        message.trackingId = (_a = object.trackingId) !== null && _a !== void 0 ? _a : '';
        message.candlesSubscriptions = ((_b = object.candlesSubscriptions) === null || _b === void 0 ? void 0 : _b.map(e => exports.CandleSubscription.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCandleSubscription() {
    return { figi: '', interval: 0, subscriptionStatus: 0 };
}
exports.CandleSubscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.interval !== 0) {
            writer.uint32(16).int32(message.interval);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(24).int32(message.subscriptionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCandleSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.interval = reader.int32();
                    break;
                case 3:
                    message.subscriptionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
            subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.interval !== undefined && (obj.interval = subscriptionIntervalToJSON(message.interval));
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCandleSubscription();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.interval = (_b = object.interval) !== null && _b !== void 0 ? _b : 0;
        message.subscriptionStatus = (_c = object.subscriptionStatus) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseSubscribeOrderBookRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeOrderBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.OrderBookInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeOrderBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.OrderBookInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments)
                ? object.instruments.map((e) => exports.OrderBookInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.OrderBookInstrument.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeOrderBookRequest();
        message.subscriptionAction = (_a = object.subscriptionAction) !== null && _a !== void 0 ? _a : 0;
        message.instruments = ((_b = object.instruments) === null || _b === void 0 ? void 0 : _b.map(e => exports.OrderBookInstrument.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderBookInstrument() {
    return { figi: '', depth: 0 };
}
exports.OrderBookInstrument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.depth = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            depth: isSet(object.depth) ? Number(object.depth) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderBookInstrument();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.depth = (_b = object.depth) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSubscribeOrderBookResponse() {
    return { trackingId: '', orderBookSubscriptions: [] };
}
exports.SubscribeOrderBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trackingId !== '') {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.orderBookSubscriptions) {
            exports.OrderBookSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.orderBookSubscriptions.push(exports.OrderBookSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
            orderBookSubscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.orderBookSubscriptions)
                ? object.orderBookSubscriptions.map((e) => exports.OrderBookSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.orderBookSubscriptions) {
            obj.orderBookSubscriptions = message.orderBookSubscriptions.map(e => e ? exports.OrderBookSubscription.toJSON(e) : undefined);
        }
        else {
            obj.orderBookSubscriptions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeOrderBookResponse();
        message.trackingId = (_a = object.trackingId) !== null && _a !== void 0 ? _a : '';
        message.orderBookSubscriptions =
            ((_b = object.orderBookSubscriptions) === null || _b === void 0 ? void 0 : _b.map(e => exports.OrderBookSubscription.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderBookSubscription() {
    return { figi: '', depth: 0, subscriptionStatus: 0 };
}
exports.OrderBookSubscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(24).int32(message.subscriptionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBookSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.depth = reader.int32();
                    break;
                case 3:
                    message.subscriptionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOrderBookSubscription();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.depth = (_b = object.depth) !== null && _b !== void 0 ? _b : 0;
        message.subscriptionStatus = (_c = object.subscriptionStatus) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseSubscribeTradesRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeTradesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.TradeInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeTradesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.TradeInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments)
                ? object.instruments.map((e) => exports.TradeInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.TradeInstrument.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeTradesRequest();
        message.subscriptionAction = (_a = object.subscriptionAction) !== null && _a !== void 0 ? _a : 0;
        message.instruments = ((_b = object.instruments) === null || _b === void 0 ? void 0 : _b.map(e => exports.TradeInstrument.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradeInstrument() {
    return { figi: '' };
}
exports.TradeInstrument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTradeInstrument();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseSubscribeTradesResponse() {
    return { trackingId: '', tradeSubscriptions: [] };
}
exports.SubscribeTradesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trackingId !== '') {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.tradeSubscriptions) {
            exports.TradeSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.tradeSubscriptions.push(exports.TradeSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
            tradeSubscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.tradeSubscriptions)
                ? object.tradeSubscriptions.map((e) => exports.TradeSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.tradeSubscriptions) {
            obj.tradeSubscriptions = message.tradeSubscriptions.map(e => (e ? exports.TradeSubscription.toJSON(e) : undefined));
        }
        else {
            obj.tradeSubscriptions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeTradesResponse();
        message.trackingId = (_a = object.trackingId) !== null && _a !== void 0 ? _a : '';
        message.tradeSubscriptions = ((_b = object.tradeSubscriptions) === null || _b === void 0 ? void 0 : _b.map(e => exports.TradeSubscription.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradeSubscription() {
    return { figi: '', subscriptionStatus: 0 };
}
exports.TradeSubscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(16).int32(message.subscriptionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradeSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.subscriptionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTradeSubscription();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.subscriptionStatus = (_b = object.subscriptionStatus) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSubscribeInfoRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.InfoInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.InfoInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments)
                ? object.instruments.map((e) => exports.InfoInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.InfoInstrument.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeInfoRequest();
        message.subscriptionAction = (_a = object.subscriptionAction) !== null && _a !== void 0 ? _a : 0;
        message.instruments = ((_b = object.instruments) === null || _b === void 0 ? void 0 : _b.map(e => exports.InfoInstrument.fromPartial(e))) || [];
        return message;
    },
};
function createBaseInfoInstrument() {
    return { figi: '' };
}
exports.InfoInstrument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInfoInstrument();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseSubscribeInfoResponse() {
    return { trackingId: '', infoSubscriptions: [] };
}
exports.SubscribeInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trackingId !== '') {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.infoSubscriptions) {
            exports.InfoSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.infoSubscriptions.push(exports.InfoSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
            infoSubscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.infoSubscriptions)
                ? object.infoSubscriptions.map((e) => exports.InfoSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.infoSubscriptions) {
            obj.infoSubscriptions = message.infoSubscriptions.map(e => (e ? exports.InfoSubscription.toJSON(e) : undefined));
        }
        else {
            obj.infoSubscriptions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeInfoResponse();
        message.trackingId = (_a = object.trackingId) !== null && _a !== void 0 ? _a : '';
        message.infoSubscriptions = ((_b = object.infoSubscriptions) === null || _b === void 0 ? void 0 : _b.map(e => exports.InfoSubscription.fromPartial(e))) || [];
        return message;
    },
};
function createBaseInfoSubscription() {
    return { figi: '', subscriptionStatus: 0 };
}
exports.InfoSubscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(16).int32(message.subscriptionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInfoSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.subscriptionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseInfoSubscription();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.subscriptionStatus = (_b = object.subscriptionStatus) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSubscribeLastPriceRequest() {
    return { subscriptionAction: 0, instruments: [] };
}
exports.SubscribeLastPriceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subscriptionAction !== 0) {
            writer.uint32(8).int32(message.subscriptionAction);
        }
        for (const v of message.instruments) {
            exports.LastPriceInstrument.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeLastPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subscriptionAction = reader.int32();
                    break;
                case 2:
                    message.instruments.push(exports.LastPriceInstrument.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments)
                ? object.instruments.map((e) => exports.LastPriceInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.subscriptionAction !== undefined &&
            (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.LastPriceInstrument.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeLastPriceRequest();
        message.subscriptionAction = (_a = object.subscriptionAction) !== null && _a !== void 0 ? _a : 0;
        message.instruments = ((_b = object.instruments) === null || _b === void 0 ? void 0 : _b.map(e => exports.LastPriceInstrument.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLastPriceInstrument() {
    return { figi: '' };
}
exports.LastPriceInstrument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastPriceInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLastPriceInstrument();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseSubscribeLastPriceResponse() {
    return { trackingId: '', lastPriceSubscriptions: [] };
}
exports.SubscribeLastPriceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.trackingId !== '') {
            writer.uint32(10).string(message.trackingId);
        }
        for (const v of message.lastPriceSubscriptions) {
            exports.LastPriceSubscription.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubscribeLastPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trackingId = reader.string();
                    break;
                case 2:
                    message.lastPriceSubscriptions.push(exports.LastPriceSubscription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
            lastPriceSubscriptions: Array.isArray(object === null || object === void 0 ? void 0 : object.lastPriceSubscriptions)
                ? object.lastPriceSubscriptions.map((e) => exports.LastPriceSubscription.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.trackingId !== undefined && (obj.trackingId = message.trackingId);
        if (message.lastPriceSubscriptions) {
            obj.lastPriceSubscriptions = message.lastPriceSubscriptions.map(e => e ? exports.LastPriceSubscription.toJSON(e) : undefined);
        }
        else {
            obj.lastPriceSubscriptions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSubscribeLastPriceResponse();
        message.trackingId = (_a = object.trackingId) !== null && _a !== void 0 ? _a : '';
        message.lastPriceSubscriptions =
            ((_b = object.lastPriceSubscriptions) === null || _b === void 0 ? void 0 : _b.map(e => exports.LastPriceSubscription.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLastPriceSubscription() {
    return { figi: '', subscriptionStatus: 0 };
}
exports.LastPriceSubscription = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.subscriptionStatus !== 0) {
            writer.uint32(16).int32(message.subscriptionStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastPriceSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.subscriptionStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.subscriptionStatus !== undefined &&
            (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLastPriceSubscription();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.subscriptionStatus = (_b = object.subscriptionStatus) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseCandle() {
    return {
        figi: '',
        interval: 0,
        open: undefined,
        high: undefined,
        low: undefined,
        close: undefined,
        volume: 0,
        time: undefined,
        lastTradeTs: undefined,
    };
}
exports.Candle = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.interval !== 0) {
            writer.uint32(16).int32(message.interval);
        }
        if (message.open !== undefined) {
            common_1.Quotation.encode(message.open, writer.uint32(26).fork()).ldelim();
        }
        if (message.high !== undefined) {
            common_1.Quotation.encode(message.high, writer.uint32(34).fork()).ldelim();
        }
        if (message.low !== undefined) {
            common_1.Quotation.encode(message.low, writer.uint32(42).fork()).ldelim();
        }
        if (message.close !== undefined) {
            common_1.Quotation.encode(message.close, writer.uint32(50).fork()).ldelim();
        }
        if (message.volume !== 0) {
            writer.uint32(56).int64(message.volume);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(66).fork()).ldelim();
        }
        if (message.lastTradeTs !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastTradeTs), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCandle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.interval = reader.int32();
                    break;
                case 3:
                    message.open = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.high = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.low = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.close = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.volume = longToNumber(reader.int64());
                    break;
                case 8:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.lastTradeTs = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
            open: isSet(object.open) ? common_1.Quotation.fromJSON(object.open) : undefined,
            high: isSet(object.high) ? common_1.Quotation.fromJSON(object.high) : undefined,
            low: isSet(object.low) ? common_1.Quotation.fromJSON(object.low) : undefined,
            close: isSet(object.close) ? common_1.Quotation.fromJSON(object.close) : undefined,
            volume: isSet(object.volume) ? Number(object.volume) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            lastTradeTs: isSet(object.lastTradeTs) ? fromJsonTimestamp(object.lastTradeTs) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.interval !== undefined && (obj.interval = subscriptionIntervalToJSON(message.interval));
        message.open !== undefined && (obj.open = message.open ? common_1.Quotation.toJSON(message.open) : undefined);
        message.high !== undefined && (obj.high = message.high ? common_1.Quotation.toJSON(message.high) : undefined);
        message.low !== undefined && (obj.low = message.low ? common_1.Quotation.toJSON(message.low) : undefined);
        message.close !== undefined && (obj.close = message.close ? common_1.Quotation.toJSON(message.close) : undefined);
        message.volume !== undefined && (obj.volume = Math.round(message.volume));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.lastTradeTs !== undefined && (obj.lastTradeTs = message.lastTradeTs.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCandle();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.interval = (_b = object.interval) !== null && _b !== void 0 ? _b : 0;
        message.open = object.open !== undefined && object.open !== null ? common_1.Quotation.fromPartial(object.open) : undefined;
        message.high = object.high !== undefined && object.high !== null ? common_1.Quotation.fromPartial(object.high) : undefined;
        message.low = object.low !== undefined && object.low !== null ? common_1.Quotation.fromPartial(object.low) : undefined;
        message.close =
            object.close !== undefined && object.close !== null ? common_1.Quotation.fromPartial(object.close) : undefined;
        message.volume = (_c = object.volume) !== null && _c !== void 0 ? _c : 0;
        message.time = (_d = object.time) !== null && _d !== void 0 ? _d : undefined;
        message.lastTradeTs = (_e = object.lastTradeTs) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseOrderBook() {
    return {
        figi: '',
        depth: 0,
        isConsistent: false,
        bids: [],
        asks: [],
        time: undefined,
        limitUp: undefined,
        limitDown: undefined,
    };
}
exports.OrderBook = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        if (message.isConsistent === true) {
            writer.uint32(24).bool(message.isConsistent);
        }
        for (const v of message.bids) {
            exports.Order.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.asks) {
            exports.Order.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.limitUp !== undefined) {
            common_1.Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
        }
        if (message.limitDown !== undefined) {
            common_1.Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderBook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.depth = reader.int32();
                    break;
                case 3:
                    message.isConsistent = reader.bool();
                    break;
                case 4:
                    message.bids.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.asks.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.limitUp = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.limitDown = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            isConsistent: isSet(object.isConsistent) ? Boolean(object.isConsistent) : false,
            bids: Array.isArray(object === null || object === void 0 ? void 0 : object.bids) ? object.bids.map((e) => exports.Order.fromJSON(e)) : [],
            asks: Array.isArray(object === null || object === void 0 ? void 0 : object.asks) ? object.asks.map((e) => exports.Order.fromJSON(e)) : [],
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            limitUp: isSet(object.limitUp) ? common_1.Quotation.fromJSON(object.limitUp) : undefined,
            limitDown: isSet(object.limitDown) ? common_1.Quotation.fromJSON(object.limitDown) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        message.isConsistent !== undefined && (obj.isConsistent = message.isConsistent);
        if (message.bids) {
            obj.bids = message.bids.map(e => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.bids = [];
        }
        if (message.asks) {
            obj.asks = message.asks.map(e => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.asks = [];
        }
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.limitUp !== undefined && (obj.limitUp = message.limitUp ? common_1.Quotation.toJSON(message.limitUp) : undefined);
        message.limitDown !== undefined &&
            (obj.limitDown = message.limitDown ? common_1.Quotation.toJSON(message.limitDown) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseOrderBook();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.depth = (_b = object.depth) !== null && _b !== void 0 ? _b : 0;
        message.isConsistent = (_c = object.isConsistent) !== null && _c !== void 0 ? _c : false;
        message.bids = ((_d = object.bids) === null || _d === void 0 ? void 0 : _d.map(e => exports.Order.fromPartial(e))) || [];
        message.asks = ((_e = object.asks) === null || _e === void 0 ? void 0 : _e.map(e => exports.Order.fromPartial(e))) || [];
        message.time = (_f = object.time) !== null && _f !== void 0 ? _f : undefined;
        message.limitUp =
            object.limitUp !== undefined && object.limitUp !== null ? common_1.Quotation.fromPartial(object.limitUp) : undefined;
        message.limitDown =
            object.limitDown !== undefined && object.limitDown !== null ? common_1.Quotation.fromPartial(object.limitDown) : undefined;
        return message;
    },
};
function createBaseOrder() {
    return { price: undefined, quantity: 0 };
}
exports.Order = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== undefined) {
            common_1.Quotation.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int64(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quantity = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            price: isSet(object.price) ? common_1.Quotation.fromJSON(object.price) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price ? common_1.Quotation.toJSON(message.price) : undefined);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrder();
        message.price =
            object.price !== undefined && object.price !== null ? common_1.Quotation.fromPartial(object.price) : undefined;
        message.quantity = (_a = object.quantity) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseTrade() {
    return { figi: '', direction: 0, price: undefined, quantity: 0, time: undefined };
}
exports.Trade = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.direction !== 0) {
            writer.uint32(16).int32(message.direction);
        }
        if (message.price !== undefined) {
            common_1.Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(32).int64(message.quantity);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.direction = reader.int32();
                    break;
                case 3:
                    message.price = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 5:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            direction: isSet(object.direction) ? tradeDirectionFromJSON(object.direction) : 0,
            price: isSet(object.price) ? common_1.Quotation.fromJSON(object.price) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.direction !== undefined && (obj.direction = tradeDirectionToJSON(message.direction));
        message.price !== undefined && (obj.price = message.price ? common_1.Quotation.toJSON(message.price) : undefined);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTrade();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.direction = (_b = object.direction) !== null && _b !== void 0 ? _b : 0;
        message.price =
            object.price !== undefined && object.price !== null ? common_1.Quotation.fromPartial(object.price) : undefined;
        message.quantity = (_c = object.quantity) !== null && _c !== void 0 ? _c : 0;
        message.time = (_d = object.time) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseTradingStatus() {
    return {
        figi: '',
        tradingStatus: 0,
        time: undefined,
        limitOrderAvailableFlag: false,
        marketOrderAvailableFlag: false,
    };
}
exports.TradingStatus = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(16).int32(message.tradingStatus);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
        }
        if (message.limitOrderAvailableFlag === true) {
            writer.uint32(32).bool(message.limitOrderAvailableFlag);
        }
        if (message.marketOrderAvailableFlag === true) {
            writer.uint32(40).bool(message.marketOrderAvailableFlag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.tradingStatus = reader.int32();
                    break;
                case 3:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.limitOrderAvailableFlag = reader.bool();
                    break;
                case 5:
                    message.marketOrderAvailableFlag = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag) ? Boolean(object.limitOrderAvailableFlag) : false,
            marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
                ? Boolean(object.marketOrderAvailableFlag)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.limitOrderAvailableFlag !== undefined && (obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag);
        message.marketOrderAvailableFlag !== undefined && (obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTradingStatus();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.tradingStatus = (_b = object.tradingStatus) !== null && _b !== void 0 ? _b : 0;
        message.time = (_c = object.time) !== null && _c !== void 0 ? _c : undefined;
        message.limitOrderAvailableFlag = (_d = object.limitOrderAvailableFlag) !== null && _d !== void 0 ? _d : false;
        message.marketOrderAvailableFlag = (_e = object.marketOrderAvailableFlag) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseGetCandlesRequest() {
    return { figi: '', from: undefined, to: undefined, interval: 0 };
}
exports.GetCandlesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.from !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        if (message.interval !== 0) {
            writer.uint32(32).int32(message.interval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCandlesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.interval = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
            interval: isSet(object.interval) ? candleIntervalFromJSON(object.interval) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        message.interval !== undefined && (obj.interval = candleIntervalToJSON(message.interval));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetCandlesRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        message.interval = (_d = object.interval) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseGetCandlesResponse() {
    return { candles: [] };
}
exports.GetCandlesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.candles) {
            exports.HistoricCandle.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCandlesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.candles.push(exports.HistoricCandle.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            candles: Array.isArray(object === null || object === void 0 ? void 0 : object.candles) ? object.candles.map((e) => exports.HistoricCandle.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.candles) {
            obj.candles = message.candles.map(e => (e ? exports.HistoricCandle.toJSON(e) : undefined));
        }
        else {
            obj.candles = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetCandlesResponse();
        message.candles = ((_a = object.candles) === null || _a === void 0 ? void 0 : _a.map(e => exports.HistoricCandle.fromPartial(e))) || [];
        return message;
    },
};
function createBaseHistoricCandle() {
    return {
        open: undefined,
        high: undefined,
        low: undefined,
        close: undefined,
        volume: 0,
        time: undefined,
        isComplete: false,
    };
}
exports.HistoricCandle = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.open !== undefined) {
            common_1.Quotation.encode(message.open, writer.uint32(10).fork()).ldelim();
        }
        if (message.high !== undefined) {
            common_1.Quotation.encode(message.high, writer.uint32(18).fork()).ldelim();
        }
        if (message.low !== undefined) {
            common_1.Quotation.encode(message.low, writer.uint32(26).fork()).ldelim();
        }
        if (message.close !== undefined) {
            common_1.Quotation.encode(message.close, writer.uint32(34).fork()).ldelim();
        }
        if (message.volume !== 0) {
            writer.uint32(40).int64(message.volume);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.isComplete === true) {
            writer.uint32(56).bool(message.isComplete);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricCandle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.open = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.high = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.low = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.close = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.volume = longToNumber(reader.int64());
                    break;
                case 6:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.isComplete = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            open: isSet(object.open) ? common_1.Quotation.fromJSON(object.open) : undefined,
            high: isSet(object.high) ? common_1.Quotation.fromJSON(object.high) : undefined,
            low: isSet(object.low) ? common_1.Quotation.fromJSON(object.low) : undefined,
            close: isSet(object.close) ? common_1.Quotation.fromJSON(object.close) : undefined,
            volume: isSet(object.volume) ? Number(object.volume) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            isComplete: isSet(object.isComplete) ? Boolean(object.isComplete) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.open !== undefined && (obj.open = message.open ? common_1.Quotation.toJSON(message.open) : undefined);
        message.high !== undefined && (obj.high = message.high ? common_1.Quotation.toJSON(message.high) : undefined);
        message.low !== undefined && (obj.low = message.low ? common_1.Quotation.toJSON(message.low) : undefined);
        message.close !== undefined && (obj.close = message.close ? common_1.Quotation.toJSON(message.close) : undefined);
        message.volume !== undefined && (obj.volume = Math.round(message.volume));
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.isComplete !== undefined && (obj.isComplete = message.isComplete);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseHistoricCandle();
        message.open = object.open !== undefined && object.open !== null ? common_1.Quotation.fromPartial(object.open) : undefined;
        message.high = object.high !== undefined && object.high !== null ? common_1.Quotation.fromPartial(object.high) : undefined;
        message.low = object.low !== undefined && object.low !== null ? common_1.Quotation.fromPartial(object.low) : undefined;
        message.close =
            object.close !== undefined && object.close !== null ? common_1.Quotation.fromPartial(object.close) : undefined;
        message.volume = (_a = object.volume) !== null && _a !== void 0 ? _a : 0;
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.isComplete = (_c = object.isComplete) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseGetLastPricesRequest() {
    return { figi: [] };
}
exports.GetLastPricesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.figi) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLastPricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: Array.isArray(object === null || object === void 0 ? void 0 : object.figi) ? object.figi.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.figi) {
            obj.figi = message.figi.map(e => e);
        }
        else {
            obj.figi = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetLastPricesRequest();
        message.figi = ((_a = object.figi) === null || _a === void 0 ? void 0 : _a.map(e => e)) || [];
        return message;
    },
};
function createBaseGetLastPricesResponse() {
    return { lastPrices: [] };
}
exports.GetLastPricesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lastPrices) {
            exports.LastPrice.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLastPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastPrices.push(exports.LastPrice.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            lastPrices: Array.isArray(object === null || object === void 0 ? void 0 : object.lastPrices) ? object.lastPrices.map((e) => exports.LastPrice.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lastPrices) {
            obj.lastPrices = message.lastPrices.map(e => (e ? exports.LastPrice.toJSON(e) : undefined));
        }
        else {
            obj.lastPrices = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetLastPricesResponse();
        message.lastPrices = ((_a = object.lastPrices) === null || _a === void 0 ? void 0 : _a.map(e => exports.LastPrice.fromPartial(e))) || [];
        return message;
    },
};
function createBaseLastPrice() {
    return { figi: '', price: undefined, time: undefined };
}
exports.LastPrice = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.price !== undefined) {
            common_1.Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.price = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            price: isSet(object.price) ? common_1.Quotation.fromJSON(object.price) : undefined,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.price !== undefined && (obj.price = message.price ? common_1.Quotation.toJSON(message.price) : undefined);
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLastPrice();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.price =
            object.price !== undefined && object.price !== null ? common_1.Quotation.fromPartial(object.price) : undefined;
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseGetOrderBookRequest() {
    return { figi: '', depth: 0 };
}
exports.GetOrderBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrderBookRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.depth = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            depth: isSet(object.depth) ? Number(object.depth) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetOrderBookRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.depth = (_b = object.depth) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGetOrderBookResponse() {
    return {
        figi: '',
        depth: 0,
        bids: [],
        asks: [],
        lastPrice: undefined,
        closePrice: undefined,
        limitUp: undefined,
        limitDown: undefined,
    };
}
exports.GetOrderBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.depth !== 0) {
            writer.uint32(16).int32(message.depth);
        }
        for (const v of message.bids) {
            exports.Order.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.asks) {
            exports.Order.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.lastPrice !== undefined) {
            common_1.Quotation.encode(message.lastPrice, writer.uint32(42).fork()).ldelim();
        }
        if (message.closePrice !== undefined) {
            common_1.Quotation.encode(message.closePrice, writer.uint32(50).fork()).ldelim();
        }
        if (message.limitUp !== undefined) {
            common_1.Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
        }
        if (message.limitDown !== undefined) {
            common_1.Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrderBookResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.depth = reader.int32();
                    break;
                case 3:
                    message.bids.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.asks.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastPrice = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.closePrice = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.limitUp = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.limitDown = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            bids: Array.isArray(object === null || object === void 0 ? void 0 : object.bids) ? object.bids.map((e) => exports.Order.fromJSON(e)) : [],
            asks: Array.isArray(object === null || object === void 0 ? void 0 : object.asks) ? object.asks.map((e) => exports.Order.fromJSON(e)) : [],
            lastPrice: isSet(object.lastPrice) ? common_1.Quotation.fromJSON(object.lastPrice) : undefined,
            closePrice: isSet(object.closePrice) ? common_1.Quotation.fromJSON(object.closePrice) : undefined,
            limitUp: isSet(object.limitUp) ? common_1.Quotation.fromJSON(object.limitUp) : undefined,
            limitDown: isSet(object.limitDown) ? common_1.Quotation.fromJSON(object.limitDown) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        if (message.bids) {
            obj.bids = message.bids.map(e => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.bids = [];
        }
        if (message.asks) {
            obj.asks = message.asks.map(e => (e ? exports.Order.toJSON(e) : undefined));
        }
        else {
            obj.asks = [];
        }
        message.lastPrice !== undefined &&
            (obj.lastPrice = message.lastPrice ? common_1.Quotation.toJSON(message.lastPrice) : undefined);
        message.closePrice !== undefined &&
            (obj.closePrice = message.closePrice ? common_1.Quotation.toJSON(message.closePrice) : undefined);
        message.limitUp !== undefined && (obj.limitUp = message.limitUp ? common_1.Quotation.toJSON(message.limitUp) : undefined);
        message.limitDown !== undefined &&
            (obj.limitDown = message.limitDown ? common_1.Quotation.toJSON(message.limitDown) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetOrderBookResponse();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.depth = (_b = object.depth) !== null && _b !== void 0 ? _b : 0;
        message.bids = ((_c = object.bids) === null || _c === void 0 ? void 0 : _c.map(e => exports.Order.fromPartial(e))) || [];
        message.asks = ((_d = object.asks) === null || _d === void 0 ? void 0 : _d.map(e => exports.Order.fromPartial(e))) || [];
        message.lastPrice =
            object.lastPrice !== undefined && object.lastPrice !== null ? common_1.Quotation.fromPartial(object.lastPrice) : undefined;
        message.closePrice =
            object.closePrice !== undefined && object.closePrice !== null
                ? common_1.Quotation.fromPartial(object.closePrice)
                : undefined;
        message.limitUp =
            object.limitUp !== undefined && object.limitUp !== null ? common_1.Quotation.fromPartial(object.limitUp) : undefined;
        message.limitDown =
            object.limitDown !== undefined && object.limitDown !== null ? common_1.Quotation.fromPartial(object.limitDown) : undefined;
        return message;
    },
};
function createBaseGetTradingStatusRequest() {
    return { figi: '' };
}
exports.GetTradingStatusRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTradingStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTradingStatusRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetTradingStatusResponse() {
    return { figi: '', tradingStatus: 0, limitOrderAvailableFlag: false, marketOrderAvailableFlag: false };
}
exports.GetTradingStatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(16).int32(message.tradingStatus);
        }
        if (message.limitOrderAvailableFlag === true) {
            writer.uint32(24).bool(message.limitOrderAvailableFlag);
        }
        if (message.marketOrderAvailableFlag === true) {
            writer.uint32(32).bool(message.marketOrderAvailableFlag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTradingStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.tradingStatus = reader.int32();
                    break;
                case 3:
                    message.limitOrderAvailableFlag = reader.bool();
                    break;
                case 4:
                    message.marketOrderAvailableFlag = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag) ? Boolean(object.limitOrderAvailableFlag) : false,
            marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
                ? Boolean(object.marketOrderAvailableFlag)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.limitOrderAvailableFlag !== undefined && (obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag);
        message.marketOrderAvailableFlag !== undefined && (obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetTradingStatusResponse();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.tradingStatus = (_b = object.tradingStatus) !== null && _b !== void 0 ? _b : 0;
        message.limitOrderAvailableFlag = (_c = object.limitOrderAvailableFlag) !== null && _c !== void 0 ? _c : false;
        message.marketOrderAvailableFlag = (_d = object.marketOrderAvailableFlag) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseGetLastTradesRequest() {
    return { figi: '', from: undefined, to: undefined };
}
exports.GetLastTradesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.from !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLastTradesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : '',
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetLastTradesRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetLastTradesResponse() {
    return { trades: [] };
}
exports.GetLastTradesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.trades) {
            exports.Trade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLastTradesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.Trade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map((e) => exports.Trade.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(e => (e ? exports.Trade.toJSON(e) : undefined));
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetLastTradesResponse();
        message.trades = ((_a = object.trades) === null || _a === void 0 ? void 0 : _a.map(e => exports.Trade.fromPartial(e))) || [];
        return message;
    },
};
exports.MarketDataServiceDefinition = {
    name: 'MarketDataService',
    fullName: 'tinkoff.public.invest.api.contract.v1.MarketDataService',
    methods: {
        getCandles: {
            name: 'GetCandles',
            requestType: exports.GetCandlesRequest,
            requestStream: false,
            responseType: exports.GetCandlesResponse,
            responseStream: false,
            options: {},
        },
        getLastPrices: {
            name: 'GetLastPrices',
            requestType: exports.GetLastPricesRequest,
            requestStream: false,
            responseType: exports.GetLastPricesResponse,
            responseStream: false,
            options: {},
        },
        getOrderBook: {
            name: 'GetOrderBook',
            requestType: exports.GetOrderBookRequest,
            requestStream: false,
            responseType: exports.GetOrderBookResponse,
            responseStream: false,
            options: {},
        },
        getTradingStatus: {
            name: 'GetTradingStatus',
            requestType: exports.GetTradingStatusRequest,
            requestStream: false,
            responseType: exports.GetTradingStatusResponse,
            responseStream: false,
            options: {},
        },
        getLastTrades: {
            name: 'GetLastTrades',
            requestType: exports.GetLastTradesRequest,
            requestStream: false,
            responseType: exports.GetLastTradesResponse,
            responseStream: false,
            options: {},
        },
    },
};
exports.MarketDataStreamServiceDefinition = {
    name: 'MarketDataStreamService',
    fullName: 'tinkoff.public.invest.api.contract.v1.MarketDataStreamService',
    methods: {
        marketDataStream: {
            name: 'MarketDataStream',
            requestType: exports.MarketDataRequest,
            requestStream: true,
            responseType: exports.MarketDataResponse,
            responseStream: true,
            options: {},
        },
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=marketdata.js.map