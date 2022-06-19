import * as _m0 from 'protobufjs/minimal';
import { MoneyValue, Quotation } from './common';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export declare enum AccountType {
    ACCOUNT_TYPE_UNSPECIFIED = 0,
    ACCOUNT_TYPE_TINKOFF = 1,
    ACCOUNT_TYPE_TINKOFF_IIS = 2,
    ACCOUNT_TYPE_INVEST_BOX = 3,
    UNRECOGNIZED = -1
}
export declare function accountTypeFromJSON(object: any): AccountType;
export declare function accountTypeToJSON(object: AccountType): string;
export declare enum AccountStatus {
    ACCOUNT_STATUS_UNSPECIFIED = 0,
    ACCOUNT_STATUS_NEW = 1,
    ACCOUNT_STATUS_OPEN = 2,
    ACCOUNT_STATUS_CLOSED = 3,
    UNRECOGNIZED = -1
}
export declare function accountStatusFromJSON(object: any): AccountStatus;
export declare function accountStatusToJSON(object: AccountStatus): string;
export declare enum AccessLevel {
    ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0,
    ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1,
    ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2,
    ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3,
    UNRECOGNIZED = -1
}
export declare function accessLevelFromJSON(object: any): AccessLevel;
export declare function accessLevelToJSON(object: AccessLevel): string;
export interface GetAccountsRequest {
}
export interface GetAccountsResponse {
    accounts: Account[];
}
export interface Account {
    id: string;
    type: AccountType;
    name: string;
    status: AccountStatus;
    openedDate: Date | undefined;
    closedDate: Date | undefined;
    accessLevel: AccessLevel;
}
export interface GetMarginAttributesRequest {
    accountId: string;
}
export interface GetMarginAttributesResponse {
    liquidPortfolio: MoneyValue | undefined;
    startingMargin: MoneyValue | undefined;
    minimalMargin: MoneyValue | undefined;
    fundsSufficiencyLevel: Quotation | undefined;
    amountOfMissingFunds: MoneyValue | undefined;
}
export interface GetUserTariffRequest {
}
export interface GetUserTariffResponse {
    unaryLimits: UnaryLimit[];
    streamLimits: StreamLimit[];
}
export interface UnaryLimit {
    limitPerMinute: number;
    methods: string[];
}
export interface StreamLimit {
    limit: number;
    streams: string[];
}
export interface GetInfoRequest {
}
export interface GetInfoResponse {
    premStatus: boolean;
    qualStatus: boolean;
    qualifiedForWorkWith: string[];
    tariff: string;
}
export declare const GetAccountsRequest: {
    encode(_: GetAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccountsRequest;
    fromJSON(_: any): GetAccountsRequest;
    toJSON(_: GetAccountsRequest): unknown;
    fromPartial(_: DeepPartial<GetAccountsRequest>): GetAccountsRequest;
};
export declare const GetAccountsResponse: {
    encode(message: GetAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccountsResponse;
    fromJSON(object: any): GetAccountsResponse;
    toJSON(message: GetAccountsResponse): unknown;
    fromPartial(object: DeepPartial<GetAccountsResponse>): GetAccountsResponse;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    fromPartial(object: DeepPartial<Account>): Account;
};
export declare const GetMarginAttributesRequest: {
    encode(message: GetMarginAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetMarginAttributesRequest;
    fromJSON(object: any): GetMarginAttributesRequest;
    toJSON(message: GetMarginAttributesRequest): unknown;
    fromPartial(object: DeepPartial<GetMarginAttributesRequest>): GetMarginAttributesRequest;
};
export declare const GetMarginAttributesResponse: {
    encode(message: GetMarginAttributesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetMarginAttributesResponse;
    fromJSON(object: any): GetMarginAttributesResponse;
    toJSON(message: GetMarginAttributesResponse): unknown;
    fromPartial(object: DeepPartial<GetMarginAttributesResponse>): GetMarginAttributesResponse;
};
export declare const GetUserTariffRequest: {
    encode(_: GetUserTariffRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserTariffRequest;
    fromJSON(_: any): GetUserTariffRequest;
    toJSON(_: GetUserTariffRequest): unknown;
    fromPartial(_: DeepPartial<GetUserTariffRequest>): GetUserTariffRequest;
};
export declare const GetUserTariffResponse: {
    encode(message: GetUserTariffResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserTariffResponse;
    fromJSON(object: any): GetUserTariffResponse;
    toJSON(message: GetUserTariffResponse): unknown;
    fromPartial(object: DeepPartial<GetUserTariffResponse>): GetUserTariffResponse;
};
export declare const UnaryLimit: {
    encode(message: UnaryLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnaryLimit;
    fromJSON(object: any): UnaryLimit;
    toJSON(message: UnaryLimit): unknown;
    fromPartial(object: DeepPartial<UnaryLimit>): UnaryLimit;
};
export declare const StreamLimit: {
    encode(message: StreamLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamLimit;
    fromJSON(object: any): StreamLimit;
    toJSON(message: StreamLimit): unknown;
    fromPartial(object: DeepPartial<StreamLimit>): StreamLimit;
};
export declare const GetInfoRequest: {
    encode(_: GetInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInfoRequest;
    fromJSON(_: any): GetInfoRequest;
    toJSON(_: GetInfoRequest): unknown;
    fromPartial(_: DeepPartial<GetInfoRequest>): GetInfoRequest;
};
export declare const GetInfoResponse: {
    encode(message: GetInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInfoResponse;
    fromJSON(object: any): GetInfoResponse;
    toJSON(message: GetInfoResponse): unknown;
    fromPartial(object: DeepPartial<GetInfoResponse>): GetInfoResponse;
};
export declare const UsersServiceDefinition: {
    readonly name: "UsersService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.UsersService";
    readonly methods: {
        readonly getAccounts: {
            readonly name: "GetAccounts";
            readonly requestType: {
                encode(_: GetAccountsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccountsRequest;
                fromJSON(_: any): GetAccountsRequest;
                toJSON(_: GetAccountsRequest): unknown;
                fromPartial(_: DeepPartial<GetAccountsRequest>): GetAccountsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAccountsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAccountsResponse;
                fromJSON(object: any): GetAccountsResponse;
                toJSON(message: GetAccountsResponse): unknown;
                fromPartial(object: DeepPartial<GetAccountsResponse>): GetAccountsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getMarginAttributes: {
            readonly name: "GetMarginAttributes";
            readonly requestType: {
                encode(message: GetMarginAttributesRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetMarginAttributesRequest;
                fromJSON(object: any): GetMarginAttributesRequest;
                toJSON(message: GetMarginAttributesRequest): unknown;
                fromPartial(object: DeepPartial<GetMarginAttributesRequest>): GetMarginAttributesRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetMarginAttributesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetMarginAttributesResponse;
                fromJSON(object: any): GetMarginAttributesResponse;
                toJSON(message: GetMarginAttributesResponse): unknown;
                fromPartial(object: DeepPartial<GetMarginAttributesResponse>): GetMarginAttributesResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserTariff: {
            readonly name: "GetUserTariff";
            readonly requestType: {
                encode(_: GetUserTariffRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserTariffRequest;
                fromJSON(_: any): GetUserTariffRequest;
                toJSON(_: GetUserTariffRequest): unknown;
                fromPartial(_: DeepPartial<GetUserTariffRequest>): GetUserTariffRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetUserTariffResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserTariffResponse;
                fromJSON(object: any): GetUserTariffResponse;
                toJSON(message: GetUserTariffResponse): unknown;
                fromPartial(object: DeepPartial<GetUserTariffResponse>): GetUserTariffResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getInfo: {
            readonly name: "GetInfo";
            readonly requestType: {
                encode(_: GetInfoRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInfoRequest;
                fromJSON(_: any): GetInfoRequest;
                toJSON(_: GetInfoRequest): unknown;
                fromPartial(_: DeepPartial<GetInfoRequest>): GetInfoRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetInfoResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInfoResponse;
                fromJSON(object: any): GetInfoResponse;
                toJSON(message: GetInfoResponse): unknown;
                fromPartial(object: DeepPartial<GetInfoResponse>): GetInfoResponse;
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
