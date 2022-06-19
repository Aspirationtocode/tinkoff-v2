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
exports.UsersServiceDefinition = exports.GetInfoResponse = exports.GetInfoRequest = exports.StreamLimit = exports.UnaryLimit = exports.GetUserTariffResponse = exports.GetUserTariffRequest = exports.GetMarginAttributesResponse = exports.GetMarginAttributesRequest = exports.Account = exports.GetAccountsResponse = exports.GetAccountsRequest = exports.accessLevelToJSON = exports.accessLevelFromJSON = exports.AccessLevel = exports.accountStatusToJSON = exports.accountStatusFromJSON = exports.AccountStatus = exports.accountTypeToJSON = exports.accountTypeFromJSON = exports.AccountType = exports.protobufPackage = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
const common_1 = require("./common");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
var AccountType;
(function (AccountType) {
    AccountType[AccountType["ACCOUNT_TYPE_UNSPECIFIED"] = 0] = "ACCOUNT_TYPE_UNSPECIFIED";
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF"] = 1] = "ACCOUNT_TYPE_TINKOFF";
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF_IIS"] = 2] = "ACCOUNT_TYPE_TINKOFF_IIS";
    AccountType[AccountType["ACCOUNT_TYPE_INVEST_BOX"] = 3] = "ACCOUNT_TYPE_INVEST_BOX";
    AccountType[AccountType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
function accountTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'ACCOUNT_TYPE_UNSPECIFIED':
            return AccountType.ACCOUNT_TYPE_UNSPECIFIED;
        case 1:
        case 'ACCOUNT_TYPE_TINKOFF':
            return AccountType.ACCOUNT_TYPE_TINKOFF;
        case 2:
        case 'ACCOUNT_TYPE_TINKOFF_IIS':
            return AccountType.ACCOUNT_TYPE_TINKOFF_IIS;
        case 3:
        case 'ACCOUNT_TYPE_INVEST_BOX':
            return AccountType.ACCOUNT_TYPE_INVEST_BOX;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AccountType.UNRECOGNIZED;
    }
}
exports.accountTypeFromJSON = accountTypeFromJSON;
function accountTypeToJSON(object) {
    switch (object) {
        case AccountType.ACCOUNT_TYPE_UNSPECIFIED:
            return 'ACCOUNT_TYPE_UNSPECIFIED';
        case AccountType.ACCOUNT_TYPE_TINKOFF:
            return 'ACCOUNT_TYPE_TINKOFF';
        case AccountType.ACCOUNT_TYPE_TINKOFF_IIS:
            return 'ACCOUNT_TYPE_TINKOFF_IIS';
        case AccountType.ACCOUNT_TYPE_INVEST_BOX:
            return 'ACCOUNT_TYPE_INVEST_BOX';
        default:
            return 'UNKNOWN';
    }
}
exports.accountTypeToJSON = accountTypeToJSON;
var AccountStatus;
(function (AccountStatus) {
    AccountStatus[AccountStatus["ACCOUNT_STATUS_UNSPECIFIED"] = 0] = "ACCOUNT_STATUS_UNSPECIFIED";
    AccountStatus[AccountStatus["ACCOUNT_STATUS_NEW"] = 1] = "ACCOUNT_STATUS_NEW";
    AccountStatus[AccountStatus["ACCOUNT_STATUS_OPEN"] = 2] = "ACCOUNT_STATUS_OPEN";
    AccountStatus[AccountStatus["ACCOUNT_STATUS_CLOSED"] = 3] = "ACCOUNT_STATUS_CLOSED";
    AccountStatus[AccountStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
function accountStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'ACCOUNT_STATUS_UNSPECIFIED':
            return AccountStatus.ACCOUNT_STATUS_UNSPECIFIED;
        case 1:
        case 'ACCOUNT_STATUS_NEW':
            return AccountStatus.ACCOUNT_STATUS_NEW;
        case 2:
        case 'ACCOUNT_STATUS_OPEN':
            return AccountStatus.ACCOUNT_STATUS_OPEN;
        case 3:
        case 'ACCOUNT_STATUS_CLOSED':
            return AccountStatus.ACCOUNT_STATUS_CLOSED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AccountStatus.UNRECOGNIZED;
    }
}
exports.accountStatusFromJSON = accountStatusFromJSON;
function accountStatusToJSON(object) {
    switch (object) {
        case AccountStatus.ACCOUNT_STATUS_UNSPECIFIED:
            return 'ACCOUNT_STATUS_UNSPECIFIED';
        case AccountStatus.ACCOUNT_STATUS_NEW:
            return 'ACCOUNT_STATUS_NEW';
        case AccountStatus.ACCOUNT_STATUS_OPEN:
            return 'ACCOUNT_STATUS_OPEN';
        case AccountStatus.ACCOUNT_STATUS_CLOSED:
            return 'ACCOUNT_STATUS_CLOSED';
        default:
            return 'UNKNOWN';
    }
}
exports.accountStatusToJSON = accountStatusToJSON;
var AccessLevel;
(function (AccessLevel) {
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_UNSPECIFIED"] = 0] = "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED";
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_FULL_ACCESS"] = 1] = "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS";
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_READ_ONLY"] = 2] = "ACCOUNT_ACCESS_LEVEL_READ_ONLY";
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_NO_ACCESS"] = 3] = "ACCOUNT_ACCESS_LEVEL_NO_ACCESS";
    AccessLevel[AccessLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessLevel = exports.AccessLevel || (exports.AccessLevel = {}));
function accessLevelFromJSON(object) {
    switch (object) {
        case 0:
        case 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED':
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED;
        case 1:
        case 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS':
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS;
        case 2:
        case 'ACCOUNT_ACCESS_LEVEL_READ_ONLY':
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY;
        case 3:
        case 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS':
            return AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AccessLevel.UNRECOGNIZED;
    }
}
exports.accessLevelFromJSON = accessLevelFromJSON;
function accessLevelToJSON(object) {
    switch (object) {
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED:
            return 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED';
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS:
            return 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS';
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY:
            return 'ACCOUNT_ACCESS_LEVEL_READ_ONLY';
        case AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS:
            return 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS';
        default:
            return 'UNKNOWN';
    }
}
exports.accessLevelToJSON = accessLevelToJSON;
function createBaseGetAccountsRequest() {
    return {};
}
exports.GetAccountsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountsRequest();
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
        const message = createBaseGetAccountsRequest();
        return message;
    },
};
function createBaseGetAccountsResponse() {
    return { accounts: [] };
}
exports.GetAccountsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            exports.Account.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.Account.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts) ? object.accounts.map((e) => exports.Account.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => (e ? exports.Account.toJSON(e) : undefined));
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAccountsResponse();
        message.accounts = ((_a = object.accounts) === null || _a === void 0 ? void 0 : _a.map(e => exports.Account.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAccount() {
    return { id: '', type: 0, name: '', status: 0, openedDate: undefined, closedDate: undefined, accessLevel: 0 };
}
exports.Account = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.openedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.openedDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.closedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.closedDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.accessLevel !== 0) {
            writer.uint32(56).int32(message.accessLevel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.openedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.closedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.accessLevel = reader.int32();
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
            id: isSet(object.id) ? String(object.id) : '',
            type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
            name: isSet(object.name) ? String(object.name) : '',
            status: isSet(object.status) ? accountStatusFromJSON(object.status) : 0,
            openedDate: isSet(object.openedDate) ? fromJsonTimestamp(object.openedDate) : undefined,
            closedDate: isSet(object.closedDate) ? fromJsonTimestamp(object.closedDate) : undefined,
            accessLevel: isSet(object.accessLevel) ? accessLevelFromJSON(object.accessLevel) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = accountTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.status !== undefined && (obj.status = accountStatusToJSON(message.status));
        message.openedDate !== undefined && (obj.openedDate = message.openedDate.toISOString());
        message.closedDate !== undefined && (obj.closedDate = message.closedDate.toISOString());
        message.accessLevel !== undefined && (obj.accessLevel = accessLevelToJSON(message.accessLevel));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseAccount();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        message.openedDate = (_e = object.openedDate) !== null && _e !== void 0 ? _e : undefined;
        message.closedDate = (_f = object.closedDate) !== null && _f !== void 0 ? _f : undefined;
        message.accessLevel = (_g = object.accessLevel) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBaseGetMarginAttributesRequest() {
    return { accountId: '' };
}
exports.GetMarginAttributesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarginAttributesRequest();
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
        const message = createBaseGetMarginAttributesRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetMarginAttributesResponse() {
    return {
        liquidPortfolio: undefined,
        startingMargin: undefined,
        minimalMargin: undefined,
        fundsSufficiencyLevel: undefined,
        amountOfMissingFunds: undefined,
    };
}
exports.GetMarginAttributesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidPortfolio !== undefined) {
            common_1.MoneyValue.encode(message.liquidPortfolio, writer.uint32(10).fork()).ldelim();
        }
        if (message.startingMargin !== undefined) {
            common_1.MoneyValue.encode(message.startingMargin, writer.uint32(18).fork()).ldelim();
        }
        if (message.minimalMargin !== undefined) {
            common_1.MoneyValue.encode(message.minimalMargin, writer.uint32(26).fork()).ldelim();
        }
        if (message.fundsSufficiencyLevel !== undefined) {
            common_1.Quotation.encode(message.fundsSufficiencyLevel, writer.uint32(34).fork()).ldelim();
        }
        if (message.amountOfMissingFunds !== undefined) {
            common_1.MoneyValue.encode(message.amountOfMissingFunds, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMarginAttributesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidPortfolio = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startingMargin = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minimalMargin = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fundsSufficiencyLevel = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.amountOfMissingFunds = common_1.MoneyValue.decode(reader, reader.uint32());
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
            liquidPortfolio: isSet(object.liquidPortfolio) ? common_1.MoneyValue.fromJSON(object.liquidPortfolio) : undefined,
            startingMargin: isSet(object.startingMargin) ? common_1.MoneyValue.fromJSON(object.startingMargin) : undefined,
            minimalMargin: isSet(object.minimalMargin) ? common_1.MoneyValue.fromJSON(object.minimalMargin) : undefined,
            fundsSufficiencyLevel: isSet(object.fundsSufficiencyLevel)
                ? common_1.Quotation.fromJSON(object.fundsSufficiencyLevel)
                : undefined,
            amountOfMissingFunds: isSet(object.amountOfMissingFunds)
                ? common_1.MoneyValue.fromJSON(object.amountOfMissingFunds)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.liquidPortfolio !== undefined &&
            (obj.liquidPortfolio = message.liquidPortfolio ? common_1.MoneyValue.toJSON(message.liquidPortfolio) : undefined);
        message.startingMargin !== undefined &&
            (obj.startingMargin = message.startingMargin ? common_1.MoneyValue.toJSON(message.startingMargin) : undefined);
        message.minimalMargin !== undefined &&
            (obj.minimalMargin = message.minimalMargin ? common_1.MoneyValue.toJSON(message.minimalMargin) : undefined);
        message.fundsSufficiencyLevel !== undefined &&
            (obj.fundsSufficiencyLevel = message.fundsSufficiencyLevel
                ? common_1.Quotation.toJSON(message.fundsSufficiencyLevel)
                : undefined);
        message.amountOfMissingFunds !== undefined &&
            (obj.amountOfMissingFunds = message.amountOfMissingFunds
                ? common_1.MoneyValue.toJSON(message.amountOfMissingFunds)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMarginAttributesResponse();
        message.liquidPortfolio =
            object.liquidPortfolio !== undefined && object.liquidPortfolio !== null
                ? common_1.MoneyValue.fromPartial(object.liquidPortfolio)
                : undefined;
        message.startingMargin =
            object.startingMargin !== undefined && object.startingMargin !== null
                ? common_1.MoneyValue.fromPartial(object.startingMargin)
                : undefined;
        message.minimalMargin =
            object.minimalMargin !== undefined && object.minimalMargin !== null
                ? common_1.MoneyValue.fromPartial(object.minimalMargin)
                : undefined;
        message.fundsSufficiencyLevel =
            object.fundsSufficiencyLevel !== undefined && object.fundsSufficiencyLevel !== null
                ? common_1.Quotation.fromPartial(object.fundsSufficiencyLevel)
                : undefined;
        message.amountOfMissingFunds =
            object.amountOfMissingFunds !== undefined && object.amountOfMissingFunds !== null
                ? common_1.MoneyValue.fromPartial(object.amountOfMissingFunds)
                : undefined;
        return message;
    },
};
function createBaseGetUserTariffRequest() {
    return {};
}
exports.GetUserTariffRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserTariffRequest();
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
        const message = createBaseGetUserTariffRequest();
        return message;
    },
};
function createBaseGetUserTariffResponse() {
    return { unaryLimits: [], streamLimits: [] };
}
exports.GetUserTariffResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.unaryLimits) {
            exports.UnaryLimit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.streamLimits) {
            exports.StreamLimit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserTariffResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unaryLimits.push(exports.UnaryLimit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.streamLimits.push(exports.StreamLimit.decode(reader, reader.uint32()));
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
            unaryLimits: Array.isArray(object === null || object === void 0 ? void 0 : object.unaryLimits) ? object.unaryLimits.map((e) => exports.UnaryLimit.fromJSON(e)) : [],
            streamLimits: Array.isArray(object === null || object === void 0 ? void 0 : object.streamLimits)
                ? object.streamLimits.map((e) => exports.StreamLimit.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unaryLimits) {
            obj.unaryLimits = message.unaryLimits.map(e => (e ? exports.UnaryLimit.toJSON(e) : undefined));
        }
        else {
            obj.unaryLimits = [];
        }
        if (message.streamLimits) {
            obj.streamLimits = message.streamLimits.map(e => (e ? exports.StreamLimit.toJSON(e) : undefined));
        }
        else {
            obj.streamLimits = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetUserTariffResponse();
        message.unaryLimits = ((_a = object.unaryLimits) === null || _a === void 0 ? void 0 : _a.map(e => exports.UnaryLimit.fromPartial(e))) || [];
        message.streamLimits = ((_b = object.streamLimits) === null || _b === void 0 ? void 0 : _b.map(e => exports.StreamLimit.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUnaryLimit() {
    return { limitPerMinute: 0, methods: [] };
}
exports.UnaryLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limitPerMinute !== 0) {
            writer.uint32(8).int32(message.limitPerMinute);
        }
        for (const v of message.methods) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnaryLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limitPerMinute = reader.int32();
                    break;
                case 2:
                    message.methods.push(reader.string());
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
            limitPerMinute: isSet(object.limitPerMinute) ? Number(object.limitPerMinute) : 0,
            methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.limitPerMinute !== undefined && (obj.limitPerMinute = Math.round(message.limitPerMinute));
        if (message.methods) {
            obj.methods = message.methods.map(e => e);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUnaryLimit();
        message.limitPerMinute = (_a = object.limitPerMinute) !== null && _a !== void 0 ? _a : 0;
        message.methods = ((_b = object.methods) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        return message;
    },
};
function createBaseStreamLimit() {
    return { limit: 0, streams: [] };
}
exports.StreamLimit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).int32(message.limit);
        }
        for (const v of message.streams) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.int32();
                    break;
                case 2:
                    message.streams.push(reader.string());
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
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            streams: Array.isArray(object === null || object === void 0 ? void 0 : object.streams) ? object.streams.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        if (message.streams) {
            obj.streams = message.streams.map(e => e);
        }
        else {
            obj.streams = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamLimit();
        message.limit = (_a = object.limit) !== null && _a !== void 0 ? _a : 0;
        message.streams = ((_b = object.streams) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        return message;
    },
};
function createBaseGetInfoRequest() {
    return {};
}
exports.GetInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInfoRequest();
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
        const message = createBaseGetInfoRequest();
        return message;
    },
};
function createBaseGetInfoResponse() {
    return { premStatus: false, qualStatus: false, qualifiedForWorkWith: [], tariff: '' };
}
exports.GetInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.premStatus === true) {
            writer.uint32(8).bool(message.premStatus);
        }
        if (message.qualStatus === true) {
            writer.uint32(16).bool(message.qualStatus);
        }
        for (const v of message.qualifiedForWorkWith) {
            writer.uint32(26).string(v);
        }
        if (message.tariff !== '') {
            writer.uint32(34).string(message.tariff);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.premStatus = reader.bool();
                    break;
                case 2:
                    message.qualStatus = reader.bool();
                    break;
                case 3:
                    message.qualifiedForWorkWith.push(reader.string());
                    break;
                case 4:
                    message.tariff = reader.string();
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
            premStatus: isSet(object.premStatus) ? Boolean(object.premStatus) : false,
            qualStatus: isSet(object.qualStatus) ? Boolean(object.qualStatus) : false,
            qualifiedForWorkWith: Array.isArray(object === null || object === void 0 ? void 0 : object.qualifiedForWorkWith)
                ? object.qualifiedForWorkWith.map((e) => String(e))
                : [],
            tariff: isSet(object.tariff) ? String(object.tariff) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.premStatus !== undefined && (obj.premStatus = message.premStatus);
        message.qualStatus !== undefined && (obj.qualStatus = message.qualStatus);
        if (message.qualifiedForWorkWith) {
            obj.qualifiedForWorkWith = message.qualifiedForWorkWith.map(e => e);
        }
        else {
            obj.qualifiedForWorkWith = [];
        }
        message.tariff !== undefined && (obj.tariff = message.tariff);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetInfoResponse();
        message.premStatus = (_a = object.premStatus) !== null && _a !== void 0 ? _a : false;
        message.qualStatus = (_b = object.qualStatus) !== null && _b !== void 0 ? _b : false;
        message.qualifiedForWorkWith = ((_c = object.qualifiedForWorkWith) === null || _c === void 0 ? void 0 : _c.map(e => e)) || [];
        message.tariff = (_d = object.tariff) !== null && _d !== void 0 ? _d : '';
        return message;
    },
};
exports.UsersServiceDefinition = {
    name: 'UsersService',
    fullName: 'tinkoff.public.invest.api.contract.v1.UsersService',
    methods: {
        getAccounts: {
            name: 'GetAccounts',
            requestType: exports.GetAccountsRequest,
            requestStream: false,
            responseType: exports.GetAccountsResponse,
            responseStream: false,
            options: {},
        },
        getMarginAttributes: {
            name: 'GetMarginAttributes',
            requestType: exports.GetMarginAttributesRequest,
            requestStream: false,
            responseType: exports.GetMarginAttributesResponse,
            responseStream: false,
            options: {},
        },
        getUserTariff: {
            name: 'GetUserTariff',
            requestType: exports.GetUserTariffRequest,
            requestStream: false,
            responseType: exports.GetUserTariffResponse,
            responseStream: false,
            options: {},
        },
        getInfo: {
            name: 'GetInfo',
            requestType: exports.GetInfoRequest,
            requestStream: false,
            responseType: exports.GetInfoResponse,
            responseStream: false,
            options: {},
        },
    },
};
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=users.js.map