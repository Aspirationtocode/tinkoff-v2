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
exports.SandboxServiceDefinition = exports.SandboxPayInResponse = exports.SandboxPayInRequest = exports.CloseSandboxAccountResponse = exports.CloseSandboxAccountRequest = exports.OpenSandboxAccountResponse = exports.OpenSandboxAccountRequest = exports.protobufPackage = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const common_1 = require("./common");
const users_1 = require("./users");
const orders_1 = require("./orders");
const operations_1 = require("./operations");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
function createBaseOpenSandboxAccountRequest() {
    return {};
}
exports.OpenSandboxAccountRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOpenSandboxAccountRequest();
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
        const message = createBaseOpenSandboxAccountRequest();
        return message;
    },
};
function createBaseOpenSandboxAccountResponse() {
    return { accountId: '' };
}
exports.OpenSandboxAccountResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOpenSandboxAccountResponse();
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
        const message = createBaseOpenSandboxAccountResponse();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseCloseSandboxAccountRequest() {
    return { accountId: '' };
}
exports.CloseSandboxAccountRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCloseSandboxAccountRequest();
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
        const message = createBaseCloseSandboxAccountRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseCloseSandboxAccountResponse() {
    return {};
}
exports.CloseSandboxAccountResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCloseSandboxAccountResponse();
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
        const message = createBaseCloseSandboxAccountResponse();
        return message;
    },
};
function createBaseSandboxPayInRequest() {
    return { accountId: '', amount: undefined };
}
exports.SandboxPayInRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        if (message.amount !== undefined) {
            common_1.MoneyValue.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSandboxPayInRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.amount = common_1.MoneyValue.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? common_1.MoneyValue.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.amount !== undefined && (obj.amount = message.amount ? common_1.MoneyValue.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSandboxPayInRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        message.amount =
            object.amount !== undefined && object.amount !== null ? common_1.MoneyValue.fromPartial(object.amount) : undefined;
        return message;
    },
};
function createBaseSandboxPayInResponse() {
    return { balance: undefined };
}
exports.SandboxPayInResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.balance !== undefined) {
            common_1.MoneyValue.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSandboxPayInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = common_1.MoneyValue.decode(reader, reader.uint32());
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
            balance: isSet(object.balance) ? common_1.MoneyValue.fromJSON(object.balance) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.balance !== undefined && (obj.balance = message.balance ? common_1.MoneyValue.toJSON(message.balance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSandboxPayInResponse();
        message.balance =
            object.balance !== undefined && object.balance !== null ? common_1.MoneyValue.fromPartial(object.balance) : undefined;
        return message;
    },
};
exports.SandboxServiceDefinition = {
    name: 'SandboxService',
    fullName: 'tinkoff.public.invest.api.contract.v1.SandboxService',
    methods: {
        openSandboxAccount: {
            name: 'OpenSandboxAccount',
            requestType: exports.OpenSandboxAccountRequest,
            requestStream: false,
            responseType: exports.OpenSandboxAccountResponse,
            responseStream: false,
            options: {},
        },
        getSandboxAccounts: {
            name: 'GetSandboxAccounts',
            requestType: users_1.GetAccountsRequest,
            requestStream: false,
            responseType: users_1.GetAccountsResponse,
            responseStream: false,
            options: {},
        },
        closeSandboxAccount: {
            name: 'CloseSandboxAccount',
            requestType: exports.CloseSandboxAccountRequest,
            requestStream: false,
            responseType: exports.CloseSandboxAccountResponse,
            responseStream: false,
            options: {},
        },
        postSandboxOrder: {
            name: 'PostSandboxOrder',
            requestType: orders_1.PostOrderRequest,
            requestStream: false,
            responseType: orders_1.PostOrderResponse,
            responseStream: false,
            options: {},
        },
        getSandboxOrders: {
            name: 'GetSandboxOrders',
            requestType: orders_1.GetOrdersRequest,
            requestStream: false,
            responseType: orders_1.GetOrdersResponse,
            responseStream: false,
            options: {},
        },
        cancelSandboxOrder: {
            name: 'CancelSandboxOrder',
            requestType: orders_1.CancelOrderRequest,
            requestStream: false,
            responseType: orders_1.CancelOrderResponse,
            responseStream: false,
            options: {},
        },
        getSandboxOrderState: {
            name: 'GetSandboxOrderState',
            requestType: orders_1.GetOrderStateRequest,
            requestStream: false,
            responseType: orders_1.OrderState,
            responseStream: false,
            options: {},
        },
        getSandboxPositions: {
            name: 'GetSandboxPositions',
            requestType: operations_1.PositionsRequest,
            requestStream: false,
            responseType: operations_1.PositionsResponse,
            responseStream: false,
            options: {},
        },
        getSandboxOperations: {
            name: 'GetSandboxOperations',
            requestType: operations_1.OperationsRequest,
            requestStream: false,
            responseType: operations_1.OperationsResponse,
            responseStream: false,
            options: {},
        },
        getSandboxPortfolio: {
            name: 'GetSandboxPortfolio',
            requestType: operations_1.PortfolioRequest,
            requestStream: false,
            responseType: operations_1.PortfolioResponse,
            responseStream: false,
            options: {},
        },
        sandboxPayIn: {
            name: 'SandboxPayIn',
            requestType: exports.SandboxPayInRequest,
            requestStream: false,
            responseType: exports.SandboxPayInResponse,
            responseStream: false,
            options: {},
        },
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=sandbox.js.map