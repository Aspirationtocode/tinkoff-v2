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
exports.Ping = exports.Quotation = exports.MoneyValue = exports.securityTradingStatusToJSON = exports.securityTradingStatusFromJSON = exports.SecurityTradingStatus = exports.protobufPackage = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
var SecurityTradingStatus;
(function (SecurityTradingStatus) {
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_UNSPECIFIED"] = 0] = "SECURITY_TRADING_STATUS_UNSPECIFIED";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING"] = 1] = "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_PERIOD"] = 2] = "SECURITY_TRADING_STATUS_OPENING_PERIOD";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_PERIOD"] = 3] = "SECURITY_TRADING_STATUS_CLOSING_PERIOD";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_BREAK_IN_TRADING"] = 4] = "SECURITY_TRADING_STATUS_BREAK_IN_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NORMAL_TRADING"] = 5] = "SECURITY_TRADING_STATUS_NORMAL_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_AUCTION"] = 6] = "SECURITY_TRADING_STATUS_CLOSING_AUCTION";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DARK_POOL_AUCTION"] = 7] = "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DISCRETE_AUCTION"] = 8] = "SECURITY_TRADING_STATUS_DISCRETE_AUCTION";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD"] = 9] = "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE"] = 10] = "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_ASSIGNED"] = 11] = "SECURITY_TRADING_STATUS_SESSION_ASSIGNED";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_CLOSE"] = 12] = "SECURITY_TRADING_STATUS_SESSION_CLOSE";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_OPEN"] = 13] = "SECURITY_TRADING_STATUS_SESSION_OPEN";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING"] = 14] = "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING"] = 15] = "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING"] = 16] = "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityTradingStatus = exports.SecurityTradingStatus || (exports.SecurityTradingStatus = {}));
function securityTradingStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'SECURITY_TRADING_STATUS_UNSPECIFIED':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_UNSPECIFIED;
        case 1:
        case 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING;
        case 2:
        case 'SECURITY_TRADING_STATUS_OPENING_PERIOD':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_PERIOD;
        case 3:
        case 'SECURITY_TRADING_STATUS_CLOSING_PERIOD':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_PERIOD;
        case 4:
        case 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_BREAK_IN_TRADING;
        case 5:
        case 'SECURITY_TRADING_STATUS_NORMAL_TRADING':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING;
        case 6:
        case 'SECURITY_TRADING_STATUS_CLOSING_AUCTION':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_AUCTION;
        case 7:
        case 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DARK_POOL_AUCTION;
        case 8:
        case 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DISCRETE_AUCTION;
        case 9:
        case 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD;
        case 10:
        case 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE;
        case 11:
        case 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_ASSIGNED;
        case 12:
        case 'SECURITY_TRADING_STATUS_SESSION_CLOSE':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_CLOSE;
        case 13:
        case 'SECURITY_TRADING_STATUS_SESSION_OPEN':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_OPEN;
        case 14:
        case 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING;
        case 15:
        case 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING;
        case 16:
        case 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING':
            return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SecurityTradingStatus.UNRECOGNIZED;
    }
}
exports.securityTradingStatusFromJSON = securityTradingStatusFromJSON;
function securityTradingStatusToJSON(object) {
    switch (object) {
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_UNSPECIFIED:
            return 'SECURITY_TRADING_STATUS_UNSPECIFIED';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING:
            return 'SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_PERIOD:
            return 'SECURITY_TRADING_STATUS_OPENING_PERIOD';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_PERIOD:
            return 'SECURITY_TRADING_STATUS_CLOSING_PERIOD';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_BREAK_IN_TRADING:
            return 'SECURITY_TRADING_STATUS_BREAK_IN_TRADING';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING:
            return 'SECURITY_TRADING_STATUS_NORMAL_TRADING';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_AUCTION:
            return 'SECURITY_TRADING_STATUS_CLOSING_AUCTION';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DARK_POOL_AUCTION:
            return 'SECURITY_TRADING_STATUS_DARK_POOL_AUCTION';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DISCRETE_AUCTION:
            return 'SECURITY_TRADING_STATUS_DISCRETE_AUCTION';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD:
            return 'SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE:
            return 'SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_ASSIGNED:
            return 'SECURITY_TRADING_STATUS_SESSION_ASSIGNED';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_CLOSE:
            return 'SECURITY_TRADING_STATUS_SESSION_CLOSE';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_OPEN:
            return 'SECURITY_TRADING_STATUS_SESSION_OPEN';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING:
            return 'SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING:
            return 'SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING';
        case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING:
            return 'SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING';
        default:
            return 'UNKNOWN';
    }
}
exports.securityTradingStatusToJSON = securityTradingStatusToJSON;
function createBaseMoneyValue() {
    return { currency: '', units: 0, nano: 0 };
}
exports.MoneyValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.currency !== '') {
            writer.uint32(10).string(message.currency);
        }
        if (message.units !== 0) {
            writer.uint32(16).int64(message.units);
        }
        if (message.nano !== 0) {
            writer.uint32(24).int32(message.nano);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMoneyValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currency = reader.string();
                    break;
                case 2:
                    message.units = longToNumber(reader.int64());
                    break;
                case 3:
                    message.nano = reader.int32();
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
            currency: isSet(object.currency) ? String(object.currency) : '',
            units: isSet(object.units) ? Number(object.units) : 0,
            nano: isSet(object.nano) ? Number(object.nano) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.currency !== undefined && (obj.currency = message.currency);
        message.units !== undefined && (obj.units = Math.round(message.units));
        message.nano !== undefined && (obj.nano = Math.round(message.nano));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMoneyValue();
        message.currency = (_a = object.currency) !== null && _a !== void 0 ? _a : '';
        message.units = (_b = object.units) !== null && _b !== void 0 ? _b : 0;
        message.nano = (_c = object.nano) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseQuotation() {
    return { units: 0, nano: 0 };
}
exports.Quotation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.units !== 0) {
            writer.uint32(8).int64(message.units);
        }
        if (message.nano !== 0) {
            writer.uint32(16).int32(message.nano);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.units = longToNumber(reader.int64());
                    break;
                case 2:
                    message.nano = reader.int32();
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
            units: isSet(object.units) ? Number(object.units) : 0,
            nano: isSet(object.nano) ? Number(object.nano) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.units !== undefined && (obj.units = Math.round(message.units));
        message.nano !== undefined && (obj.nano = Math.round(message.nano));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuotation();
        message.units = (_a = object.units) !== null && _a !== void 0 ? _a : 0;
        message.nano = (_b = object.nano) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePing() {
    return { time: undefined };
}
exports.Ping = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePing();
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
        const message = createBasePing();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        return message;
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
//# sourceMappingURL=common.js.map