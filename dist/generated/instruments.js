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
exports.Instrument = exports.InstrumentResponse = exports.GetFuturesMarginResponse = exports.GetFuturesMarginRequest = exports.AccruedInterest = exports.GetAccruedInterestsResponse = exports.GetAccruedInterestsRequest = exports.Share = exports.Future = exports.Etf = exports.Currency = exports.Bond = exports.SharesResponse = exports.ShareResponse = exports.FuturesResponse = exports.FutureResponse = exports.EtfsResponse = exports.EtfResponse = exports.CurrenciesResponse = exports.CurrencyResponse = exports.Coupon = exports.GetBondCouponsResponse = exports.GetBondCouponsRequest = exports.BondsResponse = exports.BondResponse = exports.InstrumentsRequest = exports.InstrumentRequest = exports.TradingDay = exports.TradingSchedule = exports.TradingSchedulesResponse = exports.TradingSchedulesRequest = exports.structuredProductTypeToJSON = exports.structuredProductTypeFromJSON = exports.StructuredProductType = exports.assetTypeToJSON = exports.assetTypeFromJSON = exports.AssetType = exports.shareTypeToJSON = exports.shareTypeFromJSON = exports.ShareType = exports.instrumentStatusToJSON = exports.instrumentStatusFromJSON = exports.InstrumentStatus = exports.instrumentIdTypeToJSON = exports.instrumentIdTypeFromJSON = exports.InstrumentIdType = exports.couponTypeToJSON = exports.couponTypeFromJSON = exports.CouponType = exports.protobufPackage = void 0;
exports.InstrumentsServiceDefinition = exports.InstrumentLink = exports.AssetInstrument = exports.Brand = exports.AssetClearingCertificate = exports.AssetEtf = exports.AssetStructuredProduct = exports.AssetBond = exports.AssetShare = exports.AssetSecurity = exports.AssetCurrency = exports.Asset = exports.AssetFull = exports.AssetsResponse = exports.AssetsRequest = exports.AssetResponse = exports.AssetRequest = exports.Dividend = exports.GetDividendsResponse = exports.GetDividendsRequest = void 0;
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const common_1 = require("./common");
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = 'tinkoff.public.invest.api.contract.v1';
var CouponType;
(function (CouponType) {
    CouponType[CouponType["COUPON_TYPE_UNSPECIFIED"] = 0] = "COUPON_TYPE_UNSPECIFIED";
    CouponType[CouponType["COUPON_TYPE_CONSTANT"] = 1] = "COUPON_TYPE_CONSTANT";
    CouponType[CouponType["COUPON_TYPE_FLOATING"] = 2] = "COUPON_TYPE_FLOATING";
    CouponType[CouponType["COUPON_TYPE_DISCOUNT"] = 3] = "COUPON_TYPE_DISCOUNT";
    CouponType[CouponType["COUPON_TYPE_MORTGAGE"] = 4] = "COUPON_TYPE_MORTGAGE";
    CouponType[CouponType["COUPON_TYPE_FIX"] = 5] = "COUPON_TYPE_FIX";
    CouponType[CouponType["COUPON_TYPE_VARIABLE"] = 6] = "COUPON_TYPE_VARIABLE";
    CouponType[CouponType["COUPON_TYPE_OTHER"] = 7] = "COUPON_TYPE_OTHER";
    CouponType[CouponType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CouponType = exports.CouponType || (exports.CouponType = {}));
function couponTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'COUPON_TYPE_UNSPECIFIED':
            return CouponType.COUPON_TYPE_UNSPECIFIED;
        case 1:
        case 'COUPON_TYPE_CONSTANT':
            return CouponType.COUPON_TYPE_CONSTANT;
        case 2:
        case 'COUPON_TYPE_FLOATING':
            return CouponType.COUPON_TYPE_FLOATING;
        case 3:
        case 'COUPON_TYPE_DISCOUNT':
            return CouponType.COUPON_TYPE_DISCOUNT;
        case 4:
        case 'COUPON_TYPE_MORTGAGE':
            return CouponType.COUPON_TYPE_MORTGAGE;
        case 5:
        case 'COUPON_TYPE_FIX':
            return CouponType.COUPON_TYPE_FIX;
        case 6:
        case 'COUPON_TYPE_VARIABLE':
            return CouponType.COUPON_TYPE_VARIABLE;
        case 7:
        case 'COUPON_TYPE_OTHER':
            return CouponType.COUPON_TYPE_OTHER;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CouponType.UNRECOGNIZED;
    }
}
exports.couponTypeFromJSON = couponTypeFromJSON;
function couponTypeToJSON(object) {
    switch (object) {
        case CouponType.COUPON_TYPE_UNSPECIFIED:
            return 'COUPON_TYPE_UNSPECIFIED';
        case CouponType.COUPON_TYPE_CONSTANT:
            return 'COUPON_TYPE_CONSTANT';
        case CouponType.COUPON_TYPE_FLOATING:
            return 'COUPON_TYPE_FLOATING';
        case CouponType.COUPON_TYPE_DISCOUNT:
            return 'COUPON_TYPE_DISCOUNT';
        case CouponType.COUPON_TYPE_MORTGAGE:
            return 'COUPON_TYPE_MORTGAGE';
        case CouponType.COUPON_TYPE_FIX:
            return 'COUPON_TYPE_FIX';
        case CouponType.COUPON_TYPE_VARIABLE:
            return 'COUPON_TYPE_VARIABLE';
        case CouponType.COUPON_TYPE_OTHER:
            return 'COUPON_TYPE_OTHER';
        default:
            return 'UNKNOWN';
    }
}
exports.couponTypeToJSON = couponTypeToJSON;
var InstrumentIdType;
(function (InstrumentIdType) {
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_UNSPECIFIED"] = 0] = "INSTRUMENT_ID_UNSPECIFIED";
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_TYPE_FIGI"] = 1] = "INSTRUMENT_ID_TYPE_FIGI";
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_TYPE_TICKER"] = 2] = "INSTRUMENT_ID_TYPE_TICKER";
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_TYPE_UID"] = 3] = "INSTRUMENT_ID_TYPE_UID";
    InstrumentIdType[InstrumentIdType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstrumentIdType = exports.InstrumentIdType || (exports.InstrumentIdType = {}));
function instrumentIdTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'INSTRUMENT_ID_UNSPECIFIED':
            return InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED;
        case 1:
        case 'INSTRUMENT_ID_TYPE_FIGI':
            return InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI;
        case 2:
        case 'INSTRUMENT_ID_TYPE_TICKER':
            return InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER;
        case 3:
        case 'INSTRUMENT_ID_TYPE_UID':
            return InstrumentIdType.INSTRUMENT_ID_TYPE_UID;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InstrumentIdType.UNRECOGNIZED;
    }
}
exports.instrumentIdTypeFromJSON = instrumentIdTypeFromJSON;
function instrumentIdTypeToJSON(object) {
    switch (object) {
        case InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED:
            return 'INSTRUMENT_ID_UNSPECIFIED';
        case InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI:
            return 'INSTRUMENT_ID_TYPE_FIGI';
        case InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER:
            return 'INSTRUMENT_ID_TYPE_TICKER';
        case InstrumentIdType.INSTRUMENT_ID_TYPE_UID:
            return 'INSTRUMENT_ID_TYPE_UID';
        default:
            return 'UNKNOWN';
    }
}
exports.instrumentIdTypeToJSON = instrumentIdTypeToJSON;
var InstrumentStatus;
(function (InstrumentStatus) {
    InstrumentStatus[InstrumentStatus["INSTRUMENT_STATUS_UNSPECIFIED"] = 0] = "INSTRUMENT_STATUS_UNSPECIFIED";
    InstrumentStatus[InstrumentStatus["INSTRUMENT_STATUS_BASE"] = 1] = "INSTRUMENT_STATUS_BASE";
    InstrumentStatus[InstrumentStatus["INSTRUMENT_STATUS_ALL"] = 2] = "INSTRUMENT_STATUS_ALL";
    InstrumentStatus[InstrumentStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InstrumentStatus = exports.InstrumentStatus || (exports.InstrumentStatus = {}));
function instrumentStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'INSTRUMENT_STATUS_UNSPECIFIED':
            return InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED;
        case 1:
        case 'INSTRUMENT_STATUS_BASE':
            return InstrumentStatus.INSTRUMENT_STATUS_BASE;
        case 2:
        case 'INSTRUMENT_STATUS_ALL':
            return InstrumentStatus.INSTRUMENT_STATUS_ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InstrumentStatus.UNRECOGNIZED;
    }
}
exports.instrumentStatusFromJSON = instrumentStatusFromJSON;
function instrumentStatusToJSON(object) {
    switch (object) {
        case InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED:
            return 'INSTRUMENT_STATUS_UNSPECIFIED';
        case InstrumentStatus.INSTRUMENT_STATUS_BASE:
            return 'INSTRUMENT_STATUS_BASE';
        case InstrumentStatus.INSTRUMENT_STATUS_ALL:
            return 'INSTRUMENT_STATUS_ALL';
        default:
            return 'UNKNOWN';
    }
}
exports.instrumentStatusToJSON = instrumentStatusToJSON;
var ShareType;
(function (ShareType) {
    ShareType[ShareType["SHARE_TYPE_UNSPECIFIED"] = 0] = "SHARE_TYPE_UNSPECIFIED";
    ShareType[ShareType["SHARE_TYPE_COMMON"] = 1] = "SHARE_TYPE_COMMON";
    ShareType[ShareType["SHARE_TYPE_PREFERRED"] = 2] = "SHARE_TYPE_PREFERRED";
    ShareType[ShareType["SHARE_TYPE_ADR"] = 3] = "SHARE_TYPE_ADR";
    ShareType[ShareType["SHARE_TYPE_GDR"] = 4] = "SHARE_TYPE_GDR";
    ShareType[ShareType["SHARE_TYPE_MLP"] = 5] = "SHARE_TYPE_MLP";
    ShareType[ShareType["SHARE_TYPE_NY_REG_SHRS"] = 6] = "SHARE_TYPE_NY_REG_SHRS";
    ShareType[ShareType["SHARE_TYPE_CLOSED_END_FUND"] = 7] = "SHARE_TYPE_CLOSED_END_FUND";
    ShareType[ShareType["SHARE_TYPE_REIT"] = 8] = "SHARE_TYPE_REIT";
    ShareType[ShareType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ShareType = exports.ShareType || (exports.ShareType = {}));
function shareTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'SHARE_TYPE_UNSPECIFIED':
            return ShareType.SHARE_TYPE_UNSPECIFIED;
        case 1:
        case 'SHARE_TYPE_COMMON':
            return ShareType.SHARE_TYPE_COMMON;
        case 2:
        case 'SHARE_TYPE_PREFERRED':
            return ShareType.SHARE_TYPE_PREFERRED;
        case 3:
        case 'SHARE_TYPE_ADR':
            return ShareType.SHARE_TYPE_ADR;
        case 4:
        case 'SHARE_TYPE_GDR':
            return ShareType.SHARE_TYPE_GDR;
        case 5:
        case 'SHARE_TYPE_MLP':
            return ShareType.SHARE_TYPE_MLP;
        case 6:
        case 'SHARE_TYPE_NY_REG_SHRS':
            return ShareType.SHARE_TYPE_NY_REG_SHRS;
        case 7:
        case 'SHARE_TYPE_CLOSED_END_FUND':
            return ShareType.SHARE_TYPE_CLOSED_END_FUND;
        case 8:
        case 'SHARE_TYPE_REIT':
            return ShareType.SHARE_TYPE_REIT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ShareType.UNRECOGNIZED;
    }
}
exports.shareTypeFromJSON = shareTypeFromJSON;
function shareTypeToJSON(object) {
    switch (object) {
        case ShareType.SHARE_TYPE_UNSPECIFIED:
            return 'SHARE_TYPE_UNSPECIFIED';
        case ShareType.SHARE_TYPE_COMMON:
            return 'SHARE_TYPE_COMMON';
        case ShareType.SHARE_TYPE_PREFERRED:
            return 'SHARE_TYPE_PREFERRED';
        case ShareType.SHARE_TYPE_ADR:
            return 'SHARE_TYPE_ADR';
        case ShareType.SHARE_TYPE_GDR:
            return 'SHARE_TYPE_GDR';
        case ShareType.SHARE_TYPE_MLP:
            return 'SHARE_TYPE_MLP';
        case ShareType.SHARE_TYPE_NY_REG_SHRS:
            return 'SHARE_TYPE_NY_REG_SHRS';
        case ShareType.SHARE_TYPE_CLOSED_END_FUND:
            return 'SHARE_TYPE_CLOSED_END_FUND';
        case ShareType.SHARE_TYPE_REIT:
            return 'SHARE_TYPE_REIT';
        default:
            return 'UNKNOWN';
    }
}
exports.shareTypeToJSON = shareTypeToJSON;
var AssetType;
(function (AssetType) {
    AssetType[AssetType["ASSET_TYPE_UNSPECIFIED"] = 0] = "ASSET_TYPE_UNSPECIFIED";
    AssetType[AssetType["ASSET_TYPE_CURRENCY"] = 1] = "ASSET_TYPE_CURRENCY";
    AssetType[AssetType["ASSET_TYPE_COMMODITY"] = 2] = "ASSET_TYPE_COMMODITY";
    AssetType[AssetType["ASSET_TYPE_INDEX"] = 3] = "ASSET_TYPE_INDEX";
    AssetType[AssetType["ASSET_TYPE_SECURITY"] = 4] = "ASSET_TYPE_SECURITY";
    AssetType[AssetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
function assetTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'ASSET_TYPE_UNSPECIFIED':
            return AssetType.ASSET_TYPE_UNSPECIFIED;
        case 1:
        case 'ASSET_TYPE_CURRENCY':
            return AssetType.ASSET_TYPE_CURRENCY;
        case 2:
        case 'ASSET_TYPE_COMMODITY':
            return AssetType.ASSET_TYPE_COMMODITY;
        case 3:
        case 'ASSET_TYPE_INDEX':
            return AssetType.ASSET_TYPE_INDEX;
        case 4:
        case 'ASSET_TYPE_SECURITY':
            return AssetType.ASSET_TYPE_SECURITY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AssetType.UNRECOGNIZED;
    }
}
exports.assetTypeFromJSON = assetTypeFromJSON;
function assetTypeToJSON(object) {
    switch (object) {
        case AssetType.ASSET_TYPE_UNSPECIFIED:
            return 'ASSET_TYPE_UNSPECIFIED';
        case AssetType.ASSET_TYPE_CURRENCY:
            return 'ASSET_TYPE_CURRENCY';
        case AssetType.ASSET_TYPE_COMMODITY:
            return 'ASSET_TYPE_COMMODITY';
        case AssetType.ASSET_TYPE_INDEX:
            return 'ASSET_TYPE_INDEX';
        case AssetType.ASSET_TYPE_SECURITY:
            return 'ASSET_TYPE_SECURITY';
        default:
            return 'UNKNOWN';
    }
}
exports.assetTypeToJSON = assetTypeToJSON;
var StructuredProductType;
(function (StructuredProductType) {
    StructuredProductType[StructuredProductType["SP_TYPE_UNSPECIFIED"] = 0] = "SP_TYPE_UNSPECIFIED";
    StructuredProductType[StructuredProductType["SP_TYPE_DELIVERABLE"] = 1] = "SP_TYPE_DELIVERABLE";
    StructuredProductType[StructuredProductType["SP_TYPE_NON_DELIVERABLE"] = 2] = "SP_TYPE_NON_DELIVERABLE";
    StructuredProductType[StructuredProductType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StructuredProductType = exports.StructuredProductType || (exports.StructuredProductType = {}));
function structuredProductTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'SP_TYPE_UNSPECIFIED':
            return StructuredProductType.SP_TYPE_UNSPECIFIED;
        case 1:
        case 'SP_TYPE_DELIVERABLE':
            return StructuredProductType.SP_TYPE_DELIVERABLE;
        case 2:
        case 'SP_TYPE_NON_DELIVERABLE':
            return StructuredProductType.SP_TYPE_NON_DELIVERABLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return StructuredProductType.UNRECOGNIZED;
    }
}
exports.structuredProductTypeFromJSON = structuredProductTypeFromJSON;
function structuredProductTypeToJSON(object) {
    switch (object) {
        case StructuredProductType.SP_TYPE_UNSPECIFIED:
            return 'SP_TYPE_UNSPECIFIED';
        case StructuredProductType.SP_TYPE_DELIVERABLE:
            return 'SP_TYPE_DELIVERABLE';
        case StructuredProductType.SP_TYPE_NON_DELIVERABLE:
            return 'SP_TYPE_NON_DELIVERABLE';
        default:
            return 'UNKNOWN';
    }
}
exports.structuredProductTypeToJSON = structuredProductTypeToJSON;
function createBaseTradingSchedulesRequest() {
    return { exchange: '', from: undefined, to: undefined };
}
exports.TradingSchedulesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exchange !== '') {
            writer.uint32(10).string(message.exchange);
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
        const message = createBaseTradingSchedulesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchange = reader.string();
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
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
            to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.from !== undefined && (obj.from = message.from.toISOString());
        message.to !== undefined && (obj.to = message.to.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTradingSchedulesRequest();
        message.exchange = (_a = object.exchange) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseTradingSchedulesResponse() {
    return { exchanges: [] };
}
exports.TradingSchedulesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.exchanges) {
            exports.TradingSchedule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingSchedulesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchanges.push(exports.TradingSchedule.decode(reader, reader.uint32()));
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
            exchanges: Array.isArray(object === null || object === void 0 ? void 0 : object.exchanges) ? object.exchanges.map((e) => exports.TradingSchedule.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exchanges) {
            obj.exchanges = message.exchanges.map(e => (e ? exports.TradingSchedule.toJSON(e) : undefined));
        }
        else {
            obj.exchanges = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTradingSchedulesResponse();
        message.exchanges = ((_a = object.exchanges) === null || _a === void 0 ? void 0 : _a.map(e => exports.TradingSchedule.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradingSchedule() {
    return { exchange: '', days: [] };
}
exports.TradingSchedule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exchange !== '') {
            writer.uint32(10).string(message.exchange);
        }
        for (const v of message.days) {
            exports.TradingDay.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exchange = reader.string();
                    break;
                case 2:
                    message.days.push(exports.TradingDay.decode(reader, reader.uint32()));
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
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            days: Array.isArray(object === null || object === void 0 ? void 0 : object.days) ? object.days.map((e) => exports.TradingDay.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.exchange !== undefined && (obj.exchange = message.exchange);
        if (message.days) {
            obj.days = message.days.map(e => (e ? exports.TradingDay.toJSON(e) : undefined));
        }
        else {
            obj.days = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTradingSchedule();
        message.exchange = (_a = object.exchange) !== null && _a !== void 0 ? _a : '';
        message.days = ((_b = object.days) === null || _b === void 0 ? void 0 : _b.map(e => exports.TradingDay.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTradingDay() {
    return {
        date: undefined,
        isTradingDay: false,
        startTime: undefined,
        endTime: undefined,
        openingAuctionStartTime: undefined,
        closingAuctionEndTime: undefined,
        eveningOpeningAuctionStartTime: undefined,
        eveningStartTime: undefined,
        eveningEndTime: undefined,
        clearingStartTime: undefined,
        clearingEndTime: undefined,
        premarketStartTime: undefined,
        premarketEndTime: undefined,
    };
}
exports.TradingDay = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.date !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
        }
        if (message.isTradingDay === true) {
            writer.uint32(16).bool(message.isTradingDay);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.openingAuctionStartTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.openingAuctionStartTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.closingAuctionEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.closingAuctionEndTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.eveningOpeningAuctionStartTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.eveningOpeningAuctionStartTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.eveningStartTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.eveningStartTime), writer.uint32(82).fork()).ldelim();
        }
        if (message.eveningEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.eveningEndTime), writer.uint32(90).fork()).ldelim();
        }
        if (message.clearingStartTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.clearingStartTime), writer.uint32(98).fork()).ldelim();
        }
        if (message.clearingEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.clearingEndTime), writer.uint32(106).fork()).ldelim();
        }
        if (message.premarketStartTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.premarketStartTime), writer.uint32(114).fork()).ldelim();
        }
        if (message.premarketEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.premarketEndTime), writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradingDay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.isTradingDay = reader.bool();
                    break;
                case 3:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.openingAuctionStartTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.closingAuctionEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.eveningOpeningAuctionStartTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.eveningStartTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.eveningEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.clearingStartTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.clearingEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.premarketStartTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.premarketEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
            isTradingDay: isSet(object.isTradingDay) ? Boolean(object.isTradingDay) : false,
            startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
            endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
            openingAuctionStartTime: isSet(object.openingAuctionStartTime)
                ? fromJsonTimestamp(object.openingAuctionStartTime)
                : undefined,
            closingAuctionEndTime: isSet(object.closingAuctionEndTime)
                ? fromJsonTimestamp(object.closingAuctionEndTime)
                : undefined,
            eveningOpeningAuctionStartTime: isSet(object.eveningOpeningAuctionStartTime)
                ? fromJsonTimestamp(object.eveningOpeningAuctionStartTime)
                : undefined,
            eveningStartTime: isSet(object.eveningStartTime) ? fromJsonTimestamp(object.eveningStartTime) : undefined,
            eveningEndTime: isSet(object.eveningEndTime) ? fromJsonTimestamp(object.eveningEndTime) : undefined,
            clearingStartTime: isSet(object.clearingStartTime) ? fromJsonTimestamp(object.clearingStartTime) : undefined,
            clearingEndTime: isSet(object.clearingEndTime) ? fromJsonTimestamp(object.clearingEndTime) : undefined,
            premarketStartTime: isSet(object.premarketStartTime) ? fromJsonTimestamp(object.premarketStartTime) : undefined,
            premarketEndTime: isSet(object.premarketEndTime) ? fromJsonTimestamp(object.premarketEndTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.isTradingDay !== undefined && (obj.isTradingDay = message.isTradingDay);
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
        message.openingAuctionStartTime !== undefined &&
            (obj.openingAuctionStartTime = message.openingAuctionStartTime.toISOString());
        message.closingAuctionEndTime !== undefined &&
            (obj.closingAuctionEndTime = message.closingAuctionEndTime.toISOString());
        message.eveningOpeningAuctionStartTime !== undefined &&
            (obj.eveningOpeningAuctionStartTime = message.eveningOpeningAuctionStartTime.toISOString());
        message.eveningStartTime !== undefined && (obj.eveningStartTime = message.eveningStartTime.toISOString());
        message.eveningEndTime !== undefined && (obj.eveningEndTime = message.eveningEndTime.toISOString());
        message.clearingStartTime !== undefined && (obj.clearingStartTime = message.clearingStartTime.toISOString());
        message.clearingEndTime !== undefined && (obj.clearingEndTime = message.clearingEndTime.toISOString());
        message.premarketStartTime !== undefined && (obj.premarketStartTime = message.premarketStartTime.toISOString());
        message.premarketEndTime !== undefined && (obj.premarketEndTime = message.premarketEndTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseTradingDay();
        message.date = (_a = object.date) !== null && _a !== void 0 ? _a : undefined;
        message.isTradingDay = (_b = object.isTradingDay) !== null && _b !== void 0 ? _b : false;
        message.startTime = (_c = object.startTime) !== null && _c !== void 0 ? _c : undefined;
        message.endTime = (_d = object.endTime) !== null && _d !== void 0 ? _d : undefined;
        message.openingAuctionStartTime = (_e = object.openingAuctionStartTime) !== null && _e !== void 0 ? _e : undefined;
        message.closingAuctionEndTime = (_f = object.closingAuctionEndTime) !== null && _f !== void 0 ? _f : undefined;
        message.eveningOpeningAuctionStartTime = (_g = object.eveningOpeningAuctionStartTime) !== null && _g !== void 0 ? _g : undefined;
        message.eveningStartTime = (_h = object.eveningStartTime) !== null && _h !== void 0 ? _h : undefined;
        message.eveningEndTime = (_j = object.eveningEndTime) !== null && _j !== void 0 ? _j : undefined;
        message.clearingStartTime = (_k = object.clearingStartTime) !== null && _k !== void 0 ? _k : undefined;
        message.clearingEndTime = (_l = object.clearingEndTime) !== null && _l !== void 0 ? _l : undefined;
        message.premarketStartTime = (_m = object.premarketStartTime) !== null && _m !== void 0 ? _m : undefined;
        message.premarketEndTime = (_o = object.premarketEndTime) !== null && _o !== void 0 ? _o : undefined;
        return message;
    },
};
function createBaseInstrumentRequest() {
    return { idType: 0, classCode: '', id: '' };
}
exports.InstrumentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.idType !== 0) {
            writer.uint32(8).int32(message.idType);
        }
        if (message.classCode !== '') {
            writer.uint32(18).string(message.classCode);
        }
        if (message.id !== '') {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstrumentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idType = reader.int32();
                    break;
                case 2:
                    message.classCode = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
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
            idType: isSet(object.idType) ? instrumentIdTypeFromJSON(object.idType) : 0,
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            id: isSet(object.id) ? String(object.id) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.idType !== undefined && (obj.idType = instrumentIdTypeToJSON(message.idType));
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseInstrumentRequest();
        message.idType = (_a = object.idType) !== null && _a !== void 0 ? _a : 0;
        message.classCode = (_b = object.classCode) !== null && _b !== void 0 ? _b : '';
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
function createBaseInstrumentsRequest() {
    return { instrumentStatus: 0 };
}
exports.InstrumentsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instrumentStatus !== 0) {
            writer.uint32(8).int32(message.instrumentStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstrumentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrumentStatus = reader.int32();
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
            instrumentStatus: isSet(object.instrumentStatus) ? instrumentStatusFromJSON(object.instrumentStatus) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrumentStatus !== undefined && (obj.instrumentStatus = instrumentStatusToJSON(message.instrumentStatus));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInstrumentsRequest();
        message.instrumentStatus = (_a = object.instrumentStatus) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseBondResponse() {
    return { instrument: undefined };
}
exports.BondResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instrument !== undefined) {
            exports.Bond.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBondResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.Bond.decode(reader, reader.uint32());
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
            instrument: isSet(object.instrument) ? exports.Bond.fromJSON(object.instrument) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument ? exports.Bond.toJSON(message.instrument) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBondResponse();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null ? exports.Bond.fromPartial(object.instrument) : undefined;
        return message;
    },
};
function createBaseBondsResponse() {
    return { instruments: [] };
}
exports.BondsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instruments) {
            exports.Bond.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBondsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instruments.push(exports.Bond.decode(reader, reader.uint32()));
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
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments) ? object.instruments.map((e) => exports.Bond.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.Bond.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBondsResponse();
        message.instruments = ((_a = object.instruments) === null || _a === void 0 ? void 0 : _a.map(e => exports.Bond.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetBondCouponsRequest() {
    return { figi: '', from: undefined, to: undefined };
}
exports.GetBondCouponsRequest = {
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
        const message = createBaseGetBondCouponsRequest();
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
        const message = createBaseGetBondCouponsRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetBondCouponsResponse() {
    return { events: [] };
}
exports.GetBondCouponsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            exports.Coupon.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBondCouponsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Coupon.decode(reader, reader.uint32()));
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
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => exports.Coupon.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => (e ? exports.Coupon.toJSON(e) : undefined));
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBondCouponsResponse();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(e => exports.Coupon.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCoupon() {
    return {
        figi: '',
        couponDate: undefined,
        couponNumber: 0,
        fixDate: undefined,
        payOneBond: undefined,
        couponType: 0,
        couponStartDate: undefined,
        couponEndDate: undefined,
        couponPeriod: 0,
    };
}
exports.Coupon = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.couponDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.couponDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.couponNumber !== 0) {
            writer.uint32(24).int64(message.couponNumber);
        }
        if (message.fixDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.fixDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.payOneBond !== undefined) {
            common_1.MoneyValue.encode(message.payOneBond, writer.uint32(42).fork()).ldelim();
        }
        if (message.couponType !== 0) {
            writer.uint32(48).int32(message.couponType);
        }
        if (message.couponStartDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.couponStartDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.couponEndDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.couponEndDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.couponPeriod !== 0) {
            writer.uint32(72).int32(message.couponPeriod);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoupon();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.couponDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.couponNumber = longToNumber(reader.int64());
                    break;
                case 4:
                    message.fixDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.payOneBond = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.couponType = reader.int32();
                    break;
                case 7:
                    message.couponStartDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.couponEndDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.couponPeriod = reader.int32();
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
            couponDate: isSet(object.couponDate) ? fromJsonTimestamp(object.couponDate) : undefined,
            couponNumber: isSet(object.couponNumber) ? Number(object.couponNumber) : 0,
            fixDate: isSet(object.fixDate) ? fromJsonTimestamp(object.fixDate) : undefined,
            payOneBond: isSet(object.payOneBond) ? common_1.MoneyValue.fromJSON(object.payOneBond) : undefined,
            couponType: isSet(object.couponType) ? couponTypeFromJSON(object.couponType) : 0,
            couponStartDate: isSet(object.couponStartDate) ? fromJsonTimestamp(object.couponStartDate) : undefined,
            couponEndDate: isSet(object.couponEndDate) ? fromJsonTimestamp(object.couponEndDate) : undefined,
            couponPeriod: isSet(object.couponPeriod) ? Number(object.couponPeriod) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.couponDate !== undefined && (obj.couponDate = message.couponDate.toISOString());
        message.couponNumber !== undefined && (obj.couponNumber = Math.round(message.couponNumber));
        message.fixDate !== undefined && (obj.fixDate = message.fixDate.toISOString());
        message.payOneBond !== undefined &&
            (obj.payOneBond = message.payOneBond ? common_1.MoneyValue.toJSON(message.payOneBond) : undefined);
        message.couponType !== undefined && (obj.couponType = couponTypeToJSON(message.couponType));
        message.couponStartDate !== undefined && (obj.couponStartDate = message.couponStartDate.toISOString());
        message.couponEndDate !== undefined && (obj.couponEndDate = message.couponEndDate.toISOString());
        message.couponPeriod !== undefined && (obj.couponPeriod = Math.round(message.couponPeriod));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseCoupon();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.couponDate = (_b = object.couponDate) !== null && _b !== void 0 ? _b : undefined;
        message.couponNumber = (_c = object.couponNumber) !== null && _c !== void 0 ? _c : 0;
        message.fixDate = (_d = object.fixDate) !== null && _d !== void 0 ? _d : undefined;
        message.payOneBond =
            object.payOneBond !== undefined && object.payOneBond !== null
                ? common_1.MoneyValue.fromPartial(object.payOneBond)
                : undefined;
        message.couponType = (_e = object.couponType) !== null && _e !== void 0 ? _e : 0;
        message.couponStartDate = (_f = object.couponStartDate) !== null && _f !== void 0 ? _f : undefined;
        message.couponEndDate = (_g = object.couponEndDate) !== null && _g !== void 0 ? _g : undefined;
        message.couponPeriod = (_h = object.couponPeriod) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
function createBaseCurrencyResponse() {
    return { instrument: undefined };
}
exports.CurrencyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instrument !== undefined) {
            exports.Currency.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCurrencyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.Currency.decode(reader, reader.uint32());
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
            instrument: isSet(object.instrument) ? exports.Currency.fromJSON(object.instrument) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument ? exports.Currency.toJSON(message.instrument) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCurrencyResponse();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null
                ? exports.Currency.fromPartial(object.instrument)
                : undefined;
        return message;
    },
};
function createBaseCurrenciesResponse() {
    return { instruments: [] };
}
exports.CurrenciesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instruments) {
            exports.Currency.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCurrenciesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instruments.push(exports.Currency.decode(reader, reader.uint32()));
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
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments) ? object.instruments.map((e) => exports.Currency.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.Currency.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCurrenciesResponse();
        message.instruments = ((_a = object.instruments) === null || _a === void 0 ? void 0 : _a.map(e => exports.Currency.fromPartial(e))) || [];
        return message;
    },
};
function createBaseEtfResponse() {
    return { instrument: undefined };
}
exports.EtfResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instrument !== undefined) {
            exports.Etf.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEtfResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.Etf.decode(reader, reader.uint32());
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
            instrument: isSet(object.instrument) ? exports.Etf.fromJSON(object.instrument) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument ? exports.Etf.toJSON(message.instrument) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEtfResponse();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null ? exports.Etf.fromPartial(object.instrument) : undefined;
        return message;
    },
};
function createBaseEtfsResponse() {
    return { instruments: [] };
}
exports.EtfsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instruments) {
            exports.Etf.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEtfsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instruments.push(exports.Etf.decode(reader, reader.uint32()));
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
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments) ? object.instruments.map((e) => exports.Etf.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.Etf.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEtfsResponse();
        message.instruments = ((_a = object.instruments) === null || _a === void 0 ? void 0 : _a.map(e => exports.Etf.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFutureResponse() {
    return { instrument: undefined };
}
exports.FutureResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instrument !== undefined) {
            exports.Future.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFutureResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.Future.decode(reader, reader.uint32());
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
            instrument: isSet(object.instrument) ? exports.Future.fromJSON(object.instrument) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument ? exports.Future.toJSON(message.instrument) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFutureResponse();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null ? exports.Future.fromPartial(object.instrument) : undefined;
        return message;
    },
};
function createBaseFuturesResponse() {
    return { instruments: [] };
}
exports.FuturesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instruments) {
            exports.Future.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFuturesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instruments.push(exports.Future.decode(reader, reader.uint32()));
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
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments) ? object.instruments.map((e) => exports.Future.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.Future.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFuturesResponse();
        message.instruments = ((_a = object.instruments) === null || _a === void 0 ? void 0 : _a.map(e => exports.Future.fromPartial(e))) || [];
        return message;
    },
};
function createBaseShareResponse() {
    return { instrument: undefined };
}
exports.ShareResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instrument !== undefined) {
            exports.Share.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseShareResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.Share.decode(reader, reader.uint32());
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
            instrument: isSet(object.instrument) ? exports.Share.fromJSON(object.instrument) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument ? exports.Share.toJSON(message.instrument) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseShareResponse();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null ? exports.Share.fromPartial(object.instrument) : undefined;
        return message;
    },
};
function createBaseSharesResponse() {
    return { instruments: [] };
}
exports.SharesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.instruments) {
            exports.Share.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instruments.push(exports.Share.decode(reader, reader.uint32()));
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
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments) ? object.instruments.map((e) => exports.Share.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.Share.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSharesResponse();
        message.instruments = ((_a = object.instruments) === null || _a === void 0 ? void 0 : _a.map(e => exports.Share.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBond() {
    return {
        figi: '',
        ticker: '',
        classCode: '',
        isin: '',
        lot: 0,
        currency: '',
        klong: undefined,
        kshort: undefined,
        dlong: undefined,
        dshort: undefined,
        dlongMin: undefined,
        dshortMin: undefined,
        shortEnabledFlag: false,
        name: '',
        exchange: '',
        couponQuantityPerYear: 0,
        maturityDate: undefined,
        nominal: undefined,
        stateRegDate: undefined,
        placementDate: undefined,
        placementPrice: undefined,
        aciValue: undefined,
        countryOfRisk: '',
        countryOfRiskName: '',
        sector: '',
        issueKind: '',
        issueSize: 0,
        issueSizePlan: 0,
        tradingStatus: 0,
        otcFlag: false,
        buyAvailableFlag: false,
        sellAvailableFlag: false,
        floatingCouponFlag: false,
        perpetualFlag: false,
        amortizationFlag: false,
        minPriceIncrement: undefined,
        apiTradeAvailableFlag: false,
        uid: '',
    };
}
exports.Bond = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.classCode !== '') {
            writer.uint32(26).string(message.classCode);
        }
        if (message.isin !== '') {
            writer.uint32(34).string(message.isin);
        }
        if (message.lot !== 0) {
            writer.uint32(40).int32(message.lot);
        }
        if (message.currency !== '') {
            writer.uint32(50).string(message.currency);
        }
        if (message.klong !== undefined) {
            common_1.Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
        }
        if (message.kshort !== undefined) {
            common_1.Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
        }
        if (message.dlong !== undefined) {
            common_1.Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
        }
        if (message.dshort !== undefined) {
            common_1.Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
        }
        if (message.dlongMin !== undefined) {
            common_1.Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
        }
        if (message.dshortMin !== undefined) {
            common_1.Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
        }
        if (message.shortEnabledFlag === true) {
            writer.uint32(104).bool(message.shortEnabledFlag);
        }
        if (message.name !== '') {
            writer.uint32(122).string(message.name);
        }
        if (message.exchange !== '') {
            writer.uint32(130).string(message.exchange);
        }
        if (message.couponQuantityPerYear !== 0) {
            writer.uint32(136).int32(message.couponQuantityPerYear);
        }
        if (message.maturityDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.maturityDate), writer.uint32(146).fork()).ldelim();
        }
        if (message.nominal !== undefined) {
            common_1.MoneyValue.encode(message.nominal, writer.uint32(154).fork()).ldelim();
        }
        if (message.stateRegDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.stateRegDate), writer.uint32(170).fork()).ldelim();
        }
        if (message.placementDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(178).fork()).ldelim();
        }
        if (message.placementPrice !== undefined) {
            common_1.MoneyValue.encode(message.placementPrice, writer.uint32(186).fork()).ldelim();
        }
        if (message.aciValue !== undefined) {
            common_1.MoneyValue.encode(message.aciValue, writer.uint32(194).fork()).ldelim();
        }
        if (message.countryOfRisk !== '') {
            writer.uint32(202).string(message.countryOfRisk);
        }
        if (message.countryOfRiskName !== '') {
            writer.uint32(210).string(message.countryOfRiskName);
        }
        if (message.sector !== '') {
            writer.uint32(218).string(message.sector);
        }
        if (message.issueKind !== '') {
            writer.uint32(226).string(message.issueKind);
        }
        if (message.issueSize !== 0) {
            writer.uint32(232).int64(message.issueSize);
        }
        if (message.issueSizePlan !== 0) {
            writer.uint32(240).int64(message.issueSizePlan);
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(248).int32(message.tradingStatus);
        }
        if (message.otcFlag === true) {
            writer.uint32(256).bool(message.otcFlag);
        }
        if (message.buyAvailableFlag === true) {
            writer.uint32(264).bool(message.buyAvailableFlag);
        }
        if (message.sellAvailableFlag === true) {
            writer.uint32(272).bool(message.sellAvailableFlag);
        }
        if (message.floatingCouponFlag === true) {
            writer.uint32(280).bool(message.floatingCouponFlag);
        }
        if (message.perpetualFlag === true) {
            writer.uint32(288).bool(message.perpetualFlag);
        }
        if (message.amortizationFlag === true) {
            writer.uint32(296).bool(message.amortizationFlag);
        }
        if (message.minPriceIncrement !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrement, writer.uint32(306).fork()).ldelim();
        }
        if (message.apiTradeAvailableFlag === true) {
            writer.uint32(312).bool(message.apiTradeAvailableFlag);
        }
        if (message.uid !== '') {
            writer.uint32(322).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBond();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.classCode = reader.string();
                    break;
                case 4:
                    message.isin = reader.string();
                    break;
                case 5:
                    message.lot = reader.int32();
                    break;
                case 6:
                    message.currency = reader.string();
                    break;
                case 7:
                    message.klong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.kshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dlong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.dshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dlongMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.dshortMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.shortEnabledFlag = reader.bool();
                    break;
                case 15:
                    message.name = reader.string();
                    break;
                case 16:
                    message.exchange = reader.string();
                    break;
                case 17:
                    message.couponQuantityPerYear = reader.int32();
                    break;
                case 18:
                    message.maturityDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.nominal = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.stateRegDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.placementDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.placementPrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.aciValue = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.countryOfRisk = reader.string();
                    break;
                case 26:
                    message.countryOfRiskName = reader.string();
                    break;
                case 27:
                    message.sector = reader.string();
                    break;
                case 28:
                    message.issueKind = reader.string();
                    break;
                case 29:
                    message.issueSize = longToNumber(reader.int64());
                    break;
                case 30:
                    message.issueSizePlan = longToNumber(reader.int64());
                    break;
                case 31:
                    message.tradingStatus = reader.int32();
                    break;
                case 32:
                    message.otcFlag = reader.bool();
                    break;
                case 33:
                    message.buyAvailableFlag = reader.bool();
                    break;
                case 34:
                    message.sellAvailableFlag = reader.bool();
                    break;
                case 35:
                    message.floatingCouponFlag = reader.bool();
                    break;
                case 36:
                    message.perpetualFlag = reader.bool();
                    break;
                case 37:
                    message.amortizationFlag = reader.bool();
                    break;
                case 38:
                    message.minPriceIncrement = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 39:
                    message.apiTradeAvailableFlag = reader.bool();
                    break;
                case 40:
                    message.uid = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            isin: isSet(object.isin) ? String(object.isin) : '',
            lot: isSet(object.lot) ? Number(object.lot) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            klong: isSet(object.klong) ? common_1.Quotation.fromJSON(object.klong) : undefined,
            kshort: isSet(object.kshort) ? common_1.Quotation.fromJSON(object.kshort) : undefined,
            dlong: isSet(object.dlong) ? common_1.Quotation.fromJSON(object.dlong) : undefined,
            dshort: isSet(object.dshort) ? common_1.Quotation.fromJSON(object.dshort) : undefined,
            dlongMin: isSet(object.dlongMin) ? common_1.Quotation.fromJSON(object.dlongMin) : undefined,
            dshortMin: isSet(object.dshortMin) ? common_1.Quotation.fromJSON(object.dshortMin) : undefined,
            shortEnabledFlag: isSet(object.shortEnabledFlag) ? Boolean(object.shortEnabledFlag) : false,
            name: isSet(object.name) ? String(object.name) : '',
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            couponQuantityPerYear: isSet(object.couponQuantityPerYear) ? Number(object.couponQuantityPerYear) : 0,
            maturityDate: isSet(object.maturityDate) ? fromJsonTimestamp(object.maturityDate) : undefined,
            nominal: isSet(object.nominal) ? common_1.MoneyValue.fromJSON(object.nominal) : undefined,
            stateRegDate: isSet(object.stateRegDate) ? fromJsonTimestamp(object.stateRegDate) : undefined,
            placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
            placementPrice: isSet(object.placementPrice) ? common_1.MoneyValue.fromJSON(object.placementPrice) : undefined,
            aciValue: isSet(object.aciValue) ? common_1.MoneyValue.fromJSON(object.aciValue) : undefined,
            countryOfRisk: isSet(object.countryOfRisk) ? String(object.countryOfRisk) : '',
            countryOfRiskName: isSet(object.countryOfRiskName) ? String(object.countryOfRiskName) : '',
            sector: isSet(object.sector) ? String(object.sector) : '',
            issueKind: isSet(object.issueKind) ? String(object.issueKind) : '',
            issueSize: isSet(object.issueSize) ? Number(object.issueSize) : 0,
            issueSizePlan: isSet(object.issueSizePlan) ? Number(object.issueSizePlan) : 0,
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
            buyAvailableFlag: isSet(object.buyAvailableFlag) ? Boolean(object.buyAvailableFlag) : false,
            sellAvailableFlag: isSet(object.sellAvailableFlag) ? Boolean(object.sellAvailableFlag) : false,
            floatingCouponFlag: isSet(object.floatingCouponFlag) ? Boolean(object.floatingCouponFlag) : false,
            perpetualFlag: isSet(object.perpetualFlag) ? Boolean(object.perpetualFlag) : false,
            amortizationFlag: isSet(object.amortizationFlag) ? Boolean(object.amortizationFlag) : false,
            minPriceIncrement: isSet(object.minPriceIncrement) ? common_1.Quotation.fromJSON(object.minPriceIncrement) : undefined,
            apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag) ? Boolean(object.apiTradeAvailableFlag) : false,
            uid: isSet(object.uid) ? String(object.uid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.isin !== undefined && (obj.isin = message.isin);
        message.lot !== undefined && (obj.lot = Math.round(message.lot));
        message.currency !== undefined && (obj.currency = message.currency);
        message.klong !== undefined && (obj.klong = message.klong ? common_1.Quotation.toJSON(message.klong) : undefined);
        message.kshort !== undefined && (obj.kshort = message.kshort ? common_1.Quotation.toJSON(message.kshort) : undefined);
        message.dlong !== undefined && (obj.dlong = message.dlong ? common_1.Quotation.toJSON(message.dlong) : undefined);
        message.dshort !== undefined && (obj.dshort = message.dshort ? common_1.Quotation.toJSON(message.dshort) : undefined);
        message.dlongMin !== undefined &&
            (obj.dlongMin = message.dlongMin ? common_1.Quotation.toJSON(message.dlongMin) : undefined);
        message.dshortMin !== undefined &&
            (obj.dshortMin = message.dshortMin ? common_1.Quotation.toJSON(message.dshortMin) : undefined);
        message.shortEnabledFlag !== undefined && (obj.shortEnabledFlag = message.shortEnabledFlag);
        message.name !== undefined && (obj.name = message.name);
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.couponQuantityPerYear !== undefined &&
            (obj.couponQuantityPerYear = Math.round(message.couponQuantityPerYear));
        message.maturityDate !== undefined && (obj.maturityDate = message.maturityDate.toISOString());
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.MoneyValue.toJSON(message.nominal) : undefined);
        message.stateRegDate !== undefined && (obj.stateRegDate = message.stateRegDate.toISOString());
        message.placementDate !== undefined && (obj.placementDate = message.placementDate.toISOString());
        message.placementPrice !== undefined &&
            (obj.placementPrice = message.placementPrice ? common_1.MoneyValue.toJSON(message.placementPrice) : undefined);
        message.aciValue !== undefined &&
            (obj.aciValue = message.aciValue ? common_1.MoneyValue.toJSON(message.aciValue) : undefined);
        message.countryOfRisk !== undefined && (obj.countryOfRisk = message.countryOfRisk);
        message.countryOfRiskName !== undefined && (obj.countryOfRiskName = message.countryOfRiskName);
        message.sector !== undefined && (obj.sector = message.sector);
        message.issueKind !== undefined && (obj.issueKind = message.issueKind);
        message.issueSize !== undefined && (obj.issueSize = Math.round(message.issueSize));
        message.issueSizePlan !== undefined && (obj.issueSizePlan = Math.round(message.issueSizePlan));
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
        message.buyAvailableFlag !== undefined && (obj.buyAvailableFlag = message.buyAvailableFlag);
        message.sellAvailableFlag !== undefined && (obj.sellAvailableFlag = message.sellAvailableFlag);
        message.floatingCouponFlag !== undefined && (obj.floatingCouponFlag = message.floatingCouponFlag);
        message.perpetualFlag !== undefined && (obj.perpetualFlag = message.perpetualFlag);
        message.amortizationFlag !== undefined && (obj.amortizationFlag = message.amortizationFlag);
        message.minPriceIncrement !== undefined &&
            (obj.minPriceIncrement = message.minPriceIncrement ? common_1.Quotation.toJSON(message.minPriceIncrement) : undefined);
        message.apiTradeAvailableFlag !== undefined && (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        const message = createBaseBond();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : '';
        message.classCode = (_c = object.classCode) !== null && _c !== void 0 ? _c : '';
        message.isin = (_d = object.isin) !== null && _d !== void 0 ? _d : '';
        message.lot = (_e = object.lot) !== null && _e !== void 0 ? _e : 0;
        message.currency = (_f = object.currency) !== null && _f !== void 0 ? _f : '';
        message.klong =
            object.klong !== undefined && object.klong !== null ? common_1.Quotation.fromPartial(object.klong) : undefined;
        message.kshort =
            object.kshort !== undefined && object.kshort !== null ? common_1.Quotation.fromPartial(object.kshort) : undefined;
        message.dlong =
            object.dlong !== undefined && object.dlong !== null ? common_1.Quotation.fromPartial(object.dlong) : undefined;
        message.dshort =
            object.dshort !== undefined && object.dshort !== null ? common_1.Quotation.fromPartial(object.dshort) : undefined;
        message.dlongMin =
            object.dlongMin !== undefined && object.dlongMin !== null ? common_1.Quotation.fromPartial(object.dlongMin) : undefined;
        message.dshortMin =
            object.dshortMin !== undefined && object.dshortMin !== null ? common_1.Quotation.fromPartial(object.dshortMin) : undefined;
        message.shortEnabledFlag = (_g = object.shortEnabledFlag) !== null && _g !== void 0 ? _g : false;
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : '';
        message.exchange = (_j = object.exchange) !== null && _j !== void 0 ? _j : '';
        message.couponQuantityPerYear = (_k = object.couponQuantityPerYear) !== null && _k !== void 0 ? _k : 0;
        message.maturityDate = (_l = object.maturityDate) !== null && _l !== void 0 ? _l : undefined;
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.MoneyValue.fromPartial(object.nominal) : undefined;
        message.stateRegDate = (_m = object.stateRegDate) !== null && _m !== void 0 ? _m : undefined;
        message.placementDate = (_o = object.placementDate) !== null && _o !== void 0 ? _o : undefined;
        message.placementPrice =
            object.placementPrice !== undefined && object.placementPrice !== null
                ? common_1.MoneyValue.fromPartial(object.placementPrice)
                : undefined;
        message.aciValue =
            object.aciValue !== undefined && object.aciValue !== null ? common_1.MoneyValue.fromPartial(object.aciValue) : undefined;
        message.countryOfRisk = (_p = object.countryOfRisk) !== null && _p !== void 0 ? _p : '';
        message.countryOfRiskName = (_q = object.countryOfRiskName) !== null && _q !== void 0 ? _q : '';
        message.sector = (_r = object.sector) !== null && _r !== void 0 ? _r : '';
        message.issueKind = (_s = object.issueKind) !== null && _s !== void 0 ? _s : '';
        message.issueSize = (_t = object.issueSize) !== null && _t !== void 0 ? _t : 0;
        message.issueSizePlan = (_u = object.issueSizePlan) !== null && _u !== void 0 ? _u : 0;
        message.tradingStatus = (_v = object.tradingStatus) !== null && _v !== void 0 ? _v : 0;
        message.otcFlag = (_w = object.otcFlag) !== null && _w !== void 0 ? _w : false;
        message.buyAvailableFlag = (_x = object.buyAvailableFlag) !== null && _x !== void 0 ? _x : false;
        message.sellAvailableFlag = (_y = object.sellAvailableFlag) !== null && _y !== void 0 ? _y : false;
        message.floatingCouponFlag = (_z = object.floatingCouponFlag) !== null && _z !== void 0 ? _z : false;
        message.perpetualFlag = (_0 = object.perpetualFlag) !== null && _0 !== void 0 ? _0 : false;
        message.amortizationFlag = (_1 = object.amortizationFlag) !== null && _1 !== void 0 ? _1 : false;
        message.minPriceIncrement =
            object.minPriceIncrement !== undefined && object.minPriceIncrement !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrement)
                : undefined;
        message.apiTradeAvailableFlag = (_2 = object.apiTradeAvailableFlag) !== null && _2 !== void 0 ? _2 : false;
        message.uid = (_3 = object.uid) !== null && _3 !== void 0 ? _3 : '';
        return message;
    },
};
function createBaseCurrency() {
    return {
        figi: '',
        ticker: '',
        classCode: '',
        isin: '',
        lot: 0,
        currency: '',
        klong: undefined,
        kshort: undefined,
        dlong: undefined,
        dshort: undefined,
        dlongMin: undefined,
        dshortMin: undefined,
        shortEnabledFlag: false,
        name: '',
        exchange: '',
        nominal: undefined,
        countryOfRisk: '',
        countryOfRiskName: '',
        tradingStatus: 0,
        otcFlag: false,
        buyAvailableFlag: false,
        sellAvailableFlag: false,
        isoCurrencyName: '',
        minPriceIncrement: undefined,
        apiTradeAvailableFlag: false,
        uid: '',
    };
}
exports.Currency = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.classCode !== '') {
            writer.uint32(26).string(message.classCode);
        }
        if (message.isin !== '') {
            writer.uint32(34).string(message.isin);
        }
        if (message.lot !== 0) {
            writer.uint32(40).int32(message.lot);
        }
        if (message.currency !== '') {
            writer.uint32(50).string(message.currency);
        }
        if (message.klong !== undefined) {
            common_1.Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
        }
        if (message.kshort !== undefined) {
            common_1.Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
        }
        if (message.dlong !== undefined) {
            common_1.Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
        }
        if (message.dshort !== undefined) {
            common_1.Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
        }
        if (message.dlongMin !== undefined) {
            common_1.Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
        }
        if (message.dshortMin !== undefined) {
            common_1.Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
        }
        if (message.shortEnabledFlag === true) {
            writer.uint32(104).bool(message.shortEnabledFlag);
        }
        if (message.name !== '') {
            writer.uint32(122).string(message.name);
        }
        if (message.exchange !== '') {
            writer.uint32(130).string(message.exchange);
        }
        if (message.nominal !== undefined) {
            common_1.MoneyValue.encode(message.nominal, writer.uint32(138).fork()).ldelim();
        }
        if (message.countryOfRisk !== '') {
            writer.uint32(146).string(message.countryOfRisk);
        }
        if (message.countryOfRiskName !== '') {
            writer.uint32(154).string(message.countryOfRiskName);
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(160).int32(message.tradingStatus);
        }
        if (message.otcFlag === true) {
            writer.uint32(168).bool(message.otcFlag);
        }
        if (message.buyAvailableFlag === true) {
            writer.uint32(176).bool(message.buyAvailableFlag);
        }
        if (message.sellAvailableFlag === true) {
            writer.uint32(184).bool(message.sellAvailableFlag);
        }
        if (message.isoCurrencyName !== '') {
            writer.uint32(194).string(message.isoCurrencyName);
        }
        if (message.minPriceIncrement !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrement, writer.uint32(202).fork()).ldelim();
        }
        if (message.apiTradeAvailableFlag === true) {
            writer.uint32(208).bool(message.apiTradeAvailableFlag);
        }
        if (message.uid !== '') {
            writer.uint32(218).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCurrency();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.classCode = reader.string();
                    break;
                case 4:
                    message.isin = reader.string();
                    break;
                case 5:
                    message.lot = reader.int32();
                    break;
                case 6:
                    message.currency = reader.string();
                    break;
                case 7:
                    message.klong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.kshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dlong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.dshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dlongMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.dshortMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.shortEnabledFlag = reader.bool();
                    break;
                case 15:
                    message.name = reader.string();
                    break;
                case 16:
                    message.exchange = reader.string();
                    break;
                case 17:
                    message.nominal = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.countryOfRisk = reader.string();
                    break;
                case 19:
                    message.countryOfRiskName = reader.string();
                    break;
                case 20:
                    message.tradingStatus = reader.int32();
                    break;
                case 21:
                    message.otcFlag = reader.bool();
                    break;
                case 22:
                    message.buyAvailableFlag = reader.bool();
                    break;
                case 23:
                    message.sellAvailableFlag = reader.bool();
                    break;
                case 24:
                    message.isoCurrencyName = reader.string();
                    break;
                case 25:
                    message.minPriceIncrement = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.apiTradeAvailableFlag = reader.bool();
                    break;
                case 27:
                    message.uid = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            isin: isSet(object.isin) ? String(object.isin) : '',
            lot: isSet(object.lot) ? Number(object.lot) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            klong: isSet(object.klong) ? common_1.Quotation.fromJSON(object.klong) : undefined,
            kshort: isSet(object.kshort) ? common_1.Quotation.fromJSON(object.kshort) : undefined,
            dlong: isSet(object.dlong) ? common_1.Quotation.fromJSON(object.dlong) : undefined,
            dshort: isSet(object.dshort) ? common_1.Quotation.fromJSON(object.dshort) : undefined,
            dlongMin: isSet(object.dlongMin) ? common_1.Quotation.fromJSON(object.dlongMin) : undefined,
            dshortMin: isSet(object.dshortMin) ? common_1.Quotation.fromJSON(object.dshortMin) : undefined,
            shortEnabledFlag: isSet(object.shortEnabledFlag) ? Boolean(object.shortEnabledFlag) : false,
            name: isSet(object.name) ? String(object.name) : '',
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            nominal: isSet(object.nominal) ? common_1.MoneyValue.fromJSON(object.nominal) : undefined,
            countryOfRisk: isSet(object.countryOfRisk) ? String(object.countryOfRisk) : '',
            countryOfRiskName: isSet(object.countryOfRiskName) ? String(object.countryOfRiskName) : '',
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
            buyAvailableFlag: isSet(object.buyAvailableFlag) ? Boolean(object.buyAvailableFlag) : false,
            sellAvailableFlag: isSet(object.sellAvailableFlag) ? Boolean(object.sellAvailableFlag) : false,
            isoCurrencyName: isSet(object.isoCurrencyName) ? String(object.isoCurrencyName) : '',
            minPriceIncrement: isSet(object.minPriceIncrement) ? common_1.Quotation.fromJSON(object.minPriceIncrement) : undefined,
            apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag) ? Boolean(object.apiTradeAvailableFlag) : false,
            uid: isSet(object.uid) ? String(object.uid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.isin !== undefined && (obj.isin = message.isin);
        message.lot !== undefined && (obj.lot = Math.round(message.lot));
        message.currency !== undefined && (obj.currency = message.currency);
        message.klong !== undefined && (obj.klong = message.klong ? common_1.Quotation.toJSON(message.klong) : undefined);
        message.kshort !== undefined && (obj.kshort = message.kshort ? common_1.Quotation.toJSON(message.kshort) : undefined);
        message.dlong !== undefined && (obj.dlong = message.dlong ? common_1.Quotation.toJSON(message.dlong) : undefined);
        message.dshort !== undefined && (obj.dshort = message.dshort ? common_1.Quotation.toJSON(message.dshort) : undefined);
        message.dlongMin !== undefined &&
            (obj.dlongMin = message.dlongMin ? common_1.Quotation.toJSON(message.dlongMin) : undefined);
        message.dshortMin !== undefined &&
            (obj.dshortMin = message.dshortMin ? common_1.Quotation.toJSON(message.dshortMin) : undefined);
        message.shortEnabledFlag !== undefined && (obj.shortEnabledFlag = message.shortEnabledFlag);
        message.name !== undefined && (obj.name = message.name);
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.MoneyValue.toJSON(message.nominal) : undefined);
        message.countryOfRisk !== undefined && (obj.countryOfRisk = message.countryOfRisk);
        message.countryOfRiskName !== undefined && (obj.countryOfRiskName = message.countryOfRiskName);
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
        message.buyAvailableFlag !== undefined && (obj.buyAvailableFlag = message.buyAvailableFlag);
        message.sellAvailableFlag !== undefined && (obj.sellAvailableFlag = message.sellAvailableFlag);
        message.isoCurrencyName !== undefined && (obj.isoCurrencyName = message.isoCurrencyName);
        message.minPriceIncrement !== undefined &&
            (obj.minPriceIncrement = message.minPriceIncrement ? common_1.Quotation.toJSON(message.minPriceIncrement) : undefined);
        message.apiTradeAvailableFlag !== undefined && (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const message = createBaseCurrency();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : '';
        message.classCode = (_c = object.classCode) !== null && _c !== void 0 ? _c : '';
        message.isin = (_d = object.isin) !== null && _d !== void 0 ? _d : '';
        message.lot = (_e = object.lot) !== null && _e !== void 0 ? _e : 0;
        message.currency = (_f = object.currency) !== null && _f !== void 0 ? _f : '';
        message.klong =
            object.klong !== undefined && object.klong !== null ? common_1.Quotation.fromPartial(object.klong) : undefined;
        message.kshort =
            object.kshort !== undefined && object.kshort !== null ? common_1.Quotation.fromPartial(object.kshort) : undefined;
        message.dlong =
            object.dlong !== undefined && object.dlong !== null ? common_1.Quotation.fromPartial(object.dlong) : undefined;
        message.dshort =
            object.dshort !== undefined && object.dshort !== null ? common_1.Quotation.fromPartial(object.dshort) : undefined;
        message.dlongMin =
            object.dlongMin !== undefined && object.dlongMin !== null ? common_1.Quotation.fromPartial(object.dlongMin) : undefined;
        message.dshortMin =
            object.dshortMin !== undefined && object.dshortMin !== null ? common_1.Quotation.fromPartial(object.dshortMin) : undefined;
        message.shortEnabledFlag = (_g = object.shortEnabledFlag) !== null && _g !== void 0 ? _g : false;
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : '';
        message.exchange = (_j = object.exchange) !== null && _j !== void 0 ? _j : '';
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.MoneyValue.fromPartial(object.nominal) : undefined;
        message.countryOfRisk = (_k = object.countryOfRisk) !== null && _k !== void 0 ? _k : '';
        message.countryOfRiskName = (_l = object.countryOfRiskName) !== null && _l !== void 0 ? _l : '';
        message.tradingStatus = (_m = object.tradingStatus) !== null && _m !== void 0 ? _m : 0;
        message.otcFlag = (_o = object.otcFlag) !== null && _o !== void 0 ? _o : false;
        message.buyAvailableFlag = (_p = object.buyAvailableFlag) !== null && _p !== void 0 ? _p : false;
        message.sellAvailableFlag = (_q = object.sellAvailableFlag) !== null && _q !== void 0 ? _q : false;
        message.isoCurrencyName = (_r = object.isoCurrencyName) !== null && _r !== void 0 ? _r : '';
        message.minPriceIncrement =
            object.minPriceIncrement !== undefined && object.minPriceIncrement !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrement)
                : undefined;
        message.apiTradeAvailableFlag = (_s = object.apiTradeAvailableFlag) !== null && _s !== void 0 ? _s : false;
        message.uid = (_t = object.uid) !== null && _t !== void 0 ? _t : '';
        return message;
    },
};
function createBaseEtf() {
    return {
        figi: '',
        ticker: '',
        classCode: '',
        isin: '',
        lot: 0,
        currency: '',
        klong: undefined,
        kshort: undefined,
        dlong: undefined,
        dshort: undefined,
        dlongMin: undefined,
        dshortMin: undefined,
        shortEnabledFlag: false,
        name: '',
        exchange: '',
        fixedCommission: undefined,
        focusType: '',
        releasedDate: undefined,
        numShares: undefined,
        countryOfRisk: '',
        countryOfRiskName: '',
        sector: '',
        rebalancingFreq: '',
        tradingStatus: 0,
        otcFlag: false,
        buyAvailableFlag: false,
        sellAvailableFlag: false,
        minPriceIncrement: undefined,
        apiTradeAvailableFlag: false,
        uid: '',
    };
}
exports.Etf = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.classCode !== '') {
            writer.uint32(26).string(message.classCode);
        }
        if (message.isin !== '') {
            writer.uint32(34).string(message.isin);
        }
        if (message.lot !== 0) {
            writer.uint32(40).int32(message.lot);
        }
        if (message.currency !== '') {
            writer.uint32(50).string(message.currency);
        }
        if (message.klong !== undefined) {
            common_1.Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
        }
        if (message.kshort !== undefined) {
            common_1.Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
        }
        if (message.dlong !== undefined) {
            common_1.Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
        }
        if (message.dshort !== undefined) {
            common_1.Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
        }
        if (message.dlongMin !== undefined) {
            common_1.Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
        }
        if (message.dshortMin !== undefined) {
            common_1.Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
        }
        if (message.shortEnabledFlag === true) {
            writer.uint32(104).bool(message.shortEnabledFlag);
        }
        if (message.name !== '') {
            writer.uint32(122).string(message.name);
        }
        if (message.exchange !== '') {
            writer.uint32(130).string(message.exchange);
        }
        if (message.fixedCommission !== undefined) {
            common_1.Quotation.encode(message.fixedCommission, writer.uint32(138).fork()).ldelim();
        }
        if (message.focusType !== '') {
            writer.uint32(146).string(message.focusType);
        }
        if (message.releasedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.releasedDate), writer.uint32(154).fork()).ldelim();
        }
        if (message.numShares !== undefined) {
            common_1.Quotation.encode(message.numShares, writer.uint32(162).fork()).ldelim();
        }
        if (message.countryOfRisk !== '') {
            writer.uint32(170).string(message.countryOfRisk);
        }
        if (message.countryOfRiskName !== '') {
            writer.uint32(178).string(message.countryOfRiskName);
        }
        if (message.sector !== '') {
            writer.uint32(186).string(message.sector);
        }
        if (message.rebalancingFreq !== '') {
            writer.uint32(194).string(message.rebalancingFreq);
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(200).int32(message.tradingStatus);
        }
        if (message.otcFlag === true) {
            writer.uint32(208).bool(message.otcFlag);
        }
        if (message.buyAvailableFlag === true) {
            writer.uint32(216).bool(message.buyAvailableFlag);
        }
        if (message.sellAvailableFlag === true) {
            writer.uint32(224).bool(message.sellAvailableFlag);
        }
        if (message.minPriceIncrement !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrement, writer.uint32(234).fork()).ldelim();
        }
        if (message.apiTradeAvailableFlag === true) {
            writer.uint32(240).bool(message.apiTradeAvailableFlag);
        }
        if (message.uid !== '') {
            writer.uint32(250).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEtf();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.classCode = reader.string();
                    break;
                case 4:
                    message.isin = reader.string();
                    break;
                case 5:
                    message.lot = reader.int32();
                    break;
                case 6:
                    message.currency = reader.string();
                    break;
                case 7:
                    message.klong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.kshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dlong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.dshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dlongMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.dshortMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.shortEnabledFlag = reader.bool();
                    break;
                case 15:
                    message.name = reader.string();
                    break;
                case 16:
                    message.exchange = reader.string();
                    break;
                case 17:
                    message.fixedCommission = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.focusType = reader.string();
                    break;
                case 19:
                    message.releasedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.numShares = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.countryOfRisk = reader.string();
                    break;
                case 22:
                    message.countryOfRiskName = reader.string();
                    break;
                case 23:
                    message.sector = reader.string();
                    break;
                case 24:
                    message.rebalancingFreq = reader.string();
                    break;
                case 25:
                    message.tradingStatus = reader.int32();
                    break;
                case 26:
                    message.otcFlag = reader.bool();
                    break;
                case 27:
                    message.buyAvailableFlag = reader.bool();
                    break;
                case 28:
                    message.sellAvailableFlag = reader.bool();
                    break;
                case 29:
                    message.minPriceIncrement = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.apiTradeAvailableFlag = reader.bool();
                    break;
                case 31:
                    message.uid = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            isin: isSet(object.isin) ? String(object.isin) : '',
            lot: isSet(object.lot) ? Number(object.lot) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            klong: isSet(object.klong) ? common_1.Quotation.fromJSON(object.klong) : undefined,
            kshort: isSet(object.kshort) ? common_1.Quotation.fromJSON(object.kshort) : undefined,
            dlong: isSet(object.dlong) ? common_1.Quotation.fromJSON(object.dlong) : undefined,
            dshort: isSet(object.dshort) ? common_1.Quotation.fromJSON(object.dshort) : undefined,
            dlongMin: isSet(object.dlongMin) ? common_1.Quotation.fromJSON(object.dlongMin) : undefined,
            dshortMin: isSet(object.dshortMin) ? common_1.Quotation.fromJSON(object.dshortMin) : undefined,
            shortEnabledFlag: isSet(object.shortEnabledFlag) ? Boolean(object.shortEnabledFlag) : false,
            name: isSet(object.name) ? String(object.name) : '',
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            fixedCommission: isSet(object.fixedCommission) ? common_1.Quotation.fromJSON(object.fixedCommission) : undefined,
            focusType: isSet(object.focusType) ? String(object.focusType) : '',
            releasedDate: isSet(object.releasedDate) ? fromJsonTimestamp(object.releasedDate) : undefined,
            numShares: isSet(object.numShares) ? common_1.Quotation.fromJSON(object.numShares) : undefined,
            countryOfRisk: isSet(object.countryOfRisk) ? String(object.countryOfRisk) : '',
            countryOfRiskName: isSet(object.countryOfRiskName) ? String(object.countryOfRiskName) : '',
            sector: isSet(object.sector) ? String(object.sector) : '',
            rebalancingFreq: isSet(object.rebalancingFreq) ? String(object.rebalancingFreq) : '',
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
            buyAvailableFlag: isSet(object.buyAvailableFlag) ? Boolean(object.buyAvailableFlag) : false,
            sellAvailableFlag: isSet(object.sellAvailableFlag) ? Boolean(object.sellAvailableFlag) : false,
            minPriceIncrement: isSet(object.minPriceIncrement) ? common_1.Quotation.fromJSON(object.minPriceIncrement) : undefined,
            apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag) ? Boolean(object.apiTradeAvailableFlag) : false,
            uid: isSet(object.uid) ? String(object.uid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.isin !== undefined && (obj.isin = message.isin);
        message.lot !== undefined && (obj.lot = Math.round(message.lot));
        message.currency !== undefined && (obj.currency = message.currency);
        message.klong !== undefined && (obj.klong = message.klong ? common_1.Quotation.toJSON(message.klong) : undefined);
        message.kshort !== undefined && (obj.kshort = message.kshort ? common_1.Quotation.toJSON(message.kshort) : undefined);
        message.dlong !== undefined && (obj.dlong = message.dlong ? common_1.Quotation.toJSON(message.dlong) : undefined);
        message.dshort !== undefined && (obj.dshort = message.dshort ? common_1.Quotation.toJSON(message.dshort) : undefined);
        message.dlongMin !== undefined &&
            (obj.dlongMin = message.dlongMin ? common_1.Quotation.toJSON(message.dlongMin) : undefined);
        message.dshortMin !== undefined &&
            (obj.dshortMin = message.dshortMin ? common_1.Quotation.toJSON(message.dshortMin) : undefined);
        message.shortEnabledFlag !== undefined && (obj.shortEnabledFlag = message.shortEnabledFlag);
        message.name !== undefined && (obj.name = message.name);
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.fixedCommission !== undefined &&
            (obj.fixedCommission = message.fixedCommission ? common_1.Quotation.toJSON(message.fixedCommission) : undefined);
        message.focusType !== undefined && (obj.focusType = message.focusType);
        message.releasedDate !== undefined && (obj.releasedDate = message.releasedDate.toISOString());
        message.numShares !== undefined &&
            (obj.numShares = message.numShares ? common_1.Quotation.toJSON(message.numShares) : undefined);
        message.countryOfRisk !== undefined && (obj.countryOfRisk = message.countryOfRisk);
        message.countryOfRiskName !== undefined && (obj.countryOfRiskName = message.countryOfRiskName);
        message.sector !== undefined && (obj.sector = message.sector);
        message.rebalancingFreq !== undefined && (obj.rebalancingFreq = message.rebalancingFreq);
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
        message.buyAvailableFlag !== undefined && (obj.buyAvailableFlag = message.buyAvailableFlag);
        message.sellAvailableFlag !== undefined && (obj.sellAvailableFlag = message.sellAvailableFlag);
        message.minPriceIncrement !== undefined &&
            (obj.minPriceIncrement = message.minPriceIncrement ? common_1.Quotation.toJSON(message.minPriceIncrement) : undefined);
        message.apiTradeAvailableFlag !== undefined && (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        const message = createBaseEtf();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : '';
        message.classCode = (_c = object.classCode) !== null && _c !== void 0 ? _c : '';
        message.isin = (_d = object.isin) !== null && _d !== void 0 ? _d : '';
        message.lot = (_e = object.lot) !== null && _e !== void 0 ? _e : 0;
        message.currency = (_f = object.currency) !== null && _f !== void 0 ? _f : '';
        message.klong =
            object.klong !== undefined && object.klong !== null ? common_1.Quotation.fromPartial(object.klong) : undefined;
        message.kshort =
            object.kshort !== undefined && object.kshort !== null ? common_1.Quotation.fromPartial(object.kshort) : undefined;
        message.dlong =
            object.dlong !== undefined && object.dlong !== null ? common_1.Quotation.fromPartial(object.dlong) : undefined;
        message.dshort =
            object.dshort !== undefined && object.dshort !== null ? common_1.Quotation.fromPartial(object.dshort) : undefined;
        message.dlongMin =
            object.dlongMin !== undefined && object.dlongMin !== null ? common_1.Quotation.fromPartial(object.dlongMin) : undefined;
        message.dshortMin =
            object.dshortMin !== undefined && object.dshortMin !== null ? common_1.Quotation.fromPartial(object.dshortMin) : undefined;
        message.shortEnabledFlag = (_g = object.shortEnabledFlag) !== null && _g !== void 0 ? _g : false;
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : '';
        message.exchange = (_j = object.exchange) !== null && _j !== void 0 ? _j : '';
        message.fixedCommission =
            object.fixedCommission !== undefined && object.fixedCommission !== null
                ? common_1.Quotation.fromPartial(object.fixedCommission)
                : undefined;
        message.focusType = (_k = object.focusType) !== null && _k !== void 0 ? _k : '';
        message.releasedDate = (_l = object.releasedDate) !== null && _l !== void 0 ? _l : undefined;
        message.numShares =
            object.numShares !== undefined && object.numShares !== null ? common_1.Quotation.fromPartial(object.numShares) : undefined;
        message.countryOfRisk = (_m = object.countryOfRisk) !== null && _m !== void 0 ? _m : '';
        message.countryOfRiskName = (_o = object.countryOfRiskName) !== null && _o !== void 0 ? _o : '';
        message.sector = (_p = object.sector) !== null && _p !== void 0 ? _p : '';
        message.rebalancingFreq = (_q = object.rebalancingFreq) !== null && _q !== void 0 ? _q : '';
        message.tradingStatus = (_r = object.tradingStatus) !== null && _r !== void 0 ? _r : 0;
        message.otcFlag = (_s = object.otcFlag) !== null && _s !== void 0 ? _s : false;
        message.buyAvailableFlag = (_t = object.buyAvailableFlag) !== null && _t !== void 0 ? _t : false;
        message.sellAvailableFlag = (_u = object.sellAvailableFlag) !== null && _u !== void 0 ? _u : false;
        message.minPriceIncrement =
            object.minPriceIncrement !== undefined && object.minPriceIncrement !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrement)
                : undefined;
        message.apiTradeAvailableFlag = (_v = object.apiTradeAvailableFlag) !== null && _v !== void 0 ? _v : false;
        message.uid = (_w = object.uid) !== null && _w !== void 0 ? _w : '';
        return message;
    },
};
function createBaseFuture() {
    return {
        figi: '',
        ticker: '',
        classCode: '',
        lot: 0,
        currency: '',
        klong: undefined,
        kshort: undefined,
        dlong: undefined,
        dshort: undefined,
        dlongMin: undefined,
        dshortMin: undefined,
        shortEnabledFlag: false,
        name: '',
        exchange: '',
        firstTradeDate: undefined,
        lastTradeDate: undefined,
        futuresType: '',
        assetType: '',
        basicAsset: '',
        basicAssetSize: undefined,
        countryOfRisk: '',
        countryOfRiskName: '',
        sector: '',
        expirationDate: undefined,
        tradingStatus: 0,
        otcFlag: false,
        buyAvailableFlag: false,
        sellAvailableFlag: false,
        minPriceIncrement: undefined,
        apiTradeAvailableFlag: false,
        uid: '',
    };
}
exports.Future = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.classCode !== '') {
            writer.uint32(26).string(message.classCode);
        }
        if (message.lot !== 0) {
            writer.uint32(32).int32(message.lot);
        }
        if (message.currency !== '') {
            writer.uint32(42).string(message.currency);
        }
        if (message.klong !== undefined) {
            common_1.Quotation.encode(message.klong, writer.uint32(50).fork()).ldelim();
        }
        if (message.kshort !== undefined) {
            common_1.Quotation.encode(message.kshort, writer.uint32(58).fork()).ldelim();
        }
        if (message.dlong !== undefined) {
            common_1.Quotation.encode(message.dlong, writer.uint32(66).fork()).ldelim();
        }
        if (message.dshort !== undefined) {
            common_1.Quotation.encode(message.dshort, writer.uint32(74).fork()).ldelim();
        }
        if (message.dlongMin !== undefined) {
            common_1.Quotation.encode(message.dlongMin, writer.uint32(82).fork()).ldelim();
        }
        if (message.dshortMin !== undefined) {
            common_1.Quotation.encode(message.dshortMin, writer.uint32(90).fork()).ldelim();
        }
        if (message.shortEnabledFlag === true) {
            writer.uint32(96).bool(message.shortEnabledFlag);
        }
        if (message.name !== '') {
            writer.uint32(106).string(message.name);
        }
        if (message.exchange !== '') {
            writer.uint32(114).string(message.exchange);
        }
        if (message.firstTradeDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.firstTradeDate), writer.uint32(122).fork()).ldelim();
        }
        if (message.lastTradeDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastTradeDate), writer.uint32(130).fork()).ldelim();
        }
        if (message.futuresType !== '') {
            writer.uint32(138).string(message.futuresType);
        }
        if (message.assetType !== '') {
            writer.uint32(146).string(message.assetType);
        }
        if (message.basicAsset !== '') {
            writer.uint32(154).string(message.basicAsset);
        }
        if (message.basicAssetSize !== undefined) {
            common_1.Quotation.encode(message.basicAssetSize, writer.uint32(162).fork()).ldelim();
        }
        if (message.countryOfRisk !== '') {
            writer.uint32(170).string(message.countryOfRisk);
        }
        if (message.countryOfRiskName !== '') {
            writer.uint32(178).string(message.countryOfRiskName);
        }
        if (message.sector !== '') {
            writer.uint32(186).string(message.sector);
        }
        if (message.expirationDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(194).fork()).ldelim();
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(200).int32(message.tradingStatus);
        }
        if (message.otcFlag === true) {
            writer.uint32(208).bool(message.otcFlag);
        }
        if (message.buyAvailableFlag === true) {
            writer.uint32(216).bool(message.buyAvailableFlag);
        }
        if (message.sellAvailableFlag === true) {
            writer.uint32(224).bool(message.sellAvailableFlag);
        }
        if (message.minPriceIncrement !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrement, writer.uint32(234).fork()).ldelim();
        }
        if (message.apiTradeAvailableFlag === true) {
            writer.uint32(240).bool(message.apiTradeAvailableFlag);
        }
        if (message.uid !== '') {
            writer.uint32(250).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFuture();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.classCode = reader.string();
                    break;
                case 4:
                    message.lot = reader.int32();
                    break;
                case 5:
                    message.currency = reader.string();
                    break;
                case 6:
                    message.klong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.kshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.dlong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.dlongMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dshortMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.shortEnabledFlag = reader.bool();
                    break;
                case 13:
                    message.name = reader.string();
                    break;
                case 14:
                    message.exchange = reader.string();
                    break;
                case 15:
                    message.firstTradeDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.lastTradeDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.futuresType = reader.string();
                    break;
                case 18:
                    message.assetType = reader.string();
                    break;
                case 19:
                    message.basicAsset = reader.string();
                    break;
                case 20:
                    message.basicAssetSize = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.countryOfRisk = reader.string();
                    break;
                case 22:
                    message.countryOfRiskName = reader.string();
                    break;
                case 23:
                    message.sector = reader.string();
                    break;
                case 24:
                    message.expirationDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 25:
                    message.tradingStatus = reader.int32();
                    break;
                case 26:
                    message.otcFlag = reader.bool();
                    break;
                case 27:
                    message.buyAvailableFlag = reader.bool();
                    break;
                case 28:
                    message.sellAvailableFlag = reader.bool();
                    break;
                case 29:
                    message.minPriceIncrement = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.apiTradeAvailableFlag = reader.bool();
                    break;
                case 31:
                    message.uid = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            lot: isSet(object.lot) ? Number(object.lot) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            klong: isSet(object.klong) ? common_1.Quotation.fromJSON(object.klong) : undefined,
            kshort: isSet(object.kshort) ? common_1.Quotation.fromJSON(object.kshort) : undefined,
            dlong: isSet(object.dlong) ? common_1.Quotation.fromJSON(object.dlong) : undefined,
            dshort: isSet(object.dshort) ? common_1.Quotation.fromJSON(object.dshort) : undefined,
            dlongMin: isSet(object.dlongMin) ? common_1.Quotation.fromJSON(object.dlongMin) : undefined,
            dshortMin: isSet(object.dshortMin) ? common_1.Quotation.fromJSON(object.dshortMin) : undefined,
            shortEnabledFlag: isSet(object.shortEnabledFlag) ? Boolean(object.shortEnabledFlag) : false,
            name: isSet(object.name) ? String(object.name) : '',
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            firstTradeDate: isSet(object.firstTradeDate) ? fromJsonTimestamp(object.firstTradeDate) : undefined,
            lastTradeDate: isSet(object.lastTradeDate) ? fromJsonTimestamp(object.lastTradeDate) : undefined,
            futuresType: isSet(object.futuresType) ? String(object.futuresType) : '',
            assetType: isSet(object.assetType) ? String(object.assetType) : '',
            basicAsset: isSet(object.basicAsset) ? String(object.basicAsset) : '',
            basicAssetSize: isSet(object.basicAssetSize) ? common_1.Quotation.fromJSON(object.basicAssetSize) : undefined,
            countryOfRisk: isSet(object.countryOfRisk) ? String(object.countryOfRisk) : '',
            countryOfRiskName: isSet(object.countryOfRiskName) ? String(object.countryOfRiskName) : '',
            sector: isSet(object.sector) ? String(object.sector) : '',
            expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
            buyAvailableFlag: isSet(object.buyAvailableFlag) ? Boolean(object.buyAvailableFlag) : false,
            sellAvailableFlag: isSet(object.sellAvailableFlag) ? Boolean(object.sellAvailableFlag) : false,
            minPriceIncrement: isSet(object.minPriceIncrement) ? common_1.Quotation.fromJSON(object.minPriceIncrement) : undefined,
            apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag) ? Boolean(object.apiTradeAvailableFlag) : false,
            uid: isSet(object.uid) ? String(object.uid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.lot !== undefined && (obj.lot = Math.round(message.lot));
        message.currency !== undefined && (obj.currency = message.currency);
        message.klong !== undefined && (obj.klong = message.klong ? common_1.Quotation.toJSON(message.klong) : undefined);
        message.kshort !== undefined && (obj.kshort = message.kshort ? common_1.Quotation.toJSON(message.kshort) : undefined);
        message.dlong !== undefined && (obj.dlong = message.dlong ? common_1.Quotation.toJSON(message.dlong) : undefined);
        message.dshort !== undefined && (obj.dshort = message.dshort ? common_1.Quotation.toJSON(message.dshort) : undefined);
        message.dlongMin !== undefined &&
            (obj.dlongMin = message.dlongMin ? common_1.Quotation.toJSON(message.dlongMin) : undefined);
        message.dshortMin !== undefined &&
            (obj.dshortMin = message.dshortMin ? common_1.Quotation.toJSON(message.dshortMin) : undefined);
        message.shortEnabledFlag !== undefined && (obj.shortEnabledFlag = message.shortEnabledFlag);
        message.name !== undefined && (obj.name = message.name);
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.firstTradeDate !== undefined && (obj.firstTradeDate = message.firstTradeDate.toISOString());
        message.lastTradeDate !== undefined && (obj.lastTradeDate = message.lastTradeDate.toISOString());
        message.futuresType !== undefined && (obj.futuresType = message.futuresType);
        message.assetType !== undefined && (obj.assetType = message.assetType);
        message.basicAsset !== undefined && (obj.basicAsset = message.basicAsset);
        message.basicAssetSize !== undefined &&
            (obj.basicAssetSize = message.basicAssetSize ? common_1.Quotation.toJSON(message.basicAssetSize) : undefined);
        message.countryOfRisk !== undefined && (obj.countryOfRisk = message.countryOfRisk);
        message.countryOfRiskName !== undefined && (obj.countryOfRiskName = message.countryOfRiskName);
        message.sector !== undefined && (obj.sector = message.sector);
        message.expirationDate !== undefined && (obj.expirationDate = message.expirationDate.toISOString());
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
        message.buyAvailableFlag !== undefined && (obj.buyAvailableFlag = message.buyAvailableFlag);
        message.sellAvailableFlag !== undefined && (obj.sellAvailableFlag = message.sellAvailableFlag);
        message.minPriceIncrement !== undefined &&
            (obj.minPriceIncrement = message.minPriceIncrement ? common_1.Quotation.toJSON(message.minPriceIncrement) : undefined);
        message.apiTradeAvailableFlag !== undefined && (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        const message = createBaseFuture();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : '';
        message.classCode = (_c = object.classCode) !== null && _c !== void 0 ? _c : '';
        message.lot = (_d = object.lot) !== null && _d !== void 0 ? _d : 0;
        message.currency = (_e = object.currency) !== null && _e !== void 0 ? _e : '';
        message.klong =
            object.klong !== undefined && object.klong !== null ? common_1.Quotation.fromPartial(object.klong) : undefined;
        message.kshort =
            object.kshort !== undefined && object.kshort !== null ? common_1.Quotation.fromPartial(object.kshort) : undefined;
        message.dlong =
            object.dlong !== undefined && object.dlong !== null ? common_1.Quotation.fromPartial(object.dlong) : undefined;
        message.dshort =
            object.dshort !== undefined && object.dshort !== null ? common_1.Quotation.fromPartial(object.dshort) : undefined;
        message.dlongMin =
            object.dlongMin !== undefined && object.dlongMin !== null ? common_1.Quotation.fromPartial(object.dlongMin) : undefined;
        message.dshortMin =
            object.dshortMin !== undefined && object.dshortMin !== null ? common_1.Quotation.fromPartial(object.dshortMin) : undefined;
        message.shortEnabledFlag = (_f = object.shortEnabledFlag) !== null && _f !== void 0 ? _f : false;
        message.name = (_g = object.name) !== null && _g !== void 0 ? _g : '';
        message.exchange = (_h = object.exchange) !== null && _h !== void 0 ? _h : '';
        message.firstTradeDate = (_j = object.firstTradeDate) !== null && _j !== void 0 ? _j : undefined;
        message.lastTradeDate = (_k = object.lastTradeDate) !== null && _k !== void 0 ? _k : undefined;
        message.futuresType = (_l = object.futuresType) !== null && _l !== void 0 ? _l : '';
        message.assetType = (_m = object.assetType) !== null && _m !== void 0 ? _m : '';
        message.basicAsset = (_o = object.basicAsset) !== null && _o !== void 0 ? _o : '';
        message.basicAssetSize =
            object.basicAssetSize !== undefined && object.basicAssetSize !== null
                ? common_1.Quotation.fromPartial(object.basicAssetSize)
                : undefined;
        message.countryOfRisk = (_p = object.countryOfRisk) !== null && _p !== void 0 ? _p : '';
        message.countryOfRiskName = (_q = object.countryOfRiskName) !== null && _q !== void 0 ? _q : '';
        message.sector = (_r = object.sector) !== null && _r !== void 0 ? _r : '';
        message.expirationDate = (_s = object.expirationDate) !== null && _s !== void 0 ? _s : undefined;
        message.tradingStatus = (_t = object.tradingStatus) !== null && _t !== void 0 ? _t : 0;
        message.otcFlag = (_u = object.otcFlag) !== null && _u !== void 0 ? _u : false;
        message.buyAvailableFlag = (_v = object.buyAvailableFlag) !== null && _v !== void 0 ? _v : false;
        message.sellAvailableFlag = (_w = object.sellAvailableFlag) !== null && _w !== void 0 ? _w : false;
        message.minPriceIncrement =
            object.minPriceIncrement !== undefined && object.minPriceIncrement !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrement)
                : undefined;
        message.apiTradeAvailableFlag = (_x = object.apiTradeAvailableFlag) !== null && _x !== void 0 ? _x : false;
        message.uid = (_y = object.uid) !== null && _y !== void 0 ? _y : '';
        return message;
    },
};
function createBaseShare() {
    return {
        figi: '',
        ticker: '',
        classCode: '',
        isin: '',
        lot: 0,
        currency: '',
        klong: undefined,
        kshort: undefined,
        dlong: undefined,
        dshort: undefined,
        dlongMin: undefined,
        dshortMin: undefined,
        shortEnabledFlag: false,
        name: '',
        exchange: '',
        ipoDate: undefined,
        issueSize: 0,
        countryOfRisk: '',
        countryOfRiskName: '',
        sector: '',
        issueSizePlan: 0,
        nominal: undefined,
        tradingStatus: 0,
        otcFlag: false,
        buyAvailableFlag: false,
        sellAvailableFlag: false,
        divYieldFlag: false,
        shareType: 0,
        minPriceIncrement: undefined,
        apiTradeAvailableFlag: false,
        uid: '',
    };
}
exports.Share = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.classCode !== '') {
            writer.uint32(26).string(message.classCode);
        }
        if (message.isin !== '') {
            writer.uint32(34).string(message.isin);
        }
        if (message.lot !== 0) {
            writer.uint32(40).int32(message.lot);
        }
        if (message.currency !== '') {
            writer.uint32(50).string(message.currency);
        }
        if (message.klong !== undefined) {
            common_1.Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
        }
        if (message.kshort !== undefined) {
            common_1.Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
        }
        if (message.dlong !== undefined) {
            common_1.Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
        }
        if (message.dshort !== undefined) {
            common_1.Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
        }
        if (message.dlongMin !== undefined) {
            common_1.Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
        }
        if (message.dshortMin !== undefined) {
            common_1.Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
        }
        if (message.shortEnabledFlag === true) {
            writer.uint32(104).bool(message.shortEnabledFlag);
        }
        if (message.name !== '') {
            writer.uint32(122).string(message.name);
        }
        if (message.exchange !== '') {
            writer.uint32(130).string(message.exchange);
        }
        if (message.ipoDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.ipoDate), writer.uint32(138).fork()).ldelim();
        }
        if (message.issueSize !== 0) {
            writer.uint32(144).int64(message.issueSize);
        }
        if (message.countryOfRisk !== '') {
            writer.uint32(154).string(message.countryOfRisk);
        }
        if (message.countryOfRiskName !== '') {
            writer.uint32(162).string(message.countryOfRiskName);
        }
        if (message.sector !== '') {
            writer.uint32(170).string(message.sector);
        }
        if (message.issueSizePlan !== 0) {
            writer.uint32(176).int64(message.issueSizePlan);
        }
        if (message.nominal !== undefined) {
            common_1.MoneyValue.encode(message.nominal, writer.uint32(186).fork()).ldelim();
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(200).int32(message.tradingStatus);
        }
        if (message.otcFlag === true) {
            writer.uint32(208).bool(message.otcFlag);
        }
        if (message.buyAvailableFlag === true) {
            writer.uint32(216).bool(message.buyAvailableFlag);
        }
        if (message.sellAvailableFlag === true) {
            writer.uint32(224).bool(message.sellAvailableFlag);
        }
        if (message.divYieldFlag === true) {
            writer.uint32(232).bool(message.divYieldFlag);
        }
        if (message.shareType !== 0) {
            writer.uint32(240).int32(message.shareType);
        }
        if (message.minPriceIncrement !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrement, writer.uint32(250).fork()).ldelim();
        }
        if (message.apiTradeAvailableFlag === true) {
            writer.uint32(256).bool(message.apiTradeAvailableFlag);
        }
        if (message.uid !== '') {
            writer.uint32(266).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseShare();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.classCode = reader.string();
                    break;
                case 4:
                    message.isin = reader.string();
                    break;
                case 5:
                    message.lot = reader.int32();
                    break;
                case 6:
                    message.currency = reader.string();
                    break;
                case 7:
                    message.klong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.kshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dlong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.dshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dlongMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.dshortMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.shortEnabledFlag = reader.bool();
                    break;
                case 15:
                    message.name = reader.string();
                    break;
                case 16:
                    message.exchange = reader.string();
                    break;
                case 17:
                    message.ipoDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.issueSize = longToNumber(reader.int64());
                    break;
                case 19:
                    message.countryOfRisk = reader.string();
                    break;
                case 20:
                    message.countryOfRiskName = reader.string();
                    break;
                case 21:
                    message.sector = reader.string();
                    break;
                case 22:
                    message.issueSizePlan = longToNumber(reader.int64());
                    break;
                case 23:
                    message.nominal = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.tradingStatus = reader.int32();
                    break;
                case 26:
                    message.otcFlag = reader.bool();
                    break;
                case 27:
                    message.buyAvailableFlag = reader.bool();
                    break;
                case 28:
                    message.sellAvailableFlag = reader.bool();
                    break;
                case 29:
                    message.divYieldFlag = reader.bool();
                    break;
                case 30:
                    message.shareType = reader.int32();
                    break;
                case 31:
                    message.minPriceIncrement = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 32:
                    message.apiTradeAvailableFlag = reader.bool();
                    break;
                case 33:
                    message.uid = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            isin: isSet(object.isin) ? String(object.isin) : '',
            lot: isSet(object.lot) ? Number(object.lot) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            klong: isSet(object.klong) ? common_1.Quotation.fromJSON(object.klong) : undefined,
            kshort: isSet(object.kshort) ? common_1.Quotation.fromJSON(object.kshort) : undefined,
            dlong: isSet(object.dlong) ? common_1.Quotation.fromJSON(object.dlong) : undefined,
            dshort: isSet(object.dshort) ? common_1.Quotation.fromJSON(object.dshort) : undefined,
            dlongMin: isSet(object.dlongMin) ? common_1.Quotation.fromJSON(object.dlongMin) : undefined,
            dshortMin: isSet(object.dshortMin) ? common_1.Quotation.fromJSON(object.dshortMin) : undefined,
            shortEnabledFlag: isSet(object.shortEnabledFlag) ? Boolean(object.shortEnabledFlag) : false,
            name: isSet(object.name) ? String(object.name) : '',
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            ipoDate: isSet(object.ipoDate) ? fromJsonTimestamp(object.ipoDate) : undefined,
            issueSize: isSet(object.issueSize) ? Number(object.issueSize) : 0,
            countryOfRisk: isSet(object.countryOfRisk) ? String(object.countryOfRisk) : '',
            countryOfRiskName: isSet(object.countryOfRiskName) ? String(object.countryOfRiskName) : '',
            sector: isSet(object.sector) ? String(object.sector) : '',
            issueSizePlan: isSet(object.issueSizePlan) ? Number(object.issueSizePlan) : 0,
            nominal: isSet(object.nominal) ? common_1.MoneyValue.fromJSON(object.nominal) : undefined,
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
            buyAvailableFlag: isSet(object.buyAvailableFlag) ? Boolean(object.buyAvailableFlag) : false,
            sellAvailableFlag: isSet(object.sellAvailableFlag) ? Boolean(object.sellAvailableFlag) : false,
            divYieldFlag: isSet(object.divYieldFlag) ? Boolean(object.divYieldFlag) : false,
            shareType: isSet(object.shareType) ? shareTypeFromJSON(object.shareType) : 0,
            minPriceIncrement: isSet(object.minPriceIncrement) ? common_1.Quotation.fromJSON(object.minPriceIncrement) : undefined,
            apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag) ? Boolean(object.apiTradeAvailableFlag) : false,
            uid: isSet(object.uid) ? String(object.uid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.isin !== undefined && (obj.isin = message.isin);
        message.lot !== undefined && (obj.lot = Math.round(message.lot));
        message.currency !== undefined && (obj.currency = message.currency);
        message.klong !== undefined && (obj.klong = message.klong ? common_1.Quotation.toJSON(message.klong) : undefined);
        message.kshort !== undefined && (obj.kshort = message.kshort ? common_1.Quotation.toJSON(message.kshort) : undefined);
        message.dlong !== undefined && (obj.dlong = message.dlong ? common_1.Quotation.toJSON(message.dlong) : undefined);
        message.dshort !== undefined && (obj.dshort = message.dshort ? common_1.Quotation.toJSON(message.dshort) : undefined);
        message.dlongMin !== undefined &&
            (obj.dlongMin = message.dlongMin ? common_1.Quotation.toJSON(message.dlongMin) : undefined);
        message.dshortMin !== undefined &&
            (obj.dshortMin = message.dshortMin ? common_1.Quotation.toJSON(message.dshortMin) : undefined);
        message.shortEnabledFlag !== undefined && (obj.shortEnabledFlag = message.shortEnabledFlag);
        message.name !== undefined && (obj.name = message.name);
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.ipoDate !== undefined && (obj.ipoDate = message.ipoDate.toISOString());
        message.issueSize !== undefined && (obj.issueSize = Math.round(message.issueSize));
        message.countryOfRisk !== undefined && (obj.countryOfRisk = message.countryOfRisk);
        message.countryOfRiskName !== undefined && (obj.countryOfRiskName = message.countryOfRiskName);
        message.sector !== undefined && (obj.sector = message.sector);
        message.issueSizePlan !== undefined && (obj.issueSizePlan = Math.round(message.issueSizePlan));
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.MoneyValue.toJSON(message.nominal) : undefined);
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
        message.buyAvailableFlag !== undefined && (obj.buyAvailableFlag = message.buyAvailableFlag);
        message.sellAvailableFlag !== undefined && (obj.sellAvailableFlag = message.sellAvailableFlag);
        message.divYieldFlag !== undefined && (obj.divYieldFlag = message.divYieldFlag);
        message.shareType !== undefined && (obj.shareType = shareTypeToJSON(message.shareType));
        message.minPriceIncrement !== undefined &&
            (obj.minPriceIncrement = message.minPriceIncrement ? common_1.Quotation.toJSON(message.minPriceIncrement) : undefined);
        message.apiTradeAvailableFlag !== undefined && (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        const message = createBaseShare();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : '';
        message.classCode = (_c = object.classCode) !== null && _c !== void 0 ? _c : '';
        message.isin = (_d = object.isin) !== null && _d !== void 0 ? _d : '';
        message.lot = (_e = object.lot) !== null && _e !== void 0 ? _e : 0;
        message.currency = (_f = object.currency) !== null && _f !== void 0 ? _f : '';
        message.klong =
            object.klong !== undefined && object.klong !== null ? common_1.Quotation.fromPartial(object.klong) : undefined;
        message.kshort =
            object.kshort !== undefined && object.kshort !== null ? common_1.Quotation.fromPartial(object.kshort) : undefined;
        message.dlong =
            object.dlong !== undefined && object.dlong !== null ? common_1.Quotation.fromPartial(object.dlong) : undefined;
        message.dshort =
            object.dshort !== undefined && object.dshort !== null ? common_1.Quotation.fromPartial(object.dshort) : undefined;
        message.dlongMin =
            object.dlongMin !== undefined && object.dlongMin !== null ? common_1.Quotation.fromPartial(object.dlongMin) : undefined;
        message.dshortMin =
            object.dshortMin !== undefined && object.dshortMin !== null ? common_1.Quotation.fromPartial(object.dshortMin) : undefined;
        message.shortEnabledFlag = (_g = object.shortEnabledFlag) !== null && _g !== void 0 ? _g : false;
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : '';
        message.exchange = (_j = object.exchange) !== null && _j !== void 0 ? _j : '';
        message.ipoDate = (_k = object.ipoDate) !== null && _k !== void 0 ? _k : undefined;
        message.issueSize = (_l = object.issueSize) !== null && _l !== void 0 ? _l : 0;
        message.countryOfRisk = (_m = object.countryOfRisk) !== null && _m !== void 0 ? _m : '';
        message.countryOfRiskName = (_o = object.countryOfRiskName) !== null && _o !== void 0 ? _o : '';
        message.sector = (_p = object.sector) !== null && _p !== void 0 ? _p : '';
        message.issueSizePlan = (_q = object.issueSizePlan) !== null && _q !== void 0 ? _q : 0;
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.MoneyValue.fromPartial(object.nominal) : undefined;
        message.tradingStatus = (_r = object.tradingStatus) !== null && _r !== void 0 ? _r : 0;
        message.otcFlag = (_s = object.otcFlag) !== null && _s !== void 0 ? _s : false;
        message.buyAvailableFlag = (_t = object.buyAvailableFlag) !== null && _t !== void 0 ? _t : false;
        message.sellAvailableFlag = (_u = object.sellAvailableFlag) !== null && _u !== void 0 ? _u : false;
        message.divYieldFlag = (_v = object.divYieldFlag) !== null && _v !== void 0 ? _v : false;
        message.shareType = (_w = object.shareType) !== null && _w !== void 0 ? _w : 0;
        message.minPriceIncrement =
            object.minPriceIncrement !== undefined && object.minPriceIncrement !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrement)
                : undefined;
        message.apiTradeAvailableFlag = (_x = object.apiTradeAvailableFlag) !== null && _x !== void 0 ? _x : false;
        message.uid = (_y = object.uid) !== null && _y !== void 0 ? _y : '';
        return message;
    },
};
function createBaseGetAccruedInterestsRequest() {
    return { figi: '', from: undefined, to: undefined };
}
exports.GetAccruedInterestsRequest = {
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
        const message = createBaseGetAccruedInterestsRequest();
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
        const message = createBaseGetAccruedInterestsRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetAccruedInterestsResponse() {
    return { accruedInterests: [] };
}
exports.GetAccruedInterestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accruedInterests) {
            exports.AccruedInterest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccruedInterestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accruedInterests.push(exports.AccruedInterest.decode(reader, reader.uint32()));
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
            accruedInterests: Array.isArray(object === null || object === void 0 ? void 0 : object.accruedInterests)
                ? object.accruedInterests.map((e) => exports.AccruedInterest.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accruedInterests) {
            obj.accruedInterests = message.accruedInterests.map(e => (e ? exports.AccruedInterest.toJSON(e) : undefined));
        }
        else {
            obj.accruedInterests = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAccruedInterestsResponse();
        message.accruedInterests = ((_a = object.accruedInterests) === null || _a === void 0 ? void 0 : _a.map(e => exports.AccruedInterest.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAccruedInterest() {
    return { date: undefined, value: undefined, valuePercent: undefined, nominal: undefined };
}
exports.AccruedInterest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.date !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
        }
        if (message.value !== undefined) {
            common_1.Quotation.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        if (message.valuePercent !== undefined) {
            common_1.Quotation.encode(message.valuePercent, writer.uint32(26).fork()).ldelim();
        }
        if (message.nominal !== undefined) {
            common_1.Quotation.encode(message.nominal, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccruedInterest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.date = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.value = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.valuePercent = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nominal = common_1.Quotation.decode(reader, reader.uint32());
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
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
            value: isSet(object.value) ? common_1.Quotation.fromJSON(object.value) : undefined,
            valuePercent: isSet(object.valuePercent) ? common_1.Quotation.fromJSON(object.valuePercent) : undefined,
            nominal: isSet(object.nominal) ? common_1.Quotation.fromJSON(object.nominal) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.date !== undefined && (obj.date = message.date.toISOString());
        message.value !== undefined && (obj.value = message.value ? common_1.Quotation.toJSON(message.value) : undefined);
        message.valuePercent !== undefined &&
            (obj.valuePercent = message.valuePercent ? common_1.Quotation.toJSON(message.valuePercent) : undefined);
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.Quotation.toJSON(message.nominal) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAccruedInterest();
        message.date = (_a = object.date) !== null && _a !== void 0 ? _a : undefined;
        message.value =
            object.value !== undefined && object.value !== null ? common_1.Quotation.fromPartial(object.value) : undefined;
        message.valuePercent =
            object.valuePercent !== undefined && object.valuePercent !== null
                ? common_1.Quotation.fromPartial(object.valuePercent)
                : undefined;
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.Quotation.fromPartial(object.nominal) : undefined;
        return message;
    },
};
function createBaseGetFuturesMarginRequest() {
    return { figi: '' };
}
exports.GetFuturesMarginRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFuturesMarginRequest();
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
        const message = createBaseGetFuturesMarginRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetFuturesMarginResponse() {
    return {
        initialMarginOnBuy: undefined,
        initialMarginOnSell: undefined,
        minPriceIncrement: undefined,
        minPriceIncrementAmount: undefined,
    };
}
exports.GetFuturesMarginResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.initialMarginOnBuy !== undefined) {
            common_1.MoneyValue.encode(message.initialMarginOnBuy, writer.uint32(10).fork()).ldelim();
        }
        if (message.initialMarginOnSell !== undefined) {
            common_1.MoneyValue.encode(message.initialMarginOnSell, writer.uint32(18).fork()).ldelim();
        }
        if (message.minPriceIncrement !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrement, writer.uint32(26).fork()).ldelim();
        }
        if (message.minPriceIncrementAmount !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrementAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFuturesMarginResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initialMarginOnBuy = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.initialMarginOnSell = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minPriceIncrement = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.minPriceIncrementAmount = common_1.Quotation.decode(reader, reader.uint32());
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
            initialMarginOnBuy: isSet(object.initialMarginOnBuy) ? common_1.MoneyValue.fromJSON(object.initialMarginOnBuy) : undefined,
            initialMarginOnSell: isSet(object.initialMarginOnSell)
                ? common_1.MoneyValue.fromJSON(object.initialMarginOnSell)
                : undefined,
            minPriceIncrement: isSet(object.minPriceIncrement) ? common_1.Quotation.fromJSON(object.minPriceIncrement) : undefined,
            minPriceIncrementAmount: isSet(object.minPriceIncrementAmount)
                ? common_1.Quotation.fromJSON(object.minPriceIncrementAmount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.initialMarginOnBuy !== undefined &&
            (obj.initialMarginOnBuy = message.initialMarginOnBuy ? common_1.MoneyValue.toJSON(message.initialMarginOnBuy) : undefined);
        message.initialMarginOnSell !== undefined &&
            (obj.initialMarginOnSell = message.initialMarginOnSell
                ? common_1.MoneyValue.toJSON(message.initialMarginOnSell)
                : undefined);
        message.minPriceIncrement !== undefined &&
            (obj.minPriceIncrement = message.minPriceIncrement ? common_1.Quotation.toJSON(message.minPriceIncrement) : undefined);
        message.minPriceIncrementAmount !== undefined &&
            (obj.minPriceIncrementAmount = message.minPriceIncrementAmount
                ? common_1.Quotation.toJSON(message.minPriceIncrementAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetFuturesMarginResponse();
        message.initialMarginOnBuy =
            object.initialMarginOnBuy !== undefined && object.initialMarginOnBuy !== null
                ? common_1.MoneyValue.fromPartial(object.initialMarginOnBuy)
                : undefined;
        message.initialMarginOnSell =
            object.initialMarginOnSell !== undefined && object.initialMarginOnSell !== null
                ? common_1.MoneyValue.fromPartial(object.initialMarginOnSell)
                : undefined;
        message.minPriceIncrement =
            object.minPriceIncrement !== undefined && object.minPriceIncrement !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrement)
                : undefined;
        message.minPriceIncrementAmount =
            object.minPriceIncrementAmount !== undefined && object.minPriceIncrementAmount !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrementAmount)
                : undefined;
        return message;
    },
};
function createBaseInstrumentResponse() {
    return { instrument: undefined };
}
exports.InstrumentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instrument !== undefined) {
            exports.Instrument.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstrumentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.Instrument.decode(reader, reader.uint32());
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
            instrument: isSet(object.instrument) ? exports.Instrument.fromJSON(object.instrument) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument ? exports.Instrument.toJSON(message.instrument) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInstrumentResponse();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null
                ? exports.Instrument.fromPartial(object.instrument)
                : undefined;
        return message;
    },
};
function createBaseInstrument() {
    return {
        figi: '',
        ticker: '',
        classCode: '',
        isin: '',
        lot: 0,
        currency: '',
        klong: undefined,
        kshort: undefined,
        dlong: undefined,
        dshort: undefined,
        dlongMin: undefined,
        dshortMin: undefined,
        shortEnabledFlag: false,
        name: '',
        exchange: '',
        countryOfRisk: '',
        countryOfRiskName: '',
        instrumentType: '',
        tradingStatus: 0,
        otcFlag: false,
        buyAvailableFlag: false,
        sellAvailableFlag: false,
        minPriceIncrement: undefined,
        apiTradeAvailableFlag: false,
        uid: '',
    };
}
exports.Instrument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== '') {
            writer.uint32(10).string(message.figi);
        }
        if (message.ticker !== '') {
            writer.uint32(18).string(message.ticker);
        }
        if (message.classCode !== '') {
            writer.uint32(26).string(message.classCode);
        }
        if (message.isin !== '') {
            writer.uint32(34).string(message.isin);
        }
        if (message.lot !== 0) {
            writer.uint32(40).int32(message.lot);
        }
        if (message.currency !== '') {
            writer.uint32(50).string(message.currency);
        }
        if (message.klong !== undefined) {
            common_1.Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
        }
        if (message.kshort !== undefined) {
            common_1.Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
        }
        if (message.dlong !== undefined) {
            common_1.Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
        }
        if (message.dshort !== undefined) {
            common_1.Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
        }
        if (message.dlongMin !== undefined) {
            common_1.Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
        }
        if (message.dshortMin !== undefined) {
            common_1.Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
        }
        if (message.shortEnabledFlag === true) {
            writer.uint32(104).bool(message.shortEnabledFlag);
        }
        if (message.name !== '') {
            writer.uint32(114).string(message.name);
        }
        if (message.exchange !== '') {
            writer.uint32(122).string(message.exchange);
        }
        if (message.countryOfRisk !== '') {
            writer.uint32(130).string(message.countryOfRisk);
        }
        if (message.countryOfRiskName !== '') {
            writer.uint32(138).string(message.countryOfRiskName);
        }
        if (message.instrumentType !== '') {
            writer.uint32(146).string(message.instrumentType);
        }
        if (message.tradingStatus !== 0) {
            writer.uint32(152).int32(message.tradingStatus);
        }
        if (message.otcFlag === true) {
            writer.uint32(160).bool(message.otcFlag);
        }
        if (message.buyAvailableFlag === true) {
            writer.uint32(168).bool(message.buyAvailableFlag);
        }
        if (message.sellAvailableFlag === true) {
            writer.uint32(176).bool(message.sellAvailableFlag);
        }
        if (message.minPriceIncrement !== undefined) {
            common_1.Quotation.encode(message.minPriceIncrement, writer.uint32(186).fork()).ldelim();
        }
        if (message.apiTradeAvailableFlag === true) {
            writer.uint32(192).bool(message.apiTradeAvailableFlag);
        }
        if (message.uid !== '') {
            writer.uint32(202).string(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.ticker = reader.string();
                    break;
                case 3:
                    message.classCode = reader.string();
                    break;
                case 4:
                    message.isin = reader.string();
                    break;
                case 5:
                    message.lot = reader.int32();
                    break;
                case 6:
                    message.currency = reader.string();
                    break;
                case 7:
                    message.klong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.kshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.dlong = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.dshort = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.dlongMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.dshortMin = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.shortEnabledFlag = reader.bool();
                    break;
                case 14:
                    message.name = reader.string();
                    break;
                case 15:
                    message.exchange = reader.string();
                    break;
                case 16:
                    message.countryOfRisk = reader.string();
                    break;
                case 17:
                    message.countryOfRiskName = reader.string();
                    break;
                case 18:
                    message.instrumentType = reader.string();
                    break;
                case 19:
                    message.tradingStatus = reader.int32();
                    break;
                case 20:
                    message.otcFlag = reader.bool();
                    break;
                case 21:
                    message.buyAvailableFlag = reader.bool();
                    break;
                case 22:
                    message.sellAvailableFlag = reader.bool();
                    break;
                case 23:
                    message.minPriceIncrement = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.apiTradeAvailableFlag = reader.bool();
                    break;
                case 25:
                    message.uid = reader.string();
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
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            isin: isSet(object.isin) ? String(object.isin) : '',
            lot: isSet(object.lot) ? Number(object.lot) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            klong: isSet(object.klong) ? common_1.Quotation.fromJSON(object.klong) : undefined,
            kshort: isSet(object.kshort) ? common_1.Quotation.fromJSON(object.kshort) : undefined,
            dlong: isSet(object.dlong) ? common_1.Quotation.fromJSON(object.dlong) : undefined,
            dshort: isSet(object.dshort) ? common_1.Quotation.fromJSON(object.dshort) : undefined,
            dlongMin: isSet(object.dlongMin) ? common_1.Quotation.fromJSON(object.dlongMin) : undefined,
            dshortMin: isSet(object.dshortMin) ? common_1.Quotation.fromJSON(object.dshortMin) : undefined,
            shortEnabledFlag: isSet(object.shortEnabledFlag) ? Boolean(object.shortEnabledFlag) : false,
            name: isSet(object.name) ? String(object.name) : '',
            exchange: isSet(object.exchange) ? String(object.exchange) : '',
            countryOfRisk: isSet(object.countryOfRisk) ? String(object.countryOfRisk) : '',
            countryOfRiskName: isSet(object.countryOfRiskName) ? String(object.countryOfRiskName) : '',
            instrumentType: isSet(object.instrumentType) ? String(object.instrumentType) : '',
            tradingStatus: isSet(object.tradingStatus) ? (0, common_1.securityTradingStatusFromJSON)(object.tradingStatus) : 0,
            otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
            buyAvailableFlag: isSet(object.buyAvailableFlag) ? Boolean(object.buyAvailableFlag) : false,
            sellAvailableFlag: isSet(object.sellAvailableFlag) ? Boolean(object.sellAvailableFlag) : false,
            minPriceIncrement: isSet(object.minPriceIncrement) ? common_1.Quotation.fromJSON(object.minPriceIncrement) : undefined,
            apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag) ? Boolean(object.apiTradeAvailableFlag) : false,
            uid: isSet(object.uid) ? String(object.uid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        message.isin !== undefined && (obj.isin = message.isin);
        message.lot !== undefined && (obj.lot = Math.round(message.lot));
        message.currency !== undefined && (obj.currency = message.currency);
        message.klong !== undefined && (obj.klong = message.klong ? common_1.Quotation.toJSON(message.klong) : undefined);
        message.kshort !== undefined && (obj.kshort = message.kshort ? common_1.Quotation.toJSON(message.kshort) : undefined);
        message.dlong !== undefined && (obj.dlong = message.dlong ? common_1.Quotation.toJSON(message.dlong) : undefined);
        message.dshort !== undefined && (obj.dshort = message.dshort ? common_1.Quotation.toJSON(message.dshort) : undefined);
        message.dlongMin !== undefined &&
            (obj.dlongMin = message.dlongMin ? common_1.Quotation.toJSON(message.dlongMin) : undefined);
        message.dshortMin !== undefined &&
            (obj.dshortMin = message.dshortMin ? common_1.Quotation.toJSON(message.dshortMin) : undefined);
        message.shortEnabledFlag !== undefined && (obj.shortEnabledFlag = message.shortEnabledFlag);
        message.name !== undefined && (obj.name = message.name);
        message.exchange !== undefined && (obj.exchange = message.exchange);
        message.countryOfRisk !== undefined && (obj.countryOfRisk = message.countryOfRisk);
        message.countryOfRiskName !== undefined && (obj.countryOfRiskName = message.countryOfRiskName);
        message.instrumentType !== undefined && (obj.instrumentType = message.instrumentType);
        message.tradingStatus !== undefined && (obj.tradingStatus = (0, common_1.securityTradingStatusToJSON)(message.tradingStatus));
        message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
        message.buyAvailableFlag !== undefined && (obj.buyAvailableFlag = message.buyAvailableFlag);
        message.sellAvailableFlag !== undefined && (obj.sellAvailableFlag = message.sellAvailableFlag);
        message.minPriceIncrement !== undefined &&
            (obj.minPriceIncrement = message.minPriceIncrement ? common_1.Quotation.toJSON(message.minPriceIncrement) : undefined);
        message.apiTradeAvailableFlag !== undefined && (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
        message.uid !== undefined && (obj.uid = message.uid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const message = createBaseInstrument();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.ticker = (_b = object.ticker) !== null && _b !== void 0 ? _b : '';
        message.classCode = (_c = object.classCode) !== null && _c !== void 0 ? _c : '';
        message.isin = (_d = object.isin) !== null && _d !== void 0 ? _d : '';
        message.lot = (_e = object.lot) !== null && _e !== void 0 ? _e : 0;
        message.currency = (_f = object.currency) !== null && _f !== void 0 ? _f : '';
        message.klong =
            object.klong !== undefined && object.klong !== null ? common_1.Quotation.fromPartial(object.klong) : undefined;
        message.kshort =
            object.kshort !== undefined && object.kshort !== null ? common_1.Quotation.fromPartial(object.kshort) : undefined;
        message.dlong =
            object.dlong !== undefined && object.dlong !== null ? common_1.Quotation.fromPartial(object.dlong) : undefined;
        message.dshort =
            object.dshort !== undefined && object.dshort !== null ? common_1.Quotation.fromPartial(object.dshort) : undefined;
        message.dlongMin =
            object.dlongMin !== undefined && object.dlongMin !== null ? common_1.Quotation.fromPartial(object.dlongMin) : undefined;
        message.dshortMin =
            object.dshortMin !== undefined && object.dshortMin !== null ? common_1.Quotation.fromPartial(object.dshortMin) : undefined;
        message.shortEnabledFlag = (_g = object.shortEnabledFlag) !== null && _g !== void 0 ? _g : false;
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : '';
        message.exchange = (_j = object.exchange) !== null && _j !== void 0 ? _j : '';
        message.countryOfRisk = (_k = object.countryOfRisk) !== null && _k !== void 0 ? _k : '';
        message.countryOfRiskName = (_l = object.countryOfRiskName) !== null && _l !== void 0 ? _l : '';
        message.instrumentType = (_m = object.instrumentType) !== null && _m !== void 0 ? _m : '';
        message.tradingStatus = (_o = object.tradingStatus) !== null && _o !== void 0 ? _o : 0;
        message.otcFlag = (_p = object.otcFlag) !== null && _p !== void 0 ? _p : false;
        message.buyAvailableFlag = (_q = object.buyAvailableFlag) !== null && _q !== void 0 ? _q : false;
        message.sellAvailableFlag = (_r = object.sellAvailableFlag) !== null && _r !== void 0 ? _r : false;
        message.minPriceIncrement =
            object.minPriceIncrement !== undefined && object.minPriceIncrement !== null
                ? common_1.Quotation.fromPartial(object.minPriceIncrement)
                : undefined;
        message.apiTradeAvailableFlag = (_s = object.apiTradeAvailableFlag) !== null && _s !== void 0 ? _s : false;
        message.uid = (_t = object.uid) !== null && _t !== void 0 ? _t : '';
        return message;
    },
};
function createBaseGetDividendsRequest() {
    return { figi: '', from: undefined, to: undefined };
}
exports.GetDividendsRequest = {
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
        const message = createBaseGetDividendsRequest();
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
        const message = createBaseGetDividendsRequest();
        message.figi = (_a = object.figi) !== null && _a !== void 0 ? _a : '';
        message.from = (_b = object.from) !== null && _b !== void 0 ? _b : undefined;
        message.to = (_c = object.to) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseGetDividendsResponse() {
    return { dividends: [] };
}
exports.GetDividendsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.dividends) {
            exports.Dividend.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDividendsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dividends.push(exports.Dividend.decode(reader, reader.uint32()));
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
            dividends: Array.isArray(object === null || object === void 0 ? void 0 : object.dividends) ? object.dividends.map((e) => exports.Dividend.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.dividends) {
            obj.dividends = message.dividends.map(e => (e ? exports.Dividend.toJSON(e) : undefined));
        }
        else {
            obj.dividends = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetDividendsResponse();
        message.dividends = ((_a = object.dividends) === null || _a === void 0 ? void 0 : _a.map(e => exports.Dividend.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDividend() {
    return {
        dividendNet: undefined,
        paymentDate: undefined,
        declaredDate: undefined,
        lastBuyDate: undefined,
        dividendType: '',
        recordDate: undefined,
        regularity: '',
        closePrice: undefined,
        yieldValue: undefined,
        createdAt: undefined,
    };
}
exports.Dividend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dividendNet !== undefined) {
            common_1.MoneyValue.encode(message.dividendNet, writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.paymentDate), writer.uint32(18).fork()).ldelim();
        }
        if (message.declaredDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.declaredDate), writer.uint32(26).fork()).ldelim();
        }
        if (message.lastBuyDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastBuyDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.dividendType !== '') {
            writer.uint32(42).string(message.dividendType);
        }
        if (message.recordDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.recordDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.regularity !== '') {
            writer.uint32(58).string(message.regularity);
        }
        if (message.closePrice !== undefined) {
            common_1.MoneyValue.encode(message.closePrice, writer.uint32(66).fork()).ldelim();
        }
        if (message.yieldValue !== undefined) {
            common_1.Quotation.encode(message.yieldValue, writer.uint32(74).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDividend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dividendNet = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.paymentDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.declaredDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastBuyDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.dividendType = reader.string();
                    break;
                case 6:
                    message.recordDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.regularity = reader.string();
                    break;
                case 8:
                    message.closePrice = common_1.MoneyValue.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.yieldValue = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            dividendNet: isSet(object.dividendNet) ? common_1.MoneyValue.fromJSON(object.dividendNet) : undefined,
            paymentDate: isSet(object.paymentDate) ? fromJsonTimestamp(object.paymentDate) : undefined,
            declaredDate: isSet(object.declaredDate) ? fromJsonTimestamp(object.declaredDate) : undefined,
            lastBuyDate: isSet(object.lastBuyDate) ? fromJsonTimestamp(object.lastBuyDate) : undefined,
            dividendType: isSet(object.dividendType) ? String(object.dividendType) : '',
            recordDate: isSet(object.recordDate) ? fromJsonTimestamp(object.recordDate) : undefined,
            regularity: isSet(object.regularity) ? String(object.regularity) : '',
            closePrice: isSet(object.closePrice) ? common_1.MoneyValue.fromJSON(object.closePrice) : undefined,
            yieldValue: isSet(object.yieldValue) ? common_1.Quotation.fromJSON(object.yieldValue) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.dividendNet !== undefined &&
            (obj.dividendNet = message.dividendNet ? common_1.MoneyValue.toJSON(message.dividendNet) : undefined);
        message.paymentDate !== undefined && (obj.paymentDate = message.paymentDate.toISOString());
        message.declaredDate !== undefined && (obj.declaredDate = message.declaredDate.toISOString());
        message.lastBuyDate !== undefined && (obj.lastBuyDate = message.lastBuyDate.toISOString());
        message.dividendType !== undefined && (obj.dividendType = message.dividendType);
        message.recordDate !== undefined && (obj.recordDate = message.recordDate.toISOString());
        message.regularity !== undefined && (obj.regularity = message.regularity);
        message.closePrice !== undefined &&
            (obj.closePrice = message.closePrice ? common_1.MoneyValue.toJSON(message.closePrice) : undefined);
        message.yieldValue !== undefined &&
            (obj.yieldValue = message.yieldValue ? common_1.Quotation.toJSON(message.yieldValue) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseDividend();
        message.dividendNet =
            object.dividendNet !== undefined && object.dividendNet !== null
                ? common_1.MoneyValue.fromPartial(object.dividendNet)
                : undefined;
        message.paymentDate = (_a = object.paymentDate) !== null && _a !== void 0 ? _a : undefined;
        message.declaredDate = (_b = object.declaredDate) !== null && _b !== void 0 ? _b : undefined;
        message.lastBuyDate = (_c = object.lastBuyDate) !== null && _c !== void 0 ? _c : undefined;
        message.dividendType = (_d = object.dividendType) !== null && _d !== void 0 ? _d : '';
        message.recordDate = (_e = object.recordDate) !== null && _e !== void 0 ? _e : undefined;
        message.regularity = (_f = object.regularity) !== null && _f !== void 0 ? _f : '';
        message.closePrice =
            object.closePrice !== undefined && object.closePrice !== null
                ? common_1.MoneyValue.fromPartial(object.closePrice)
                : undefined;
        message.yieldValue =
            object.yieldValue !== undefined && object.yieldValue !== null
                ? common_1.Quotation.fromPartial(object.yieldValue)
                : undefined;
        message.createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseAssetRequest() {
    return { id: '' };
}
exports.AssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseAssetResponse() {
    return { asset: undefined };
}
exports.AssetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.asset !== undefined) {
            exports.AssetFull.encode(message.asset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.asset = exports.AssetFull.decode(reader, reader.uint32());
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
            asset: isSet(object.asset) ? exports.AssetFull.fromJSON(object.asset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset !== undefined && (obj.asset = message.asset ? exports.AssetFull.toJSON(message.asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetResponse();
        message.asset =
            object.asset !== undefined && object.asset !== null ? exports.AssetFull.fromPartial(object.asset) : undefined;
        return message;
    },
};
function createBaseAssetsRequest() {
    return {};
}
exports.AssetsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetsRequest();
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
        const message = createBaseAssetsRequest();
        return message;
    },
};
function createBaseAssetsResponse() {
    return { assets: [] };
}
exports.AssetsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.assets) {
            exports.Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(exports.Asset.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets) ? object.assets.map((e) => exports.Asset.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => (e ? exports.Asset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetsResponse();
        message.assets = ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map(e => exports.Asset.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAssetFull() {
    return {
        uid: '',
        type: 0,
        name: '',
        nameBrief: '',
        description: '',
        deletedAt: undefined,
        requiredTests: [],
        currency: undefined,
        security: undefined,
        gosRegCode: '',
        cfi: '',
        codeNsd: '',
        status: '',
        brand: undefined,
        updatedAt: undefined,
        brCode: '',
        brCodeName: '',
        instruments: [],
    };
}
exports.AssetFull = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uid !== '') {
            writer.uint32(10).string(message.uid);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.nameBrief !== '') {
            writer.uint32(34).string(message.nameBrief);
        }
        if (message.description !== '') {
            writer.uint32(42).string(message.description);
        }
        if (message.deletedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.requiredTests) {
            writer.uint32(58).string(v);
        }
        if (message.currency !== undefined) {
            exports.AssetCurrency.encode(message.currency, writer.uint32(66).fork()).ldelim();
        }
        if (message.security !== undefined) {
            exports.AssetSecurity.encode(message.security, writer.uint32(74).fork()).ldelim();
        }
        if (message.gosRegCode !== '') {
            writer.uint32(82).string(message.gosRegCode);
        }
        if (message.cfi !== '') {
            writer.uint32(90).string(message.cfi);
        }
        if (message.codeNsd !== '') {
            writer.uint32(98).string(message.codeNsd);
        }
        if (message.status !== '') {
            writer.uint32(106).string(message.status);
        }
        if (message.brand !== undefined) {
            exports.Brand.encode(message.brand, writer.uint32(114).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(122).fork()).ldelim();
        }
        if (message.brCode !== '') {
            writer.uint32(130).string(message.brCode);
        }
        if (message.brCodeName !== '') {
            writer.uint32(138).string(message.brCodeName);
        }
        for (const v of message.instruments) {
            exports.AssetInstrument.encode(v, writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetFull();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.nameBrief = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.deletedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.requiredTests.push(reader.string());
                    break;
                case 8:
                    message.currency = exports.AssetCurrency.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.security = exports.AssetSecurity.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.gosRegCode = reader.string();
                    break;
                case 11:
                    message.cfi = reader.string();
                    break;
                case 12:
                    message.codeNsd = reader.string();
                    break;
                case 13:
                    message.status = reader.string();
                    break;
                case 14:
                    message.brand = exports.Brand.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.brCode = reader.string();
                    break;
                case 17:
                    message.brCodeName = reader.string();
                    break;
                case 18:
                    message.instruments.push(exports.AssetInstrument.decode(reader, reader.uint32()));
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
            uid: isSet(object.uid) ? String(object.uid) : '',
            type: isSet(object.type) ? assetTypeFromJSON(object.type) : 0,
            name: isSet(object.name) ? String(object.name) : '',
            nameBrief: isSet(object.nameBrief) ? String(object.nameBrief) : '',
            description: isSet(object.description) ? String(object.description) : '',
            deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
            requiredTests: Array.isArray(object === null || object === void 0 ? void 0 : object.requiredTests) ? object.requiredTests.map((e) => String(e)) : [],
            currency: isSet(object.currency) ? exports.AssetCurrency.fromJSON(object.currency) : undefined,
            security: isSet(object.security) ? exports.AssetSecurity.fromJSON(object.security) : undefined,
            gosRegCode: isSet(object.gosRegCode) ? String(object.gosRegCode) : '',
            cfi: isSet(object.cfi) ? String(object.cfi) : '',
            codeNsd: isSet(object.codeNsd) ? String(object.codeNsd) : '',
            status: isSet(object.status) ? String(object.status) : '',
            brand: isSet(object.brand) ? exports.Brand.fromJSON(object.brand) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
            brCode: isSet(object.brCode) ? String(object.brCode) : '',
            brCodeName: isSet(object.brCodeName) ? String(object.brCodeName) : '',
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments)
                ? object.instruments.map((e) => exports.AssetInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.uid !== undefined && (obj.uid = message.uid);
        message.type !== undefined && (obj.type = assetTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.nameBrief !== undefined && (obj.nameBrief = message.nameBrief);
        message.description !== undefined && (obj.description = message.description);
        message.deletedAt !== undefined && (obj.deletedAt = message.deletedAt.toISOString());
        if (message.requiredTests) {
            obj.requiredTests = message.requiredTests.map(e => e);
        }
        else {
            obj.requiredTests = [];
        }
        message.currency !== undefined &&
            (obj.currency = message.currency ? exports.AssetCurrency.toJSON(message.currency) : undefined);
        message.security !== undefined &&
            (obj.security = message.security ? exports.AssetSecurity.toJSON(message.security) : undefined);
        message.gosRegCode !== undefined && (obj.gosRegCode = message.gosRegCode);
        message.cfi !== undefined && (obj.cfi = message.cfi);
        message.codeNsd !== undefined && (obj.codeNsd = message.codeNsd);
        message.status !== undefined && (obj.status = message.status);
        message.brand !== undefined && (obj.brand = message.brand ? exports.Brand.toJSON(message.brand) : undefined);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.brCode !== undefined && (obj.brCode = message.brCode);
        message.brCodeName !== undefined && (obj.brCodeName = message.brCodeName);
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.AssetInstrument.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseAssetFull();
        message.uid = (_a = object.uid) !== null && _a !== void 0 ? _a : '';
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.nameBrief = (_d = object.nameBrief) !== null && _d !== void 0 ? _d : '';
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : '';
        message.deletedAt = (_f = object.deletedAt) !== null && _f !== void 0 ? _f : undefined;
        message.requiredTests = ((_g = object.requiredTests) === null || _g === void 0 ? void 0 : _g.map(e => e)) || [];
        message.currency =
            object.currency !== undefined && object.currency !== null
                ? exports.AssetCurrency.fromPartial(object.currency)
                : undefined;
        message.security =
            object.security !== undefined && object.security !== null
                ? exports.AssetSecurity.fromPartial(object.security)
                : undefined;
        message.gosRegCode = (_h = object.gosRegCode) !== null && _h !== void 0 ? _h : '';
        message.cfi = (_j = object.cfi) !== null && _j !== void 0 ? _j : '';
        message.codeNsd = (_k = object.codeNsd) !== null && _k !== void 0 ? _k : '';
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : '';
        message.brand = object.brand !== undefined && object.brand !== null ? exports.Brand.fromPartial(object.brand) : undefined;
        message.updatedAt = (_m = object.updatedAt) !== null && _m !== void 0 ? _m : undefined;
        message.brCode = (_o = object.brCode) !== null && _o !== void 0 ? _o : '';
        message.brCodeName = (_p = object.brCodeName) !== null && _p !== void 0 ? _p : '';
        message.instruments = ((_q = object.instruments) === null || _q === void 0 ? void 0 : _q.map(e => exports.AssetInstrument.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAsset() {
    return { uid: '', type: 0, name: '', instruments: [] };
}
exports.Asset = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uid !== '') {
            writer.uint32(10).string(message.uid);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        for (const v of message.instruments) {
            exports.AssetInstrument.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.instruments.push(exports.AssetInstrument.decode(reader, reader.uint32()));
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
            uid: isSet(object.uid) ? String(object.uid) : '',
            type: isSet(object.type) ? assetTypeFromJSON(object.type) : 0,
            name: isSet(object.name) ? String(object.name) : '',
            instruments: Array.isArray(object === null || object === void 0 ? void 0 : object.instruments)
                ? object.instruments.map((e) => exports.AssetInstrument.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.uid !== undefined && (obj.uid = message.uid);
        message.type !== undefined && (obj.type = assetTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        if (message.instruments) {
            obj.instruments = message.instruments.map(e => (e ? exports.AssetInstrument.toJSON(e) : undefined));
        }
        else {
            obj.instruments = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseAsset();
        message.uid = (_a = object.uid) !== null && _a !== void 0 ? _a : '';
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : '';
        message.instruments = ((_d = object.instruments) === null || _d === void 0 ? void 0 : _d.map(e => exports.AssetInstrument.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAssetCurrency() {
    return { baseCurrency: '' };
}
exports.AssetCurrency = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseCurrency !== '') {
            writer.uint32(10).string(message.baseCurrency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetCurrency();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseCurrency = reader.string();
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
            baseCurrency: isSet(object.baseCurrency) ? String(object.baseCurrency) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseCurrency !== undefined && (obj.baseCurrency = message.baseCurrency);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetCurrency();
        message.baseCurrency = (_a = object.baseCurrency) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseAssetSecurity() {
    return {
        isin: '',
        type: '',
        share: undefined,
        bond: undefined,
        sp: undefined,
        etf: undefined,
        clearingCertificate: undefined,
    };
}
exports.AssetSecurity = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isin !== '') {
            writer.uint32(10).string(message.isin);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.share !== undefined) {
            exports.AssetShare.encode(message.share, writer.uint32(26).fork()).ldelim();
        }
        if (message.bond !== undefined) {
            exports.AssetBond.encode(message.bond, writer.uint32(34).fork()).ldelim();
        }
        if (message.sp !== undefined) {
            exports.AssetStructuredProduct.encode(message.sp, writer.uint32(42).fork()).ldelim();
        }
        if (message.etf !== undefined) {
            exports.AssetEtf.encode(message.etf, writer.uint32(50).fork()).ldelim();
        }
        if (message.clearingCertificate !== undefined) {
            exports.AssetClearingCertificate.encode(message.clearingCertificate, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetSecurity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isin = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.share = exports.AssetShare.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bond = exports.AssetBond.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sp = exports.AssetStructuredProduct.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.etf = exports.AssetEtf.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.clearingCertificate = exports.AssetClearingCertificate.decode(reader, reader.uint32());
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
            isin: isSet(object.isin) ? String(object.isin) : '',
            type: isSet(object.type) ? String(object.type) : '',
            share: isSet(object.share) ? exports.AssetShare.fromJSON(object.share) : undefined,
            bond: isSet(object.bond) ? exports.AssetBond.fromJSON(object.bond) : undefined,
            sp: isSet(object.sp) ? exports.AssetStructuredProduct.fromJSON(object.sp) : undefined,
            etf: isSet(object.etf) ? exports.AssetEtf.fromJSON(object.etf) : undefined,
            clearingCertificate: isSet(object.clearingCertificate)
                ? exports.AssetClearingCertificate.fromJSON(object.clearingCertificate)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.isin !== undefined && (obj.isin = message.isin);
        message.type !== undefined && (obj.type = message.type);
        message.share !== undefined && (obj.share = message.share ? exports.AssetShare.toJSON(message.share) : undefined);
        message.bond !== undefined && (obj.bond = message.bond ? exports.AssetBond.toJSON(message.bond) : undefined);
        message.sp !== undefined && (obj.sp = message.sp ? exports.AssetStructuredProduct.toJSON(message.sp) : undefined);
        message.etf !== undefined && (obj.etf = message.etf ? exports.AssetEtf.toJSON(message.etf) : undefined);
        message.clearingCertificate !== undefined &&
            (obj.clearingCertificate = message.clearingCertificate
                ? exports.AssetClearingCertificate.toJSON(message.clearingCertificate)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAssetSecurity();
        message.isin = (_a = object.isin) !== null && _a !== void 0 ? _a : '';
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : '';
        message.share =
            object.share !== undefined && object.share !== null ? exports.AssetShare.fromPartial(object.share) : undefined;
        message.bond = object.bond !== undefined && object.bond !== null ? exports.AssetBond.fromPartial(object.bond) : undefined;
        message.sp =
            object.sp !== undefined && object.sp !== null ? exports.AssetStructuredProduct.fromPartial(object.sp) : undefined;
        message.etf = object.etf !== undefined && object.etf !== null ? exports.AssetEtf.fromPartial(object.etf) : undefined;
        message.clearingCertificate =
            object.clearingCertificate !== undefined && object.clearingCertificate !== null
                ? exports.AssetClearingCertificate.fromPartial(object.clearingCertificate)
                : undefined;
        return message;
    },
};
function createBaseAssetShare() {
    return {
        type: 0,
        issueSize: undefined,
        nominal: undefined,
        nominalCurrency: '',
        primaryIndex: '',
        dividendRate: undefined,
        preferredShareType: '',
        ipoDate: undefined,
        registryDate: undefined,
        divYieldFlag: false,
        issueKind: '',
        placementDate: undefined,
        represIsin: '',
        issueSizePlan: undefined,
        totalFloat: undefined,
    };
}
exports.AssetShare = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.issueSize !== undefined) {
            common_1.Quotation.encode(message.issueSize, writer.uint32(18).fork()).ldelim();
        }
        if (message.nominal !== undefined) {
            common_1.Quotation.encode(message.nominal, writer.uint32(26).fork()).ldelim();
        }
        if (message.nominalCurrency !== '') {
            writer.uint32(34).string(message.nominalCurrency);
        }
        if (message.primaryIndex !== '') {
            writer.uint32(42).string(message.primaryIndex);
        }
        if (message.dividendRate !== undefined) {
            common_1.Quotation.encode(message.dividendRate, writer.uint32(50).fork()).ldelim();
        }
        if (message.preferredShareType !== '') {
            writer.uint32(58).string(message.preferredShareType);
        }
        if (message.ipoDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.ipoDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.registryDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.registryDate), writer.uint32(74).fork()).ldelim();
        }
        if (message.divYieldFlag === true) {
            writer.uint32(80).bool(message.divYieldFlag);
        }
        if (message.issueKind !== '') {
            writer.uint32(90).string(message.issueKind);
        }
        if (message.placementDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(98).fork()).ldelim();
        }
        if (message.represIsin !== '') {
            writer.uint32(106).string(message.represIsin);
        }
        if (message.issueSizePlan !== undefined) {
            common_1.Quotation.encode(message.issueSizePlan, writer.uint32(114).fork()).ldelim();
        }
        if (message.totalFloat !== undefined) {
            common_1.Quotation.encode(message.totalFloat, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetShare();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.issueSize = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nominal = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nominalCurrency = reader.string();
                    break;
                case 5:
                    message.primaryIndex = reader.string();
                    break;
                case 6:
                    message.dividendRate = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.preferredShareType = reader.string();
                    break;
                case 8:
                    message.ipoDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.registryDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.divYieldFlag = reader.bool();
                    break;
                case 11:
                    message.issueKind = reader.string();
                    break;
                case 12:
                    message.placementDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.represIsin = reader.string();
                    break;
                case 14:
                    message.issueSizePlan = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.totalFloat = common_1.Quotation.decode(reader, reader.uint32());
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
            type: isSet(object.type) ? shareTypeFromJSON(object.type) : 0,
            issueSize: isSet(object.issueSize) ? common_1.Quotation.fromJSON(object.issueSize) : undefined,
            nominal: isSet(object.nominal) ? common_1.Quotation.fromJSON(object.nominal) : undefined,
            nominalCurrency: isSet(object.nominalCurrency) ? String(object.nominalCurrency) : '',
            primaryIndex: isSet(object.primaryIndex) ? String(object.primaryIndex) : '',
            dividendRate: isSet(object.dividendRate) ? common_1.Quotation.fromJSON(object.dividendRate) : undefined,
            preferredShareType: isSet(object.preferredShareType) ? String(object.preferredShareType) : '',
            ipoDate: isSet(object.ipoDate) ? fromJsonTimestamp(object.ipoDate) : undefined,
            registryDate: isSet(object.registryDate) ? fromJsonTimestamp(object.registryDate) : undefined,
            divYieldFlag: isSet(object.divYieldFlag) ? Boolean(object.divYieldFlag) : false,
            issueKind: isSet(object.issueKind) ? String(object.issueKind) : '',
            placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
            represIsin: isSet(object.represIsin) ? String(object.represIsin) : '',
            issueSizePlan: isSet(object.issueSizePlan) ? common_1.Quotation.fromJSON(object.issueSizePlan) : undefined,
            totalFloat: isSet(object.totalFloat) ? common_1.Quotation.fromJSON(object.totalFloat) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = shareTypeToJSON(message.type));
        message.issueSize !== undefined &&
            (obj.issueSize = message.issueSize ? common_1.Quotation.toJSON(message.issueSize) : undefined);
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.Quotation.toJSON(message.nominal) : undefined);
        message.nominalCurrency !== undefined && (obj.nominalCurrency = message.nominalCurrency);
        message.primaryIndex !== undefined && (obj.primaryIndex = message.primaryIndex);
        message.dividendRate !== undefined &&
            (obj.dividendRate = message.dividendRate ? common_1.Quotation.toJSON(message.dividendRate) : undefined);
        message.preferredShareType !== undefined && (obj.preferredShareType = message.preferredShareType);
        message.ipoDate !== undefined && (obj.ipoDate = message.ipoDate.toISOString());
        message.registryDate !== undefined && (obj.registryDate = message.registryDate.toISOString());
        message.divYieldFlag !== undefined && (obj.divYieldFlag = message.divYieldFlag);
        message.issueKind !== undefined && (obj.issueKind = message.issueKind);
        message.placementDate !== undefined && (obj.placementDate = message.placementDate.toISOString());
        message.represIsin !== undefined && (obj.represIsin = message.represIsin);
        message.issueSizePlan !== undefined &&
            (obj.issueSizePlan = message.issueSizePlan ? common_1.Quotation.toJSON(message.issueSizePlan) : undefined);
        message.totalFloat !== undefined &&
            (obj.totalFloat = message.totalFloat ? common_1.Quotation.toJSON(message.totalFloat) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseAssetShare();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.issueSize =
            object.issueSize !== undefined && object.issueSize !== null ? common_1.Quotation.fromPartial(object.issueSize) : undefined;
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.Quotation.fromPartial(object.nominal) : undefined;
        message.nominalCurrency = (_b = object.nominalCurrency) !== null && _b !== void 0 ? _b : '';
        message.primaryIndex = (_c = object.primaryIndex) !== null && _c !== void 0 ? _c : '';
        message.dividendRate =
            object.dividendRate !== undefined && object.dividendRate !== null
                ? common_1.Quotation.fromPartial(object.dividendRate)
                : undefined;
        message.preferredShareType = (_d = object.preferredShareType) !== null && _d !== void 0 ? _d : '';
        message.ipoDate = (_e = object.ipoDate) !== null && _e !== void 0 ? _e : undefined;
        message.registryDate = (_f = object.registryDate) !== null && _f !== void 0 ? _f : undefined;
        message.divYieldFlag = (_g = object.divYieldFlag) !== null && _g !== void 0 ? _g : false;
        message.issueKind = (_h = object.issueKind) !== null && _h !== void 0 ? _h : '';
        message.placementDate = (_j = object.placementDate) !== null && _j !== void 0 ? _j : undefined;
        message.represIsin = (_k = object.represIsin) !== null && _k !== void 0 ? _k : '';
        message.issueSizePlan =
            object.issueSizePlan !== undefined && object.issueSizePlan !== null
                ? common_1.Quotation.fromPartial(object.issueSizePlan)
                : undefined;
        message.totalFloat =
            object.totalFloat !== undefined && object.totalFloat !== null
                ? common_1.Quotation.fromPartial(object.totalFloat)
                : undefined;
        return message;
    },
};
function createBaseAssetBond() {
    return {
        currentNominal: undefined,
        borrowName: '',
        issueSize: undefined,
        nominal: undefined,
        nominalCurrency: '',
        issueKind: '',
        interestKind: '',
        couponQuantityPerYear: 0,
        indexedNominalFlag: false,
        subordinatedFlag: false,
        collateralFlag: false,
        taxFreeFlag: false,
        amortizationFlag: false,
        floatingCouponFlag: false,
        perpetualFlag: false,
        maturityDate: undefined,
        returnCondition: '',
        stateRegDate: undefined,
        placementDate: undefined,
        placementPrice: undefined,
        issueSizePlan: undefined,
    };
}
exports.AssetBond = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.currentNominal !== undefined) {
            common_1.Quotation.encode(message.currentNominal, writer.uint32(10).fork()).ldelim();
        }
        if (message.borrowName !== '') {
            writer.uint32(18).string(message.borrowName);
        }
        if (message.issueSize !== undefined) {
            common_1.Quotation.encode(message.issueSize, writer.uint32(26).fork()).ldelim();
        }
        if (message.nominal !== undefined) {
            common_1.Quotation.encode(message.nominal, writer.uint32(34).fork()).ldelim();
        }
        if (message.nominalCurrency !== '') {
            writer.uint32(42).string(message.nominalCurrency);
        }
        if (message.issueKind !== '') {
            writer.uint32(50).string(message.issueKind);
        }
        if (message.interestKind !== '') {
            writer.uint32(58).string(message.interestKind);
        }
        if (message.couponQuantityPerYear !== 0) {
            writer.uint32(64).int32(message.couponQuantityPerYear);
        }
        if (message.indexedNominalFlag === true) {
            writer.uint32(72).bool(message.indexedNominalFlag);
        }
        if (message.subordinatedFlag === true) {
            writer.uint32(80).bool(message.subordinatedFlag);
        }
        if (message.collateralFlag === true) {
            writer.uint32(88).bool(message.collateralFlag);
        }
        if (message.taxFreeFlag === true) {
            writer.uint32(96).bool(message.taxFreeFlag);
        }
        if (message.amortizationFlag === true) {
            writer.uint32(104).bool(message.amortizationFlag);
        }
        if (message.floatingCouponFlag === true) {
            writer.uint32(112).bool(message.floatingCouponFlag);
        }
        if (message.perpetualFlag === true) {
            writer.uint32(120).bool(message.perpetualFlag);
        }
        if (message.maturityDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.maturityDate), writer.uint32(130).fork()).ldelim();
        }
        if (message.returnCondition !== '') {
            writer.uint32(138).string(message.returnCondition);
        }
        if (message.stateRegDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.stateRegDate), writer.uint32(146).fork()).ldelim();
        }
        if (message.placementDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(154).fork()).ldelim();
        }
        if (message.placementPrice !== undefined) {
            common_1.Quotation.encode(message.placementPrice, writer.uint32(162).fork()).ldelim();
        }
        if (message.issueSizePlan !== undefined) {
            common_1.Quotation.encode(message.issueSizePlan, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetBond();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentNominal = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.borrowName = reader.string();
                    break;
                case 3:
                    message.issueSize = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nominal = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.nominalCurrency = reader.string();
                    break;
                case 6:
                    message.issueKind = reader.string();
                    break;
                case 7:
                    message.interestKind = reader.string();
                    break;
                case 8:
                    message.couponQuantityPerYear = reader.int32();
                    break;
                case 9:
                    message.indexedNominalFlag = reader.bool();
                    break;
                case 10:
                    message.subordinatedFlag = reader.bool();
                    break;
                case 11:
                    message.collateralFlag = reader.bool();
                    break;
                case 12:
                    message.taxFreeFlag = reader.bool();
                    break;
                case 13:
                    message.amortizationFlag = reader.bool();
                    break;
                case 14:
                    message.floatingCouponFlag = reader.bool();
                    break;
                case 15:
                    message.perpetualFlag = reader.bool();
                    break;
                case 16:
                    message.maturityDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.returnCondition = reader.string();
                    break;
                case 18:
                    message.stateRegDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.placementDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.placementPrice = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.issueSizePlan = common_1.Quotation.decode(reader, reader.uint32());
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
            currentNominal: isSet(object.currentNominal) ? common_1.Quotation.fromJSON(object.currentNominal) : undefined,
            borrowName: isSet(object.borrowName) ? String(object.borrowName) : '',
            issueSize: isSet(object.issueSize) ? common_1.Quotation.fromJSON(object.issueSize) : undefined,
            nominal: isSet(object.nominal) ? common_1.Quotation.fromJSON(object.nominal) : undefined,
            nominalCurrency: isSet(object.nominalCurrency) ? String(object.nominalCurrency) : '',
            issueKind: isSet(object.issueKind) ? String(object.issueKind) : '',
            interestKind: isSet(object.interestKind) ? String(object.interestKind) : '',
            couponQuantityPerYear: isSet(object.couponQuantityPerYear) ? Number(object.couponQuantityPerYear) : 0,
            indexedNominalFlag: isSet(object.indexedNominalFlag) ? Boolean(object.indexedNominalFlag) : false,
            subordinatedFlag: isSet(object.subordinatedFlag) ? Boolean(object.subordinatedFlag) : false,
            collateralFlag: isSet(object.collateralFlag) ? Boolean(object.collateralFlag) : false,
            taxFreeFlag: isSet(object.taxFreeFlag) ? Boolean(object.taxFreeFlag) : false,
            amortizationFlag: isSet(object.amortizationFlag) ? Boolean(object.amortizationFlag) : false,
            floatingCouponFlag: isSet(object.floatingCouponFlag) ? Boolean(object.floatingCouponFlag) : false,
            perpetualFlag: isSet(object.perpetualFlag) ? Boolean(object.perpetualFlag) : false,
            maturityDate: isSet(object.maturityDate) ? fromJsonTimestamp(object.maturityDate) : undefined,
            returnCondition: isSet(object.returnCondition) ? String(object.returnCondition) : '',
            stateRegDate: isSet(object.stateRegDate) ? fromJsonTimestamp(object.stateRegDate) : undefined,
            placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
            placementPrice: isSet(object.placementPrice) ? common_1.Quotation.fromJSON(object.placementPrice) : undefined,
            issueSizePlan: isSet(object.issueSizePlan) ? common_1.Quotation.fromJSON(object.issueSizePlan) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.currentNominal !== undefined &&
            (obj.currentNominal = message.currentNominal ? common_1.Quotation.toJSON(message.currentNominal) : undefined);
        message.borrowName !== undefined && (obj.borrowName = message.borrowName);
        message.issueSize !== undefined &&
            (obj.issueSize = message.issueSize ? common_1.Quotation.toJSON(message.issueSize) : undefined);
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.Quotation.toJSON(message.nominal) : undefined);
        message.nominalCurrency !== undefined && (obj.nominalCurrency = message.nominalCurrency);
        message.issueKind !== undefined && (obj.issueKind = message.issueKind);
        message.interestKind !== undefined && (obj.interestKind = message.interestKind);
        message.couponQuantityPerYear !== undefined &&
            (obj.couponQuantityPerYear = Math.round(message.couponQuantityPerYear));
        message.indexedNominalFlag !== undefined && (obj.indexedNominalFlag = message.indexedNominalFlag);
        message.subordinatedFlag !== undefined && (obj.subordinatedFlag = message.subordinatedFlag);
        message.collateralFlag !== undefined && (obj.collateralFlag = message.collateralFlag);
        message.taxFreeFlag !== undefined && (obj.taxFreeFlag = message.taxFreeFlag);
        message.amortizationFlag !== undefined && (obj.amortizationFlag = message.amortizationFlag);
        message.floatingCouponFlag !== undefined && (obj.floatingCouponFlag = message.floatingCouponFlag);
        message.perpetualFlag !== undefined && (obj.perpetualFlag = message.perpetualFlag);
        message.maturityDate !== undefined && (obj.maturityDate = message.maturityDate.toISOString());
        message.returnCondition !== undefined && (obj.returnCondition = message.returnCondition);
        message.stateRegDate !== undefined && (obj.stateRegDate = message.stateRegDate.toISOString());
        message.placementDate !== undefined && (obj.placementDate = message.placementDate.toISOString());
        message.placementPrice !== undefined &&
            (obj.placementPrice = message.placementPrice ? common_1.Quotation.toJSON(message.placementPrice) : undefined);
        message.issueSizePlan !== undefined &&
            (obj.issueSizePlan = message.issueSizePlan ? common_1.Quotation.toJSON(message.issueSizePlan) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseAssetBond();
        message.currentNominal =
            object.currentNominal !== undefined && object.currentNominal !== null
                ? common_1.Quotation.fromPartial(object.currentNominal)
                : undefined;
        message.borrowName = (_a = object.borrowName) !== null && _a !== void 0 ? _a : '';
        message.issueSize =
            object.issueSize !== undefined && object.issueSize !== null ? common_1.Quotation.fromPartial(object.issueSize) : undefined;
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.Quotation.fromPartial(object.nominal) : undefined;
        message.nominalCurrency = (_b = object.nominalCurrency) !== null && _b !== void 0 ? _b : '';
        message.issueKind = (_c = object.issueKind) !== null && _c !== void 0 ? _c : '';
        message.interestKind = (_d = object.interestKind) !== null && _d !== void 0 ? _d : '';
        message.couponQuantityPerYear = (_e = object.couponQuantityPerYear) !== null && _e !== void 0 ? _e : 0;
        message.indexedNominalFlag = (_f = object.indexedNominalFlag) !== null && _f !== void 0 ? _f : false;
        message.subordinatedFlag = (_g = object.subordinatedFlag) !== null && _g !== void 0 ? _g : false;
        message.collateralFlag = (_h = object.collateralFlag) !== null && _h !== void 0 ? _h : false;
        message.taxFreeFlag = (_j = object.taxFreeFlag) !== null && _j !== void 0 ? _j : false;
        message.amortizationFlag = (_k = object.amortizationFlag) !== null && _k !== void 0 ? _k : false;
        message.floatingCouponFlag = (_l = object.floatingCouponFlag) !== null && _l !== void 0 ? _l : false;
        message.perpetualFlag = (_m = object.perpetualFlag) !== null && _m !== void 0 ? _m : false;
        message.maturityDate = (_o = object.maturityDate) !== null && _o !== void 0 ? _o : undefined;
        message.returnCondition = (_p = object.returnCondition) !== null && _p !== void 0 ? _p : '';
        message.stateRegDate = (_q = object.stateRegDate) !== null && _q !== void 0 ? _q : undefined;
        message.placementDate = (_r = object.placementDate) !== null && _r !== void 0 ? _r : undefined;
        message.placementPrice =
            object.placementPrice !== undefined && object.placementPrice !== null
                ? common_1.Quotation.fromPartial(object.placementPrice)
                : undefined;
        message.issueSizePlan =
            object.issueSizePlan !== undefined && object.issueSizePlan !== null
                ? common_1.Quotation.fromPartial(object.issueSizePlan)
                : undefined;
        return message;
    },
};
function createBaseAssetStructuredProduct() {
    return {
        borrowName: '',
        nominal: undefined,
        nominalCurrency: '',
        type: 0,
        logicPortfolio: '',
        assetType: 0,
        basicAsset: '',
        safetyBarrier: undefined,
        maturityDate: undefined,
        issueSizePlan: undefined,
        issueSize: undefined,
        placementDate: undefined,
        issueKind: '',
    };
}
exports.AssetStructuredProduct = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrowName !== '') {
            writer.uint32(10).string(message.borrowName);
        }
        if (message.nominal !== undefined) {
            common_1.Quotation.encode(message.nominal, writer.uint32(18).fork()).ldelim();
        }
        if (message.nominalCurrency !== '') {
            writer.uint32(26).string(message.nominalCurrency);
        }
        if (message.type !== 0) {
            writer.uint32(32).int32(message.type);
        }
        if (message.logicPortfolio !== '') {
            writer.uint32(42).string(message.logicPortfolio);
        }
        if (message.assetType !== 0) {
            writer.uint32(48).int32(message.assetType);
        }
        if (message.basicAsset !== '') {
            writer.uint32(58).string(message.basicAsset);
        }
        if (message.safetyBarrier !== undefined) {
            common_1.Quotation.encode(message.safetyBarrier, writer.uint32(66).fork()).ldelim();
        }
        if (message.maturityDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.maturityDate), writer.uint32(74).fork()).ldelim();
        }
        if (message.issueSizePlan !== undefined) {
            common_1.Quotation.encode(message.issueSizePlan, writer.uint32(82).fork()).ldelim();
        }
        if (message.issueSize !== undefined) {
            common_1.Quotation.encode(message.issueSize, writer.uint32(90).fork()).ldelim();
        }
        if (message.placementDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(98).fork()).ldelim();
        }
        if (message.issueKind !== '') {
            writer.uint32(106).string(message.issueKind);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetStructuredProduct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrowName = reader.string();
                    break;
                case 2:
                    message.nominal = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nominalCurrency = reader.string();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.logicPortfolio = reader.string();
                    break;
                case 6:
                    message.assetType = reader.int32();
                    break;
                case 7:
                    message.basicAsset = reader.string();
                    break;
                case 8:
                    message.safetyBarrier = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.maturityDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.issueSizePlan = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.issueSize = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.placementDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.issueKind = reader.string();
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
            borrowName: isSet(object.borrowName) ? String(object.borrowName) : '',
            nominal: isSet(object.nominal) ? common_1.Quotation.fromJSON(object.nominal) : undefined,
            nominalCurrency: isSet(object.nominalCurrency) ? String(object.nominalCurrency) : '',
            type: isSet(object.type) ? structuredProductTypeFromJSON(object.type) : 0,
            logicPortfolio: isSet(object.logicPortfolio) ? String(object.logicPortfolio) : '',
            assetType: isSet(object.assetType) ? assetTypeFromJSON(object.assetType) : 0,
            basicAsset: isSet(object.basicAsset) ? String(object.basicAsset) : '',
            safetyBarrier: isSet(object.safetyBarrier) ? common_1.Quotation.fromJSON(object.safetyBarrier) : undefined,
            maturityDate: isSet(object.maturityDate) ? fromJsonTimestamp(object.maturityDate) : undefined,
            issueSizePlan: isSet(object.issueSizePlan) ? common_1.Quotation.fromJSON(object.issueSizePlan) : undefined,
            issueSize: isSet(object.issueSize) ? common_1.Quotation.fromJSON(object.issueSize) : undefined,
            placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
            issueKind: isSet(object.issueKind) ? String(object.issueKind) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrowName !== undefined && (obj.borrowName = message.borrowName);
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.Quotation.toJSON(message.nominal) : undefined);
        message.nominalCurrency !== undefined && (obj.nominalCurrency = message.nominalCurrency);
        message.type !== undefined && (obj.type = structuredProductTypeToJSON(message.type));
        message.logicPortfolio !== undefined && (obj.logicPortfolio = message.logicPortfolio);
        message.assetType !== undefined && (obj.assetType = assetTypeToJSON(message.assetType));
        message.basicAsset !== undefined && (obj.basicAsset = message.basicAsset);
        message.safetyBarrier !== undefined &&
            (obj.safetyBarrier = message.safetyBarrier ? common_1.Quotation.toJSON(message.safetyBarrier) : undefined);
        message.maturityDate !== undefined && (obj.maturityDate = message.maturityDate.toISOString());
        message.issueSizePlan !== undefined &&
            (obj.issueSizePlan = message.issueSizePlan ? common_1.Quotation.toJSON(message.issueSizePlan) : undefined);
        message.issueSize !== undefined &&
            (obj.issueSize = message.issueSize ? common_1.Quotation.toJSON(message.issueSize) : undefined);
        message.placementDate !== undefined && (obj.placementDate = message.placementDate.toISOString());
        message.issueKind !== undefined && (obj.issueKind = message.issueKind);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseAssetStructuredProduct();
        message.borrowName = (_a = object.borrowName) !== null && _a !== void 0 ? _a : '';
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.Quotation.fromPartial(object.nominal) : undefined;
        message.nominalCurrency = (_b = object.nominalCurrency) !== null && _b !== void 0 ? _b : '';
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.logicPortfolio = (_d = object.logicPortfolio) !== null && _d !== void 0 ? _d : '';
        message.assetType = (_e = object.assetType) !== null && _e !== void 0 ? _e : 0;
        message.basicAsset = (_f = object.basicAsset) !== null && _f !== void 0 ? _f : '';
        message.safetyBarrier =
            object.safetyBarrier !== undefined && object.safetyBarrier !== null
                ? common_1.Quotation.fromPartial(object.safetyBarrier)
                : undefined;
        message.maturityDate = (_g = object.maturityDate) !== null && _g !== void 0 ? _g : undefined;
        message.issueSizePlan =
            object.issueSizePlan !== undefined && object.issueSizePlan !== null
                ? common_1.Quotation.fromPartial(object.issueSizePlan)
                : undefined;
        message.issueSize =
            object.issueSize !== undefined && object.issueSize !== null ? common_1.Quotation.fromPartial(object.issueSize) : undefined;
        message.placementDate = (_h = object.placementDate) !== null && _h !== void 0 ? _h : undefined;
        message.issueKind = (_j = object.issueKind) !== null && _j !== void 0 ? _j : '';
        return message;
    },
};
function createBaseAssetEtf() {
    return {
        totalExpense: undefined,
        hurdleRate: undefined,
        performanceFee: undefined,
        fixedCommission: undefined,
        paymentType: '',
        watermarkFlag: false,
        buyPremium: undefined,
        sellDiscount: undefined,
        rebalancingFlag: false,
        rebalancingFreq: '',
        managementType: '',
        primaryIndex: '',
        focusType: '',
        leveragedFlag: false,
        numShare: undefined,
        ucitsFlag: false,
        releasedDate: undefined,
        description: '',
        primaryIndexDescription: '',
        primaryIndexCompany: '',
        indexRecoveryPeriod: undefined,
        inavCode: '',
        divYieldFlag: false,
        expenseCommission: undefined,
        primaryIndexTrackingError: undefined,
        rebalancingPlan: '',
        taxRate: '',
        rebalancingDates: [],
        issueKind: '',
        nominal: undefined,
        nominalCurrency: '',
    };
}
exports.AssetEtf = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.totalExpense !== undefined) {
            common_1.Quotation.encode(message.totalExpense, writer.uint32(10).fork()).ldelim();
        }
        if (message.hurdleRate !== undefined) {
            common_1.Quotation.encode(message.hurdleRate, writer.uint32(18).fork()).ldelim();
        }
        if (message.performanceFee !== undefined) {
            common_1.Quotation.encode(message.performanceFee, writer.uint32(26).fork()).ldelim();
        }
        if (message.fixedCommission !== undefined) {
            common_1.Quotation.encode(message.fixedCommission, writer.uint32(34).fork()).ldelim();
        }
        if (message.paymentType !== '') {
            writer.uint32(42).string(message.paymentType);
        }
        if (message.watermarkFlag === true) {
            writer.uint32(48).bool(message.watermarkFlag);
        }
        if (message.buyPremium !== undefined) {
            common_1.Quotation.encode(message.buyPremium, writer.uint32(58).fork()).ldelim();
        }
        if (message.sellDiscount !== undefined) {
            common_1.Quotation.encode(message.sellDiscount, writer.uint32(66).fork()).ldelim();
        }
        if (message.rebalancingFlag === true) {
            writer.uint32(72).bool(message.rebalancingFlag);
        }
        if (message.rebalancingFreq !== '') {
            writer.uint32(82).string(message.rebalancingFreq);
        }
        if (message.managementType !== '') {
            writer.uint32(90).string(message.managementType);
        }
        if (message.primaryIndex !== '') {
            writer.uint32(98).string(message.primaryIndex);
        }
        if (message.focusType !== '') {
            writer.uint32(106).string(message.focusType);
        }
        if (message.leveragedFlag === true) {
            writer.uint32(112).bool(message.leveragedFlag);
        }
        if (message.numShare !== undefined) {
            common_1.Quotation.encode(message.numShare, writer.uint32(122).fork()).ldelim();
        }
        if (message.ucitsFlag === true) {
            writer.uint32(128).bool(message.ucitsFlag);
        }
        if (message.releasedDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.releasedDate), writer.uint32(138).fork()).ldelim();
        }
        if (message.description !== '') {
            writer.uint32(146).string(message.description);
        }
        if (message.primaryIndexDescription !== '') {
            writer.uint32(154).string(message.primaryIndexDescription);
        }
        if (message.primaryIndexCompany !== '') {
            writer.uint32(162).string(message.primaryIndexCompany);
        }
        if (message.indexRecoveryPeriod !== undefined) {
            common_1.Quotation.encode(message.indexRecoveryPeriod, writer.uint32(170).fork()).ldelim();
        }
        if (message.inavCode !== '') {
            writer.uint32(178).string(message.inavCode);
        }
        if (message.divYieldFlag === true) {
            writer.uint32(184).bool(message.divYieldFlag);
        }
        if (message.expenseCommission !== undefined) {
            common_1.Quotation.encode(message.expenseCommission, writer.uint32(194).fork()).ldelim();
        }
        if (message.primaryIndexTrackingError !== undefined) {
            common_1.Quotation.encode(message.primaryIndexTrackingError, writer.uint32(202).fork()).ldelim();
        }
        if (message.rebalancingPlan !== '') {
            writer.uint32(210).string(message.rebalancingPlan);
        }
        if (message.taxRate !== '') {
            writer.uint32(218).string(message.taxRate);
        }
        for (const v of message.rebalancingDates) {
            timestamp_1.Timestamp.encode(toTimestamp(v), writer.uint32(226).fork()).ldelim();
        }
        if (message.issueKind !== '') {
            writer.uint32(234).string(message.issueKind);
        }
        if (message.nominal !== undefined) {
            common_1.Quotation.encode(message.nominal, writer.uint32(242).fork()).ldelim();
        }
        if (message.nominalCurrency !== '') {
            writer.uint32(250).string(message.nominalCurrency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetEtf();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalExpense = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hurdleRate = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.performanceFee = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fixedCommission = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.paymentType = reader.string();
                    break;
                case 6:
                    message.watermarkFlag = reader.bool();
                    break;
                case 7:
                    message.buyPremium = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.sellDiscount = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.rebalancingFlag = reader.bool();
                    break;
                case 10:
                    message.rebalancingFreq = reader.string();
                    break;
                case 11:
                    message.managementType = reader.string();
                    break;
                case 12:
                    message.primaryIndex = reader.string();
                    break;
                case 13:
                    message.focusType = reader.string();
                    break;
                case 14:
                    message.leveragedFlag = reader.bool();
                    break;
                case 15:
                    message.numShare = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.ucitsFlag = reader.bool();
                    break;
                case 17:
                    message.releasedDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.description = reader.string();
                    break;
                case 19:
                    message.primaryIndexDescription = reader.string();
                    break;
                case 20:
                    message.primaryIndexCompany = reader.string();
                    break;
                case 21:
                    message.indexRecoveryPeriod = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.inavCode = reader.string();
                    break;
                case 23:
                    message.divYieldFlag = reader.bool();
                    break;
                case 24:
                    message.expenseCommission = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.primaryIndexTrackingError = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.rebalancingPlan = reader.string();
                    break;
                case 27:
                    message.taxRate = reader.string();
                    break;
                case 28:
                    message.rebalancingDates.push(fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32())));
                    break;
                case 29:
                    message.issueKind = reader.string();
                    break;
                case 30:
                    message.nominal = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.nominalCurrency = reader.string();
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
            totalExpense: isSet(object.totalExpense) ? common_1.Quotation.fromJSON(object.totalExpense) : undefined,
            hurdleRate: isSet(object.hurdleRate) ? common_1.Quotation.fromJSON(object.hurdleRate) : undefined,
            performanceFee: isSet(object.performanceFee) ? common_1.Quotation.fromJSON(object.performanceFee) : undefined,
            fixedCommission: isSet(object.fixedCommission) ? common_1.Quotation.fromJSON(object.fixedCommission) : undefined,
            paymentType: isSet(object.paymentType) ? String(object.paymentType) : '',
            watermarkFlag: isSet(object.watermarkFlag) ? Boolean(object.watermarkFlag) : false,
            buyPremium: isSet(object.buyPremium) ? common_1.Quotation.fromJSON(object.buyPremium) : undefined,
            sellDiscount: isSet(object.sellDiscount) ? common_1.Quotation.fromJSON(object.sellDiscount) : undefined,
            rebalancingFlag: isSet(object.rebalancingFlag) ? Boolean(object.rebalancingFlag) : false,
            rebalancingFreq: isSet(object.rebalancingFreq) ? String(object.rebalancingFreq) : '',
            managementType: isSet(object.managementType) ? String(object.managementType) : '',
            primaryIndex: isSet(object.primaryIndex) ? String(object.primaryIndex) : '',
            focusType: isSet(object.focusType) ? String(object.focusType) : '',
            leveragedFlag: isSet(object.leveragedFlag) ? Boolean(object.leveragedFlag) : false,
            numShare: isSet(object.numShare) ? common_1.Quotation.fromJSON(object.numShare) : undefined,
            ucitsFlag: isSet(object.ucitsFlag) ? Boolean(object.ucitsFlag) : false,
            releasedDate: isSet(object.releasedDate) ? fromJsonTimestamp(object.releasedDate) : undefined,
            description: isSet(object.description) ? String(object.description) : '',
            primaryIndexDescription: isSet(object.primaryIndexDescription) ? String(object.primaryIndexDescription) : '',
            primaryIndexCompany: isSet(object.primaryIndexCompany) ? String(object.primaryIndexCompany) : '',
            indexRecoveryPeriod: isSet(object.indexRecoveryPeriod)
                ? common_1.Quotation.fromJSON(object.indexRecoveryPeriod)
                : undefined,
            inavCode: isSet(object.inavCode) ? String(object.inavCode) : '',
            divYieldFlag: isSet(object.divYieldFlag) ? Boolean(object.divYieldFlag) : false,
            expenseCommission: isSet(object.expenseCommission) ? common_1.Quotation.fromJSON(object.expenseCommission) : undefined,
            primaryIndexTrackingError: isSet(object.primaryIndexTrackingError)
                ? common_1.Quotation.fromJSON(object.primaryIndexTrackingError)
                : undefined,
            rebalancingPlan: isSet(object.rebalancingPlan) ? String(object.rebalancingPlan) : '',
            taxRate: isSet(object.taxRate) ? String(object.taxRate) : '',
            rebalancingDates: Array.isArray(object === null || object === void 0 ? void 0 : object.rebalancingDates)
                ? object.rebalancingDates.map((e) => fromJsonTimestamp(e))
                : [],
            issueKind: isSet(object.issueKind) ? String(object.issueKind) : '',
            nominal: isSet(object.nominal) ? common_1.Quotation.fromJSON(object.nominal) : undefined,
            nominalCurrency: isSet(object.nominalCurrency) ? String(object.nominalCurrency) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalExpense !== undefined &&
            (obj.totalExpense = message.totalExpense ? common_1.Quotation.toJSON(message.totalExpense) : undefined);
        message.hurdleRate !== undefined &&
            (obj.hurdleRate = message.hurdleRate ? common_1.Quotation.toJSON(message.hurdleRate) : undefined);
        message.performanceFee !== undefined &&
            (obj.performanceFee = message.performanceFee ? common_1.Quotation.toJSON(message.performanceFee) : undefined);
        message.fixedCommission !== undefined &&
            (obj.fixedCommission = message.fixedCommission ? common_1.Quotation.toJSON(message.fixedCommission) : undefined);
        message.paymentType !== undefined && (obj.paymentType = message.paymentType);
        message.watermarkFlag !== undefined && (obj.watermarkFlag = message.watermarkFlag);
        message.buyPremium !== undefined &&
            (obj.buyPremium = message.buyPremium ? common_1.Quotation.toJSON(message.buyPremium) : undefined);
        message.sellDiscount !== undefined &&
            (obj.sellDiscount = message.sellDiscount ? common_1.Quotation.toJSON(message.sellDiscount) : undefined);
        message.rebalancingFlag !== undefined && (obj.rebalancingFlag = message.rebalancingFlag);
        message.rebalancingFreq !== undefined && (obj.rebalancingFreq = message.rebalancingFreq);
        message.managementType !== undefined && (obj.managementType = message.managementType);
        message.primaryIndex !== undefined && (obj.primaryIndex = message.primaryIndex);
        message.focusType !== undefined && (obj.focusType = message.focusType);
        message.leveragedFlag !== undefined && (obj.leveragedFlag = message.leveragedFlag);
        message.numShare !== undefined &&
            (obj.numShare = message.numShare ? common_1.Quotation.toJSON(message.numShare) : undefined);
        message.ucitsFlag !== undefined && (obj.ucitsFlag = message.ucitsFlag);
        message.releasedDate !== undefined && (obj.releasedDate = message.releasedDate.toISOString());
        message.description !== undefined && (obj.description = message.description);
        message.primaryIndexDescription !== undefined && (obj.primaryIndexDescription = message.primaryIndexDescription);
        message.primaryIndexCompany !== undefined && (obj.primaryIndexCompany = message.primaryIndexCompany);
        message.indexRecoveryPeriod !== undefined &&
            (obj.indexRecoveryPeriod = message.indexRecoveryPeriod
                ? common_1.Quotation.toJSON(message.indexRecoveryPeriod)
                : undefined);
        message.inavCode !== undefined && (obj.inavCode = message.inavCode);
        message.divYieldFlag !== undefined && (obj.divYieldFlag = message.divYieldFlag);
        message.expenseCommission !== undefined &&
            (obj.expenseCommission = message.expenseCommission ? common_1.Quotation.toJSON(message.expenseCommission) : undefined);
        message.primaryIndexTrackingError !== undefined &&
            (obj.primaryIndexTrackingError = message.primaryIndexTrackingError
                ? common_1.Quotation.toJSON(message.primaryIndexTrackingError)
                : undefined);
        message.rebalancingPlan !== undefined && (obj.rebalancingPlan = message.rebalancingPlan);
        message.taxRate !== undefined && (obj.taxRate = message.taxRate);
        if (message.rebalancingDates) {
            obj.rebalancingDates = message.rebalancingDates.map(e => e.toISOString());
        }
        else {
            obj.rebalancingDates = [];
        }
        message.issueKind !== undefined && (obj.issueKind = message.issueKind);
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.Quotation.toJSON(message.nominal) : undefined);
        message.nominalCurrency !== undefined && (obj.nominalCurrency = message.nominalCurrency);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const message = createBaseAssetEtf();
        message.totalExpense =
            object.totalExpense !== undefined && object.totalExpense !== null
                ? common_1.Quotation.fromPartial(object.totalExpense)
                : undefined;
        message.hurdleRate =
            object.hurdleRate !== undefined && object.hurdleRate !== null
                ? common_1.Quotation.fromPartial(object.hurdleRate)
                : undefined;
        message.performanceFee =
            object.performanceFee !== undefined && object.performanceFee !== null
                ? common_1.Quotation.fromPartial(object.performanceFee)
                : undefined;
        message.fixedCommission =
            object.fixedCommission !== undefined && object.fixedCommission !== null
                ? common_1.Quotation.fromPartial(object.fixedCommission)
                : undefined;
        message.paymentType = (_a = object.paymentType) !== null && _a !== void 0 ? _a : '';
        message.watermarkFlag = (_b = object.watermarkFlag) !== null && _b !== void 0 ? _b : false;
        message.buyPremium =
            object.buyPremium !== undefined && object.buyPremium !== null
                ? common_1.Quotation.fromPartial(object.buyPremium)
                : undefined;
        message.sellDiscount =
            object.sellDiscount !== undefined && object.sellDiscount !== null
                ? common_1.Quotation.fromPartial(object.sellDiscount)
                : undefined;
        message.rebalancingFlag = (_c = object.rebalancingFlag) !== null && _c !== void 0 ? _c : false;
        message.rebalancingFreq = (_d = object.rebalancingFreq) !== null && _d !== void 0 ? _d : '';
        message.managementType = (_e = object.managementType) !== null && _e !== void 0 ? _e : '';
        message.primaryIndex = (_f = object.primaryIndex) !== null && _f !== void 0 ? _f : '';
        message.focusType = (_g = object.focusType) !== null && _g !== void 0 ? _g : '';
        message.leveragedFlag = (_h = object.leveragedFlag) !== null && _h !== void 0 ? _h : false;
        message.numShare =
            object.numShare !== undefined && object.numShare !== null ? common_1.Quotation.fromPartial(object.numShare) : undefined;
        message.ucitsFlag = (_j = object.ucitsFlag) !== null && _j !== void 0 ? _j : false;
        message.releasedDate = (_k = object.releasedDate) !== null && _k !== void 0 ? _k : undefined;
        message.description = (_l = object.description) !== null && _l !== void 0 ? _l : '';
        message.primaryIndexDescription = (_m = object.primaryIndexDescription) !== null && _m !== void 0 ? _m : '';
        message.primaryIndexCompany = (_o = object.primaryIndexCompany) !== null && _o !== void 0 ? _o : '';
        message.indexRecoveryPeriod =
            object.indexRecoveryPeriod !== undefined && object.indexRecoveryPeriod !== null
                ? common_1.Quotation.fromPartial(object.indexRecoveryPeriod)
                : undefined;
        message.inavCode = (_p = object.inavCode) !== null && _p !== void 0 ? _p : '';
        message.divYieldFlag = (_q = object.divYieldFlag) !== null && _q !== void 0 ? _q : false;
        message.expenseCommission =
            object.expenseCommission !== undefined && object.expenseCommission !== null
                ? common_1.Quotation.fromPartial(object.expenseCommission)
                : undefined;
        message.primaryIndexTrackingError =
            object.primaryIndexTrackingError !== undefined && object.primaryIndexTrackingError !== null
                ? common_1.Quotation.fromPartial(object.primaryIndexTrackingError)
                : undefined;
        message.rebalancingPlan = (_r = object.rebalancingPlan) !== null && _r !== void 0 ? _r : '';
        message.taxRate = (_s = object.taxRate) !== null && _s !== void 0 ? _s : '';
        message.rebalancingDates = ((_t = object.rebalancingDates) === null || _t === void 0 ? void 0 : _t.map(e => e)) || [];
        message.issueKind = (_u = object.issueKind) !== null && _u !== void 0 ? _u : '';
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.Quotation.fromPartial(object.nominal) : undefined;
        message.nominalCurrency = (_v = object.nominalCurrency) !== null && _v !== void 0 ? _v : '';
        return message;
    },
};
function createBaseAssetClearingCertificate() {
    return { nominal: undefined, nominalCurrency: '' };
}
exports.AssetClearingCertificate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nominal !== undefined) {
            common_1.Quotation.encode(message.nominal, writer.uint32(10).fork()).ldelim();
        }
        if (message.nominalCurrency !== '') {
            writer.uint32(18).string(message.nominalCurrency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetClearingCertificate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nominal = common_1.Quotation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nominalCurrency = reader.string();
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
            nominal: isSet(object.nominal) ? common_1.Quotation.fromJSON(object.nominal) : undefined,
            nominalCurrency: isSet(object.nominalCurrency) ? String(object.nominalCurrency) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.nominal !== undefined && (obj.nominal = message.nominal ? common_1.Quotation.toJSON(message.nominal) : undefined);
        message.nominalCurrency !== undefined && (obj.nominalCurrency = message.nominalCurrency);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAssetClearingCertificate();
        message.nominal =
            object.nominal !== undefined && object.nominal !== null ? common_1.Quotation.fromPartial(object.nominal) : undefined;
        message.nominalCurrency = (_a = object.nominalCurrency) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseBrand() {
    return {
        uid: '',
        name: '',
        description: '',
        info: '',
        company: '',
        sector: '',
        countryOfRisk: '',
        countryOfRiskName: '',
    };
}
exports.Brand = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uid !== '') {
            writer.uint32(10).string(message.uid);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.info !== '') {
            writer.uint32(34).string(message.info);
        }
        if (message.company !== '') {
            writer.uint32(42).string(message.company);
        }
        if (message.sector !== '') {
            writer.uint32(50).string(message.sector);
        }
        if (message.countryOfRisk !== '') {
            writer.uint32(58).string(message.countryOfRisk);
        }
        if (message.countryOfRiskName !== '') {
            writer.uint32(66).string(message.countryOfRiskName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBrand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.company = reader.string();
                    break;
                case 6:
                    message.sector = reader.string();
                    break;
                case 7:
                    message.countryOfRisk = reader.string();
                    break;
                case 8:
                    message.countryOfRiskName = reader.string();
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
            uid: isSet(object.uid) ? String(object.uid) : '',
            name: isSet(object.name) ? String(object.name) : '',
            description: isSet(object.description) ? String(object.description) : '',
            info: isSet(object.info) ? String(object.info) : '',
            company: isSet(object.company) ? String(object.company) : '',
            sector: isSet(object.sector) ? String(object.sector) : '',
            countryOfRisk: isSet(object.countryOfRisk) ? String(object.countryOfRisk) : '',
            countryOfRiskName: isSet(object.countryOfRiskName) ? String(object.countryOfRiskName) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.uid !== undefined && (obj.uid = message.uid);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.info !== undefined && (obj.info = message.info);
        message.company !== undefined && (obj.company = message.company);
        message.sector !== undefined && (obj.sector = message.sector);
        message.countryOfRisk !== undefined && (obj.countryOfRisk = message.countryOfRisk);
        message.countryOfRiskName !== undefined && (obj.countryOfRiskName = message.countryOfRiskName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseBrand();
        message.uid = (_a = object.uid) !== null && _a !== void 0 ? _a : '';
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : '';
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : '';
        message.info = (_d = object.info) !== null && _d !== void 0 ? _d : '';
        message.company = (_e = object.company) !== null && _e !== void 0 ? _e : '';
        message.sector = (_f = object.sector) !== null && _f !== void 0 ? _f : '';
        message.countryOfRisk = (_g = object.countryOfRisk) !== null && _g !== void 0 ? _g : '';
        message.countryOfRiskName = (_h = object.countryOfRiskName) !== null && _h !== void 0 ? _h : '';
        return message;
    },
};
function createBaseAssetInstrument() {
    return { uid: '', figi: '', instrumentType: '', ticker: '', classCode: '', links: [] };
}
exports.AssetInstrument = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uid !== '') {
            writer.uint32(10).string(message.uid);
        }
        if (message.figi !== '') {
            writer.uint32(18).string(message.figi);
        }
        if (message.instrumentType !== '') {
            writer.uint32(26).string(message.instrumentType);
        }
        if (message.ticker !== '') {
            writer.uint32(34).string(message.ticker);
        }
        if (message.classCode !== '') {
            writer.uint32(42).string(message.classCode);
        }
        for (const v of message.links) {
            exports.InstrumentLink.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetInstrument();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.figi = reader.string();
                    break;
                case 3:
                    message.instrumentType = reader.string();
                    break;
                case 4:
                    message.ticker = reader.string();
                    break;
                case 5:
                    message.classCode = reader.string();
                    break;
                case 6:
                    message.links.push(exports.InstrumentLink.decode(reader, reader.uint32()));
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
            uid: isSet(object.uid) ? String(object.uid) : '',
            figi: isSet(object.figi) ? String(object.figi) : '',
            instrumentType: isSet(object.instrumentType) ? String(object.instrumentType) : '',
            ticker: isSet(object.ticker) ? String(object.ticker) : '',
            classCode: isSet(object.classCode) ? String(object.classCode) : '',
            links: Array.isArray(object === null || object === void 0 ? void 0 : object.links) ? object.links.map((e) => exports.InstrumentLink.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.uid !== undefined && (obj.uid = message.uid);
        message.figi !== undefined && (obj.figi = message.figi);
        message.instrumentType !== undefined && (obj.instrumentType = message.instrumentType);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.classCode !== undefined && (obj.classCode = message.classCode);
        if (message.links) {
            obj.links = message.links.map(e => (e ? exports.InstrumentLink.toJSON(e) : undefined));
        }
        else {
            obj.links = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAssetInstrument();
        message.uid = (_a = object.uid) !== null && _a !== void 0 ? _a : '';
        message.figi = (_b = object.figi) !== null && _b !== void 0 ? _b : '';
        message.instrumentType = (_c = object.instrumentType) !== null && _c !== void 0 ? _c : '';
        message.ticker = (_d = object.ticker) !== null && _d !== void 0 ? _d : '';
        message.classCode = (_e = object.classCode) !== null && _e !== void 0 ? _e : '';
        message.links = ((_f = object.links) === null || _f === void 0 ? void 0 : _f.map(e => exports.InstrumentLink.fromPartial(e))) || [];
        return message;
    },
};
function createBaseInstrumentLink() {
    return { type: '', instrumentUid: '' };
}
exports.InstrumentLink = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.instrumentUid !== '') {
            writer.uint32(18).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstrumentLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.instrumentUid = reader.string();
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
            type: isSet(object.type) ? String(object.type) : '',
            instrumentUid: isSet(object.instrumentUid) ? String(object.instrumentUid) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.instrumentUid !== undefined && (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseInstrumentLink();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : '';
        message.instrumentUid = (_b = object.instrumentUid) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
exports.InstrumentsServiceDefinition = {
    name: 'InstrumentsService',
    fullName: 'tinkoff.public.invest.api.contract.v1.InstrumentsService',
    methods: {
        tradingSchedules: {
            name: 'TradingSchedules',
            requestType: exports.TradingSchedulesRequest,
            requestStream: false,
            responseType: exports.TradingSchedulesResponse,
            responseStream: false,
            options: {},
        },
        bondBy: {
            name: 'BondBy',
            requestType: exports.InstrumentRequest,
            requestStream: false,
            responseType: exports.BondResponse,
            responseStream: false,
            options: {},
        },
        bonds: {
            name: 'Bonds',
            requestType: exports.InstrumentsRequest,
            requestStream: false,
            responseType: exports.BondsResponse,
            responseStream: false,
            options: {},
        },
        getBondCoupons: {
            name: 'GetBondCoupons',
            requestType: exports.GetBondCouponsRequest,
            requestStream: false,
            responseType: exports.GetBondCouponsResponse,
            responseStream: false,
            options: {},
        },
        currencyBy: {
            name: 'CurrencyBy',
            requestType: exports.InstrumentRequest,
            requestStream: false,
            responseType: exports.CurrencyResponse,
            responseStream: false,
            options: {},
        },
        currencies: {
            name: 'Currencies',
            requestType: exports.InstrumentsRequest,
            requestStream: false,
            responseType: exports.CurrenciesResponse,
            responseStream: false,
            options: {},
        },
        etfBy: {
            name: 'EtfBy',
            requestType: exports.InstrumentRequest,
            requestStream: false,
            responseType: exports.EtfResponse,
            responseStream: false,
            options: {},
        },
        etfs: {
            name: 'Etfs',
            requestType: exports.InstrumentsRequest,
            requestStream: false,
            responseType: exports.EtfsResponse,
            responseStream: false,
            options: {},
        },
        futureBy: {
            name: 'FutureBy',
            requestType: exports.InstrumentRequest,
            requestStream: false,
            responseType: exports.FutureResponse,
            responseStream: false,
            options: {},
        },
        futures: {
            name: 'Futures',
            requestType: exports.InstrumentsRequest,
            requestStream: false,
            responseType: exports.FuturesResponse,
            responseStream: false,
            options: {},
        },
        shareBy: {
            name: 'ShareBy',
            requestType: exports.InstrumentRequest,
            requestStream: false,
            responseType: exports.ShareResponse,
            responseStream: false,
            options: {},
        },
        shares: {
            name: 'Shares',
            requestType: exports.InstrumentsRequest,
            requestStream: false,
            responseType: exports.SharesResponse,
            responseStream: false,
            options: {},
        },
        getAccruedInterests: {
            name: 'GetAccruedInterests',
            requestType: exports.GetAccruedInterestsRequest,
            requestStream: false,
            responseType: exports.GetAccruedInterestsResponse,
            responseStream: false,
            options: {},
        },
        getFuturesMargin: {
            name: 'GetFuturesMargin',
            requestType: exports.GetFuturesMarginRequest,
            requestStream: false,
            responseType: exports.GetFuturesMarginResponse,
            responseStream: false,
            options: {},
        },
        getInstrumentBy: {
            name: 'GetInstrumentBy',
            requestType: exports.InstrumentRequest,
            requestStream: false,
            responseType: exports.InstrumentResponse,
            responseStream: false,
            options: {},
        },
        getDividends: {
            name: 'GetDividends',
            requestType: exports.GetDividendsRequest,
            requestStream: false,
            responseType: exports.GetDividendsResponse,
            responseStream: false,
            options: {},
        },
        getAssetBy: {
            name: 'GetAssetBy',
            requestType: exports.AssetRequest,
            requestStream: false,
            responseType: exports.AssetResponse,
            responseStream: false,
            options: {},
        },
        getAssets: {
            name: 'GetAssets',
            requestType: exports.AssetsRequest,
            requestStream: false,
            responseType: exports.AssetsResponse,
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
//# sourceMappingURL=instruments.js.map