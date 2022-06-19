import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "google.protobuf";
export interface Timestamp {
    seconds: number;
    nanos: number;
}
export declare const Timestamp: {
    encode(message: Timestamp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Timestamp;
    fromJSON(object: any): Timestamp;
    toJSON(message: Timestamp): unknown;
    fromPartial(object: DeepPartial<Timestamp>): Timestamp;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
