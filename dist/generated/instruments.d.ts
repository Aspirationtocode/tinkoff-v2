import * as _m0 from 'protobufjs/minimal';
import { SecurityTradingStatus, MoneyValue, Quotation } from './common';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export declare enum CouponType {
    COUPON_TYPE_UNSPECIFIED = 0,
    COUPON_TYPE_CONSTANT = 1,
    COUPON_TYPE_FLOATING = 2,
    COUPON_TYPE_DISCOUNT = 3,
    COUPON_TYPE_MORTGAGE = 4,
    COUPON_TYPE_FIX = 5,
    COUPON_TYPE_VARIABLE = 6,
    COUPON_TYPE_OTHER = 7,
    UNRECOGNIZED = -1
}
export declare function couponTypeFromJSON(object: any): CouponType;
export declare function couponTypeToJSON(object: CouponType): string;
export declare enum InstrumentIdType {
    INSTRUMENT_ID_UNSPECIFIED = 0,
    INSTRUMENT_ID_TYPE_FIGI = 1,
    INSTRUMENT_ID_TYPE_TICKER = 2,
    INSTRUMENT_ID_TYPE_UID = 3,
    UNRECOGNIZED = -1
}
export declare function instrumentIdTypeFromJSON(object: any): InstrumentIdType;
export declare function instrumentIdTypeToJSON(object: InstrumentIdType): string;
export declare enum InstrumentStatus {
    INSTRUMENT_STATUS_UNSPECIFIED = 0,
    INSTRUMENT_STATUS_BASE = 1,
    INSTRUMENT_STATUS_ALL = 2,
    UNRECOGNIZED = -1
}
export declare function instrumentStatusFromJSON(object: any): InstrumentStatus;
export declare function instrumentStatusToJSON(object: InstrumentStatus): string;
export declare enum ShareType {
    SHARE_TYPE_UNSPECIFIED = 0,
    SHARE_TYPE_COMMON = 1,
    SHARE_TYPE_PREFERRED = 2,
    SHARE_TYPE_ADR = 3,
    SHARE_TYPE_GDR = 4,
    SHARE_TYPE_MLP = 5,
    SHARE_TYPE_NY_REG_SHRS = 6,
    SHARE_TYPE_CLOSED_END_FUND = 7,
    SHARE_TYPE_REIT = 8,
    UNRECOGNIZED = -1
}
export declare function shareTypeFromJSON(object: any): ShareType;
export declare function shareTypeToJSON(object: ShareType): string;
export declare enum AssetType {
    ASSET_TYPE_UNSPECIFIED = 0,
    ASSET_TYPE_CURRENCY = 1,
    ASSET_TYPE_COMMODITY = 2,
    ASSET_TYPE_INDEX = 3,
    ASSET_TYPE_SECURITY = 4,
    UNRECOGNIZED = -1
}
export declare function assetTypeFromJSON(object: any): AssetType;
export declare function assetTypeToJSON(object: AssetType): string;
export declare enum StructuredProductType {
    SP_TYPE_UNSPECIFIED = 0,
    SP_TYPE_DELIVERABLE = 1,
    SP_TYPE_NON_DELIVERABLE = 2,
    UNRECOGNIZED = -1
}
export declare function structuredProductTypeFromJSON(object: any): StructuredProductType;
export declare function structuredProductTypeToJSON(object: StructuredProductType): string;
export interface TradingSchedulesRequest {
    exchange: string;
    from: Date | undefined;
    to: Date | undefined;
}
export interface TradingSchedulesResponse {
    exchanges: TradingSchedule[];
}
export interface TradingSchedule {
    exchange: string;
    days: TradingDay[];
}
export interface TradingDay {
    date: Date | undefined;
    isTradingDay: boolean;
    startTime: Date | undefined;
    endTime: Date | undefined;
    openingAuctionStartTime: Date | undefined;
    closingAuctionEndTime: Date | undefined;
    eveningOpeningAuctionStartTime: Date | undefined;
    eveningStartTime: Date | undefined;
    eveningEndTime: Date | undefined;
    clearingStartTime: Date | undefined;
    clearingEndTime: Date | undefined;
    premarketStartTime: Date | undefined;
    premarketEndTime: Date | undefined;
}
export interface InstrumentRequest {
    idType: InstrumentIdType;
    classCode: string;
    id: string;
}
export interface InstrumentsRequest {
    instrumentStatus: InstrumentStatus;
}
export interface BondResponse {
    instrument: Bond | undefined;
}
export interface BondsResponse {
    instruments: Bond[];
}
export interface GetBondCouponsRequest {
    figi: string;
    from: Date | undefined;
    to: Date | undefined;
}
export interface GetBondCouponsResponse {
    events: Coupon[];
}
export interface Coupon {
    figi: string;
    couponDate: Date | undefined;
    couponNumber: number;
    fixDate: Date | undefined;
    payOneBond: MoneyValue | undefined;
    couponType: CouponType;
    couponStartDate: Date | undefined;
    couponEndDate: Date | undefined;
    couponPeriod: number;
}
export interface CurrencyResponse {
    instrument: Currency | undefined;
}
export interface CurrenciesResponse {
    instruments: Currency[];
}
export interface EtfResponse {
    instrument: Etf | undefined;
}
export interface EtfsResponse {
    instruments: Etf[];
}
export interface FutureResponse {
    instrument: Future | undefined;
}
export interface FuturesResponse {
    instruments: Future[];
}
export interface ShareResponse {
    instrument: Share | undefined;
}
export interface SharesResponse {
    instruments: Share[];
}
export interface Bond {
    figi: string;
    ticker: string;
    classCode: string;
    isin: string;
    lot: number;
    currency: string;
    klong: Quotation | undefined;
    kshort: Quotation | undefined;
    dlong: Quotation | undefined;
    dshort: Quotation | undefined;
    dlongMin: Quotation | undefined;
    dshortMin: Quotation | undefined;
    shortEnabledFlag: boolean;
    name: string;
    exchange: string;
    couponQuantityPerYear: number;
    maturityDate: Date | undefined;
    nominal: MoneyValue | undefined;
    stateRegDate: Date | undefined;
    placementDate: Date | undefined;
    placementPrice: MoneyValue | undefined;
    aciValue: MoneyValue | undefined;
    countryOfRisk: string;
    countryOfRiskName: string;
    sector: string;
    issueKind: string;
    issueSize: number;
    issueSizePlan: number;
    tradingStatus: SecurityTradingStatus;
    otcFlag: boolean;
    buyAvailableFlag: boolean;
    sellAvailableFlag: boolean;
    floatingCouponFlag: boolean;
    perpetualFlag: boolean;
    amortizationFlag: boolean;
    minPriceIncrement: Quotation | undefined;
    apiTradeAvailableFlag: boolean;
    uid: string;
}
export interface Currency {
    figi: string;
    ticker: string;
    classCode: string;
    isin: string;
    lot: number;
    currency: string;
    klong: Quotation | undefined;
    kshort: Quotation | undefined;
    dlong: Quotation | undefined;
    dshort: Quotation | undefined;
    dlongMin: Quotation | undefined;
    dshortMin: Quotation | undefined;
    shortEnabledFlag: boolean;
    name: string;
    exchange: string;
    nominal: MoneyValue | undefined;
    countryOfRisk: string;
    countryOfRiskName: string;
    tradingStatus: SecurityTradingStatus;
    otcFlag: boolean;
    buyAvailableFlag: boolean;
    sellAvailableFlag: boolean;
    isoCurrencyName: string;
    minPriceIncrement: Quotation | undefined;
    apiTradeAvailableFlag: boolean;
    uid: string;
}
export interface Etf {
    figi: string;
    ticker: string;
    classCode: string;
    isin: string;
    lot: number;
    currency: string;
    klong: Quotation | undefined;
    kshort: Quotation | undefined;
    dlong: Quotation | undefined;
    dshort: Quotation | undefined;
    dlongMin: Quotation | undefined;
    dshortMin: Quotation | undefined;
    shortEnabledFlag: boolean;
    name: string;
    exchange: string;
    fixedCommission: Quotation | undefined;
    focusType: string;
    releasedDate: Date | undefined;
    numShares: Quotation | undefined;
    countryOfRisk: string;
    countryOfRiskName: string;
    sector: string;
    rebalancingFreq: string;
    tradingStatus: SecurityTradingStatus;
    otcFlag: boolean;
    buyAvailableFlag: boolean;
    sellAvailableFlag: boolean;
    minPriceIncrement: Quotation | undefined;
    apiTradeAvailableFlag: boolean;
    uid: string;
}
export interface Future {
    figi: string;
    ticker: string;
    classCode: string;
    lot: number;
    currency: string;
    klong: Quotation | undefined;
    kshort: Quotation | undefined;
    dlong: Quotation | undefined;
    dshort: Quotation | undefined;
    dlongMin: Quotation | undefined;
    dshortMin: Quotation | undefined;
    shortEnabledFlag: boolean;
    name: string;
    exchange: string;
    firstTradeDate: Date | undefined;
    lastTradeDate: Date | undefined;
    futuresType: string;
    assetType: string;
    basicAsset: string;
    basicAssetSize: Quotation | undefined;
    countryOfRisk: string;
    countryOfRiskName: string;
    sector: string;
    expirationDate: Date | undefined;
    tradingStatus: SecurityTradingStatus;
    otcFlag: boolean;
    buyAvailableFlag: boolean;
    sellAvailableFlag: boolean;
    minPriceIncrement: Quotation | undefined;
    apiTradeAvailableFlag: boolean;
    uid: string;
}
export interface Share {
    figi: string;
    ticker: string;
    classCode: string;
    isin: string;
    lot: number;
    currency: string;
    klong: Quotation | undefined;
    kshort: Quotation | undefined;
    dlong: Quotation | undefined;
    dshort: Quotation | undefined;
    dlongMin: Quotation | undefined;
    dshortMin: Quotation | undefined;
    shortEnabledFlag: boolean;
    name: string;
    exchange: string;
    ipoDate: Date | undefined;
    issueSize: number;
    countryOfRisk: string;
    countryOfRiskName: string;
    sector: string;
    issueSizePlan: number;
    nominal: MoneyValue | undefined;
    tradingStatus: SecurityTradingStatus;
    otcFlag: boolean;
    buyAvailableFlag: boolean;
    sellAvailableFlag: boolean;
    divYieldFlag: boolean;
    shareType: ShareType;
    minPriceIncrement: Quotation | undefined;
    apiTradeAvailableFlag: boolean;
    uid: string;
}
export interface GetAccruedInterestsRequest {
    figi: string;
    from: Date | undefined;
    to: Date | undefined;
}
export interface GetAccruedInterestsResponse {
    accruedInterests: AccruedInterest[];
}
export interface AccruedInterest {
    date: Date | undefined;
    value: Quotation | undefined;
    valuePercent: Quotation | undefined;
    nominal: Quotation | undefined;
}
export interface GetFuturesMarginRequest {
    figi: string;
}
export interface GetFuturesMarginResponse {
    initialMarginOnBuy: MoneyValue | undefined;
    initialMarginOnSell: MoneyValue | undefined;
    minPriceIncrement: Quotation | undefined;
    minPriceIncrementAmount: Quotation | undefined;
}
export interface InstrumentResponse {
    instrument: Instrument | undefined;
}
export interface Instrument {
    figi: string;
    ticker: string;
    classCode: string;
    isin: string;
    lot: number;
    currency: string;
    klong: Quotation | undefined;
    kshort: Quotation | undefined;
    dlong: Quotation | undefined;
    dshort: Quotation | undefined;
    dlongMin: Quotation | undefined;
    dshortMin: Quotation | undefined;
    shortEnabledFlag: boolean;
    name: string;
    exchange: string;
    countryOfRisk: string;
    countryOfRiskName: string;
    instrumentType: string;
    tradingStatus: SecurityTradingStatus;
    otcFlag: boolean;
    buyAvailableFlag: boolean;
    sellAvailableFlag: boolean;
    minPriceIncrement: Quotation | undefined;
    apiTradeAvailableFlag: boolean;
    uid: string;
}
export interface GetDividendsRequest {
    figi: string;
    from: Date | undefined;
    to: Date | undefined;
}
export interface GetDividendsResponse {
    dividends: Dividend[];
}
export interface Dividend {
    dividendNet: MoneyValue | undefined;
    paymentDate: Date | undefined;
    declaredDate: Date | undefined;
    lastBuyDate: Date | undefined;
    dividendType: string;
    recordDate: Date | undefined;
    regularity: string;
    closePrice: MoneyValue | undefined;
    yieldValue: Quotation | undefined;
    createdAt: Date | undefined;
}
export interface AssetRequest {
    id: string;
}
export interface AssetResponse {
    asset: AssetFull | undefined;
}
export interface AssetsRequest {
}
export interface AssetsResponse {
    assets: Asset[];
}
export interface AssetFull {
    uid: string;
    type: AssetType;
    name: string;
    nameBrief: string;
    description: string;
    deletedAt: Date | undefined;
    requiredTests: string[];
    currency: AssetCurrency | undefined;
    security: AssetSecurity | undefined;
    gosRegCode: string;
    cfi: string;
    codeNsd: string;
    status: string;
    brand: Brand | undefined;
    updatedAt: Date | undefined;
    brCode: string;
    brCodeName: string;
    instruments: AssetInstrument[];
}
export interface Asset {
    uid: string;
    type: AssetType;
    name: string;
    instruments: AssetInstrument[];
}
export interface AssetCurrency {
    baseCurrency: string;
}
export interface AssetSecurity {
    isin: string;
    type: string;
    share: AssetShare | undefined;
    bond: AssetBond | undefined;
    sp: AssetStructuredProduct | undefined;
    etf: AssetEtf | undefined;
    clearingCertificate: AssetClearingCertificate | undefined;
}
export interface AssetShare {
    type: ShareType;
    issueSize: Quotation | undefined;
    nominal: Quotation | undefined;
    nominalCurrency: string;
    primaryIndex: string;
    dividendRate: Quotation | undefined;
    preferredShareType: string;
    ipoDate: Date | undefined;
    registryDate: Date | undefined;
    divYieldFlag: boolean;
    issueKind: string;
    placementDate: Date | undefined;
    represIsin: string;
    issueSizePlan: Quotation | undefined;
    totalFloat: Quotation | undefined;
}
export interface AssetBond {
    currentNominal: Quotation | undefined;
    borrowName: string;
    issueSize: Quotation | undefined;
    nominal: Quotation | undefined;
    nominalCurrency: string;
    issueKind: string;
    interestKind: string;
    couponQuantityPerYear: number;
    indexedNominalFlag: boolean;
    subordinatedFlag: boolean;
    collateralFlag: boolean;
    taxFreeFlag: boolean;
    amortizationFlag: boolean;
    floatingCouponFlag: boolean;
    perpetualFlag: boolean;
    maturityDate: Date | undefined;
    returnCondition: string;
    stateRegDate: Date | undefined;
    placementDate: Date | undefined;
    placementPrice: Quotation | undefined;
    issueSizePlan: Quotation | undefined;
}
export interface AssetStructuredProduct {
    borrowName: string;
    nominal: Quotation | undefined;
    nominalCurrency: string;
    type: StructuredProductType;
    logicPortfolio: string;
    assetType: AssetType;
    basicAsset: string;
    safetyBarrier: Quotation | undefined;
    maturityDate: Date | undefined;
    issueSizePlan: Quotation | undefined;
    issueSize: Quotation | undefined;
    placementDate: Date | undefined;
    issueKind: string;
}
export interface AssetEtf {
    totalExpense: Quotation | undefined;
    hurdleRate: Quotation | undefined;
    performanceFee: Quotation | undefined;
    fixedCommission: Quotation | undefined;
    paymentType: string;
    watermarkFlag: boolean;
    buyPremium: Quotation | undefined;
    sellDiscount: Quotation | undefined;
    rebalancingFlag: boolean;
    rebalancingFreq: string;
    managementType: string;
    primaryIndex: string;
    focusType: string;
    leveragedFlag: boolean;
    numShare: Quotation | undefined;
    ucitsFlag: boolean;
    releasedDate: Date | undefined;
    description: string;
    primaryIndexDescription: string;
    primaryIndexCompany: string;
    indexRecoveryPeriod: Quotation | undefined;
    inavCode: string;
    divYieldFlag: boolean;
    expenseCommission: Quotation | undefined;
    primaryIndexTrackingError: Quotation | undefined;
    rebalancingPlan: string;
    taxRate: string;
    rebalancingDates: Date[];
    issueKind: string;
    nominal: Quotation | undefined;
    nominalCurrency: string;
}
export interface AssetClearingCertificate {
    nominal: Quotation | undefined;
    nominalCurrency: string;
}
export interface Brand {
    uid: string;
    name: string;
    description: string;
    info: string;
    company: string;
    sector: string;
    countryOfRisk: string;
    countryOfRiskName: string;
}
export interface AssetInstrument {
    uid: string;
    figi: string;
    instrumentType: string;
    ticker: string;
    classCode: string;
    links: InstrumentLink[];
}
export interface InstrumentLink {
    type: string;
    instrumentUid: string;
}
export declare const TradingSchedulesRequest: {
    encode(message: TradingSchedulesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradingSchedulesRequest;
    fromJSON(object: any): TradingSchedulesRequest;
    toJSON(message: TradingSchedulesRequest): unknown;
    fromPartial(object: DeepPartial<TradingSchedulesRequest>): TradingSchedulesRequest;
};
export declare const TradingSchedulesResponse: {
    encode(message: TradingSchedulesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradingSchedulesResponse;
    fromJSON(object: any): TradingSchedulesResponse;
    toJSON(message: TradingSchedulesResponse): unknown;
    fromPartial(object: DeepPartial<TradingSchedulesResponse>): TradingSchedulesResponse;
};
export declare const TradingSchedule: {
    encode(message: TradingSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradingSchedule;
    fromJSON(object: any): TradingSchedule;
    toJSON(message: TradingSchedule): unknown;
    fromPartial(object: DeepPartial<TradingSchedule>): TradingSchedule;
};
export declare const TradingDay: {
    encode(message: TradingDay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradingDay;
    fromJSON(object: any): TradingDay;
    toJSON(message: TradingDay): unknown;
    fromPartial(object: DeepPartial<TradingDay>): TradingDay;
};
export declare const InstrumentRequest: {
    encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentRequest;
    fromJSON(object: any): InstrumentRequest;
    toJSON(message: InstrumentRequest): unknown;
    fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest;
};
export declare const InstrumentsRequest: {
    encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentsRequest;
    fromJSON(object: any): InstrumentsRequest;
    toJSON(message: InstrumentsRequest): unknown;
    fromPartial(object: DeepPartial<InstrumentsRequest>): InstrumentsRequest;
};
export declare const BondResponse: {
    encode(message: BondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BondResponse;
    fromJSON(object: any): BondResponse;
    toJSON(message: BondResponse): unknown;
    fromPartial(object: DeepPartial<BondResponse>): BondResponse;
};
export declare const BondsResponse: {
    encode(message: BondsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BondsResponse;
    fromJSON(object: any): BondsResponse;
    toJSON(message: BondsResponse): unknown;
    fromPartial(object: DeepPartial<BondsResponse>): BondsResponse;
};
export declare const GetBondCouponsRequest: {
    encode(message: GetBondCouponsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBondCouponsRequest;
    fromJSON(object: any): GetBondCouponsRequest;
    toJSON(message: GetBondCouponsRequest): unknown;
    fromPartial(object: DeepPartial<GetBondCouponsRequest>): GetBondCouponsRequest;
};
export declare const GetBondCouponsResponse: {
    encode(message: GetBondCouponsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBondCouponsResponse;
    fromJSON(object: any): GetBondCouponsResponse;
    toJSON(message: GetBondCouponsResponse): unknown;
    fromPartial(object: DeepPartial<GetBondCouponsResponse>): GetBondCouponsResponse;
};
export declare const Coupon: {
    encode(message: Coupon, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Coupon;
    fromJSON(object: any): Coupon;
    toJSON(message: Coupon): unknown;
    fromPartial(object: DeepPartial<Coupon>): Coupon;
};
export declare const CurrencyResponse: {
    encode(message: CurrencyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CurrencyResponse;
    fromJSON(object: any): CurrencyResponse;
    toJSON(message: CurrencyResponse): unknown;
    fromPartial(object: DeepPartial<CurrencyResponse>): CurrencyResponse;
};
export declare const CurrenciesResponse: {
    encode(message: CurrenciesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CurrenciesResponse;
    fromJSON(object: any): CurrenciesResponse;
    toJSON(message: CurrenciesResponse): unknown;
    fromPartial(object: DeepPartial<CurrenciesResponse>): CurrenciesResponse;
};
export declare const EtfResponse: {
    encode(message: EtfResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EtfResponse;
    fromJSON(object: any): EtfResponse;
    toJSON(message: EtfResponse): unknown;
    fromPartial(object: DeepPartial<EtfResponse>): EtfResponse;
};
export declare const EtfsResponse: {
    encode(message: EtfsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EtfsResponse;
    fromJSON(object: any): EtfsResponse;
    toJSON(message: EtfsResponse): unknown;
    fromPartial(object: DeepPartial<EtfsResponse>): EtfsResponse;
};
export declare const FutureResponse: {
    encode(message: FutureResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FutureResponse;
    fromJSON(object: any): FutureResponse;
    toJSON(message: FutureResponse): unknown;
    fromPartial(object: DeepPartial<FutureResponse>): FutureResponse;
};
export declare const FuturesResponse: {
    encode(message: FuturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FuturesResponse;
    fromJSON(object: any): FuturesResponse;
    toJSON(message: FuturesResponse): unknown;
    fromPartial(object: DeepPartial<FuturesResponse>): FuturesResponse;
};
export declare const ShareResponse: {
    encode(message: ShareResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ShareResponse;
    fromJSON(object: any): ShareResponse;
    toJSON(message: ShareResponse): unknown;
    fromPartial(object: DeepPartial<ShareResponse>): ShareResponse;
};
export declare const SharesResponse: {
    encode(message: SharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SharesResponse;
    fromJSON(object: any): SharesResponse;
    toJSON(message: SharesResponse): unknown;
    fromPartial(object: DeepPartial<SharesResponse>): SharesResponse;
};
export declare const Bond: {
    encode(message: Bond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Bond;
    fromJSON(object: any): Bond;
    toJSON(message: Bond): unknown;
    fromPartial(object: DeepPartial<Bond>): Bond;
};
export declare const Currency: {
    encode(message: Currency, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Currency;
    fromJSON(object: any): Currency;
    toJSON(message: Currency): unknown;
    fromPartial(object: DeepPartial<Currency>): Currency;
};
export declare const Etf: {
    encode(message: Etf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Etf;
    fromJSON(object: any): Etf;
    toJSON(message: Etf): unknown;
    fromPartial(object: DeepPartial<Etf>): Etf;
};
export declare const Future: {
    encode(message: Future, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Future;
    fromJSON(object: any): Future;
    toJSON(message: Future): unknown;
    fromPartial(object: DeepPartial<Future>): Future;
};
export declare const Share: {
    encode(message: Share, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Share;
    fromJSON(object: any): Share;
    toJSON(message: Share): unknown;
    fromPartial(object: DeepPartial<Share>): Share;
};
export declare const GetAccruedInterestsRequest: {
    encode(message: GetAccruedInterestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccruedInterestsRequest;
    fromJSON(object: any): GetAccruedInterestsRequest;
    toJSON(message: GetAccruedInterestsRequest): unknown;
    fromPartial(object: DeepPartial<GetAccruedInterestsRequest>): GetAccruedInterestsRequest;
};
export declare const GetAccruedInterestsResponse: {
    encode(message: GetAccruedInterestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccruedInterestsResponse;
    fromJSON(object: any): GetAccruedInterestsResponse;
    toJSON(message: GetAccruedInterestsResponse): unknown;
    fromPartial(object: DeepPartial<GetAccruedInterestsResponse>): GetAccruedInterestsResponse;
};
export declare const AccruedInterest: {
    encode(message: AccruedInterest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccruedInterest;
    fromJSON(object: any): AccruedInterest;
    toJSON(message: AccruedInterest): unknown;
    fromPartial(object: DeepPartial<AccruedInterest>): AccruedInterest;
};
export declare const GetFuturesMarginRequest: {
    encode(message: GetFuturesMarginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFuturesMarginRequest;
    fromJSON(object: any): GetFuturesMarginRequest;
    toJSON(message: GetFuturesMarginRequest): unknown;
    fromPartial(object: DeepPartial<GetFuturesMarginRequest>): GetFuturesMarginRequest;
};
export declare const GetFuturesMarginResponse: {
    encode(message: GetFuturesMarginResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFuturesMarginResponse;
    fromJSON(object: any): GetFuturesMarginResponse;
    toJSON(message: GetFuturesMarginResponse): unknown;
    fromPartial(object: DeepPartial<GetFuturesMarginResponse>): GetFuturesMarginResponse;
};
export declare const InstrumentResponse: {
    encode(message: InstrumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentResponse;
    fromJSON(object: any): InstrumentResponse;
    toJSON(message: InstrumentResponse): unknown;
    fromPartial(object: DeepPartial<InstrumentResponse>): InstrumentResponse;
};
export declare const Instrument: {
    encode(message: Instrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instrument;
    fromJSON(object: any): Instrument;
    toJSON(message: Instrument): unknown;
    fromPartial(object: DeepPartial<Instrument>): Instrument;
};
export declare const GetDividendsRequest: {
    encode(message: GetDividendsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsRequest;
    fromJSON(object: any): GetDividendsRequest;
    toJSON(message: GetDividendsRequest): unknown;
    fromPartial(object: DeepPartial<GetDividendsRequest>): GetDividendsRequest;
};
export declare const GetDividendsResponse: {
    encode(message: GetDividendsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsResponse;
    fromJSON(object: any): GetDividendsResponse;
    toJSON(message: GetDividendsResponse): unknown;
    fromPartial(object: DeepPartial<GetDividendsResponse>): GetDividendsResponse;
};
export declare const Dividend: {
    encode(message: Dividend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Dividend;
    fromJSON(object: any): Dividend;
    toJSON(message: Dividend): unknown;
    fromPartial(object: DeepPartial<Dividend>): Dividend;
};
export declare const AssetRequest: {
    encode(message: AssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetRequest;
    fromJSON(object: any): AssetRequest;
    toJSON(message: AssetRequest): unknown;
    fromPartial(object: DeepPartial<AssetRequest>): AssetRequest;
};
export declare const AssetResponse: {
    encode(message: AssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetResponse;
    fromJSON(object: any): AssetResponse;
    toJSON(message: AssetResponse): unknown;
    fromPartial(object: DeepPartial<AssetResponse>): AssetResponse;
};
export declare const AssetsRequest: {
    encode(_: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsRequest;
    fromJSON(_: any): AssetsRequest;
    toJSON(_: AssetsRequest): unknown;
    fromPartial(_: DeepPartial<AssetsRequest>): AssetsRequest;
};
export declare const AssetsResponse: {
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsResponse;
    fromJSON(object: any): AssetsResponse;
    toJSON(message: AssetsResponse): unknown;
    fromPartial(object: DeepPartial<AssetsResponse>): AssetsResponse;
};
export declare const AssetFull: {
    encode(message: AssetFull, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetFull;
    fromJSON(object: any): AssetFull;
    toJSON(message: AssetFull): unknown;
    fromPartial(object: DeepPartial<AssetFull>): AssetFull;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: DeepPartial<Asset>): Asset;
};
export declare const AssetCurrency: {
    encode(message: AssetCurrency, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetCurrency;
    fromJSON(object: any): AssetCurrency;
    toJSON(message: AssetCurrency): unknown;
    fromPartial(object: DeepPartial<AssetCurrency>): AssetCurrency;
};
export declare const AssetSecurity: {
    encode(message: AssetSecurity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetSecurity;
    fromJSON(object: any): AssetSecurity;
    toJSON(message: AssetSecurity): unknown;
    fromPartial(object: DeepPartial<AssetSecurity>): AssetSecurity;
};
export declare const AssetShare: {
    encode(message: AssetShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetShare;
    fromJSON(object: any): AssetShare;
    toJSON(message: AssetShare): unknown;
    fromPartial(object: DeepPartial<AssetShare>): AssetShare;
};
export declare const AssetBond: {
    encode(message: AssetBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetBond;
    fromJSON(object: any): AssetBond;
    toJSON(message: AssetBond): unknown;
    fromPartial(object: DeepPartial<AssetBond>): AssetBond;
};
export declare const AssetStructuredProduct: {
    encode(message: AssetStructuredProduct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetStructuredProduct;
    fromJSON(object: any): AssetStructuredProduct;
    toJSON(message: AssetStructuredProduct): unknown;
    fromPartial(object: DeepPartial<AssetStructuredProduct>): AssetStructuredProduct;
};
export declare const AssetEtf: {
    encode(message: AssetEtf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetEtf;
    fromJSON(object: any): AssetEtf;
    toJSON(message: AssetEtf): unknown;
    fromPartial(object: DeepPartial<AssetEtf>): AssetEtf;
};
export declare const AssetClearingCertificate: {
    encode(message: AssetClearingCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetClearingCertificate;
    fromJSON(object: any): AssetClearingCertificate;
    toJSON(message: AssetClearingCertificate): unknown;
    fromPartial(object: DeepPartial<AssetClearingCertificate>): AssetClearingCertificate;
};
export declare const Brand: {
    encode(message: Brand, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Brand;
    fromJSON(object: any): Brand;
    toJSON(message: Brand): unknown;
    fromPartial(object: DeepPartial<Brand>): Brand;
};
export declare const AssetInstrument: {
    encode(message: AssetInstrument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetInstrument;
    fromJSON(object: any): AssetInstrument;
    toJSON(message: AssetInstrument): unknown;
    fromPartial(object: DeepPartial<AssetInstrument>): AssetInstrument;
};
export declare const InstrumentLink: {
    encode(message: InstrumentLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentLink;
    fromJSON(object: any): InstrumentLink;
    toJSON(message: InstrumentLink): unknown;
    fromPartial(object: DeepPartial<InstrumentLink>): InstrumentLink;
};
export declare const InstrumentsServiceDefinition: {
    readonly name: "InstrumentsService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.InstrumentsService";
    readonly methods: {
        readonly tradingSchedules: {
            readonly name: "TradingSchedules";
            readonly requestType: {
                encode(message: TradingSchedulesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradingSchedulesRequest;
                fromJSON(object: any): TradingSchedulesRequest;
                toJSON(message: TradingSchedulesRequest): unknown;
                fromPartial(object: DeepPartial<TradingSchedulesRequest>): TradingSchedulesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: TradingSchedulesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TradingSchedulesResponse;
                fromJSON(object: any): TradingSchedulesResponse;
                toJSON(message: TradingSchedulesResponse): unknown;
                fromPartial(object: DeepPartial<TradingSchedulesResponse>): TradingSchedulesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly bondBy: {
            readonly name: "BondBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BondResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BondResponse;
                fromJSON(object: any): BondResponse;
                toJSON(message: BondResponse): unknown;
                fromPartial(object: DeepPartial<BondResponse>): BondResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly bonds: {
            readonly name: "Bonds";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentsRequest>): InstrumentsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BondsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BondsResponse;
                fromJSON(object: any): BondsResponse;
                toJSON(message: BondsResponse): unknown;
                fromPartial(object: DeepPartial<BondsResponse>): BondsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getBondCoupons: {
            readonly name: "GetBondCoupons";
            readonly requestType: {
                encode(message: GetBondCouponsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBondCouponsRequest;
                fromJSON(object: any): GetBondCouponsRequest;
                toJSON(message: GetBondCouponsRequest): unknown;
                fromPartial(object: DeepPartial<GetBondCouponsRequest>): GetBondCouponsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetBondCouponsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBondCouponsResponse;
                fromJSON(object: any): GetBondCouponsResponse;
                toJSON(message: GetBondCouponsResponse): unknown;
                fromPartial(object: DeepPartial<GetBondCouponsResponse>): GetBondCouponsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly currencyBy: {
            readonly name: "CurrencyBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CurrencyResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CurrencyResponse;
                fromJSON(object: any): CurrencyResponse;
                toJSON(message: CurrencyResponse): unknown;
                fromPartial(object: DeepPartial<CurrencyResponse>): CurrencyResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly currencies: {
            readonly name: "Currencies";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentsRequest>): InstrumentsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CurrenciesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CurrenciesResponse;
                fromJSON(object: any): CurrenciesResponse;
                toJSON(message: CurrenciesResponse): unknown;
                fromPartial(object: DeepPartial<CurrenciesResponse>): CurrenciesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly etfBy: {
            readonly name: "EtfBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EtfResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EtfResponse;
                fromJSON(object: any): EtfResponse;
                toJSON(message: EtfResponse): unknown;
                fromPartial(object: DeepPartial<EtfResponse>): EtfResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly etfs: {
            readonly name: "Etfs";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentsRequest>): InstrumentsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: EtfsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EtfsResponse;
                fromJSON(object: any): EtfsResponse;
                toJSON(message: EtfsResponse): unknown;
                fromPartial(object: DeepPartial<EtfsResponse>): EtfsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly futureBy: {
            readonly name: "FutureBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: FutureResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FutureResponse;
                fromJSON(object: any): FutureResponse;
                toJSON(message: FutureResponse): unknown;
                fromPartial(object: DeepPartial<FutureResponse>): FutureResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly futures: {
            readonly name: "Futures";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentsRequest>): InstrumentsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: FuturesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FuturesResponse;
                fromJSON(object: any): FuturesResponse;
                toJSON(message: FuturesResponse): unknown;
                fromPartial(object: DeepPartial<FuturesResponse>): FuturesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly shareBy: {
            readonly name: "ShareBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ShareResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ShareResponse;
                fromJSON(object: any): ShareResponse;
                toJSON(message: ShareResponse): unknown;
                fromPartial(object: DeepPartial<ShareResponse>): ShareResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly shares: {
            readonly name: "Shares";
            readonly requestType: {
                encode(message: InstrumentsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentsRequest;
                fromJSON(object: any): InstrumentsRequest;
                toJSON(message: InstrumentsRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentsRequest>): InstrumentsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SharesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SharesResponse;
                fromJSON(object: any): SharesResponse;
                toJSON(message: SharesResponse): unknown;
                fromPartial(object: DeepPartial<SharesResponse>): SharesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getAccruedInterests: {
            readonly name: "GetAccruedInterests";
            readonly requestType: {
                encode(message: GetAccruedInterestsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccruedInterestsRequest;
                fromJSON(object: any): GetAccruedInterestsRequest;
                toJSON(message: GetAccruedInterestsRequest): unknown;
                fromPartial(object: DeepPartial<GetAccruedInterestsRequest>): GetAccruedInterestsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAccruedInterestsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccruedInterestsResponse;
                fromJSON(object: any): GetAccruedInterestsResponse;
                toJSON(message: GetAccruedInterestsResponse): unknown;
                fromPartial(object: DeepPartial<GetAccruedInterestsResponse>): GetAccruedInterestsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getFuturesMargin: {
            readonly name: "GetFuturesMargin";
            readonly requestType: {
                encode(message: GetFuturesMarginRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFuturesMarginRequest;
                fromJSON(object: any): GetFuturesMarginRequest;
                toJSON(message: GetFuturesMarginRequest): unknown;
                fromPartial(object: DeepPartial<GetFuturesMarginRequest>): GetFuturesMarginRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetFuturesMarginResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetFuturesMarginResponse;
                fromJSON(object: any): GetFuturesMarginResponse;
                toJSON(message: GetFuturesMarginResponse): unknown;
                fromPartial(object: DeepPartial<GetFuturesMarginResponse>): GetFuturesMarginResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getInstrumentBy: {
            readonly name: "GetInstrumentBy";
            readonly requestType: {
                encode(message: InstrumentRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentRequest;
                fromJSON(object: any): InstrumentRequest;
                toJSON(message: InstrumentRequest): unknown;
                fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: InstrumentResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InstrumentResponse;
                fromJSON(object: any): InstrumentResponse;
                toJSON(message: InstrumentResponse): unknown;
                fromPartial(object: DeepPartial<InstrumentResponse>): InstrumentResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getDividends: {
            readonly name: "GetDividends";
            readonly requestType: {
                encode(message: GetDividendsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsRequest;
                fromJSON(object: any): GetDividendsRequest;
                toJSON(message: GetDividendsRequest): unknown;
                fromPartial(object: DeepPartial<GetDividendsRequest>): GetDividendsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDividendsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsResponse;
                fromJSON(object: any): GetDividendsResponse;
                toJSON(message: GetDividendsResponse): unknown;
                fromPartial(object: DeepPartial<GetDividendsResponse>): GetDividendsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getAssetBy: {
            readonly name: "GetAssetBy";
            readonly requestType: {
                encode(message: AssetRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetRequest;
                fromJSON(object: any): AssetRequest;
                toJSON(message: AssetRequest): unknown;
                fromPartial(object: DeepPartial<AssetRequest>): AssetRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AssetResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetResponse;
                fromJSON(object: any): AssetResponse;
                toJSON(message: AssetResponse): unknown;
                fromPartial(object: DeepPartial<AssetResponse>): AssetResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getAssets: {
            readonly name: "GetAssets";
            readonly requestType: {
                encode(_: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsRequest;
                fromJSON(_: any): AssetsRequest;
                toJSON(_: AssetsRequest): unknown;
                fromPartial(_: DeepPartial<AssetsRequest>): AssetsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetsResponse;
                fromJSON(object: any): AssetsResponse;
                toJSON(message: AssetsResponse): unknown;
                fromPartial(object: DeepPartial<AssetsResponse>): AssetsResponse;
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
