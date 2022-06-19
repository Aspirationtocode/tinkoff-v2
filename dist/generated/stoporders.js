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
exports.StopOrdersServiceDefinition = exports.StopOrder = exports.CancelStopOrderResponse = exports.CancelStopOrderRequest = exports.GetStopOrdersResponse = exports.GetStopOrdersRequest = exports.PostStopOrderResponse = exports.PostStopOrderRequest = exports.stopOrderTypeToJSON = exports.stopOrderTypeFromJSON = exports.StopOrderType = exports.stopOrderExpirationTypeToJSON = exports.stopOrderExpirationTypeFromJSON = exports.StopOrderExpirationType = exports.stopOrderDirectionToJSON = exports.stopOrderDirectionFromJSON = exports.StopOrderDirection = exports.protobufPackage = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
const common_1 = require("./common");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
var StopOrderDirection;
(function (StopOrderDirection) {
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_UNSPECIFIED"] = 0] = "STOP_ORDER_DIRECTION_UNSPECIFIED";
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_BUY"] = 1] = "STOP_ORDER_DIRECTION_BUY";
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_SELL"] = 2] = "STOP_ORDER_DIRECTION_SELL";
    StopOrderDirection[StopOrderDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StopOrderDirection = exports.StopOrderDirection || (exports.StopOrderDirection = {}));
function stopOrderDirectionFromJSON(object) {
    switch (object) {
        case 0:
        case 'STOP_ORDER_DIRECTION_UNSPECIFIED':
            return StopOrderDirection.STOP_ORDER_DIRECTION_UNSPECIFIED;
        case 1:
        case 'STOP_ORDER_DIRECTION_BUY':
            return StopOrderDirection.STOP_ORDER_DIRECTION_BUY;
        case 2:
        case 'STOP_ORDER_DIRECTION_SELL':
            return StopOrderDirection.STOP_ORDER_DIRECTION_SELL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StopOrderDirection.UNRECOGNIZED;
    }
}
exports.stopOrderDirectionFromJSON = stopOrderDirectionFromJSON;
function stopOrderDirectionToJSON(object) {
    switch (object) {
        case StopOrderDirection.STOP_ORDER_DIRECTION_UNSPECIFIED:
            return 'STOP_ORDER_DIRECTION_UNSPECIFIED';
        case StopOrderDirection.STOP_ORDER_DIRECTION_BUY:
            return 'STOP_ORDER_DIRECTION_BUY';
        case StopOrderDirection.STOP_ORDER_DIRECTION_SELL:
            return 'STOP_ORDER_DIRECTION_SELL';
        default:
            return 'UNKNOWN';
    }
}
exports.stopOrderDirectionToJSON = stopOrderDirectionToJSON;
var StopOrderExpirationType;
(function (StopOrderExpirationType) {
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED";
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL"] = 1] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL";
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE"] = 2] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE";
    StopOrderExpirationType[StopOrderExpirationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StopOrderExpirationType = exports.StopOrderExpirationType || (exports.StopOrderExpirationType = {}));
function stopOrderExpirationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED':
            return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED;
        case 1:
        case 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL':
            return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL;
        case 2:
        case 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE':
            return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StopOrderExpirationType.UNRECOGNIZED;
    }
}
exports.stopOrderExpirationTypeFromJSON = stopOrderExpirationTypeFromJSON;
function stopOrderExpirationTypeToJSON(object) {
    switch (object) {
        case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED:
            return 'STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED';
        case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL:
            return 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL';
        case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE:
            return 'STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE';
        default:
            return 'UNKNOWN';
    }
}
exports.stopOrderExpirationTypeToJSON = stopOrderExpirationTypeToJSON;
var StopOrderType;
(function (StopOrderType) {
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_TYPE_UNSPECIFIED";
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_TAKE_PROFIT"] = 1] = "STOP_ORDER_TYPE_TAKE_PROFIT";
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LOSS"] = 2] = "STOP_ORDER_TYPE_STOP_LOSS";
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LIMIT"] = 3] = "STOP_ORDER_TYPE_STOP_LIMIT";
    StopOrderType[StopOrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StopOrderType = exports.StopOrderType || (exports.StopOrderType = {}));
function stopOrderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'STOP_ORDER_TYPE_UNSPECIFIED':
            return StopOrderType.STOP_ORDER_TYPE_UNSPECIFIED;
        case 1:
        case 'STOP_ORDER_TYPE_TAKE_PROFIT':
            return StopOrderType.STOP_ORDER_TYPE_TAKE_PROFIT;
        case 2:
        case 'STOP_ORDER_TYPE_STOP_LOSS':
            return StopOrderType.STOP_ORDER_TYPE_STOP_LOSS;
        case 3:
        case 'STOP_ORDER_TYPE_STOP_LIMIT':
            return StopOrderType.STOP_ORDER_TYPE_STOP_LIMIT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StopOrderType.UNRECOGNIZED;
    }
}
exports.stopOrderTypeFromJSON = stopOrderTypeFromJSON;
function stopOrderTypeToJSON(object) {
    switch (object) {
        case StopOrderType.STOP_ORDER_TYPE_UNSPECIFIED:
            return 'STOP_ORDER_TYPE_UNSPECIFIED';
        case StopOrderType.STOP_ORDER_TYPE_TAKE_PROFIT:
            return 'STOP_ORDER_TYPE_TAKE_PROFIT';
        case StopOrderType.STOP_ORDER_TYPE_STOP_LOSS:
            return 'STOP_ORDER_TYPE_STOP_LOSS';
        case StopOrderType.STOP_ORDER_TYPE_STOP_LIMIT:
            return 'STOP_ORDER_TYPE_STOP_LIMIT';
        default:
            return 'UNKNOWN';
    }
}
exports.stopOrderTypeToJSON = stopOrderTypeToJSON;
function createBasePostStopOrderRequest() {
    return {
        figi: '',
        quantity: 0,
        price: undefined,
        stopPrice: undefined,
        direction: 0,
        accountId: '',
        expirationType: 0,
        stopOrderType: 0,
        expireDate: undefined,
    };
}
exports.PostStopOrderRequest = {
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
        if (message.stopPrice !== undefined) {
            common_1.Quotation.encode(message.stopPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.direction !== 0) {
            writer.uint32(40).int32(message.direction);
        }
        if (message.accountId !== '') {
            writer.uint32(50).string(message.accountId);
        }
        if (message.expirationType !== 0) {
            writer.uint32(56).int32(message.expirationType);
        }
        if (message.stopOrderType !== 0) {
            writer.uint32(64).int32(message.stopOrderType);
        }
        if (message.expireDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expireDate), writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePostStopOrderRequest();
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
                    message.stopPrice = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.direction = reader.int32();
                    break;
                case 6:
                    message.accountId = reader.string();
                    break;
                case 7:
                    message.expirationType = reader.int32();
                    break;
                case 8:
                    message.stopOrderType = reader.int32();
                    break;
                case 9:
                    message.expireDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            stopPrice: isSet(object.stopPrice) ? common_1.Quotation.fromJSON(object.stopPrice) : undefined,
            direction: isSet(object.direction) ? stopOrderDirectionFromJSON(object.direction) : 0,
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
            expirationType: isSet(object.expirationType) ? stopOrderExpirationTypeFromJSON(object.expirationType) : 0,
            stopOrderType: isSet(object.stopOrderType) ? stopOrderTypeFromJSON(object.stopOrderType) : 0,
            expireDate: isSet(object.expireDate) ? fromJsonTimestamp(object.expireDate) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.price !== undefined && (obj.price = message.price ? common_1.Quotation.toJSON(message.price) : undefined);
        message.stopPrice !== undefined &&
            (obj.stopPrice = message.stopPrice ? common_1.Quotation.toJSON(message.stopPrice) : undefined);
        message.direction !== undefined && (obj.direction = stopOrderDirectionToJSON(message.direction));
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.expirationType !== undefined &&
            (obj.expirationType = stopOrderExpirationTypeToJSON(message.expirationType));
        message.stopOrderType !== undefined && (obj.stopOrderType = stopOrderTypeToJSON(message.stopOrderType));
        message.expireDate !== undefined && (obj.expireDate = message.expireDate.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBasePostStopOrderRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : 0;
        message.price =
            object.price !== undefined && object.price !== null ? common_1.Quotation.fromPartial(object.price) : undefined;
        message.stopPrice =
            object.stopPrice !== undefined && object.stopPrice !== null ? common_1.Quotation.fromPartial(object.stopPrice) : undefined;
        message.direction = (_c = object.direction) !== null && _c !== void 0 ? _c : 0;
        message.accountId = (_d = object.accountId) !== null && _d !== void 0 ? _d : '';
        message.expirationType = (_e = object.expirationType) !== null && _e !== void 0 ? _e : 0;
        message.stopOrderType = (_f = object.stopOrderType) !== null && _f !== void 0 ? _f : 0;
        message.expireDate = (_g = object.expireDate) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBasePostStopOrderResponse() {
    return { stopOrderId: '' };
}
exports.PostStopOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stopOrderId !== '') {
            writer.uint32(10).string(message.stopOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePostStopOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stopOrderId = reader.string();
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
            stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.stopOrderId !== undefined && (obj.stopOrderId = message.stopOrderId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePostStopOrderResponse();
        message.stopOrderId = (_a = object.stopOrderId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetStopOrdersRequest() {
    return { accountId: '' };
}
exports.GetStopOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetStopOrdersRequest();
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
        const message = createBaseGetStopOrdersRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetStopOrdersResponse() {
    return { stopOrders: [] };
}
exports.GetStopOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.stopOrders) {
            exports.StopOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetStopOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stopOrders.push(exports.StopOrder.decode(reader, reader.uint32()));
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
            stopOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.stopOrders) ? object.stopOrders.map((e) => exports.StopOrder.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.stopOrders) {
            obj.stopOrders = message.stopOrders.map(e => (e ? exports.StopOrder.toJSON(e) : undefined));
        }
        else {
            obj.stopOrders = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetStopOrdersResponse();
        message.stopOrders = ((_a = object.stopOrders) === null || _a === void 0 ? void 0 : _a.map(e => exports.StopOrder.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCancelStopOrderRequest() {
    return { accountId: '', stopOrderId: '' };
}
exports.CancelStopOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        if (message.stopOrderId !== '') {
            writer.uint32(18).string(message.stopOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelStopOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.stopOrderId = reader.string();
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
            stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.stopOrderId !== undefined && (obj.stopOrderId = message.stopOrderId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCancelStopOrderRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        message.stopOrderId = (_b = object.stopOrderId) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBaseCancelStopOrderResponse() {
    return { time: undefined };
}
exports.CancelStopOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelStopOrderResponse();
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
        const message = createBaseCancelStopOrderResponse();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseStopOrder() {
    return {
        stopOrderId: '',
        lotsRequested: 0,
        figi: '',
        direction: 0,
        currency: '',
        orderType: 0,
        createDate: undefined,
        activationDateTime: undefined,
        expirationTime: undefined,
        price: undefined,
        stopPrice: undefined,
    };
}
exports.StopOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stopOrderId !== '') {
            writer.uint32(10).string(message.stopOrderId);
        }
        if (message.lotsRequested !== 0) {
            writer.uint32(16).int64(message.lotsRequested);
        }
        if (message.figi !== '') {
            writer.uint32(26).string(message.figi);
        }
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        if (message.currency !== '') {
            writer.uint32(42).string(message.currency);
        }
        if (message.orderType !== 0) {
            writer.uint32(48).int32(message.orderType);
        }
        if (message.createDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.activationDateTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.activationDateTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.expirationTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.price !== undefined) {
            common_1.MoneyValue.encode(message.price, writer.uint32(82).fork()).ldelim();
        }
        if (message.stopPrice !== undefined) {
            common_1.MoneyValue.encode(message.stopPrice, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stopOrderId = reader.string();
                    break;
                case 2:
                    message.lotsRequested = longToNumber(reader.int64());
                    break;
                case 3:
                    message.figi = reader.string();
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                case 5:
                    message.currency = reader.string();
                    break;
                case 6:
                    message.orderType = reader.int32();
                    break;
                case 7:
                    message.createDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.activationDateTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.expirationTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.price = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.stopPrice = common_1.MoneyValue.decode(reader, reader.uint32());
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
            stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : '',
            lotsRequested: isSet(object.lotsRequested) ? Number(object.lotsRequested) : 0,
            figi: isSet(object.figi) ? String(object.figi) : '',
            direction: isSet(object.direction) ? stopOrderDirectionFromJSON(object.direction) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            orderType: isSet(object.orderType) ? stopOrderTypeFromJSON(object.orderType) : 0,
            createDate: isSet(object.createDate) ? fromJsonTimestamp(object.createDate) : undefined,
            activationDateTime: isSet(object.activationDateTime) ? fromJsonTimestamp(object.activationDateTime) : undefined,
            expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
            price: isSet(object.price) ? common_1.MoneyValue.fromJSON(object.price) : undefined,
            stopPrice: isSet(object.stopPrice) ? common_1.MoneyValue.fromJSON(object.stopPrice) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.stopOrderId !== undefined && (obj.stopOrderId = message.stopOrderId);
        message.lotsRequested !== undefined && (obj.lotsRequested = Math.round(message.lotsRequested));
        message.figi !== undefined && (obj.figi = message.figi);
        message.direction !== undefined && (obj.direction = stopOrderDirectionToJSON(message.direction));
        message.currency !== undefined && (obj.currency = message.currency);
        message.orderType !== undefined && (obj.orderType = stopOrderTypeToJSON(message.orderType));
        message.createDate !== undefined && (obj.createDate = message.createDate.toISOString());
        message.activationDateTime !== undefined && (obj.activationDateTime = message.activationDateTime.toISOString());
        message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
        message.price !== undefined && (obj.price = message.price ? common_1.MoneyValue.toJSON(message.price) : undefined);
        message.stopPrice !== undefined &&
            (obj.stopPrice = message.stopPrice ? common_1.MoneyValue.toJSON(message.stopPrice) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseStopOrder();
        message.stopOrderId = (_a = object.stopOrderId) !== null && _a !== void 0 ? _a : '';
        message.lotsRequested = (_b = object.lotsRequested) !== null && _b !== void 0 ? _b : 0;
        message.figi = (_c = object.figi) !== null && _c !== void 0 ? _c : '';
        message.direction = (_d = object.direction) !== null && _d !== void 0 ? _d : 0;
        message.currency = (_e = object.currency) !== null && _e !== void 0 ? _e : '';
        message.orderType = (_f = object.orderType) !== null && _f !== void 0 ? _f : 0;
        message.createDate = (_g = object.createDate) !== null && _g !== void 0 ? _g : undefined;
        message.activationDateTime = (_h = object.activationDateTime) !== null && _h !== void 0 ? _h : undefined;
        message.expirationTime = (_j = object.expirationTime) !== null && _j !== void 0 ? _j : undefined;
        message.price =
            object.price !== undefined && object.price !== null ? common_1.MoneyValue.fromPartial(object.price) : undefined;
        message.stopPrice =
            object.stopPrice !== undefined && object.stopPrice !== null
                ? common_1.MoneyValue.fromPartial(object.stopPrice)
                : undefined;
        return message;
    },
};
exports.StopOrdersServiceDefinition = {
    name: 'StopOrdersService',
    fullName: 'tinkoff.public.invest.api.contract.v1.StopOrdersService',
    methods: {
        postStopOrder: {
            name: 'PostStopOrder',
            requestType: exports.PostStopOrderRequest,
            requestStream: false,
            responseType: exports.PostStopOrderResponse,
            responseStream: false,
            options: {},
        },
        getStopOrders: {
            name: 'GetStopOrders',
            requestType: exports.GetStopOrdersRequest,
            requestStream: false,
            responseType: exports.GetStopOrdersResponse,
            responseStream: false,
            options: {},
        },
        cancelStopOrder: {
            name: 'CancelStopOrder',
            requestType: exports.CancelStopOrderRequest,
            requestStream: false,
            responseType: exports.CancelStopOrderResponse,
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
//# sourceMappingURL=stoporders.js.map