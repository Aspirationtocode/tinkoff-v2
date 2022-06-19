import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export declare enum SecurityTradingStatus {
    SECURITY_TRADING_STATUS_UNSPECIFIED = 0,
    SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1,
    SECURITY_TRADING_STATUS_OPENING_PERIOD = 2,
    SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3,
    SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4,
    SECURITY_TRADING_STATUS_NORMAL_TRADING = 5,
    SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6,
    SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7,
    SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8,
    SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9,
    SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10,
    SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11,
    SECURITY_TRADING_STATUS_SESSION_CLOSE = 12,
    SECURITY_TRADING_STATUS_SESSION_OPEN = 13,
    SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14,
    SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15,
    SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = 16,
    UNRECOGNIZED = -1
}
export declare function securityTradingStatusFromJSON(object: any): SecurityTradingStatus;
export declare function securityTradingStatusToJSON(object: SecurityTradingStatus): string;
export interface MoneyValue {
    currency: string;
    units: number;
    nano: number;
}
export interface Quotation {
    units: number;
    nano: number;
}
export interface Ping {
    time: Date | undefined;
}
export declare const MoneyValue: {
    encode(message: MoneyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoneyValue;
    fromJSON(object: any): MoneyValue;
    toJSON(message: MoneyValue): unknown;
    fromPartial(object: DeepPartial<MoneyValue>): MoneyValue;
};
export declare const Quotation: {
    encode(message: Quotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Quotation;
    fromJSON(object: any): Quotation;
    toJSON(message: Quotation): unknown;
    fromPartial(object: DeepPartial<Quotation>): Quotation;
};
export declare const Ping: {
    encode(message: Ping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Ping;
    fromJSON(object: any): Ping;
    toJSON(message: Ping): unknown;
    fromPartial(object: DeepPartial<Ping>): Ping;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
