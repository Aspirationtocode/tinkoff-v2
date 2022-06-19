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
exports.OperationsServiceDefinition = exports.DividendsForeignIssuerReport = exports.GetDividendsForeignIssuerReportResponse = exports.GenerateDividendsForeignIssuerReportResponse = exports.GetDividendsForeignIssuerReportRequest = exports.GenerateDividendsForeignIssuerReportRequest = exports.GetDividendsForeignIssuerResponse = exports.GetDividendsForeignIssuerRequest = exports.BrokerReport = exports.GetBrokerReportResponse = exports.GetBrokerReportRequest = exports.GenerateBrokerReportResponse = exports.GenerateBrokerReportRequest = exports.BrokerReportResponse = exports.BrokerReportRequest = exports.PositionsFutures = exports.PositionsSecurities = exports.PortfolioPosition = exports.WithdrawLimitsResponse = exports.WithdrawLimitsRequest = exports.PositionsResponse = exports.PositionsRequest = exports.PortfolioResponse = exports.PortfolioRequest = exports.OperationTrade = exports.Operation = exports.OperationsResponse = exports.OperationsRequest = exports.operationTypeToJSON = exports.operationTypeFromJSON = exports.OperationType = exports.operationStateToJSON = exports.operationStateFromJSON = exports.OperationState = exports.protobufPackage = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
const common_1 = require("./common");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
var OperationState;
(function (OperationState) {
    OperationState[OperationState["OPERATION_STATE_UNSPECIFIED"] = 0] = "OPERATION_STATE_UNSPECIFIED";
    OperationState[OperationState["OPERATION_STATE_EXECUTED"] = 1] = "OPERATION_STATE_EXECUTED";
    OperationState[OperationState["OPERATION_STATE_CANCELED"] = 2] = "OPERATION_STATE_CANCELED";
    OperationState[OperationState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OperationState = exports.OperationState || (exports.OperationState = {}));
function operationStateFromJSON(object) {
    switch (object) {
        case 0:
        case 'OPERATION_STATE_UNSPECIFIED':
            return OperationState.OPERATION_STATE_UNSPECIFIED;
        case 1:
        case 'OPERATION_STATE_EXECUTED':
            return OperationState.OPERATION_STATE_EXECUTED;
        case 2:
        case 'OPERATION_STATE_CANCELED':
            return OperationState.OPERATION_STATE_CANCELED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OperationState.UNRECOGNIZED;
    }
}
exports.operationStateFromJSON = operationStateFromJSON;
function operationStateToJSON(object) {
    switch (object) {
        case OperationState.OPERATION_STATE_UNSPECIFIED:
            return 'OPERATION_STATE_UNSPECIFIED';
        case OperationState.OPERATION_STATE_EXECUTED:
            return 'OPERATION_STATE_EXECUTED';
        case OperationState.OPERATION_STATE_CANCELED:
            return 'OPERATION_STATE_CANCELED';
        default:
            return 'UNKNOWN';
    }
}
exports.operationStateToJSON = operationStateToJSON;
var OperationType;
(function (OperationType) {
    OperationType[OperationType["OPERATION_TYPE_UNSPECIFIED"] = 0] = "OPERATION_TYPE_UNSPECIFIED";
    OperationType[OperationType["OPERATION_TYPE_INPUT"] = 1] = "OPERATION_TYPE_INPUT";
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX"] = 2] = "OPERATION_TYPE_BOND_TAX";
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_SECURITIES"] = 3] = "OPERATION_TYPE_OUTPUT_SECURITIES";
    OperationType[OperationType["OPERATION_TYPE_OVERNIGHT"] = 4] = "OPERATION_TYPE_OVERNIGHT";
    OperationType[OperationType["OPERATION_TYPE_TAX"] = 5] = "OPERATION_TYPE_TAX";
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT_FULL"] = 6] = "OPERATION_TYPE_BOND_REPAYMENT_FULL";
    OperationType[OperationType["OPERATION_TYPE_SELL_CARD"] = 7] = "OPERATION_TYPE_SELL_CARD";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX"] = 8] = "OPERATION_TYPE_DIVIDEND_TAX";
    OperationType[OperationType["OPERATION_TYPE_OUTPUT"] = 9] = "OPERATION_TYPE_OUTPUT";
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT"] = 10] = "OPERATION_TYPE_BOND_REPAYMENT";
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION"] = 11] = "OPERATION_TYPE_TAX_CORRECTION";
    OperationType[OperationType["OPERATION_TYPE_SERVICE_FEE"] = 12] = "OPERATION_TYPE_SERVICE_FEE";
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX"] = 13] = "OPERATION_TYPE_BENEFIT_TAX";
    OperationType[OperationType["OPERATION_TYPE_MARGIN_FEE"] = 14] = "OPERATION_TYPE_MARGIN_FEE";
    OperationType[OperationType["OPERATION_TYPE_BUY"] = 15] = "OPERATION_TYPE_BUY";
    OperationType[OperationType["OPERATION_TYPE_BUY_CARD"] = 16] = "OPERATION_TYPE_BUY_CARD";
    OperationType[OperationType["OPERATION_TYPE_INPUT_SECURITIES"] = 17] = "OPERATION_TYPE_INPUT_SECURITIES";
    OperationType[OperationType["OPERATION_TYPE_SELL_MARGIN"] = 18] = "OPERATION_TYPE_SELL_MARGIN";
    OperationType[OperationType["OPERATION_TYPE_BROKER_FEE"] = 19] = "OPERATION_TYPE_BROKER_FEE";
    OperationType[OperationType["OPERATION_TYPE_BUY_MARGIN"] = 20] = "OPERATION_TYPE_BUY_MARGIN";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND"] = 21] = "OPERATION_TYPE_DIVIDEND";
    OperationType[OperationType["OPERATION_TYPE_SELL"] = 22] = "OPERATION_TYPE_SELL";
    OperationType[OperationType["OPERATION_TYPE_COUPON"] = 23] = "OPERATION_TYPE_COUPON";
    OperationType[OperationType["OPERATION_TYPE_SUCCESS_FEE"] = 24] = "OPERATION_TYPE_SUCCESS_FEE";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TRANSFER"] = 25] = "OPERATION_TYPE_DIVIDEND_TRANSFER";
    OperationType[OperationType["OPERATION_TYPE_ACCRUING_VARMARGIN"] = 26] = "OPERATION_TYPE_ACCRUING_VARMARGIN";
    OperationType[OperationType["OPERATION_TYPE_WRITING_OFF_VARMARGIN"] = 27] = "OPERATION_TYPE_WRITING_OFF_VARMARGIN";
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_BUY"] = 28] = "OPERATION_TYPE_DELIVERY_BUY";
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_SELL"] = 29] = "OPERATION_TYPE_DELIVERY_SELL";
    OperationType[OperationType["OPERATION_TYPE_TRACK_MFEE"] = 30] = "OPERATION_TYPE_TRACK_MFEE";
    OperationType[OperationType["OPERATION_TYPE_TRACK_PFEE"] = 31] = "OPERATION_TYPE_TRACK_PFEE";
    OperationType[OperationType["OPERATION_TYPE_TAX_PROGRESSIVE"] = 32] = "OPERATION_TYPE_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX_PROGRESSIVE"] = 33] = "OPERATION_TYPE_BOND_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE"] = 34] = "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE"] = 35] = "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE"] = 36] = "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_PROGRESSIVE"] = 37] = "OPERATION_TYPE_TAX_REPO_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO"] = 38] = "OPERATION_TYPE_TAX_REPO";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD"] = 39] = "OPERATION_TYPE_TAX_REPO_HOLD";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND"] = 40] = "OPERATION_TYPE_TAX_REPO_REFUND";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE"] = 41] = "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE"] = 42] = "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_DIV_EXT"] = 43] = "OPERATION_TYPE_DIV_EXT";
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_COUPON"] = 44] = "OPERATION_TYPE_TAX_CORRECTION_COUPON";
    OperationType[OperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
function operationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'OPERATION_TYPE_UNSPECIFIED':
            return OperationType.OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case 'OPERATION_TYPE_INPUT':
            return OperationType.OPERATION_TYPE_INPUT;
        case 2:
        case 'OPERATION_TYPE_BOND_TAX':
            return OperationType.OPERATION_TYPE_BOND_TAX;
        case 3:
        case 'OPERATION_TYPE_OUTPUT_SECURITIES':
            return OperationType.OPERATION_TYPE_OUTPUT_SECURITIES;
        case 4:
        case 'OPERATION_TYPE_OVERNIGHT':
            return OperationType.OPERATION_TYPE_OVERNIGHT;
        case 5:
        case 'OPERATION_TYPE_TAX':
            return OperationType.OPERATION_TYPE_TAX;
        case 6:
        case 'OPERATION_TYPE_BOND_REPAYMENT_FULL':
            return OperationType.OPERATION_TYPE_BOND_REPAYMENT_FULL;
        case 7:
        case 'OPERATION_TYPE_SELL_CARD':
            return OperationType.OPERATION_TYPE_SELL_CARD;
        case 8:
        case 'OPERATION_TYPE_DIVIDEND_TAX':
            return OperationType.OPERATION_TYPE_DIVIDEND_TAX;
        case 9:
        case 'OPERATION_TYPE_OUTPUT':
            return OperationType.OPERATION_TYPE_OUTPUT;
        case 10:
        case 'OPERATION_TYPE_BOND_REPAYMENT':
            return OperationType.OPERATION_TYPE_BOND_REPAYMENT;
        case 11:
        case 'OPERATION_TYPE_TAX_CORRECTION':
            return OperationType.OPERATION_TYPE_TAX_CORRECTION;
        case 12:
        case 'OPERATION_TYPE_SERVICE_FEE':
            return OperationType.OPERATION_TYPE_SERVICE_FEE;
        case 13:
        case 'OPERATION_TYPE_BENEFIT_TAX':
            return OperationType.OPERATION_TYPE_BENEFIT_TAX;
        case 14:
        case 'OPERATION_TYPE_MARGIN_FEE':
            return OperationType.OPERATION_TYPE_MARGIN_FEE;
        case 15:
        case 'OPERATION_TYPE_BUY':
            return OperationType.OPERATION_TYPE_BUY;
        case 16:
        case 'OPERATION_TYPE_BUY_CARD':
            return OperationType.OPERATION_TYPE_BUY_CARD;
        case 17:
        case 'OPERATION_TYPE_INPUT_SECURITIES':
            return OperationType.OPERATION_TYPE_INPUT_SECURITIES;
        case 18:
        case 'OPERATION_TYPE_SELL_MARGIN':
            return OperationType.OPERATION_TYPE_SELL_MARGIN;
        case 19:
        case 'OPERATION_TYPE_BROKER_FEE':
            return OperationType.OPERATION_TYPE_BROKER_FEE;
        case 20:
        case 'OPERATION_TYPE_BUY_MARGIN':
            return OperationType.OPERATION_TYPE_BUY_MARGIN;
        case 21:
        case 'OPERATION_TYPE_DIVIDEND':
            return OperationType.OPERATION_TYPE_DIVIDEND;
        case 22:
        case 'OPERATION_TYPE_SELL':
            return OperationType.OPERATION_TYPE_SELL;
        case 23:
        case 'OPERATION_TYPE_COUPON':
            return OperationType.OPERATION_TYPE_COUPON;
        case 24:
        case 'OPERATION_TYPE_SUCCESS_FEE':
            return OperationType.OPERATION_TYPE_SUCCESS_FEE;
        case 25:
        case 'OPERATION_TYPE_DIVIDEND_TRANSFER':
            return OperationType.OPERATION_TYPE_DIVIDEND_TRANSFER;
        case 26:
        case 'OPERATION_TYPE_ACCRUING_VARMARGIN':
            return OperationType.OPERATION_TYPE_ACCRUING_VARMARGIN;
        case 27:
        case 'OPERATION_TYPE_WRITING_OFF_VARMARGIN':
            return OperationType.OPERATION_TYPE_WRITING_OFF_VARMARGIN;
        case 28:
        case 'OPERATION_TYPE_DELIVERY_BUY':
            return OperationType.OPERATION_TYPE_DELIVERY_BUY;
        case 29:
        case 'OPERATION_TYPE_DELIVERY_SELL':
            return OperationType.OPERATION_TYPE_DELIVERY_SELL;
        case 30:
        case 'OPERATION_TYPE_TRACK_MFEE':
            return OperationType.OPERATION_TYPE_TRACK_MFEE;
        case 31:
        case 'OPERATION_TYPE_TRACK_PFEE':
            return OperationType.OPERATION_TYPE_TRACK_PFEE;
        case 32:
        case 'OPERATION_TYPE_TAX_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_TAX_PROGRESSIVE;
        case 33:
        case 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_BOND_TAX_PROGRESSIVE;
        case 34:
        case 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE;
        case 35:
        case 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE;
        case 36:
        case 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE;
        case 37:
        case 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_TAX_REPO_PROGRESSIVE;
        case 38:
        case 'OPERATION_TYPE_TAX_REPO':
            return OperationType.OPERATION_TYPE_TAX_REPO;
        case 39:
        case 'OPERATION_TYPE_TAX_REPO_HOLD':
            return OperationType.OPERATION_TYPE_TAX_REPO_HOLD;
        case 40:
        case 'OPERATION_TYPE_TAX_REPO_REFUND':
            return OperationType.OPERATION_TYPE_TAX_REPO_REFUND;
        case 41:
        case 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE;
        case 42:
        case 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE':
            return OperationType.OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE;
        case 43:
        case 'OPERATION_TYPE_DIV_EXT':
            return OperationType.OPERATION_TYPE_DIV_EXT;
        case 44:
        case 'OPERATION_TYPE_TAX_CORRECTION_COUPON':
            return OperationType.OPERATION_TYPE_TAX_CORRECTION_COUPON;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return OperationType.UNRECOGNIZED;
    }
}
exports.operationTypeFromJSON = operationTypeFromJSON;
function operationTypeToJSON(object) {
    switch (object) {
        case OperationType.OPERATION_TYPE_UNSPECIFIED:
            return 'OPERATION_TYPE_UNSPECIFIED';
        case OperationType.OPERATION_TYPE_INPUT:
            return 'OPERATION_TYPE_INPUT';
        case OperationType.OPERATION_TYPE_BOND_TAX:
            return 'OPERATION_TYPE_BOND_TAX';
        case OperationType.OPERATION_TYPE_OUTPUT_SECURITIES:
            return 'OPERATION_TYPE_OUTPUT_SECURITIES';
        case OperationType.OPERATION_TYPE_OVERNIGHT:
            return 'OPERATION_TYPE_OVERNIGHT';
        case OperationType.OPERATION_TYPE_TAX:
            return 'OPERATION_TYPE_TAX';
        case OperationType.OPERATION_TYPE_BOND_REPAYMENT_FULL:
            return 'OPERATION_TYPE_BOND_REPAYMENT_FULL';
        case OperationType.OPERATION_TYPE_SELL_CARD:
            return 'OPERATION_TYPE_SELL_CARD';
        case OperationType.OPERATION_TYPE_DIVIDEND_TAX:
            return 'OPERATION_TYPE_DIVIDEND_TAX';
        case OperationType.OPERATION_TYPE_OUTPUT:
            return 'OPERATION_TYPE_OUTPUT';
        case OperationType.OPERATION_TYPE_BOND_REPAYMENT:
            return 'OPERATION_TYPE_BOND_REPAYMENT';
        case OperationType.OPERATION_TYPE_TAX_CORRECTION:
            return 'OPERATION_TYPE_TAX_CORRECTION';
        case OperationType.OPERATION_TYPE_SERVICE_FEE:
            return 'OPERATION_TYPE_SERVICE_FEE';
        case OperationType.OPERATION_TYPE_BENEFIT_TAX:
            return 'OPERATION_TYPE_BENEFIT_TAX';
        case OperationType.OPERATION_TYPE_MARGIN_FEE:
            return 'OPERATION_TYPE_MARGIN_FEE';
        case OperationType.OPERATION_TYPE_BUY:
            return 'OPERATION_TYPE_BUY';
        case OperationType.OPERATION_TYPE_BUY_CARD:
            return 'OPERATION_TYPE_BUY_CARD';
        case OperationType.OPERATION_TYPE_INPUT_SECURITIES:
            return 'OPERATION_TYPE_INPUT_SECURITIES';
        case OperationType.OPERATION_TYPE_SELL_MARGIN:
            return 'OPERATION_TYPE_SELL_MARGIN';
        case OperationType.OPERATION_TYPE_BROKER_FEE:
            return 'OPERATION_TYPE_BROKER_FEE';
        case OperationType.OPERATION_TYPE_BUY_MARGIN:
            return 'OPERATION_TYPE_BUY_MARGIN';
        case OperationType.OPERATION_TYPE_DIVIDEND:
            return 'OPERATION_TYPE_DIVIDEND';
        case OperationType.OPERATION_TYPE_SELL:
            return 'OPERATION_TYPE_SELL';
        case OperationType.OPERATION_TYPE_COUPON:
            return 'OPERATION_TYPE_COUPON';
        case OperationType.OPERATION_TYPE_SUCCESS_FEE:
            return 'OPERATION_TYPE_SUCCESS_FEE';
        case OperationType.OPERATION_TYPE_DIVIDEND_TRANSFER:
            return 'OPERATION_TYPE_DIVIDEND_TRANSFER';
        case OperationType.OPERATION_TYPE_ACCRUING_VARMARGIN:
            return 'OPERATION_TYPE_ACCRUING_VARMARGIN';
        case OperationType.OPERATION_TYPE_WRITING_OFF_VARMARGIN:
            return 'OPERATION_TYPE_WRITING_OFF_VARMARGIN';
        case OperationType.OPERATION_TYPE_DELIVERY_BUY:
            return 'OPERATION_TYPE_DELIVERY_BUY';
        case OperationType.OPERATION_TYPE_DELIVERY_SELL:
            return 'OPERATION_TYPE_DELIVERY_SELL';
        case OperationType.OPERATION_TYPE_TRACK_MFEE:
            return 'OPERATION_TYPE_TRACK_MFEE';
        case OperationType.OPERATION_TYPE_TRACK_PFEE:
            return 'OPERATION_TYPE_TRACK_PFEE';
        case OperationType.OPERATION_TYPE_TAX_PROGRESSIVE:
            return 'OPERATION_TYPE_TAX_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_BOND_TAX_PROGRESSIVE:
            return 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE:
            return 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE:
            return 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE:
            return 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_TAX_REPO_PROGRESSIVE:
            return 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_TAX_REPO:
            return 'OPERATION_TYPE_TAX_REPO';
        case OperationType.OPERATION_TYPE_TAX_REPO_HOLD:
            return 'OPERATION_TYPE_TAX_REPO_HOLD';
        case OperationType.OPERATION_TYPE_TAX_REPO_REFUND:
            return 'OPERATION_TYPE_TAX_REPO_REFUND';
        case OperationType.OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE:
            return 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE:
            return 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE';
        case OperationType.OPERATION_TYPE_DIV_EXT:
            return 'OPERATION_TYPE_DIV_EXT';
        case OperationType.OPERATION_TYPE_TAX_CORRECTION_COUPON:
            return 'OPERATION_TYPE_TAX_CORRECTION_COUPON';
        default:
            return 'UNKNOWN';
    }
}
exports.operationTypeToJSON = operationTypeToJSON;
function createBaseOperationsRequest() {
    return { accountId: '', from: undefined, to: undefined, state: 0, figi: '' };
}
exports.OperationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        if (message.from !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
        }
        if (message.to !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.figi !== '') {
            writer.uint32(42).string(message.figi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.from = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.to = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
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
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
            state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
            figi: isSet(object.figi) ? String(object.figi) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        message.state !== undefined && (obj.state = operationStateToJSON(message.state));
        message.figi !== undefined && (obj.figi = message.figi);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOperationsRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : 0;
        message.figi = (_e = object.figi) !== null && _e !== void 0 ? _e : '';
        return message;
    },
};
function createBaseOperationsResponse() {
    return { operations: [] };
}
exports.OperationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.operations) {
            exports.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(exports.Operation.decode(reader, reader.uint32()));
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
            operations: Array.isArray(object === null || object === void 0 ? void 0 : object.operations) ? object.operations.map((e) => exports.Operation.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map(e => (e ? exports.Operation.toJSON(e) : undefined));
        }
        else {
            obj.operations = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOperationsResponse();
        message.operations = ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map(e => exports.Operation.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOperation() {
    return {
        id: '',
        parentOperationId: '',
        currency: '',
        payment: undefined,
        price: undefined,
        state: 0,
        quantity: 0,
        quantityRest: 0,
        figi: '',
        instrumentType: '',
        date: undefined,
        type: '',
        operationType: 0,
        trades: [],
    };
}
exports.Operation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.parentOperationId !== '') {
            writer.uint32(18).string(message.parentOperationId);
        }
        if (message.currency !== '') {
            writer.uint32(26).string(message.currency);
        }
        if (message.payment !== undefined) {
            common_1.MoneyValue.encode(message.payment, writer.uint32(34).fork()).ldelim();
        }
        if (message.price !== undefined) {
            common_1.MoneyValue.encode(message.price, writer.uint32(42).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(48).int32(message.state);
        }
        if (message.quantity !== 0) {
            writer.uint32(56).int64(message.quantity);
        }
        if (message.quantityRest !== 0) {
            writer.uint32(64).int64(message.quantityRest);
        }
        if (message.figi !== '') {
            writer.uint32(74).string(message.figi);
        }
        if (message.instrumentType !== '') {
            writer.uint32(82).string(message.instrumentType);
        }
        if (message.date !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(90).fork()).ldelim();
        }
        if (message.type !== '') {
            writer.uint32(98).string(message.type);
        }
        if (message.operationType !== 0) {
            writer.uint32(104).int32(message.operationType);
        }
        for (const v of message.trades) {
            exports.OperationTrade.encode(v, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.parentOperationId = reader.string();
                    break;
                case 3:
                    message.currency = reader.string();
                    break;
                case 4:
                    message.payment = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.price = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.state = reader.int32();
                    break;
                case 7:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 8:
                    message.quantityRest = longToNumber(reader.int64());
                    break;
                case 9:
                    message.figi = reader.string();
                    break;
                case 10:
                    message.instrumentType = reader.string();
                    break;
                case 11:
                    message.date = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.type = reader.string();
                    break;
                case 13:
                    message.operationType = reader.int32();
                    break;
                case 14:
                    message.trades.push(exports.OperationTrade.decode(reader, reader.uint32()));
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
            parentOperationId: isSet(object.parentOperationId) ? String(object.parentOperationId) : '',
            currency: isSet(object.currency) ? String(object.currency) : '',
            payment: isSet(object.payment) ? common_1.MoneyValue.fromJSON(object.payment) : undefined,
            price: isSet(object.price) ? common_1.MoneyValue.fromJSON(object.price) : undefined,
            state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            quantityRest: isSet(object.quantityRest) ? Number(object.quantityRest) : 0,
            figi: isSet(object.figi) ? String(object.figi) : '',
            instrumentType: isSet(object.instrumentType) ? String(object.instrumentType) : '',
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
            type: isSet(object.type) ? String(object.type) : '',
            operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : 0,
            trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades) ? object.trades.map((e) => exports.OperationTrade.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.parentOperationId !== undefined && (obj.parentOperationId = message.parentOperationId);
        message.currency !== undefined && (obj.currency = message.currency);
        message.payment !== undefined && (obj.payment = message.payment ? common_1.MoneyValue.toJSON(message.payment) : undefined);
        message.price !== undefined && (obj.price = message.price ? common_1.MoneyValue.toJSON(message.price) : undefined);
        message.state !== undefined && (obj.state = operationStateToJSON(message.state));
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.quantityRest !== undefined && (obj.quantityRest = Math.round(message.quantityRest));
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentType !== undefined && (obj.instrumentType = message.instrumentType);
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.type !== undefined && (obj.type = message.type);
        message.operationType !== undefined && (obj.operationType = operationTypeToJSON(message.operationType));
        if (message.trades) {
            obj.trades = message.trades.map(e => (e ? exports.OperationTrade.toJSON(e) : undefined));
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseOperation();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.parentOperationId = (_b = object.parentOperationId) !== null && _b !== void 0 ? _b : '';
        message.currency = (_c = object.currency) !== null && _c !== void 0 ? _c : '';
        message.payment =
            object.payment !== undefined && object.payment !== null ? common_1.MoneyValue.fromPartial(object.payment) : undefined;
        message.price =
            object.price !== undefined && object.price !== null ? common_1.MoneyValue.fromPartial(object.price) : undefined;
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : 0;
        message.quantity = (_e = object.quantity) !== null && _e !== void 0 ? _e : 0;
        message.quantityRest = (_f = object.quantityRest) !== null && _f !== void 0 ? _f : 0;
        message.figi = (_g = object.figi) !== null && _g !== void 0 ? _g : '';
        message.instrumentType = (_h = object.instrumentType) !== null && _h !== void 0 ? _h : '';
        message.date = (_j = object.date) !== null && _j !== void 0 ? _j : undefined;
        message.type = (_k = object.type) !== null && _k !== void 0 ? _k : '';
        message.operationType = (_l = object.operationType) !== null && _l !== void 0 ? _l : 0;
        message.trades = ((_m = object.trades) === null || _m === void 0 ? void 0 : _m.map(e => exports.OperationTrade.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOperationTrade() {
    return { tradeId: '', dateTime: undefined, quantity: 0, price: undefined };
}
exports.OperationTrade = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tradeId !== '') {
            writer.uint32(10).string(message.tradeId);
        }
        if (message.dateTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.dateTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(24).int64(message.quantity);
        }
        if (message.price !== undefined) {
            common_1.MoneyValue.encode(message.price, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOperationTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeId = reader.string();
                    break;
                case 2:
                    message.dateTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 4:
                    message.price = common_1.MoneyValue.decode(reader, reader.uint32());
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
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : '',
            dateTime: isSet(object.dateTime) ? fromJsonTimestamp(object.dateTime) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            price: isSet(object.price) ? common_1.MoneyValue.fromJSON(object.price) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.dateTime !== undefined && (obj.dateTime = message.dateTime.toISOString());
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.price !== undefined && (obj.price = message.price ? common_1.MoneyValue.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOperationTrade();
        message.tradeId = (_a = object.tradeId) !== null && _a !== void 0 ? _a : '';
        message.dateTime = (_b = object.dateTime) !== null && _b !== void 0 ? _b : undefined;
        message.quantity = (_c = object.quantity) !== null && _c !== void 0 ? _c : 0;
        message.price =
            object.price !== undefined && object.price !== null ? common_1.MoneyValue.fromPartial(object.price) : undefined;
        return message;
    },
};
function createBasePortfolioRequest() {
    return { accountId: '' };
}
exports.PortfolioRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioRequest();
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
        const message = createBasePortfolioRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBasePortfolioResponse() {
    return {
        totalAmountShares: undefined,
        totalAmountBonds: undefined,
        totalAmountEtf: undefined,
        totalAmountCurrencies: undefined,
        totalAmountFutures: undefined,
        expectedYield: undefined,
        positions: [],
    };
}
exports.PortfolioResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalAmountShares !== undefined) {
            common_1.MoneyValue.encode(message.totalAmountShares, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalAmountBonds !== undefined) {
            common_1.MoneyValue.encode(message.totalAmountBonds, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalAmountEtf !== undefined) {
            common_1.MoneyValue.encode(message.totalAmountEtf, writer.uint32(26).fork()).ldelim();
        }
        if (message.totalAmountCurrencies !== undefined) {
            common_1.MoneyValue.encode(message.totalAmountCurrencies, writer.uint32(34).fork()).ldelim();
        }
        if (message.totalAmountFutures !== undefined) {
            common_1.MoneyValue.encode(message.totalAmountFutures, writer.uint32(42).fork()).ldelim();
        }
        if (message.expectedYield !== undefined) {
            common_1.Quotation.encode(message.expectedYield, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.positions) {
            exports.PortfolioPosition.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalAmountShares = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalAmountBonds = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalAmountEtf = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.totalAmountCurrencies = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.totalAmountFutures = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.expectedYield = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.positions.push(exports.PortfolioPosition.decode(reader, reader.uint32()));
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
            totalAmountShares: isSet(object.totalAmountShares) ? common_1.MoneyValue.fromJSON(object.totalAmountShares) : undefined,
            totalAmountBonds: isSet(object.totalAmountBonds) ? common_1.MoneyValue.fromJSON(object.totalAmountBonds) : undefined,
            totalAmountEtf: isSet(object.totalAmountEtf) ? common_1.MoneyValue.fromJSON(object.totalAmountEtf) : undefined,
            totalAmountCurrencies: isSet(object.totalAmountCurrencies)
                ? common_1.MoneyValue.fromJSON(object.totalAmountCurrencies)
                : undefined,
            totalAmountFutures: isSet(object.totalAmountFutures) ? common_1.MoneyValue.fromJSON(object.totalAmountFutures) : undefined,
            expectedYield: isSet(object.expectedYield) ? common_1.Quotation.fromJSON(object.expectedYield) : undefined,
            positions: Array.isArray(object === null || object === void 0 ? void 0 : object.positions)
                ? object.positions.map((e) => exports.PortfolioPosition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalAmountShares !== undefined &&
            (obj.totalAmountShares = message.totalAmountShares ? common_1.MoneyValue.toJSON(message.totalAmountShares) : undefined);
        message.totalAmountBonds !== undefined &&
            (obj.totalAmountBonds = message.totalAmountBonds ? common_1.MoneyValue.toJSON(message.totalAmountBonds) : undefined);
        message.totalAmountEtf !== undefined &&
            (obj.totalAmountEtf = message.totalAmountEtf ? common_1.MoneyValue.toJSON(message.totalAmountEtf) : undefined);
        message.totalAmountCurrencies !== undefined &&
            (obj.totalAmountCurrencies = message.totalAmountCurrencies
                ? common_1.MoneyValue.toJSON(message.totalAmountCurrencies)
                : undefined);
        message.totalAmountFutures !== undefined &&
            (obj.totalAmountFutures = message.totalAmountFutures ? common_1.MoneyValue.toJSON(message.totalAmountFutures) : undefined);
        message.expectedYield !== undefined &&
            (obj.expectedYield = message.expectedYield ? common_1.Quotation.toJSON(message.expectedYield) : undefined);
        if (message.positions) {
            obj.positions = message.positions.map(e => (e ? exports.PortfolioPosition.toJSON(e) : undefined));
        }
        else {
            obj.positions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePortfolioResponse();
        message.totalAmountShares =
            object.totalAmountShares !== undefined && object.totalAmountShares !== null
                ? common_1.MoneyValue.fromPartial(object.totalAmountShares)
                : undefined;
        message.totalAmountBonds =
            object.totalAmountBonds !== undefined && object.totalAmountBonds !== null
                ? common_1.MoneyValue.fromPartial(object.totalAmountBonds)
                : undefined;
        message.totalAmountEtf =
            object.totalAmountEtf !== undefined && object.totalAmountEtf !== null
                ? common_1.MoneyValue.fromPartial(object.totalAmountEtf)
                : undefined;
        message.totalAmountCurrencies =
            object.totalAmountCurrencies !== undefined && object.totalAmountCurrencies !== null
                ? common_1.MoneyValue.fromPartial(object.totalAmountCurrencies)
                : undefined;
        message.totalAmountFutures =
            object.totalAmountFutures !== undefined && object.totalAmountFutures !== null
                ? common_1.MoneyValue.fromPartial(object.totalAmountFutures)
                : undefined;
        message.expectedYield =
            object.expectedYield !== undefined && object.expectedYield !== null
                ? common_1.Quotation.fromPartial(object.expectedYield)
                : undefined;
        message.positions = ((_a = object.positions) === null || _a === void 0 ? void 0 : _a.map(e => exports.PortfolioPosition.fromPartial(e))) || [];
        return message;
    },
};
function createBasePositionsRequest() {
    return { accountId: '' };
}
exports.PositionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsRequest();
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
        const message = createBasePositionsRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBasePositionsResponse() {
    return { money: [], blocked: [], securities: [], limitsLoadingInProgress: false, futures: [] };
}
exports.PositionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.money) {
            common_1.MoneyValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.blocked) {
            common_1.MoneyValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.securities) {
            exports.PositionsSecurities.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.limitsLoadingInProgress === true) {
            writer.uint32(32).bool(message.limitsLoadingInProgress);
        }
        for (const v of message.futures) {
            exports.PositionsFutures.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.money.push(common_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.blocked.push(common_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.securities.push(exports.PositionsSecurities.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.limitsLoadingInProgress = reader.bool();
                    break;
                case 5:
                    message.futures.push(exports.PositionsFutures.decode(reader, reader.uint32()));
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
            money: Array.isArray(object === null || object === void 0 ? void 0 : object.money) ? object.money.map((e) => common_1.MoneyValue.fromJSON(e)) : [],
            blocked: Array.isArray(object === null || object === void 0 ? void 0 : object.blocked) ? object.blocked.map((e) => common_1.MoneyValue.fromJSON(e)) : [],
            securities: Array.isArray(object === null || object === void 0 ? void 0 : object.securities)
                ? object.securities.map((e) => exports.PositionsSecurities.fromJSON(e))
                : [],
            limitsLoadingInProgress: isSet(object.limitsLoadingInProgress) ? Boolean(object.limitsLoadingInProgress) : false,
            futures: Array.isArray(object === null || object === void 0 ? void 0 : object.futures) ? object.futures.map((e) => exports.PositionsFutures.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.money) {
            obj.money = message.money.map(e => (e ? common_1.MoneyValue.toJSON(e) : undefined));
        }
        else {
            obj.money = [];
        }
        if (message.blocked) {
            obj.blocked = message.blocked.map(e => (e ? common_1.MoneyValue.toJSON(e) : undefined));
        }
        else {
            obj.blocked = [];
        }
        if (message.securities) {
            obj.securities = message.securities.map(e => (e ? exports.PositionsSecurities.toJSON(e) : undefined));
        }
        else {
            obj.securities = [];
        }
        message.limitsLoadingInProgress !== undefined && (obj.limitsLoadingInProgress = message.limitsLoadingInProgress);
        if (message.futures) {
            obj.futures = message.futures.map(e => (e ? exports.PositionsFutures.toJSON(e) : undefined));
        }
        else {
            obj.futures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePositionsResponse();
        message.money = ((_a = object.money) === null || _a === void 0 ? void 0 : _a.map(e => common_1.MoneyValue.fromPartial(e))) || [];
        message.blocked = ((_b = object.blocked) === null || _b === void 0 ? void 0 : _b.map(e => common_1.MoneyValue.fromPartial(e))) || [];
        message.securities = ((_c = object.securities) === null || _c === void 0 ? void 0 : _c.map(e => exports.PositionsSecurities.fromPartial(e))) || [];
        message.limitsLoadingInProgress = (_d = object.limitsLoadingInProgress) !== null && _d !== void 0 ? _d : false;
        message.futures = ((_e = object.futures) === null || _e === void 0 ? void 0 : _e.map(e => exports.PositionsFutures.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWithdrawLimitsRequest() {
    return { accountId: '' };
}
exports.WithdrawLimitsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawLimitsRequest();
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
        const message = createBaseWithdrawLimitsRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseWithdrawLimitsResponse() {
    return { money: [], blocked: [], blockedGuarantee: [] };
}
exports.WithdrawLimitsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.money) {
            common_1.MoneyValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.blocked) {
            common_1.MoneyValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.blockedGuarantee) {
            common_1.MoneyValue.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawLimitsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.money.push(common_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.blocked.push(common_1.MoneyValue.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.blockedGuarantee.push(common_1.MoneyValue.decode(reader, reader.uint32()));
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
            money: Array.isArray(object === null || object === void 0 ? void 0 : object.money) ? object.money.map((e) => common_1.MoneyValue.fromJSON(e)) : [],
            blocked: Array.isArray(object === null || object === void 0 ? void 0 : object.blocked) ? object.blocked.map((e) => common_1.MoneyValue.fromJSON(e)) : [],
            blockedGuarantee: Array.isArray(object === null || object === void 0 ? void 0 : object.blockedGuarantee)
                ? object.blockedGuarantee.map((e) => common_1.MoneyValue.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.money) {
            obj.money = message.money.map(e => (e ? common_1.MoneyValue.toJSON(e) : undefined));
        }
        else {
            obj.money = [];
        }
        if (message.blocked) {
            obj.blocked = message.blocked.map(e => (e ? common_1.MoneyValue.toJSON(e) : undefined));
        }
        else {
            obj.blocked = [];
        }
        if (message.blockedGuarantee) {
            obj.blockedGuarantee = message.blockedGuarantee.map(e => (e ? common_1.MoneyValue.toJSON(e) : undefined));
        }
        else {
            obj.blockedGuarantee = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseWithdrawLimitsResponse();
        message.money = ((_a = object.money) === null || _a === void 0 ? void 0 : _a.map(e => common_1.MoneyValue.fromPartial(e))) || [];
        message.blocked = ((_b = object.blocked) === null || _b === void 0 ? void 0 : _b.map(e => common_1.MoneyValue.fromPartial(e))) || [];
        message.blockedGuarantee = ((_c = object.blockedGuarantee) === null || _c === void 0 ? void 0 : _c.map(e => common_1.MoneyValue.fromPartial(e))) || [];
        return message;
    },
};
function createBasePortfolioPosition() {
    return {
        figi: '',
        instrumentType: '',
        quantity: undefined,
        averagePositionPrice: undefined,
        expectedYield: undefined,
        currentNkd: undefined,
        averagePositionPricePt: undefined,
        currentPrice: undefined,
        averagePositionPriceFifo: undefined,
        quantityLots: undefined,
    };
}
exports.PortfolioPosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.instrumentType !== '') {
            writer.uint32(18).string(message.instrumentType);
        }
        if (message.quantity !== undefined) {
            common_1.Quotation.encode(message.quantity, writer.uint32(26).fork()).ldelim();
        }
        if (message.averagePositionPrice !== undefined) {
            common_1.MoneyValue.encode(message.averagePositionPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.expectedYield !== undefined) {
            common_1.Quotation.encode(message.expectedYield, writer.uint32(42).fork()).ldelim();
        }
        if (message.currentNkd !== undefined) {
            common_1.MoneyValue.encode(message.currentNkd, writer.uint32(50).fork()).ldelim();
        }
        if (message.averagePositionPricePt !== undefined) {
            common_1.Quotation.encode(message.averagePositionPricePt, writer.uint32(58).fork()).ldelim();
        }
        if (message.currentPrice !== undefined) {
            common_1.MoneyValue.encode(message.currentPrice, writer.uint32(66).fork()).ldelim();
        }
        if (message.averagePositionPriceFifo !== undefined) {
            common_1.MoneyValue.encode(message.averagePositionPriceFifo, writer.uint32(74).fork()).ldelim();
        }
        if (message.quantityLots !== undefined) {
            common_1.Quotation.encode(message.quantityLots, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortfolioPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.instrumentType = reader.string();
                    break;
                case 3:
                    message.quantity = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.averagePositionPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.expectedYield = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.currentNkd = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.averagePositionPricePt = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.currentPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.averagePositionPriceFifo = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.quantityLots = common_1.Quotation.decode(reader, reader.uint32());
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
            instrumentType: isSet(object.instrumentType) ? String(object.instrumentType) : '',
            quantity: isSet(object.quantity) ? common_1.Quotation.fromJSON(object.quantity) : undefined,
            averagePositionPrice: isSet(object.averagePositionPrice)
                ? common_1.MoneyValue.fromJSON(object.averagePositionPrice)
                : undefined,
            expectedYield: isSet(object.expectedYield) ? common_1.Quotation.fromJSON(object.expectedYield) : undefined,
            currentNkd: isSet(object.currentNkd) ? common_1.MoneyValue.fromJSON(object.currentNkd) : undefined,
            averagePositionPricePt: isSet(object.averagePositionPricePt)
                ? common_1.Quotation.fromJSON(object.averagePositionPricePt)
                : undefined,
            currentPrice: isSet(object.currentPrice) ? common_1.MoneyValue.fromJSON(object.currentPrice) : undefined,
            averagePositionPriceFifo: isSet(object.averagePositionPriceFifo)
                ? common_1.MoneyValue.fromJSON(object.averagePositionPriceFifo)
                : undefined,
            quantityLots: isSet(object.quantityLots) ? common_1.Quotation.fromJSON(object.quantityLots) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentType !== undefined && (obj.instrumentType = message.instrumentType);
        message.quantity !== undefined &&
            (obj.quantity = message.quantity ? common_1.Quotation.toJSON(message.quantity) : undefined);
        message.averagePositionPrice !== undefined &&
            (obj.averagePositionPrice = message.averagePositionPrice
                ? common_1.MoneyValue.toJSON(message.averagePositionPrice)
                : undefined);
        message.expectedYield !== undefined &&
            (obj.expectedYield = message.expectedYield ? common_1.Quotation.toJSON(message.expectedYield) : undefined);
        message.currentNkd !== undefined &&
            (obj.currentNkd = message.currentNkd ? common_1.MoneyValue.toJSON(message.currentNkd) : undefined);
        message.averagePositionPricePt !== undefined &&
            (obj.averagePositionPricePt = message.averagePositionPricePt
                ? common_1.Quotation.toJSON(message.averagePositionPricePt)
                : undefined);
        message.currentPrice !== undefined &&
            (obj.currentPrice = message.currentPrice ? common_1.MoneyValue.toJSON(message.currentPrice) : undefined);
        message.averagePositionPriceFifo !== undefined &&
            (obj.averagePositionPriceFifo = message.averagePositionPriceFifo
                ? common_1.MoneyValue.toJSON(message.averagePositionPriceFifo)
                : undefined);
        message.quantityLots !== undefined &&
            (obj.quantityLots = message.quantityLots ? common_1.Quotation.toJSON(message.quantityLots) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePortfolioPosition();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.instrumentType = (_b = object.instrumentType) !== null && _b !== void 0 ? _b : '';
        message.quantity =
            object.quantity !== undefined && object.quantity !== null ? common_1.Quotation.fromPartial(object.quantity) : undefined;
        message.averagePositionPrice =
            object.averagePositionPrice !== undefined && object.averagePositionPrice !== null
                ? common_1.MoneyValue.fromPartial(object.averagePositionPrice)
                : undefined;
        message.expectedYield =
            object.expectedYield !== undefined && object.expectedYield !== null
                ? common_1.Quotation.fromPartial(object.expectedYield)
                : undefined;
        message.currentNkd =
            object.currentNkd !== undefined && object.currentNkd !== null
                ? common_1.MoneyValue.fromPartial(object.currentNkd)
                : undefined;
        message.averagePositionPricePt =
            object.averagePositionPricePt !== undefined && object.averagePositionPricePt !== null
                ? common_1.Quotation.fromPartial(object.averagePositionPricePt)
                : undefined;
        message.currentPrice =
            object.currentPrice !== undefined && object.currentPrice !== null
                ? common_1.MoneyValue.fromPartial(object.currentPrice)
                : undefined;
        message.averagePositionPriceFifo =
            object.averagePositionPriceFifo !== undefined && object.averagePositionPriceFifo !== null
                ? common_1.MoneyValue.fromPartial(object.averagePositionPriceFifo)
                : undefined;
        message.quantityLots =
            object.quantityLots !== undefined && object.quantityLots !== null
                ? common_1.Quotation.fromPartial(object.quantityLots)
                : undefined;
        return message;
    },
};
function createBasePositionsSecurities() {
    return { figi: '', blocked: 0, balance: 0 };
}
exports.PositionsSecurities = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.blocked !== 0) {
            writer.uint32(16).int64(message.blocked);
        }
        if (message.balance !== 0) {
            writer.uint32(24).int64(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsSecurities();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.blocked = longToNumber(reader.int64());
                    break;
                case 3:
                    message.balance = longToNumber(reader.int64());
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
            blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
            balance: isSet(object.balance) ? Number(object.balance) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.blocked !== undefined && (obj.blocked = Math.round(message.blocked));
        message.balance !== undefined && (obj.balance = Math.round(message.balance));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePositionsSecurities();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.blocked = (_b = object.blocked) !== null && _b !== void 0 ? _b : 0;
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBasePositionsFutures() {
    return { figi: '', blocked: 0, balance: 0 };
}
exports.PositionsFutures = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.blocked !== 0) {
            writer.uint32(16).int64(message.blocked);
        }
        if (message.balance !== 0) {
            writer.uint32(24).int64(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionsFutures();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.blocked = longToNumber(reader.int64());
                    break;
                case 3:
                    message.balance = longToNumber(reader.int64());
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
            blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
            balance: isSet(object.balance) ? Number(object.balance) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.blocked !== undefined && (obj.blocked = Math.round(message.blocked));
        message.balance !== undefined && (obj.balance = Math.round(message.balance));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePositionsFutures();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.blocked = (_b = object.blocked) !== null && _b !== void 0 ? _b : 0;
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseBrokerReportRequest() {
    return { generateBrokerReportRequest: undefined, getBrokerReportRequest: undefined };
}
exports.BrokerReportRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.generateBrokerReportRequest !== undefined) {
            exports.GenerateBrokerReportRequest.encode(message.generateBrokerReportRequest, writer.uint32(10).fork()).ldelim();
        }
        if (message.getBrokerReportRequest !== undefined) {
            exports.GetBrokerReportRequest.encode(message.getBrokerReportRequest, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrokerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateBrokerReportRequest = exports.GenerateBrokerReportRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getBrokerReportRequest = exports.GetBrokerReportRequest.decode(reader, reader.uint32());
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
            generateBrokerReportRequest: isSet(object.generateBrokerReportRequest)
                ? exports.GenerateBrokerReportRequest.fromJSON(object.generateBrokerReportRequest)
                : undefined,
            getBrokerReportRequest: isSet(object.getBrokerReportRequest)
                ? exports.GetBrokerReportRequest.fromJSON(object.getBrokerReportRequest)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateBrokerReportRequest !== undefined &&
            (obj.generateBrokerReportRequest = message.generateBrokerReportRequest
                ? exports.GenerateBrokerReportRequest.toJSON(message.generateBrokerReportRequest)
                : undefined);
        message.getBrokerReportRequest !== undefined &&
            (obj.getBrokerReportRequest = message.getBrokerReportRequest
                ? exports.GetBrokerReportRequest.toJSON(message.getBrokerReportRequest)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBrokerReportRequest();
        message.generateBrokerReportRequest =
            object.generateBrokerReportRequest !== undefined && object.generateBrokerReportRequest !== null
                ? exports.GenerateBrokerReportRequest.fromPartial(object.generateBrokerReportRequest)
                : undefined;
        message.getBrokerReportRequest =
            object.getBrokerReportRequest !== undefined && object.getBrokerReportRequest !== null
                ? exports.GetBrokerReportRequest.fromPartial(object.getBrokerReportRequest)
                : undefined;
        return message;
    },
};
function createBaseBrokerReportResponse() {
    return { generateBrokerReportResponse: undefined, getBrokerReportResponse: undefined };
}
exports.BrokerReportResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.generateBrokerReportResponse !== undefined) {
            exports.GenerateBrokerReportResponse.encode(message.generateBrokerReportResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.getBrokerReportResponse !== undefined) {
            exports.GetBrokerReportResponse.encode(message.getBrokerReportResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrokerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateBrokerReportResponse = exports.GenerateBrokerReportResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getBrokerReportResponse = exports.GetBrokerReportResponse.decode(reader, reader.uint32());
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
            generateBrokerReportResponse: isSet(object.generateBrokerReportResponse)
                ? exports.GenerateBrokerReportResponse.fromJSON(object.generateBrokerReportResponse)
                : undefined,
            getBrokerReportResponse: isSet(object.getBrokerReportResponse)
                ? exports.GetBrokerReportResponse.fromJSON(object.getBrokerReportResponse)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateBrokerReportResponse !== undefined &&
            (obj.generateBrokerReportResponse = message.generateBrokerReportResponse
                ? exports.GenerateBrokerReportResponse.toJSON(message.generateBrokerReportResponse)
                : undefined);
        message.getBrokerReportResponse !== undefined &&
            (obj.getBrokerReportResponse = message.getBrokerReportResponse
                ? exports.GetBrokerReportResponse.toJSON(message.getBrokerReportResponse)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBrokerReportResponse();
        message.generateBrokerReportResponse =
            object.generateBrokerReportResponse !== undefined && object.generateBrokerReportResponse !== null
                ? exports.GenerateBrokerReportResponse.fromPartial(object.generateBrokerReportResponse)
                : undefined;
        message.getBrokerReportResponse =
            object.getBrokerReportResponse !== undefined && object.getBrokerReportResponse !== null
                ? exports.GetBrokerReportResponse.fromPartial(object.getBrokerReportResponse)
                : undefined;
        return message;
    },
};
function createBaseGenerateBrokerReportRequest() {
    return { accountId: '', from: undefined, to: undefined };
}
exports.GenerateBrokerReportRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
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
        const message = createBaseGenerateBrokerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
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
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenerateBrokerReportRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGenerateBrokerReportResponse() {
    return { taskId: '' };
}
exports.GenerateBrokerReportResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateBrokerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
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
            taskId: isSet(object.taskId) ? String(object.taskId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenerateBrokerReportResponse();
        message.taskId = (_a = object.taskId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetBrokerReportRequest() {
    return { taskId: '', page: 0 };
}
exports.GetBrokerReportRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.page !== 0) {
            writer.uint32(16).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBrokerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.page = reader.int32();
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
            taskId: isSet(object.taskId) ? String(object.taskId) : '',
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetBrokerReportRequest();
        message.taskId = (_a = object.taskId) !== null && _a !== void 0 ? _a : '';
        message.page = (_b = object.page) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGetBrokerReportResponse() {
    return { brokerReport: [], itemsCount: 0, pagesCount: 0, page: 0 };
}
exports.GetBrokerReportResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.brokerReport) {
            exports.BrokerReport.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.itemsCount !== 0) {
            writer.uint32(16).int32(message.itemsCount);
        }
        if (message.pagesCount !== 0) {
            writer.uint32(24).int32(message.pagesCount);
        }
        if (message.page !== 0) {
            writer.uint32(32).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBrokerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.brokerReport.push(exports.BrokerReport.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.itemsCount = reader.int32();
                    break;
                case 3:
                    message.pagesCount = reader.int32();
                    break;
                case 4:
                    message.page = reader.int32();
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
            brokerReport: Array.isArray(object === null || object === void 0 ? void 0 : object.brokerReport)
                ? object.brokerReport.map((e) => exports.BrokerReport.fromJSON(e))
                : [],
            itemsCount: isSet(object.itemsCount) ? Number(object.itemsCount) : 0,
            pagesCount: isSet(object.pagesCount) ? Number(object.pagesCount) : 0,
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.brokerReport) {
            obj.brokerReport = message.brokerReport.map(e => (e ? exports.BrokerReport.toJSON(e) : undefined));
        }
        else {
            obj.brokerReport = [];
        }
        message.itemsCount !== undefined && (obj.itemsCount = Math.round(message.itemsCount));
        message.pagesCount !== undefined && (obj.pagesCount = Math.round(message.pagesCount));
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetBrokerReportResponse();
        message.brokerReport = ((_a = object.brokerReport) === null || _a === void 0 ? void 0 : _a.map(e => exports.BrokerReport.fromPartial(e))) || [];
        message.itemsCount = (_b = object.itemsCount) !== null && _b !== void 0 ? _b : 0;
        message.pagesCount = (_c = object.pagesCount) !== null && _c !== void 0 ? _c : 0;
        message.page = (_d = object.page) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseBrokerReport() {
    return {
        tradeId: '',
        orderId: '',
        figi: '',
        executeSign: '',
        tradeDatetime: undefined,
        exchange: '',
        classCode: '',
        direction: '',
        name: '',
        ticker: '',
        price: undefined,
        quantity: 0,
        orderAmount: undefined,
        aciValue: undefined,
        totalOrderAmount: undefined,
        brokerCommission: undefined,
        exchangeCommission: undefined,
        exchangeClearingCommission: undefined,
        repoRate: undefined,
        party: '',
        clearValueDate: undefined,
        secValueDate: undefined,
        brokerStatus: '',
        separateAgreementType: '',
        separateAgreementNumber: '',
        separateAgreementDate: '',
        deliveryType: '',
    };
}
exports.BrokerReport = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tradeId !== '') {
            writer.uint32(10).string(message.tradeId);
        }
        if (message.orderId !== '') {
            writer.uint32(18).string(message.orderId);
        }
        if (message.figi !== '') {
            writer.uint32(26).string(message.figi);
        }
        if (message.executeSign !== '') {
            writer.uint32(34).string(message.executeSign);
        }
        if (message.tradeDatetime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.tradeDatetime), writer.uint32(42).fork()).ldelim();
        }
        if (message.exchange !== '') {
            writer.uint32(50).string(message.exchange);
        }
        if (message.classCode !== '') {
            writer.uint32(58).string(message.classCode);
        }
        if (message.direction !== '') {
            writer.uint32(66).string(message.direction);
        }
        if (message.name !== '') {
            writer.uint32(74).string(message.name);
        }
        if (message.ticker !== '') {
            writer.uint32(82).string(message.ticker);
        }
        if (message.price !== undefined) {
            common_1.MoneyValue.encode(message.price, writer.uint32(90).fork()).ldelim();
        }
        if (message.quantity !== 0) {
            writer.uint32(96).int64(message.quantity);
        }
        if (message.orderAmount !== undefined) {
            common_1.MoneyValue.encode(message.orderAmount, writer.uint32(106).fork()).ldelim();
        }
        if (message.aciValue !== undefined) {
            common_1.Quotation.encode(message.aciValue, writer.uint32(114).fork()).ldelim();
        }
        if (message.totalOrderAmount !== undefined) {
            common_1.MoneyValue.encode(message.totalOrderAmount, writer.uint32(122).fork()).ldelim();
        }
        if (message.brokerCommission !== undefined) {
            common_1.MoneyValue.encode(message.brokerCommission, writer.uint32(130).fork()).ldelim();
        }
        if (message.exchangeCommission !== undefined) {
            common_1.MoneyValue.encode(message.exchangeCommission, writer.uint32(138).fork()).ldelim();
        }
        if (message.exchangeClearingCommission !== undefined) {
            common_1.MoneyValue.encode(message.exchangeClearingCommission, writer.uint32(146).fork()).ldelim();
        }
        if (message.repoRate !== undefined) {
            common_1.Quotation.encode(message.repoRate, writer.uint32(154).fork()).ldelim();
        }
        if (message.party !== '') {
            writer.uint32(162).string(message.party);
        }
        if (message.clearValueDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.clearValueDate), writer.uint32(170).fork()).ldelim();
        }
        if (message.secValueDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.secValueDate), writer.uint32(178).fork()).ldelim();
        }
        if (message.brokerStatus !== '') {
            writer.uint32(186).string(message.brokerStatus);
        }
        if (message.separateAgreementType !== '') {
            writer.uint32(194).string(message.separateAgreementType);
        }
        if (message.separateAgreementNumber !== '') {
            writer.uint32(202).string(message.separateAgreementNumber);
        }
        if (message.separateAgreementDate !== '') {
            writer.uint32(210).string(message.separateAgreementDate);
        }
        if (message.deliveryType !== '') {
            writer.uint32(218).string(message.deliveryType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrokerReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradeId = reader.string();
                    break;
                case 2:
                    message.orderId = reader.string();
                    break;
                case 3:
                    message.figi = reader.string();
                    break;
                case 4:
                    message.executeSign = reader.string();
                    break;
                case 5:
                    message.tradeDatetime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.exchange = reader.string();
                    break;
                case 7:
                    message.classCode = reader.string();
                    break;
                case 8:
                    message.direction = reader.string();
                    break;
                case 9:
                    message.name = reader.string();
                    break;
                case 10:
                    message.ticker = reader.string();
                    break;
                case 11:
                    message.price = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 13:
                    message.orderAmount = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.aciValue = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.totalOrderAmount = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.brokerCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.exchangeCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.exchangeClearingCommission = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.repoRate = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.party = reader.string();
                    break;
                case 21:
                    message.clearValueDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.secValueDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.brokerStatus = reader.string();
                    break;
                case 24:
                    message.separateAgreementType = reader.string();
                    break;
                case 25:
                    message.separateAgreementNumber = reader.string();
                    break;
                case 26:
                    message.separateAgreementDate = reader.string();
                    break;
                case 27:
                    message.deliveryType = reader.string();
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
            tradeId: isSet(object.tradeId) ? String(object.tradeId) : '',
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
            figi: isSet(object.figi) ? String(object.figi) : '',
            executeSign: isSet(object.executeSign) ? String(object.executeSign) : '',
            tradeDatetime: isSet(object.tradeDatetime) ? fromJsonTimestamp(object.tradeDatetime) : undefined,
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            direction: isSet(object.direction) ? String(object.direction) : '',
            name: isSet(object.name) ? String(object.name) : '',
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            price: isSet(object.price) ? common_1.MoneyValue.fromJSON(object.price) : undefined,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            orderAmount: isSet(object.orderAmount) ? common_1.MoneyValue.fromJSON(object.orderAmount) : undefined,
            aciValue: isSet(object.aciValue) ? common_1.Quotation.fromJSON(object.aciValue) : undefined,
            totalOrderAmount: isSet(object.totalOrderAmount) ? common_1.MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
            brokerCommission: isSet(object.brokerCommission) ? common_1.MoneyValue.fromJSON(object.brokerCommission) : undefined,
            exchangeCommission: isSet(object.exchangeCommission) ? common_1.MoneyValue.fromJSON(object.exchangeCommission) : undefined,
            exchangeClearingCommission: isSet(object.exchangeClearingCommission)
                ? common_1.MoneyValue.fromJSON(object.exchangeClearingCommission)
                : undefined,
            repoRate: isSet(object.repoRate) ? common_1.Quotation.fromJSON(object.repoRate) : undefined,
            party: isSet(object.party) ? String(object.party) : '',
            clearValueDate: isSet(object.clearValueDate) ? fromJsonTimestamp(object.clearValueDate) : undefined,
            secValueDate: isSet(object.secValueDate) ? fromJsonTimestamp(object.secValueDate) : undefined,
            brokerStatus: isSet(object.brokerStatus) ? String(object.brokerStatus) : '',
            separateAgreementType: isSet(object.separateAgreementType) ? String(object.separateAgreementType) : '',
            separateAgreementNumber: isSet(object.separateAgreementNumber) ? String(object.separateAgreementNumber) : '',
            separateAgreementDate: isSet(object.separateAgreementDate) ? String(object.separateAgreementDate) : '',
            deliveryType: isSet(object.deliveryType) ? String(object.deliveryType) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.tradeId !== undefined && (obj.tradeId = message.tradeId);
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.figi !== undefined && (obj.figi = message.figi);
        message.executeSign !== undefined && (obj.executeSign = message.executeSign);
        message.tradeDatetime !== undefined && (obj.tradeDatetime = message.tradeDatetime.toISOString());
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.direction !== undefined && (obj.direction = message.direction);
        message.name !== undefined && (obj.name = message.name);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.price !== undefined && (obj.price = message.price ? common_1.MoneyValue.toJSON(message.price) : undefined);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.orderAmount !== undefined &&
            (obj.orderAmount = message.orderAmount ? common_1.MoneyValue.toJSON(message.orderAmount) : undefined);
        message.aciValue !== undefined &&
            (obj.aciValue = message.aciValue ? common_1.Quotation.toJSON(message.aciValue) : undefined);
        message.totalOrderAmount !== undefined &&
            (obj.totalOrderAmount = message.totalOrderAmount ? common_1.MoneyValue.toJSON(message.totalOrderAmount) : undefined);
        message.brokerCommission !== undefined &&
            (obj.brokerCommission = message.brokerCommission ? common_1.MoneyValue.toJSON(message.brokerCommission) : undefined);
        message.exchangeCommission !== undefined &&
            (obj.exchangeCommission = message.exchangeCommission ? common_1.MoneyValue.toJSON(message.exchangeCommission) : undefined);
        message.exchangeClearingCommission !== undefined &&
            (obj.exchangeClearingCommission = message.exchangeClearingCommission
                ? common_1.MoneyValue.toJSON(message.exchangeClearingCommission)
                : undefined);
        message.repoRate !== undefined &&
            (obj.repoRate = message.repoRate ? common_1.Quotation.toJSON(message.repoRate) : undefined);
        message.party !== undefined && (obj.party = message.party);
        message.clearValueDate !== undefined && (obj.clearValueDate = message.clearValueDate.toISOString());
        message.secValueDate !== undefined && (obj.secValueDate = message.secValueDate.toISOString());
        message.brokerStatus !== undefined && (obj.brokerStatus = message.brokerStatus);
        message.separateAgreementType !== undefined && (obj.separateAgreementType = message.separateAgreementType);
        message.separateAgreementNumber !== undefined && (obj.separateAgreementNumber = message.separateAgreementNumber);
        message.separateAgreementDate !== undefined && (obj.separateAgreementDate = message.separateAgreementDate);
        message.deliveryType !== undefined && (obj.deliveryType = message.deliveryType);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        const message = createBaseBrokerReport();
        message.tradeId = (_a = object.tradeId) !== null && _a !== void 0 ? _a : '';
        message.orderId = (_b = object.orderId) !== null && _b !== void 0 ? _b : '';
        message.figi = (_c = object.figi) !== null && _c !== void 0 ? _c : '';
        message.executeSign = (_d = object.executeSign) !== null && _d !== void 0 ? _d : '';
        message.tradeDatetime = (_e = object.tradeDatetime) !== null && _e !== void 0 ? _e : undefined;
        message.exchange = (_f = object.exchange) !== null && _f !== void 0 ? _f : '';
        message.classCode = (_g = object.classCode) !== null && _g !== void 0 ? _g : '';
        message.direction = (_h = object.direction) !== null && _h !== void 0 ? _h : '';
        message.name = (_j = object.name) !== null && _j !== void 0 ? _j : '';
        message.ticker = (_k = object.ticker) !== null && _k !== void 0 ? _k : '';
        message.price =
            object.price !== undefined && object.price !== null ? common_1.MoneyValue.fromPartial(object.price) : undefined;
        message.quantity = (_l = object.quantity) !== null && _l !== void 0 ? _l : 0;
        message.orderAmount =
            object.orderAmount !== undefined && object.orderAmount !== null
                ? common_1.MoneyValue.fromPartial(object.orderAmount)
                : undefined;
        message.aciValue =
            object.aciValue !== undefined && object.aciValue !== null ? common_1.Quotation.fromPartial(object.aciValue) : undefined;
        message.totalOrderAmount =
            object.totalOrderAmount !== undefined && object.totalOrderAmount !== null
                ? common_1.MoneyValue.fromPartial(object.totalOrderAmount)
                : undefined;
        message.brokerCommission =
            object.brokerCommission !== undefined && object.brokerCommission !== null
                ? common_1.MoneyValue.fromPartial(object.brokerCommission)
                : undefined;
        message.exchangeCommission =
            object.exchangeCommission !== undefined && object.exchangeCommission !== null
                ? common_1.MoneyValue.fromPartial(object.exchangeCommission)
                : undefined;
        message.exchangeClearingCommission =
            object.exchangeClearingCommission !== undefined && object.exchangeClearingCommission !== null
                ? common_1.MoneyValue.fromPartial(object.exchangeClearingCommission)
                : undefined;
        message.repoRate =
            object.repoRate !== undefined && object.repoRate !== null ? common_1.Quotation.fromPartial(object.repoRate) : undefined;
        message.party = (_m = object.party) !== null && _m !== void 0 ? _m : '';
        message.clearValueDate = (_o = object.clearValueDate) !== null && _o !== void 0 ? _o : undefined;
        message.secValueDate = (_p = object.secValueDate) !== null && _p !== void 0 ? _p : undefined;
        message.brokerStatus = (_q = object.brokerStatus) !== null && _q !== void 0 ? _q : '';
        message.separateAgreementType = (_r = object.separateAgreementType) !== null && _r !== void 0 ? _r : '';
        message.separateAgreementNumber = (_s = object.separateAgreementNumber) !== null && _s !== void 0 ? _s : '';
        message.separateAgreementDate = (_t = object.separateAgreementDate) !== null && _t !== void 0 ? _t : '';
        message.deliveryType = (_u = object.deliveryType) !== null && _u !== void 0 ? _u : '';
        return message;
    },
};
function createBaseGetDividendsForeignIssuerRequest() {
    return { generateDivForeignIssuerReport: undefined, getDivForeignIssuerReport: undefined };
}
exports.GetDividendsForeignIssuerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.generateDivForeignIssuerReport !== undefined) {
            exports.GenerateDividendsForeignIssuerReportRequest.encode(message.generateDivForeignIssuerReport, writer.uint32(10).fork()).ldelim();
        }
        if (message.getDivForeignIssuerReport !== undefined) {
            exports.GetDividendsForeignIssuerReportRequest.encode(message.getDivForeignIssuerReport, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateDivForeignIssuerReport = exports.GenerateDividendsForeignIssuerReportRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.getDivForeignIssuerReport = exports.GetDividendsForeignIssuerReportRequest.decode(reader, reader.uint32());
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
            generateDivForeignIssuerReport: isSet(object.generateDivForeignIssuerReport)
                ? exports.GenerateDividendsForeignIssuerReportRequest.fromJSON(object.generateDivForeignIssuerReport)
                : undefined,
            getDivForeignIssuerReport: isSet(object.getDivForeignIssuerReport)
                ? exports.GetDividendsForeignIssuerReportRequest.fromJSON(object.getDivForeignIssuerReport)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateDivForeignIssuerReport !== undefined &&
            (obj.generateDivForeignIssuerReport = message.generateDivForeignIssuerReport
                ? exports.GenerateDividendsForeignIssuerReportRequest.toJSON(message.generateDivForeignIssuerReport)
                : undefined);
        message.getDivForeignIssuerReport !== undefined &&
            (obj.getDivForeignIssuerReport = message.getDivForeignIssuerReport
                ? exports.GetDividendsForeignIssuerReportRequest.toJSON(message.getDivForeignIssuerReport)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetDividendsForeignIssuerRequest();
        message.generateDivForeignIssuerReport =
            object.generateDivForeignIssuerReport !== undefined && object.generateDivForeignIssuerReport !== null
                ? exports.GenerateDividendsForeignIssuerReportRequest.fromPartial(object.generateDivForeignIssuerReport)
                : undefined;
        message.getDivForeignIssuerReport =
            object.getDivForeignIssuerReport !== undefined && object.getDivForeignIssuerReport !== null
                ? exports.GetDividendsForeignIssuerReportRequest.fromPartial(object.getDivForeignIssuerReport)
                : undefined;
        return message;
    },
};
function createBaseGetDividendsForeignIssuerResponse() {
    return { generateDivForeignIssuerReportResponse: undefined, divForeignIssuerReport: undefined };
}
exports.GetDividendsForeignIssuerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.generateDivForeignIssuerReportResponse !== undefined) {
            exports.GenerateDividendsForeignIssuerReportResponse.encode(message.generateDivForeignIssuerReportResponse, writer.uint32(10).fork()).ldelim();
        }
        if (message.divForeignIssuerReport !== undefined) {
            exports.GetDividendsForeignIssuerReportResponse.encode(message.divForeignIssuerReport, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.generateDivForeignIssuerReportResponse = exports.GenerateDividendsForeignIssuerReportResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.divForeignIssuerReport = exports.GetDividendsForeignIssuerReportResponse.decode(reader, reader.uint32());
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
            generateDivForeignIssuerReportResponse: isSet(object.generateDivForeignIssuerReportResponse)
                ? exports.GenerateDividendsForeignIssuerReportResponse.fromJSON(object.generateDivForeignIssuerReportResponse)
                : undefined,
            divForeignIssuerReport: isSet(object.divForeignIssuerReport)
                ? exports.GetDividendsForeignIssuerReportResponse.fromJSON(object.divForeignIssuerReport)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.generateDivForeignIssuerReportResponse !== undefined &&
            (obj.generateDivForeignIssuerReportResponse = message.generateDivForeignIssuerReportResponse
                ? exports.GenerateDividendsForeignIssuerReportResponse.toJSON(message.generateDivForeignIssuerReportResponse)
                : undefined);
        message.divForeignIssuerReport !== undefined &&
            (obj.divForeignIssuerReport = message.divForeignIssuerReport
                ? exports.GetDividendsForeignIssuerReportResponse.toJSON(message.divForeignIssuerReport)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetDividendsForeignIssuerResponse();
        message.generateDivForeignIssuerReportResponse =
            object.generateDivForeignIssuerReportResponse !== undefined &&
                object.generateDivForeignIssuerReportResponse !== null
                ? exports.GenerateDividendsForeignIssuerReportResponse.fromPartial(object.generateDivForeignIssuerReportResponse)
                : undefined;
        message.divForeignIssuerReport =
            object.divForeignIssuerReport !== undefined && object.divForeignIssuerReport !== null
                ? exports.GetDividendsForeignIssuerReportResponse.fromPartial(object.divForeignIssuerReport)
                : undefined;
        return message;
    },
};
function createBaseGenerateDividendsForeignIssuerReportRequest() {
    return { accountId: '', from: undefined, to: undefined };
}
exports.GenerateDividendsForeignIssuerReportRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== '') {
            writer.uint32(10).string(message.accountId);
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
        const message = createBaseGenerateDividendsForeignIssuerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
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
            accountId: isSet(object.accountId) ? String(object.accountId) : '',
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenerateDividendsForeignIssuerReportRequest();
        message.accountId = (_a = object.accountId) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetDividendsForeignIssuerReportRequest() {
    return { taskId: '', page: 0 };
}
exports.GetDividendsForeignIssuerReportRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        if (message.page !== 0) {
            writer.uint32(16).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerReportRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
                    break;
                case 2:
                    message.page = reader.int32();
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
            taskId: isSet(object.taskId) ? String(object.taskId) : '',
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetDividendsForeignIssuerReportRequest();
        message.taskId = (_a = object.taskId) !== null && _a !== void 0 ? _a : '';
        message.page = (_b = object.page) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseGenerateDividendsForeignIssuerReportResponse() {
    return { taskId: '' };
}
exports.GenerateDividendsForeignIssuerReportResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.taskId !== '') {
            writer.uint32(10).string(message.taskId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenerateDividendsForeignIssuerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.string();
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
            taskId: isSet(object.taskId) ? String(object.taskId) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.taskId !== undefined && (obj.taskId = message.taskId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenerateDividendsForeignIssuerReportResponse();
        message.taskId = (_a = object.taskId) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetDividendsForeignIssuerReportResponse() {
    return { dividendsForeignIssuerReport: [], itemsCount: 0, pagesCount: 0, page: 0 };
}
exports.GetDividendsForeignIssuerReportResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.dividendsForeignIssuerReport) {
            exports.DividendsForeignIssuerReport.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.itemsCount !== 0) {
            writer.uint32(16).int32(message.itemsCount);
        }
        if (message.pagesCount !== 0) {
            writer.uint32(24).int32(message.pagesCount);
        }
        if (message.page !== 0) {
            writer.uint32(32).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsForeignIssuerReportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dividendsForeignIssuerReport.push(exports.DividendsForeignIssuerReport.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.itemsCount = reader.int32();
                    break;
                case 3:
                    message.pagesCount = reader.int32();
                    break;
                case 4:
                    message.page = reader.int32();
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
            dividendsForeignIssuerReport: Array.isArray(object === null || object === void 0 ? void 0 : object.dividendsForeignIssuerReport)
                ? object.dividendsForeignIssuerReport.map((e) => exports.DividendsForeignIssuerReport.fromJSON(e))
                : [],
            itemsCount: isSet(object.itemsCount) ? Number(object.itemsCount) : 0,
            pagesCount: isSet(object.pagesCount) ? Number(object.pagesCount) : 0,
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.dividendsForeignIssuerReport) {
            obj.dividendsForeignIssuerReport = message.dividendsForeignIssuerReport.map(e => e ? exports.DividendsForeignIssuerReport.toJSON(e) : undefined);
        }
        else {
            obj.dividendsForeignIssuerReport = [];
        }
        message.itemsCount !== undefined && (obj.itemsCount = Math.round(message.itemsCount));
        message.pagesCount !== undefined && (obj.pagesCount = Math.round(message.pagesCount));
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGetDividendsForeignIssuerReportResponse();
        message.dividendsForeignIssuerReport =
            ((_a = object.dividendsForeignIssuerReport) === null || _a === void 0 ? void 0 : _a.map(e => exports.DividendsForeignIssuerReport.fromPartial(e))) || [];
        message.itemsCount = (_b = object.itemsCount) !== null && _b !== void 0 ? _b : 0;
        message.pagesCount = (_c = object.pagesCount) !== null && _c !== void 0 ? _c : 0;
        message.page = (_d = object.page) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseDividendsForeignIssuerReport() {
    return {
        recordDate: undefined,
        paymentDate: undefined,
        securityName: '',
        isin: '',
        issuerCountry: '',
        quantity: 0,
        dividend: undefined,
        externalCommission: undefined,
        dividendGross: undefined,
        tax: undefined,
        dividendAmount: undefined,
        currency: '',
    };
}
exports.DividendsForeignIssuerReport = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.recordDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.recordDate), writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.paymentDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.securityName !== '') {
            writer.uint32(26).string(message.securityName);
        }
        if (message.isin !== '') {
            writer.uint32(34).string(message.isin);
        }
        if (message.issuerCountry !== '') {
            writer.uint32(42).string(message.issuerCountry);
        }
        if (message.quantity !== 0) {
            writer.uint32(48).int64(message.quantity);
        }
        if (message.dividend !== undefined) {
            common_1.Quotation.encode(message.dividend, writer.uint32(58).fork()).ldelim();
        }
        if (message.externalCommission !== undefined) {
            common_1.Quotation.encode(message.externalCommission, writer.uint32(66).fork()).ldelim();
        }
        if (message.dividendGross !== undefined) {
            common_1.Quotation.encode(message.dividendGross, writer.uint32(74).fork()).ldelim();
        }
        if (message.tax !== undefined) {
            common_1.Quotation.encode(message.tax, writer.uint32(82).fork()).ldelim();
        }
        if (message.dividendAmount !== undefined) {
            common_1.Quotation.encode(message.dividendAmount, writer.uint32(90).fork()).ldelim();
        }
        if (message.currency !== '') {
            writer.uint32(98).string(message.currency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDividendsForeignIssuerReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recordDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.paymentDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.securityName = reader.string();
                    break;
                case 4:
                    message.isin = reader.string();
                    break;
                case 5:
                    message.issuerCountry = reader.string();
                    break;
                case 6:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 7:
                    message.dividend = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.externalCommission = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dividendGross = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.tax = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dividendAmount = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.currency = reader.string();
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
            recordDate: isSet(object.recordDate) ? fromJsonTimestamp(object.recordDate) : undefined,
            paymentDate: isSet(object.paymentDate) ? fromJsonTimestamp(object.paymentDate) : undefined,
            securityName: isSet(object.securityName) ? String(object.securityName) : '',
            isin: isSet(object.isin) ? String(object.isin) : '',
            issuerCountry: isSet(object.issuerCountry) ? String(object.issuerCountry) : '',
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            dividend: isSet(object.dividend) ? common_1.Quotation.fromJSON(object.dividend) : undefined,
            externalCommission: isSet(object.externalCommission) ? common_1.Quotation.fromJSON(object.externalCommission) : undefined,
            dividendGross: isSet(object.dividendGross) ? common_1.Quotation.fromJSON(object.dividendGross) : undefined,
            tax: isSet(object.tax) ? common_1.Quotation.fromJSON(object.tax) : undefined,
            dividendAmount: isSet(object.dividendAmount) ? common_1.Quotation.fromJSON(object.dividendAmount) : undefined,
            currency: isSet(object.currency) ? String(object.currency) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.recordDate !== undefined && (obj.recordDate = message.recordDate.toISOString());
        message.paymentDate !== undefined && (obj.paymentDate = message.paymentDate.toISOString());
        message.securityName !== undefined && (obj.securityName = message.securityName);
        message.isin !== undefined && (obj.isin = message.isin);
        message.issuerCountry !== undefined && (obj.issuerCountry = message.issuerCountry);
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.dividend !== undefined &&
            (obj.dividend = message.dividend ? common_1.Quotation.toJSON(message.dividend) : undefined);
        message.externalCommission !== undefined &&
            (obj.externalCommission = message.externalCommission ? common_1.Quotation.toJSON(message.externalCommission) : undefined);
        message.dividendGross !== undefined &&
            (obj.dividendGross = message.dividendGross ? common_1.Quotation.toJSON(message.dividendGross) : undefined);
        message.tax !== undefined && (obj.tax = message.tax ? common_1.Quotation.toJSON(message.tax) : undefined);
        message.dividendAmount !== undefined &&
            (obj.dividendAmount = message.dividendAmount ? common_1.Quotation.toJSON(message.dividendAmount) : undefined);
        message.currency !== undefined && (obj.currency = message.currency);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseDividendsForeignIssuerReport();
        message.recordDate = (_a = object.recordDate) !== null && _a !== void 0 ? _a : undefined;
        message.paymentDate = (_b = object.paymentDate) !== null && _b !== void 0 ? _b : undefined;
        message.securityName = (_c = object.securityName) !== null && _c !== void 0 ? _c : '';
        message.isin = (_d = object.isin) !== null && _d !== void 0 ? _d : '';
        message.issuerCountry = (_e = object.issuerCountry) !== null && _e !== void 0 ? _e : '';
        message.quantity = (_f = object.quantity) !== null && _f !== void 0 ? _f : 0;
        message.dividend =
            object.dividend !== undefined && object.dividend !== null ? common_1.Quotation.fromPartial(object.dividend) : undefined;
        message.externalCommission =
            object.externalCommission !== undefined && object.externalCommission !== null
                ? common_1.Quotation.fromPartial(object.externalCommission)
                : undefined;
        message.dividendGross =
            object.dividendGross !== undefined && object.dividendGross !== null
                ? common_1.Quotation.fromPartial(object.dividendGross)
                : undefined;
        message.tax = object.tax !== undefined && object.tax !== null ? common_1.Quotation.fromPartial(object.tax) : undefined;
        message.dividendAmount =
            object.dividendAmount !== undefined && object.dividendAmount !== null
                ? common_1.Quotation.fromPartial(object.dividendAmount)
                : undefined;
        message.currency = (_g = object.currency) !== null && _g !== void 0 ? _g : '';
        return message;
    },
};
exports.OperationsServiceDefinition = {
    name: 'OperationsService',
    fullName: 'tinkoff.public.invest.api.contract.v1.OperationsService',
    methods: {
        getOperations: {
            name: 'GetOperations',
            requestType: exports.OperationsRequest,
            requestStream: false,
            responseType: exports.OperationsResponse,
            responseStream: false,
            options: {},
        },
        getPortfolio: {
            name: 'GetPortfolio',
            requestType: exports.PortfolioRequest,
            requestStream: false,
            responseType: exports.PortfolioResponse,
            responseStream: false,
            options: {},
        },
        getPositions: {
            name: 'GetPositions',
            requestType: exports.PositionsRequest,
            requestStream: false,
            responseType: exports.PositionsResponse,
            responseStream: false,
            options: {},
        },
        getWithdrawLimits: {
            name: 'GetWithdrawLimits',
            requestType: exports.WithdrawLimitsRequest,
            requestStream: false,
            responseType: exports.WithdrawLimitsResponse,
            responseStream: false,
            options: {},
        },
        getBrokerReport: {
            name: 'GetBrokerReport',
            requestType: exports.BrokerReportRequest,
            requestStream: false,
            responseType: exports.BrokerReportResponse,
            responseStream: false,
            options: {},
        },
        getDividendsForeignIssuer: {
            name: 'GetDividendsForeignIssuer',
            requestType: exports.GetDividendsForeignIssuerRequest,
            requestStream: false,
            responseType: exports.GetDividendsForeignIssuerResponse,
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
//# sourceMappingURL=operations.js.map