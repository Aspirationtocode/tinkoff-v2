import * as _m0 from 'protobufjs/minimal';
import { MoneyValue, Quotation } from './common';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export declare enum OperationState {
    OPERATION_STATE_UNSPECIFIED = 0,
    OPERATION_STATE_EXECUTED = 1,
    OPERATION_STATE_CANCELED = 2,
    UNRECOGNIZED = -1
}
export declare function operationStateFromJSON(object: any): OperationState;
export declare function operationStateToJSON(object: OperationState): string;
export declare enum OperationType {
    OPERATION_TYPE_UNSPECIFIED = 0,
    OPERATION_TYPE_INPUT = 1,
    OPERATION_TYPE_BOND_TAX = 2,
    OPERATION_TYPE_OUTPUT_SECURITIES = 3,
    OPERATION_TYPE_OVERNIGHT = 4,
    OPERATION_TYPE_TAX = 5,
    OPERATION_TYPE_BOND_REPAYMENT_FULL = 6,
    OPERATION_TYPE_SELL_CARD = 7,
    OPERATION_TYPE_DIVIDEND_TAX = 8,
    OPERATION_TYPE_OUTPUT = 9,
    OPERATION_TYPE_BOND_REPAYMENT = 10,
    OPERATION_TYPE_TAX_CORRECTION = 11,
    OPERATION_TYPE_SERVICE_FEE = 12,
    OPERATION_TYPE_BENEFIT_TAX = 13,
    OPERATION_TYPE_MARGIN_FEE = 14,
    OPERATION_TYPE_BUY = 15,
    OPERATION_TYPE_BUY_CARD = 16,
    OPERATION_TYPE_INPUT_SECURITIES = 17,
    OPERATION_TYPE_SELL_MARGIN = 18,
    OPERATION_TYPE_BROKER_FEE = 19,
    OPERATION_TYPE_BUY_MARGIN = 20,
    OPERATION_TYPE_DIVIDEND = 21,
    OPERATION_TYPE_SELL = 22,
    OPERATION_TYPE_COUPON = 23,
    OPERATION_TYPE_SUCCESS_FEE = 24,
    OPERATION_TYPE_DIVIDEND_TRANSFER = 25,
    OPERATION_TYPE_ACCRUING_VARMARGIN = 26,
    OPERATION_TYPE_WRITING_OFF_VARMARGIN = 27,
    OPERATION_TYPE_DELIVERY_BUY = 28,
    OPERATION_TYPE_DELIVERY_SELL = 29,
    OPERATION_TYPE_TRACK_MFEE = 30,
    OPERATION_TYPE_TRACK_PFEE = 31,
    OPERATION_TYPE_TAX_PROGRESSIVE = 32,
    OPERATION_TYPE_BOND_TAX_PROGRESSIVE = 33,
    OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = 34,
    OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = 35,
    OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = 36,
    OPERATION_TYPE_TAX_REPO_PROGRESSIVE = 37,
    OPERATION_TYPE_TAX_REPO = 38,
    OPERATION_TYPE_TAX_REPO_HOLD = 39,
    OPERATION_TYPE_TAX_REPO_REFUND = 40,
    OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = 41,
    OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = 42,
    OPERATION_TYPE_DIV_EXT = 43,
    OPERATION_TYPE_TAX_CORRECTION_COUPON = 44,
    UNRECOGNIZED = -1
}
export declare function operationTypeFromJSON(object: any): OperationType;
export declare function operationTypeToJSON(object: OperationType): string;
export interface OperationsRequest {
    accountId: string;
    from: Date | undefined;
    to: Date | undefined;
    state: OperationState;
    figi: string;
}
export interface OperationsResponse {
    operations: Operation[];
}
export interface Operation {
    id: string;
    parentOperationId: string;
    currency: string;
    payment: MoneyValue | undefined;
    price: MoneyValue | undefined;
    state: OperationState;
    quantity: number;
    quantityRest: number;
    figi: string;
    instrumentType: string;
    date: Date | undefined;
    type: string;
    operationType: OperationType;
    trades: OperationTrade[];
}
export interface OperationTrade {
    tradeId: string;
    dateTime: Date | undefined;
    quantity: number;
    price: MoneyValue | undefined;
}
export interface PortfolioRequest {
    accountId: string;
}
export interface PortfolioResponse {
    totalAmountShares: MoneyValue | undefined;
    totalAmountBonds: MoneyValue | undefined;
    totalAmountEtf: MoneyValue | undefined;
    totalAmountCurrencies: MoneyValue | undefined;
    totalAmountFutures: MoneyValue | undefined;
    expectedYield: Quotation | undefined;
    positions: PortfolioPosition[];
}
export interface PositionsRequest {
    accountId: string;
}
export interface PositionsResponse {
    money: MoneyValue[];
    blocked: MoneyValue[];
    securities: PositionsSecurities[];
    limitsLoadingInProgress: boolean;
    futures: PositionsFutures[];
}
export interface WithdrawLimitsRequest {
    accountId: string;
}
export interface WithdrawLimitsResponse {
    money: MoneyValue[];
    blocked: MoneyValue[];
    blockedGuarantee: MoneyValue[];
}
export interface PortfolioPosition {
    figi: string;
    instrumentType: string;
    quantity: Quotation | undefined;
    averagePositionPrice: MoneyValue | undefined;
    expectedYield: Quotation | undefined;
    currentNkd: MoneyValue | undefined;
    averagePositionPricePt: Quotation | undefined;
    currentPrice: MoneyValue | undefined;
    averagePositionPriceFifo: MoneyValue | undefined;
    quantityLots: Quotation | undefined;
}
export interface PositionsSecurities {
    figi: string;
    blocked: number;
    balance: number;
}
export interface PositionsFutures {
    figi: string;
    blocked: number;
    balance: number;
}
export interface BrokerReportRequest {
    generateBrokerReportRequest: GenerateBrokerReportRequest | undefined;
    getBrokerReportRequest: GetBrokerReportRequest | undefined;
}
export interface BrokerReportResponse {
    generateBrokerReportResponse: GenerateBrokerReportResponse | undefined;
    getBrokerReportResponse: GetBrokerReportResponse | undefined;
}
export interface GenerateBrokerReportRequest {
    accountId: string;
    from: Date | undefined;
    to: Date | undefined;
}
export interface GenerateBrokerReportResponse {
    taskId: string;
}
export interface GetBrokerReportRequest {
    taskId: string;
    page: number;
}
export interface GetBrokerReportResponse {
    brokerReport: BrokerReport[];
    itemsCount: number;
    pagesCount: number;
    page: number;
}
export interface BrokerReport {
    tradeId: string;
    orderId: string;
    figi: string;
    executeSign: string;
    tradeDatetime: Date | undefined;
    exchange: string;
    classCode: string;
    direction: string;
    name: string;
    ticker: string;
    price: MoneyValue | undefined;
    quantity: number;
    orderAmount: MoneyValue | undefined;
    aciValue: Quotation | undefined;
    totalOrderAmount: MoneyValue | undefined;
    brokerCommission: MoneyValue | undefined;
    exchangeCommission: MoneyValue | undefined;
    exchangeClearingCommission: MoneyValue | undefined;
    repoRate: Quotation | undefined;
    party: string;
    clearValueDate: Date | undefined;
    secValueDate: Date | undefined;
    brokerStatus: string;
    separateAgreementType: string;
    separateAgreementNumber: string;
    separateAgreementDate: string;
    deliveryType: string;
}
export interface GetDividendsForeignIssuerRequest {
    generateDivForeignIssuerReport: GenerateDividendsForeignIssuerReportRequest | undefined;
    getDivForeignIssuerReport: GetDividendsForeignIssuerReportRequest | undefined;
}
export interface GetDividendsForeignIssuerResponse {
    generateDivForeignIssuerReportResponse: GenerateDividendsForeignIssuerReportResponse | undefined;
    divForeignIssuerReport: GetDividendsForeignIssuerReportResponse | undefined;
}
export interface GenerateDividendsForeignIssuerReportRequest {
    accountId: string;
    from: Date | undefined;
    to: Date | undefined;
}
export interface GetDividendsForeignIssuerReportRequest {
    taskId: string;
    page: number;
}
export interface GenerateDividendsForeignIssuerReportResponse {
    taskId: string;
}
export interface GetDividendsForeignIssuerReportResponse {
    dividendsForeignIssuerReport: DividendsForeignIssuerReport[];
    itemsCount: number;
    pagesCount: number;
    page: number;
}
export interface DividendsForeignIssuerReport {
    recordDate: Date | undefined;
    paymentDate: Date | undefined;
    securityName: string;
    isin: string;
    issuerCountry: string;
    quantity: number;
    dividend: Quotation | undefined;
    externalCommission: Quotation | undefined;
    dividendGross: Quotation | undefined;
    tax: Quotation | undefined;
    dividendAmount: Quotation | undefined;
    currency: string;
}
export declare const OperationsRequest: {
    encode(message: OperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationsRequest;
    fromJSON(object: any): OperationsRequest;
    toJSON(message: OperationsRequest): unknown;
    fromPartial(object: DeepPartial<OperationsRequest>): OperationsRequest;
};
export declare const OperationsResponse: {
    encode(message: OperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationsResponse;
    fromJSON(object: any): OperationsResponse;
    toJSON(message: OperationsResponse): unknown;
    fromPartial(object: DeepPartial<OperationsResponse>): OperationsResponse;
};
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
    fromPartial(object: DeepPartial<Operation>): Operation;
};
export declare const OperationTrade: {
    encode(message: OperationTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationTrade;
    fromJSON(object: any): OperationTrade;
    toJSON(message: OperationTrade): unknown;
    fromPartial(object: DeepPartial<OperationTrade>): OperationTrade;
};
export declare const PortfolioRequest: {
    encode(message: PortfolioRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PortfolioRequest;
    fromJSON(object: any): PortfolioRequest;
    toJSON(message: PortfolioRequest): unknown;
    fromPartial(object: DeepPartial<PortfolioRequest>): PortfolioRequest;
};
export declare const PortfolioResponse: {
    encode(message: PortfolioResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PortfolioResponse;
    fromJSON(object: any): PortfolioResponse;
    toJSON(message: PortfolioResponse): unknown;
    fromPartial(object: DeepPartial<PortfolioResponse>): PortfolioResponse;
};
export declare const PositionsRequest: {
    encode(message: PositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PositionsRequest;
    fromJSON(object: any): PositionsRequest;
    toJSON(message: PositionsRequest): unknown;
    fromPartial(object: DeepPartial<PositionsRequest>): PositionsRequest;
};
export declare const PositionsResponse: {
    encode(message: PositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PositionsResponse;
    fromJSON(object: any): PositionsResponse;
    toJSON(message: PositionsResponse): unknown;
    fromPartial(object: DeepPartial<PositionsResponse>): PositionsResponse;
};
export declare const WithdrawLimitsRequest: {
    encode(message: WithdrawLimitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WithdrawLimitsRequest;
    fromJSON(object: any): WithdrawLimitsRequest;
    toJSON(message: WithdrawLimitsRequest): unknown;
    fromPartial(object: DeepPartial<WithdrawLimitsRequest>): WithdrawLimitsRequest;
};
export declare const WithdrawLimitsResponse: {
    encode(message: WithdrawLimitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WithdrawLimitsResponse;
    fromJSON(object: any): WithdrawLimitsResponse;
    toJSON(message: WithdrawLimitsResponse): unknown;
    fromPartial(object: DeepPartial<WithdrawLimitsResponse>): WithdrawLimitsResponse;
};
export declare const PortfolioPosition: {
    encode(message: PortfolioPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PortfolioPosition;
    fromJSON(object: any): PortfolioPosition;
    toJSON(message: PortfolioPosition): unknown;
    fromPartial(object: DeepPartial<PortfolioPosition>): PortfolioPosition;
};
export declare const PositionsSecurities: {
    encode(message: PositionsSecurities, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PositionsSecurities;
    fromJSON(object: any): PositionsSecurities;
    toJSON(message: PositionsSecurities): unknown;
    fromPartial(object: DeepPartial<PositionsSecurities>): PositionsSecurities;
};
export declare const PositionsFutures: {
    encode(message: PositionsFutures, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PositionsFutures;
    fromJSON(object: any): PositionsFutures;
    toJSON(message: PositionsFutures): unknown;
    fromPartial(object: DeepPartial<PositionsFutures>): PositionsFutures;
};
export declare const BrokerReportRequest: {
    encode(message: BrokerReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BrokerReportRequest;
    fromJSON(object: any): BrokerReportRequest;
    toJSON(message: BrokerReportRequest): unknown;
    fromPartial(object: DeepPartial<BrokerReportRequest>): BrokerReportRequest;
};
export declare const BrokerReportResponse: {
    encode(message: BrokerReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BrokerReportResponse;
    fromJSON(object: any): BrokerReportResponse;
    toJSON(message: BrokerReportResponse): unknown;
    fromPartial(object: DeepPartial<BrokerReportResponse>): BrokerReportResponse;
};
export declare const GenerateBrokerReportRequest: {
    encode(message: GenerateBrokerReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateBrokerReportRequest;
    fromJSON(object: any): GenerateBrokerReportRequest;
    toJSON(message: GenerateBrokerReportRequest): unknown;
    fromPartial(object: DeepPartial<GenerateBrokerReportRequest>): GenerateBrokerReportRequest;
};
export declare const GenerateBrokerReportResponse: {
    encode(message: GenerateBrokerReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateBrokerReportResponse;
    fromJSON(object: any): GenerateBrokerReportResponse;
    toJSON(message: GenerateBrokerReportResponse): unknown;
    fromPartial(object: DeepPartial<GenerateBrokerReportResponse>): GenerateBrokerReportResponse;
};
export declare const GetBrokerReportRequest: {
    encode(message: GetBrokerReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBrokerReportRequest;
    fromJSON(object: any): GetBrokerReportRequest;
    toJSON(message: GetBrokerReportRequest): unknown;
    fromPartial(object: DeepPartial<GetBrokerReportRequest>): GetBrokerReportRequest;
};
export declare const GetBrokerReportResponse: {
    encode(message: GetBrokerReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBrokerReportResponse;
    fromJSON(object: any): GetBrokerReportResponse;
    toJSON(message: GetBrokerReportResponse): unknown;
    fromPartial(object: DeepPartial<GetBrokerReportResponse>): GetBrokerReportResponse;
};
export declare const BrokerReport: {
    encode(message: BrokerReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BrokerReport;
    fromJSON(object: any): BrokerReport;
    toJSON(message: BrokerReport): unknown;
    fromPartial(object: DeepPartial<BrokerReport>): BrokerReport;
};
export declare const GetDividendsForeignIssuerRequest: {
    encode(message: GetDividendsForeignIssuerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsForeignIssuerRequest;
    fromJSON(object: any): GetDividendsForeignIssuerRequest;
    toJSON(message: GetDividendsForeignIssuerRequest): unknown;
    fromPartial(object: DeepPartial<GetDividendsForeignIssuerRequest>): GetDividendsForeignIssuerRequest;
};
export declare const GetDividendsForeignIssuerResponse: {
    encode(message: GetDividendsForeignIssuerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsForeignIssuerResponse;
    fromJSON(object: any): GetDividendsForeignIssuerResponse;
    toJSON(message: GetDividendsForeignIssuerResponse): unknown;
    fromPartial(object: DeepPartial<GetDividendsForeignIssuerResponse>): GetDividendsForeignIssuerResponse;
};
export declare const GenerateDividendsForeignIssuerReportRequest: {
    encode(message: GenerateDividendsForeignIssuerReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateDividendsForeignIssuerReportRequest;
    fromJSON(object: any): GenerateDividendsForeignIssuerReportRequest;
    toJSON(message: GenerateDividendsForeignIssuerReportRequest): unknown;
    fromPartial(object: DeepPartial<GenerateDividendsForeignIssuerReportRequest>): GenerateDividendsForeignIssuerReportRequest;
};
export declare const GetDividendsForeignIssuerReportRequest: {
    encode(message: GetDividendsForeignIssuerReportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsForeignIssuerReportRequest;
    fromJSON(object: any): GetDividendsForeignIssuerReportRequest;
    toJSON(message: GetDividendsForeignIssuerReportRequest): unknown;
    fromPartial(object: DeepPartial<GetDividendsForeignIssuerReportRequest>): GetDividendsForeignIssuerReportRequest;
};
export declare const GenerateDividendsForeignIssuerReportResponse: {
    encode(message: GenerateDividendsForeignIssuerReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenerateDividendsForeignIssuerReportResponse;
    fromJSON(object: any): GenerateDividendsForeignIssuerReportResponse;
    toJSON(message: GenerateDividendsForeignIssuerReportResponse): unknown;
    fromPartial(object: DeepPartial<GenerateDividendsForeignIssuerReportResponse>): GenerateDividendsForeignIssuerReportResponse;
};
export declare const GetDividendsForeignIssuerReportResponse: {
    encode(message: GetDividendsForeignIssuerReportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsForeignIssuerReportResponse;
    fromJSON(object: any): GetDividendsForeignIssuerReportResponse;
    toJSON(message: GetDividendsForeignIssuerReportResponse): unknown;
    fromPartial(object: DeepPartial<GetDividendsForeignIssuerReportResponse>): GetDividendsForeignIssuerReportResponse;
};
export declare const DividendsForeignIssuerReport: {
    encode(message: DividendsForeignIssuerReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DividendsForeignIssuerReport;
    fromJSON(object: any): DividendsForeignIssuerReport;
    toJSON(message: DividendsForeignIssuerReport): unknown;
    fromPartial(object: DeepPartial<DividendsForeignIssuerReport>): DividendsForeignIssuerReport;
};
export declare const OperationsServiceDefinition: {
    readonly name: "OperationsService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.OperationsService";
    readonly methods: {
        readonly getOperations: {
            readonly name: "GetOperations";
            readonly requestType: {
                encode(message: OperationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationsRequest;
                fromJSON(object: any): OperationsRequest;
                toJSON(message: OperationsRequest): unknown;
                fromPartial(object: DeepPartial<OperationsRequest>): OperationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OperationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OperationsResponse;
                fromJSON(object: any): OperationsResponse;
                toJSON(message: OperationsResponse): unknown;
                fromPartial(object: DeepPartial<OperationsResponse>): OperationsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPortfolio: {
            readonly name: "GetPortfolio";
            readonly requestType: {
                encode(message: PortfolioRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PortfolioRequest;
                fromJSON(object: any): PortfolioRequest;
                toJSON(message: PortfolioRequest): unknown;
                fromPartial(object: DeepPartial<PortfolioRequest>): PortfolioRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PortfolioResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PortfolioResponse;
                fromJSON(object: any): PortfolioResponse;
                toJSON(message: PortfolioResponse): unknown;
                fromPartial(object: DeepPartial<PortfolioResponse>): PortfolioResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPositions: {
            readonly name: "GetPositions";
            readonly requestType: {
                encode(message: PositionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PositionsRequest;
                fromJSON(object: any): PositionsRequest;
                toJSON(message: PositionsRequest): unknown;
                fromPartial(object: DeepPartial<PositionsRequest>): PositionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PositionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PositionsResponse;
                fromJSON(object: any): PositionsResponse;
                toJSON(message: PositionsResponse): unknown;
                fromPartial(object: DeepPartial<PositionsResponse>): PositionsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getWithdrawLimits: {
            readonly name: "GetWithdrawLimits";
            readonly requestType: {
                encode(message: WithdrawLimitsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WithdrawLimitsRequest;
                fromJSON(object: any): WithdrawLimitsRequest;
                toJSON(message: WithdrawLimitsRequest): unknown;
                fromPartial(object: DeepPartial<WithdrawLimitsRequest>): WithdrawLimitsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: WithdrawLimitsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WithdrawLimitsResponse;
                fromJSON(object: any): WithdrawLimitsResponse;
                toJSON(message: WithdrawLimitsResponse): unknown;
                fromPartial(object: DeepPartial<WithdrawLimitsResponse>): WithdrawLimitsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getBrokerReport: {
            readonly name: "GetBrokerReport";
            readonly requestType: {
                encode(message: BrokerReportRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BrokerReportRequest;
                fromJSON(object: any): BrokerReportRequest;
                toJSON(message: BrokerReportRequest): unknown;
                fromPartial(object: DeepPartial<BrokerReportRequest>): BrokerReportRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: BrokerReportResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BrokerReportResponse;
                fromJSON(object: any): BrokerReportResponse;
                toJSON(message: BrokerReportResponse): unknown;
                fromPartial(object: DeepPartial<BrokerReportResponse>): BrokerReportResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getDividendsForeignIssuer: {
            readonly name: "GetDividendsForeignIssuer";
            readonly requestType: {
                encode(message: GetDividendsForeignIssuerRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsForeignIssuerRequest;
                fromJSON(object: any): GetDividendsForeignIssuerRequest;
                toJSON(message: GetDividendsForeignIssuerRequest): unknown;
                fromPartial(object: DeepPartial<GetDividendsForeignIssuerRequest>): GetDividendsForeignIssuerRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetDividendsForeignIssuerResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDividendsForeignIssuerResponse;
                fromJSON(object: any): GetDividendsForeignIssuerResponse;
                toJSON(message: GetDividendsForeignIssuerResponse): unknown;
                fromPartial(object: DeepPartial<GetDividendsForeignIssuerResponse>): GetDividendsForeignIssuerResponse;
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
