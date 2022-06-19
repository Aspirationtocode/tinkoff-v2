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
exports.OrdersServiceDefinition = exports.OrdersStreamServiceDefinition = exports.OrderStage = exports.OrderState = exports.GetOrdersResponse = exports.GetOrdersRequest = exports.GetOrderStateRequest = exports.CancelOrderResponse = exports.CancelOrderRequest = exports.PostOrderResponse = exports.PostOrderRequest = exports.OrderTrade = exports.OrderTrades = exports.TradesStreamResponse = exports.TradesStreamRequest = exports.orderExecutionReportStatusToJSON = exports.orderExecutionReportStatusFromJSON = exports.OrderExecutionReportStatus = exports.orderTypeToJSON = exports.orderTypeFromJSON = exports.OrderType = exports.orderDirectionToJSON = exports.orderDirectionFromJSON = exports.OrderDirection = exports.protobufPackage = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
const common_1 = require("./common");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
var OrderDirection;
(function (OrderDirection) {
    OrderDirection[OrderDirection["ORDER_DIRECTION_UNSPECIFIED"] = 0] = "ORDER_DIRECTION_UNSPECIFIED";
    OrderDirection[OrderDirection["ORDER_DIRECTION_BUY"] = 1] = "ORDER_DIRECTION_BUY";
    OrderDirection[OrderDirection["ORDER_DIRECTION_SELL"] = 2] = "ORDER_DIRECTION_SELL";
    OrderDirection[OrderDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
function orderDirectionFromJSON(object) {
    switch (object) {
        case 0:
        case 'ORDER_DIRECTION_UNSPECIFIED':
            return OrderDirection.ORDER_DIRECTION_UNSPECIFIED;
        case 1:
        case 'ORDER_DIRECTION_BUY':
            return OrderDirection.ORDER_DIRECTION_BUY;
        case 2:
        case 'ORDER_DIRECTION_SELL':
            return OrderDirection.ORDER_DIRECTION_SELL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OrderDirection.UNRECOGNIZED;
    }
}
exports.orderDirectionFromJSON = orderDirectionFromJSON;
function orderDirectionToJSON(object) {
    switch (object) {
        case OrderDirection.ORDER_DIRECTION_UNSPECIFIED:
            return 'ORDER_DIRECTION_UNSPECIFIED';
        case OrderDirection.ORDER_DIRECTION_BUY:
            return 'ORDER_DIRECTION_BUY';
        case OrderDirection.ORDER_DIRECTION_SELL:
            return 'ORDER_DIRECTION_SELL';
        default:
            return 'UNKNOWN';
    }
}
exports.orderDirectionToJSON = orderDirectionToJSON;
var OrderType;
(function (OrderType) {
    OrderType[OrderType["ORDER_TYPE_UNSPECIFIED"] = 0] = "ORDER_TYPE_UNSPECIFIED";
    OrderType[OrderType["ORDER_TYPE_LIMIT"] = 1] = "ORDER_TYPE_LIMIT";
    OrderType[OrderType["ORDER_TYPE_MARKET"] = 2] = "ORDER_TYPE_MARKET";
    OrderType[OrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
function orderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'ORDER_TYPE_UNSPECIFIED':
            return OrderType.ORDER_TYPE_UNSPECIFIED;
        case 1:
        case 'ORDER_TYPE_LIMIT':
            return OrderType.ORDER_TYPE_LIMIT;
        case 2:
        case 'ORDER_TYPE_MARKET':
            return OrderType.ORDER_TYPE_MARKET;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OrderType.UNRECOGNIZED;
    }
}
exports.orderTypeFromJSON = orderTypeFromJSON;
function orderTypeToJSON(object) {
    switch (object) {
        case OrderType.ORDER_TYPE_UNSPECIFIED:
            return 'ORDER_TYPE_UNSPECIFIED';
        case OrderType.ORDER_TYPE_LIMIT:
            return 'ORDER_TYPE_LIMIT';
        case OrderType.ORDER_TYPE_MARKET:
            return 'ORDER_TYPE_MARKET';
        default:
            return 'UNKNOWN';
    }
}
exports.orderTypeToJSON = orderTypeToJSON;
var OrderExecutionReportStatus;
(function (OrderExecutionReportStatus) {
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_UNSPECIFIED"] = 0] = "EXECUTION_REPORT_STATUS_UNSPECIFIED";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_FILL"] = 1] = "EXECUTION_REPORT_STATUS_FILL";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_REJECTED"] = 2] = "EXECUTION_REPORT_STATUS_REJECTED";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_CANCELLED"] = 3] = "EXECUTION_REPORT_STATUS_CANCELLED";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_NEW"] = 4] = "EXECUTION_REPORT_STATUS_NEW";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_PARTIALLYFILL"] = 5] = "EXECUTION_REPORT_STATUS_PARTIALLYFILL";
    OrderExecutionReportStatus[OrderExecutionReportStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderExecutionReportStatus = exports.OrderExecutionReportStatus || (exports.OrderExecutionReportStatus = {}));
function orderExecutionReportStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'EXECUTION_REPORT_STATUS_UNSPECIFIED':
            return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_UNSPECIFIED;
        case 1:
        case 'EXECUTION_REPORT_STATUS_FILL':
            return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL;
        case 2:
        case 'EXECUTION_REPORT_STATUS_REJECTED':
            return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED;
        case 3:
        case 'EXECUTION_REPORT_STATUS_CANCELLED':
            return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_CANCELLED;
        case 4:
        case 'EXECUTION_REPORT_STATUS_NEW':
            return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW;
        case 5:
        case 'EXECUTION_REPORT_STATUS_PARTIALLYFILL':
            return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OrderExecutionReportStatus.UNRECOGNIZED;
    }
}
exports.orderExecutionReportStatusFromJSON = orderExecutionReportStatusFromJSON;
function orderExecutionReportStatusToJSON(object) {
    switch (object) {
        case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_UNSPECIFIED:
            return 'EXECUTION_REPORT_STATUS_UNSPECIFIED';
        case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL:
            return 'EXECUTION_REPORT_STATUS_FILL';
        case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED:
            return 'EXECUTION_REPORT_STATUS_REJECTED';
        case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_CANCELLED:
            return 'EXECUTION_REPORT_STATUS_CANCELLED';
        case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW:
            return 'EXECUTION_REPORT_STATUS_NEW';
        case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL:
            return 'EXECUTION_REPORT_STATUS_PARTIALLYFILL';
        default:
            return 'UNKNOWN';
    }
}
exports.orderExecutionReportStatusToJSON = orderExecutionReportStatusToJSON;
function createBaseTradesStreamRequest() {
    return {};
}
exports.TradesStreamRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradesStreamRequest();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseTradesStreamRequest();
        return message;
    },
};
function createBaseTradesStreamResponse() {
    return { orderTrades: undefined, ping: undefined };
}
exports.TradesStreamResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderTrades !== undefined) {
            exports.OrderTrades.encode(message.orderTrades, writer.uint32(10).fork()).ldelim();
        }
        if (message.ping !== undefined) {
            common_1.Ping.encode(message.ping, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradesStreamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderTrades = exports.OrderTrades.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ping = common_1.Ping.decode(reader, reader.uint32());
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
            orderTrades: isSet(object.orderTrades) ? exports.OrderTrades.fromJSON(object.orderTrades) : undefined,
            ping: isSet(object.ping) ? common_1.Ping.fromJSON(object.ping) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderTrades !== undefined &&
            (obj.orderTrades = message.orderTrades ? exports.OrderTrades.toJSON(message.orderTrades) : undefined);
        message.ping !== undefined && (obj.ping = message.ping ? common_1.Ping.toJSON(message.ping) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTradesStreamResponse();
        message.orderTrades =
            object.orderTrades !== undefined && object.orderTrades !== null
                ? exports.OrderTrades.fromPartial(object.orderTrades)
                : undefined;
        message.ping = object.ping !== undefined && object.ping !== null ? common_1.Ping.fromPartial(object.ping) : undefined;
        return message;
    },
};
function createBaseOrderTrades() {
    return { orderId: '', createdAt: undefined, direction: 0, figi: '', trades: [], accountId: '' };
}
exports.OrderTrades = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== '') {
            writer.uint32(10).string(message.orderId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.direction !== 0) {
            writer.uint32(24).int32(message.direction);
        }
        if (message.figi !== '') {
            writer.uint32(34).string(message.figi);
        }
        for (const v of message.trades) {
            exports.OrderTrade.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.accountId !== '') {
            writer.uint32(50).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderTrades();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.direction = reader.int32();
                    break;
                case 4:
                    message.figi = reader.string();
                    break;
                case 5:
                    message.trades.push(exports.OrderTrade.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.accountId = reader.string();
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
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
            figi: isSet(object.figi) ? String(object.figi) : '',
            trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map((e) => exports.OrderTrade.fromJSON(e)) : [],
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
        message.figi !== undefined && (obj.figi = message.figi);
        if (message.trades) {
            obj.trades = message.trades.map(e => (e ? exports.OrderTrade.toJSON(e) : undefined));
        }
        else {
            obj.trades = [];
        }
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseOrderTrades();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : '';
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.direction = (_c = object.direction) !== null && _c !== void 0 ? _c : 0;
        message.figi = (_d = object.figi) !== null && _d !== void 0 ? _d : '';
        message.trades = ((_e = object.trades) === null || _e === void 0 ? void 0 : _e.map(e => exports.OrderTrade.fromPartial(e))) || [];
        message.accountId = (_f = object.accountId) !== null && _f !== void 0 ? _f : '';
        return message;
    },
};
function createBaseOrderTrade() {
    return { dateTime: undefined, price: undefined, quantity: 0 };
}
exports.OrderTrade = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dateTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.dateTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.price !== undefined) {
            common_1.Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(24).int64(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dateTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.price = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
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
            dateTime: isSet(object.dateTime) ? fromJsonTimestamp(object.dateTime) : undefined,
            price: isSet(object.price) ? common_1.Quotation.fromJSON(object.price) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.dateTime !== undefined && (obj.dateTime = message.dateTime.toISOString());
        message.price !== undefined && (obj.price = message.price ? common_1.Quotation.toJSON(message.price) : undefined);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderTrade();
        message.dateTime = (_a = object.dateTime) !== null && _a !== void 0 ? _a : undefined;
        message.price =
            object.price !== undefined && object.price !== null ? common_1.Quotation.fromPartial(object.price) : undefined;
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePostOrderRequest() {
    return { figi: '', quantity: 0, price: undefined, direction: 0, accountId: '', orderType: 0, orderId: '' };
}
exports.PostOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int64(message.quantity);
        }
        if (message.price !== undefined) {
            common_1.Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        if (message.accountId !== '') {
            writer.uint32(42).string(message.accountId);
        }
        if (message.orderType !== 0) {
            writer.uint32(48).int32(message.orderType);
        }
        if (message.orderId !== '') {
            writer.uint32(58).string(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePostOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 3:
                    message.price = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                case 5:
                    message.accountId = reader.string();
                    break;
                case 6:
                    message.orderType = reader.int32();
                    break;
                case 7:
                    message.orderId = reader.string();
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
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            price: isSet(object.price) ? common_1.Quotation.fromJSON(object.price) : undefined,
            direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.price !== undefined && (obj.price = message.price ? common_1.Quotation.toJSON(message.price) : undefined);
        message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePostOrderRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : 0;
        message.price =
            object.price !== undefined && object.price !== null ? common_1.Quotation.fromPartial(object.price) : undefined;
        message.direction = (_c = object.direction) !== null && _c !== void 0 ? _c : 0;
        message.accountId = (_d = object.accountId) !== null && _d !== void 0 ? _d : '';
        message.orderType = (_e = object.orderType) !== null && _e !== void 0 ? _e : 0;
        message.orderId = (_f = object.orderId) !== null && _f !== void 0 ? _f : '';
        return message;
    },
};
function createBasePostOrderResponse() {
    return {
        orderId: '',
        executionReportStatus: 0,
        lotsRequested: 0,
        lotsExecuted: 0,
        initialOrderPrice: undefined,
        executedOrderPrice: undefined,
        totalOrderAmount: undefined,
        initialCommission: undefined,
        executedCommission: undefined,
        aciValue: undefined,
        figi: '',
        direction: 0,
        initialSecurityPrice: undefined,
        orderType: 0,
        message: '',
        initialOrderPricePt: undefined,
    };
}
exports.PostOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== '') {
            writer.uint32(10).string(message.orderId);
        }
        if (message.executionReportStatus !== 0) {
            writer.uint32(16).int32(message.executionReportStatus);
        }
        if (message.lotsRequested !== 0) {
            writer.uint32(24).int64(message.lotsRequested);
        }
        if (message.lotsExecuted !== 0) {
            writer.uint32(32).int64(message.lotsExecuted);
        }
        if (message.initialOrderPrice !== undefined) {
            common_1.MoneyValue.encode(message.initialOrderPrice, writer.uint32(42).fork()).ldelim();
        }
        if (message.executedOrderPrice !== undefined) {
            common_1.MoneyValue.encode(message.executedOrderPrice, writer.uint32(50).fork()).ldelim();
        }
        if (message.totalOrderAmount !== undefined) {
            common_1.MoneyValue.encode(message.totalOrderAmount, writer.uint32(58).fork()).ldelim();
        }
        if (message.initialCommission !== undefined) {
            common_1.MoneyValue.encode(message.initialCommission, writer.uint32(66).fork()).ldelim();
        }
        if (message.executedCommission !== undefined) {
            common_1.MoneyValue.encode(message.executedCommission, writer.uint32(74).fork()).ldelim();
        }
        if (message.aciValue !== undefined) {
            common_1.MoneyValue.encode(message.aciValue, writer.uint32(82).fork()).ldelim();
        }
        if (message.figi !== '') {
            writer.uint32(90).string(message.figi);
        }
        if (message.direction !== 0) {
            writer.uint32(96).int32(message.direction);
        }
        if (message.initialSecurityPrice !== undefined) {
            common_1.MoneyValue.encode(message.initialSecurityPrice, writer.uint32(106).fork()).ldelim();
        }
        if (message.orderType !== 0) {
            writer.uint32(112).int32(message.orderType);
        }
        if (message.message !== '') {
            writer.uint32(122).string(message.message);
        }
        if (message.initialOrderPricePt !== undefined) {
            common_1.Quotation.encode(message.initialOrderPricePt, writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePostOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.executionReportStatus = reader.int32();
                    break;
                case 3:
                    message.lotsRequested = longToNumber(reader.int64());
                    break;
                case 4:
                    message.lotsExecuted = longToNumber(reader.int64());
                    break;
                case 5:
                    message.initialOrderPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.executedOrderPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.totalOrderAmount = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.initialCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.executedCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.aciValue = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.figi = reader.string();
                    break;
                case 12:
                    message.direction = reader.int32();
                    break;
                case 13:
                    message.initialSecurityPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.orderType = reader.int32();
                    break;
                case 15:
                    message.message = reader.string();
                    break;
                case 16:
                    message.initialOrderPricePt = common_1.Quotation.decode(reader, reader.uint32());
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
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
            executionReportStatus: isSet(object.executionReportStatus)
                ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
                : 0,
            lotsRequested: isSet(object.lotsRequested) ? Number(object.lotsRequested) : 0,
            lotsExecuted: isSet(object.lotsExecuted) ? Number(object.lotsExecuted) : 0,
            initialOrderPrice: isSet(object.initialOrderPrice) ? common_1.MoneyValue.fromJSON(object.initialOrderPrice) : undefined,
            executedOrderPrice: isSet(object.executedOrderPrice) ? common_1.MoneyValue.fromJSON(object.executedOrderPrice) : undefined,
            totalOrderAmount: isSet(object.totalOrderAmount) ? common_1.MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
            initialCommission: isSet(object.initialCommission) ? common_1.MoneyValue.fromJSON(object.initialCommission) : undefined,
            executedCommission: isSet(object.executedCommission) ? common_1.MoneyValue.fromJSON(object.executedCommission) : undefined,
            aciValue: isSet(object.aciValue) ? common_1.MoneyValue.fromJSON(object.aciValue) : undefined,
            figi: isSet(object.figi) ? String(object.figi) : '',
            direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
            initialSecurityPrice: isSet(object.initialSecurityPrice)
                ? common_1.MoneyValue.fromJSON(object.initialSecurityPrice)
                : undefined,
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            message: isSet(object.message) ? String(object.message) : '',
            initialOrderPricePt: isSet(object.initialOrderPricePt)
                ? common_1.Quotation.fromJSON(object.initialOrderPricePt)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.executionReportStatus !== undefined &&
            (obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus));
        message.lotsRequested !== undefined && (obj.lotsRequested = Math.round(message.lotsRequested));
        message.lotsExecuted !== undefined && (obj.lotsExecuted = Math.round(message.lotsExecuted));
        message.initialOrderPrice !== undefined &&
            (obj.initialOrderPrice = message.initialOrderPrice ? common_1.MoneyValue.toJSON(message.initialOrderPrice) : undefined);
        message.executedOrderPrice !== undefined &&
            (obj.executedOrderPrice = message.executedOrderPrice ? common_1.MoneyValue.toJSON(message.executedOrderPrice) : undefined);
        message.totalOrderAmount !== undefined &&
            (obj.totalOrderAmount = message.totalOrderAmount ? common_1.MoneyValue.toJSON(message.totalOrderAmount) : undefined);
        message.initialCommission !== undefined &&
            (obj.initialCommission = message.initialCommission ? common_1.MoneyValue.toJSON(message.initialCommission) : undefined);
        message.executedCommission !== undefined &&
            (obj.executedCommission = message.executedCommission ? common_1.MoneyValue.toJSON(message.executedCommission) : undefined);
        message.aciValue !== undefined &&
            (obj.aciValue = message.aciValue ? common_1.MoneyValue.toJSON(message.aciValue) : undefined);
        message.figi !== undefined && (obj.figi = message.figi);
        message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
        message.initialSecurityPrice !== undefined &&
            (obj.initialSecurityPrice = message.initialSecurityPrice
                ? common_1.MoneyValue.toJSON(message.initialSecurityPrice)
                : undefined);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.message !== undefined && (obj.message = message.message);
        message.initialOrderPricePt !== undefined &&
            (obj.initialOrderPricePt = message.initialOrderPricePt
                ? common_1.Quotation.toJSON(message.initialOrderPricePt)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBasePostOrderResponse();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : '';
        message.executionReportStatus = (_b = object.executionReportStatus) !== null && _b !== void 0 ? _b : 0;
        message.lotsRequested = (_c = object.lotsRequested) !== null && _c !== void 0 ? _c : 0;
        message.lotsExecuted = (_d = object.lotsExecuted) !== null && _d !== void 0 ? _d : 0;
        message.initialOrderPrice =
            object.initialOrderPrice !== undefined && object.initialOrderPrice !== null
                ? common_1.MoneyValue.fromPartial(object.initialOrderPrice)
                : undefined;
        message.executedOrderPrice =
            object.executedOrderPrice !== undefined && object.executedOrderPrice !== null
                ? common_1.MoneyValue.fromPartial(object.executedOrderPrice)
                : undefined;
        message.totalOrderAmount =
            object.totalOrderAmount !== undefined && object.totalOrderAmount !== null
                ? common_1.MoneyValue.fromPartial(object.totalOrderAmount)
                : undefined;
        message.initialCommission =
            object.initialCommission !== undefined && object.initialCommission !== null
                ? common_1.MoneyValue.fromPartial(object.initialCommission)
                : undefined;
        message.executedCommission =
            object.executedCommission !== undefined && object.executedCommission !== null
                ? common_1.MoneyValue.fromPartial(object.executedCommission)
                : undefined;
        message.aciValue =
            object.aciValue !== undefined && object.aciValue !== null ? common_1.MoneyValue.fromPartial(object.aciValue) : undefined;
        message.figi = (_e = object.figi) !== null && _e !== void 0 ? _e : '';
        message.direction = (_f = object.direction) !== null && _f !== void 0 ? _f : 0;
        message.initialSecurityPrice =
            object.initialSecurityPrice !== undefined && object.initialSecurityPrice !== null
                ? common_1.MoneyValue.fromPartial(object.initialSecurityPrice)
                : undefined;
        message.orderType = (_g = object.orderType) !== null && _g !== void 0 ? _g : 0;
        message.message = (_h = object.message) !== null && _h !== void 0 ? _h : '';
        message.initialOrderPricePt =
            object.initialOrderPricePt !== undefined && object.initialOrderPricePt !== null
                ? common_1.Quotation.fromPartial(object.initialOrderPricePt)
                : undefined;
        return message;
    },
};
function createBaseCancelOrderRequest() {
    return { accountId: '', orderId: '' };
}
exports.CancelOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        if (message.orderId !== '') {
            writer.uint32(18).string(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.orderId = reader.string();
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
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCancelOrderRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        message.orderId = (_b = object.orderId) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBaseCancelOrderResponse() {
    return { time: undefined };
}
exports.CancelOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCancelOrderResponse();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseGetOrderStateRequest() {
    return { accountId: '', orderId: '' };
}
exports.GetOrderStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        if (message.orderId !== '') {
            writer.uint32(18).string(message.orderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrderStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.orderId = reader.string();
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
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.orderId !== undefined && (obj.orderId = message.orderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetOrderStateRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        message.orderId = (_b = object.orderId) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBaseGetOrdersRequest() {
    return { accountId: '' };
}
exports.GetOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
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
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetOrdersRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetOrdersResponse() {
    return { orders: [] };
}
exports.GetOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            exports.OrderState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orders.push(exports.OrderState.decode(reader, reader.uint32()));
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
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders) ? object.orders.map((e) => exports.OrderState.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => (e ? exports.OrderState.toJSON(e) : undefined));
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetOrdersResponse();
        message.orders = ((_a = object.orders) === null || _a === void 0 ? void 0 : _a.map(e => exports.OrderState.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOrderState() {
    return {
        orderId: '',
        executionReportStatus: 0,
        lotsRequested: 0,
        lotsExecuted: 0,
        initialOrderPrice: undefined,
        executedOrderPrice: undefined,
        totalOrderAmount: undefined,
        averagePositionPrice: undefined,
        initialCommission: undefined,
        executedCommission: undefined,
        figi: '',
        direction: 0,
        initialSecurityPrice: undefined,
        stages: [],
        serviceCommission: undefined,
        currency: '',
        orderType: 0,
        orderDate: undefined,
    };
}
exports.OrderState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderId !== '') {
            writer.uint32(10).string(message.orderId);
        }
        if (message.executionReportStatus !== 0) {
            writer.uint32(16).int32(message.executionReportStatus);
        }
        if (message.lotsRequested !== 0) {
            writer.uint32(24).int64(message.lotsRequested);
        }
        if (message.lotsExecuted !== 0) {
            writer.uint32(32).int64(message.lotsExecuted);
        }
        if (message.initialOrderPrice !== undefined) {
            common_1.MoneyValue.encode(message.initialOrderPrice, writer.uint32(42).fork()).ldelim();
        }
        if (message.executedOrderPrice !== undefined) {
            common_1.MoneyValue.encode(message.executedOrderPrice, writer.uint32(50).fork()).ldelim();
        }
        if (message.totalOrderAmount !== undefined) {
            common_1.MoneyValue.encode(message.totalOrderAmount, writer.uint32(58).fork()).ldelim();
        }
        if (message.averagePositionPrice !== undefined) {
            common_1.MoneyValue.encode(message.averagePositionPrice, writer.uint32(66).fork()).ldelim();
        }
        if (message.initialCommission !== undefined) {
            common_1.MoneyValue.encode(message.initialCommission, writer.uint32(74).fork()).ldelim();
        }
        if (message.executedCommission !== undefined) {
            common_1.MoneyValue.encode(message.executedCommission, writer.uint32(82).fork()).ldelim();
        }
        if (message.figi !== '') {
            writer.uint32(90).string(message.figi);
        }
        if (message.direction !== 0) {
            writer.uint32(96).int32(message.direction);
        }
        if (message.initialSecurityPrice !== undefined) {
            common_1.MoneyValue.encode(message.initialSecurityPrice, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.stages) {
            exports.OrderStage.encode(v, writer.uint32(114).fork()).ldelim();
        }
        if (message.serviceCommission !== undefined) {
            common_1.MoneyValue.encode(message.serviceCommission, writer.uint32(122).fork()).ldelim();
        }
        if (message.currency !== '') {
            writer.uint32(130).string(message.currency);
        }
        if (message.orderType !== 0) {
            writer.uint32(136).int32(message.orderType);
        }
        if (message.orderDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.orderDate), writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.executionReportStatus = reader.int32();
                    break;
                case 3:
                    message.lotsRequested = longToNumber(reader.int64());
                    break;
                case 4:
                    message.lotsExecuted = longToNumber(reader.int64());
                    break;
                case 5:
                    message.initialOrderPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.executedOrderPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.totalOrderAmount = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.averagePositionPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.initialCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.executedCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.figi = reader.string();
                    break;
                case 12:
                    message.direction = reader.int32();
                    break;
                case 13:
                    message.initialSecurityPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.stages.push(exports.OrderStage.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.serviceCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.currency = reader.string();
                    break;
                case 17:
                    message.orderType = reader.int32();
                    break;
                case 18:
                    message.orderDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
            executionReportStatus: isSet(object.executionReportStatus)
                ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
                : 0,
            lotsRequested: isSet(object.lotsRequested) ? Number(object.lotsRequested) : 0,
            lotsExecuted: isSet(object.lotsExecuted) ? Number(object.lotsExecuted) : 0,
            initialOrderPrice: isSet(object.initialOrderPrice) ? common_1.MoneyValue.fromJSON(object.initialOrderPrice) : undefined,
            executedOrderPrice: isSet(object.executedOrderPrice) ? common_1.MoneyValue.fromJSON(object.executedOrderPrice) : undefined,
            totalOrderAmount: isSet(object.totalOrderAmount) ? common_1.MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
            averagePositionPrice: isSet(object.averagePositionPrice)
                ? common_1.MoneyValue.fromJSON(object.averagePositionPrice)
                : undefined,
            initialCommission: isSet(object.initialCommission) ? common_1.MoneyValue.fromJSON(object.initialCommission) : undefined,
            executedCommission: isSet(object.executedCommission) ? common_1.MoneyValue.fromJSON(object.executedCommission) : undefined,
            figi: isSet(object.figi) ? String(object.figi) : '',
            direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
            initialSecurityPrice: isSet(object.initialSecurityPrice)
                ? common_1.MoneyValue.fromJSON(object.initialSecurityPrice)
                : undefined,
            stages: Array.isArray(object === null || object === void 0 ? void 0 : object.stages) ? object.stages.map((e) => exports.OrderStage.fromJSON(e)) : [],
            serviceCommission: isSet(object.serviceCommission) ? common_1.MoneyValue.fromJSON(object.serviceCommission) : undefined,
            currency: isSet(object.currency) ? String(object.currency) : '',
            orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
            orderDate: isSet(object.orderDate) ? fromJsonTimestamp(object.orderDate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.executionReportStatus !== undefined &&
            (obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus));
        message.lotsRequested !== undefined && (obj.lotsRequested = Math.round(message.lotsRequested));
        message.lotsExecuted !== undefined && (obj.lotsExecuted = Math.round(message.lotsExecuted));
        message.initialOrderPrice !== undefined &&
            (obj.initialOrderPrice = message.initialOrderPrice ? common_1.MoneyValue.toJSON(message.initialOrderPrice) : undefined);
        message.executedOrderPrice !== undefined &&
            (obj.executedOrderPrice = message.executedOrderPrice ? common_1.MoneyValue.toJSON(message.executedOrderPrice) : undefined);
        message.totalOrderAmount !== undefined &&
            (obj.totalOrderAmount = message.totalOrderAmount ? common_1.MoneyValue.toJSON(message.totalOrderAmount) : undefined);
        message.averagePositionPrice !== undefined &&
            (obj.averagePositionPrice = message.averagePositionPrice
                ? common_1.MoneyValue.toJSON(message.averagePositionPrice)
                : undefined);
        message.initialCommission !== undefined &&
            (obj.initialCommission = message.initialCommission ? common_1.MoneyValue.toJSON(message.initialCommission) : undefined);
        message.executedCommission !== undefined &&
            (obj.executedCommission = message.executedCommission ? common_1.MoneyValue.toJSON(message.executedCommission) : undefined);
        message.figi !== undefined && (obj.figi = message.figi);
        message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
        message.initialSecurityPrice !== undefined &&
            (obj.initialSecurityPrice = message.initialSecurityPrice
                ? common_1.MoneyValue.toJSON(message.initialSecurityPrice)
                : undefined);
        if (message.stages) {
            obj.stages = message.stages.map(e => (e ? exports.OrderStage.toJSON(e) : undefined));
        }
        else {
            obj.stages = [];
        }
        message.serviceCommission !== undefined &&
            (obj.serviceCommission = message.serviceCommission ? common_1.MoneyValue.toJSON(message.serviceCommission) : undefined);
        message.currency !== undefined && (obj.currency = message.currency);
        message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
        message.orderDate !== undefined && (obj.orderDate = message.orderDate.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseOrderState();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : '';
        message.executionReportStatus = (_b = object.executionReportStatus) !== null && _b !== void 0 ? _b : 0;
        message.lotsRequested = (_c = object.lotsRequested) !== null && _c !== void 0 ? _c : 0;
        message.lotsExecuted = (_d = object.lotsExecuted) !== null && _d !== void 0 ? _d : 0;
        message.initialOrderPrice =
            object.initialOrderPrice !== undefined && object.initialOrderPrice !== null
                ? common_1.MoneyValue.fromPartial(object.initialOrderPrice)
                : undefined;
        message.executedOrderPrice =
            object.executedOrderPrice !== undefined && object.executedOrderPrice !== null
                ? common_1.MoneyValue.fromPartial(object.executedOrderPrice)
                : undefined;
        message.totalOrderAmount =
            object.totalOrderAmount !== undefined && object.totalOrderAmount !== null
                ? common_1.MoneyValue.fromPartial(object.totalOrderAmount)
                : undefined;
        message.averagePositionPrice =
            object.averagePositionPrice !== undefined && object.averagePositionPrice !== null
                ? common_1.MoneyValue.fromPartial(object.averagePositionPrice)
                : undefined;
        message.initialCommission =
            object.initialCommission !== undefined && object.initialCommission !== null
                ? common_1.MoneyValue.fromPartial(object.initialCommission)
                : undefined;
        message.executedCommission =
            object.executedCommission !== undefined && object.executedCommission !== null
                ? common_1.MoneyValue.fromPartial(object.executedCommission)
                : undefined;
        message.figi = (_e = object.figi) !== null && _e !== void 0 ? _e : '';
        message.direction = (_f = object.direction) !== null && _f !== void 0 ? _f : 0;
        message.initialSecurityPrice =
            object.initialSecurityPrice !== undefined && object.initialSecurityPrice !== null
                ? common_1.MoneyValue.fromPartial(object.initialSecurityPrice)
                : undefined;
        message.stages = ((_g = object.stages) === null || _g === void 0 ? void 0 : _g.map(e => exports.OrderStage.fromPartial(e))) || [];
        message.serviceCommission =
            object.serviceCommission !== undefined && object.serviceCommission !== null
                ? common_1.MoneyValue.fromPartial(object.serviceCommission)
                : undefined;
        message.currency = (_h = object.currency) !== null && _h !== void 0 ? _h : '';
        message.orderType = (_j = object.orderType) !== null && _j !== void 0 ? _j : 0;
        message.orderDate = (_k = object.orderDate) !== null && _k !== void 0 ? _k : undefined;
        return message;
    },
};
function createBaseOrderStage() {
    return { price: undefined, quantity: 0, tradeId: '' };
}
exports.OrderStage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.price !== undefined) {
            common_1.MoneyValue.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int64(message.quantity);
        }
        if (message.tradeId !== '') {
            writer.uint32(26).string(message.tradeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrderStage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 3:
                    message.tradeId = reader.string();
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
            price: isSet(object.price) ? common_1.MoneyValue.fromJSON(object.price) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price ? common_1.MoneyValue.toJSON(message.price) : undefined);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseOrderStage();
        message.price =
            object.price !== undefined && object.price !== null ? common_1.MoneyValue.fromPartial(object.price) : undefined;
        message.quantity = (_a = object.quantity) !== null && _a !== void 0 ? _a : 0;
        message.tradeId = (_b = object.tradeId) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
exports.OrdersStreamServiceDefinition = {
    name: 'OrdersStreamService',
    fullName: 'tinkoff.public.invest.api.contract.v1.OrdersStreamService',
    methods: {
        tradesStream: {
            name: 'TradesStream',
            requestType: exports.TradesStreamRequest,
            requestStream: false,
            responseType: exports.TradesStreamResponse,
            responseStream: true,
            options: {},
        },
    },
};
exports.OrdersServiceDefinition = {
    name: 'OrdersService',
    fullName: 'tinkoff.public.invest.api.contract.v1.OrdersService',
    methods: {
        postOrder: {
            name: 'PostOrder',
            requestType: exports.PostOrderRequest,
            requestStream: false,
            responseType: exports.PostOrderResponse,
            responseStream: false,
            options: {},
        },
        cancelOrder: {
            name: 'CancelOrder',
            requestType: exports.CancelOrderRequest,
            requestStream: false,
            responseType: exports.CancelOrderResponse,
            responseStream: false,
            options: {},
        },
        getOrderState: {
            name: 'GetOrderState',
            requestType: exports.GetOrderStateRequest,
            requestStream: false,
            responseType: exports.OrderState,
            responseStream: false,
            options: {},
        },
        getOrders: {
            name: 'GetOrders',
            requestType: exports.GetOrdersRequest,
            requestStream: false,
            responseType: exports.GetOrdersResponse,
            responseStream: false,
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
//# sourceMappingURL=orders.js.map