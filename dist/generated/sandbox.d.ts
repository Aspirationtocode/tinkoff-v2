import * as _m0 from 'protobufjs/minimal';
import { MoneyValue } from './common';
import { GetAccountsRequest, GetAccountsResponse } from './users';
import { PostOrderRequest, PostOrderResponse, GetOrdersRequest, GetOrdersResponse, CancelOrderRequest, CancelOrderResponse, GetOrderStateRequest, OrderState } from './orders';
import { PositionsRequest, PositionsResponse, OperationsRequest, OperationsResponse, PortfolioRequest, PortfolioResponse } from './operations';
export declare const protobufPackage = "tinkoff.public.invest.api.contract.v1";
export interface OpenSandboxAccountRequest {
}
export interface OpenSandboxAccountResponse {
    accountId: string;
}
export interface CloseSandboxAccountRequest {
    accountId: string;
}
export interface CloseSandboxAccountResponse {
}
export interface SandboxPayInRequest {
    accountId: string;
    amount: MoneyValue | undefined;
}
export interface SandboxPayInResponse {
    balance: MoneyValue | undefined;
}
export declare const OpenSandboxAccountRequest: {
    encode(_: OpenSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSandboxAccountRequest;
    fromJSON(_: any): OpenSandboxAccountRequest;
    toJSON(_: OpenSandboxAccountRequest): unknown;
    fromPartial(_: DeepPartial<OpenSandboxAccountRequest>): OpenSandboxAccountRequest;
};
export declare const OpenSandboxAccountResponse: {
    encode(message: OpenSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSandboxAccountResponse;
    fromJSON(object: any): OpenSandboxAccountResponse;
    toJSON(message: OpenSandboxAccountResponse): unknown;
    fromPartial(object: DeepPartial<OpenSandboxAccountResponse>): OpenSandboxAccountResponse;
};
export declare const CloseSandboxAccountRequest: {
    encode(message: CloseSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloseSandboxAccountRequest;
    fromJSON(object: any): CloseSandboxAccountRequest;
    toJSON(message: CloseSandboxAccountRequest): unknown;
    fromPartial(object: DeepPartial<CloseSandboxAccountRequest>): CloseSandboxAccountRequest;
};
export declare const CloseSandboxAccountResponse: {
    encode(_: CloseSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloseSandboxAccountResponse;
    fromJSON(_: any): CloseSandboxAccountResponse;
    toJSON(_: CloseSandboxAccountResponse): unknown;
    fromPartial(_: DeepPartial<CloseSandboxAccountResponse>): CloseSandboxAccountResponse;
};
export declare const SandboxPayInRequest: {
    encode(message: SandboxPayInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SandboxPayInRequest;
    fromJSON(object: any): SandboxPayInRequest;
    toJSON(message: SandboxPayInRequest): unknown;
    fromPartial(object: DeepPartial<SandboxPayInRequest>): SandboxPayInRequest;
};
export declare const SandboxPayInResponse: {
    encode(message: SandboxPayInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SandboxPayInResponse;
    fromJSON(object: any): SandboxPayInResponse;
    toJSON(message: SandboxPayInResponse): unknown;
    fromPartial(object: DeepPartial<SandboxPayInResponse>): SandboxPayInResponse;
};
export declare const SandboxServiceDefinition: {
    readonly name: "SandboxService";
    readonly fullName: "tinkoff.public.invest.api.contract.v1.SandboxService";
    readonly methods: {
        readonly openSandboxAccount: {
            readonly name: "OpenSandboxAccount";
            readonly requestType: {
                encode(_: OpenSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSandboxAccountRequest;
                fromJSON(_: any): OpenSandboxAccountRequest;
                toJSON(_: OpenSandboxAccountRequest): unknown;
                fromPartial(_: DeepPartial<OpenSandboxAccountRequest>): OpenSandboxAccountRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OpenSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSandboxAccountResponse;
                fromJSON(object: any): OpenSandboxAccountResponse;
                toJSON(message: OpenSandboxAccountResponse): unknown;
                fromPartial(object: DeepPartial<OpenSandboxAccountResponse>): OpenSandboxAccountResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getSandboxAccounts: {
            readonly name: "GetSandboxAccounts";
            readonly requestType: {
                encode(_: GetAccountsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetAccountsRequest;
                fromJSON(_: any): GetAccountsRequest;
                toJSON(_: GetAccountsRequest): unknown;
                fromPartial(_: {}): GetAccountsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetAccountsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetAccountsResponse;
                fromJSON(object: any): GetAccountsResponse;
                toJSON(message: GetAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        id?: string | undefined;
                        type?: import("./users").AccountType | undefined;
                        name?: string | undefined;
                        status?: import("./users").AccountStatus | undefined;
                        openedDate?: Date | undefined;
                        closedDate?: Date | undefined;
                        accessLevel?: import("./users").AccessLevel | undefined;
                    }[] | undefined;
                }): GetAccountsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly closeSandboxAccount: {
            readonly name: "CloseSandboxAccount";
            readonly requestType: {
                encode(message: CloseSandboxAccountRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloseSandboxAccountRequest;
                fromJSON(object: any): CloseSandboxAccountRequest;
                toJSON(message: CloseSandboxAccountRequest): unknown;
                fromPartial(object: DeepPartial<CloseSandboxAccountRequest>): CloseSandboxAccountRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(_: CloseSandboxAccountResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloseSandboxAccountResponse;
                fromJSON(_: any): CloseSandboxAccountResponse;
                toJSON(_: CloseSandboxAccountResponse): unknown;
                fromPartial(_: DeepPartial<CloseSandboxAccountResponse>): CloseSandboxAccountResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly postSandboxOrder: {
            readonly name: "PostSandboxOrder";
            readonly requestType: {
                encode(message: PostOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PostOrderRequest;
                fromJSON(object: any): PostOrderRequest;
                toJSON(message: PostOrderRequest): unknown;
                fromPartial(object: {
                    figi?: string | undefined;
                    quantity?: number | undefined;
                    price?: {
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    direction?: import("./orders").OrderDirection | undefined;
                    accountId?: string | undefined;
                    orderType?: import("./orders").OrderType | undefined;
                    orderId?: string | undefined;
                }): PostOrderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PostOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PostOrderResponse;
                fromJSON(object: any): PostOrderResponse;
                toJSON(message: PostOrderResponse): unknown;
                fromPartial(object: {
                    orderId?: string | undefined;
                    executionReportStatus?: import("./orders").OrderExecutionReportStatus | undefined;
                    lotsRequested?: number | undefined;
                    lotsExecuted?: number | undefined;
                    initialOrderPrice?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    executedOrderPrice?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    totalOrderAmount?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    initialCommission?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    executedCommission?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    aciValue?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    figi?: string | undefined;
                    direction?: import("./orders").OrderDirection | undefined;
                    initialSecurityPrice?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    orderType?: import("./orders").OrderType | undefined;
                    message?: string | undefined;
                    initialOrderPricePt?: {
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                }): PostOrderResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getSandboxOrders: {
            readonly name: "GetSandboxOrders";
            readonly requestType: {
                encode(message: GetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOrdersRequest;
                fromJSON(object: any): GetOrdersRequest;
                toJSON(message: GetOrdersRequest): unknown;
                fromPartial(object: {
                    accountId?: string | undefined;
                }): GetOrdersRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOrdersResponse;
                fromJSON(object: any): GetOrdersResponse;
                toJSON(message: GetOrdersResponse): unknown;
                fromPartial(object: {
                    orders?: {
                        orderId?: string | undefined;
                        executionReportStatus?: import("./orders").OrderExecutionReportStatus | undefined;
                        lotsRequested?: number | undefined;
                        lotsExecuted?: number | undefined;
                        initialOrderPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        executedOrderPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        totalOrderAmount?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        averagePositionPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        initialCommission?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        executedCommission?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        figi?: string | undefined;
                        direction?: import("./orders").OrderDirection | undefined;
                        initialSecurityPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        stages?: {
                            price?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            quantity?: number | undefined;
                            tradeId?: string | undefined;
                        }[] | undefined;
                        serviceCommission?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        currency?: string | undefined;
                        orderType?: import("./orders").OrderType | undefined;
                        orderDate?: Date | undefined;
                    }[] | undefined;
                }): GetOrdersResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly cancelSandboxOrder: {
            readonly name: "CancelSandboxOrder";
            readonly requestType: {
                encode(message: CancelOrderRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): CancelOrderRequest;
                fromJSON(object: any): CancelOrderRequest;
                toJSON(message: CancelOrderRequest): unknown;
                fromPartial(object: {
                    accountId?: string | undefined;
                    orderId?: string | undefined;
                }): CancelOrderRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: CancelOrderResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): CancelOrderResponse;
                fromJSON(object: any): CancelOrderResponse;
                toJSON(message: CancelOrderResponse): unknown;
                fromPartial(object: {
                    time?: Date | undefined;
                }): CancelOrderResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getSandboxOrderState: {
            readonly name: "GetSandboxOrderState";
            readonly requestType: {
                encode(message: GetOrderStateRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): GetOrderStateRequest;
                fromJSON(object: any): GetOrderStateRequest;
                toJSON(message: GetOrderStateRequest): unknown;
                fromPartial(object: {
                    accountId?: string | undefined;
                    orderId?: string | undefined;
                }): GetOrderStateRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OrderState, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): OrderState;
                fromJSON(object: any): OrderState;
                toJSON(message: OrderState): unknown;
                fromPartial(object: {
                    orderId?: string | undefined;
                    executionReportStatus?: import("./orders").OrderExecutionReportStatus | undefined;
                    lotsRequested?: number | undefined;
                    lotsExecuted?: number | undefined;
                    initialOrderPrice?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    executedOrderPrice?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    totalOrderAmount?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    averagePositionPrice?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    initialCommission?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    executedCommission?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    figi?: string | undefined;
                    direction?: import("./orders").OrderDirection | undefined;
                    initialSecurityPrice?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    stages?: {
                        price?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        quantity?: number | undefined;
                        tradeId?: string | undefined;
                    }[] | undefined;
                    serviceCommission?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    currency?: string | undefined;
                    orderType?: import("./orders").OrderType | undefined;
                    orderDate?: Date | undefined;
                }): OrderState;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getSandboxPositions: {
            readonly name: "GetSandboxPositions";
            readonly requestType: {
                encode(message: PositionsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PositionsRequest;
                fromJSON(object: any): PositionsRequest;
                toJSON(message: PositionsRequest): unknown;
                fromPartial(object: {
                    accountId?: string | undefined;
                }): PositionsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PositionsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PositionsResponse;
                fromJSON(object: any): PositionsResponse;
                toJSON(message: PositionsResponse): unknown;
                fromPartial(object: {
                    money?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    }[] | undefined;
                    blocked?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    }[] | undefined;
                    securities?: {
                        figi?: string | undefined;
                        blocked?: number | undefined;
                        balance?: number | undefined;
                    }[] | undefined;
                    limitsLoadingInProgress?: boolean | undefined;
                    futures?: {
                        figi?: string | undefined;
                        blocked?: number | undefined;
                        balance?: number | undefined;
                    }[] | undefined;
                }): PositionsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getSandboxOperations: {
            readonly name: "GetSandboxOperations";
            readonly requestType: {
                encode(message: OperationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): OperationsRequest;
                fromJSON(object: any): OperationsRequest;
                toJSON(message: OperationsRequest): unknown;
                fromPartial(object: {
                    accountId?: string | undefined;
                    from?: Date | undefined;
                    to?: Date | undefined;
                    state?: import("./operations").OperationState | undefined;
                    figi?: string | undefined;
                }): OperationsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: OperationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): OperationsResponse;
                fromJSON(object: any): OperationsResponse;
                toJSON(message: OperationsResponse): unknown;
                fromPartial(object: {
                    operations?: {
                        id?: string | undefined;
                        parentOperationId?: string | undefined;
                        currency?: string | undefined;
                        payment?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        price?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        state?: import("./operations").OperationState | undefined;
                        quantity?: number | undefined;
                        quantityRest?: number | undefined;
                        figi?: string | undefined;
                        instrumentType?: string | undefined;
                        date?: Date | undefined;
                        type?: string | undefined;
                        operationType?: import("./operations").OperationType | undefined;
                        trades?: {
                            tradeId?: string | undefined;
                            dateTime?: Date | undefined;
                            quantity?: number | undefined;
                            price?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                    }[] | undefined;
                }): OperationsResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getSandboxPortfolio: {
            readonly name: "GetSandboxPortfolio";
            readonly requestType: {
                encode(message: PortfolioRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PortfolioRequest;
                fromJSON(object: any): PortfolioRequest;
                toJSON(message: PortfolioRequest): unknown;
                fromPartial(object: {
                    accountId?: string | undefined;
                }): PortfolioRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PortfolioResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PortfolioResponse;
                fromJSON(object: any): PortfolioResponse;
                toJSON(message: PortfolioResponse): unknown;
                fromPartial(object: {
                    totalAmountShares?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    totalAmountBonds?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    totalAmountEtf?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    totalAmountCurrencies?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    totalAmountFutures?: {
                        currency?: string | undefined;
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    expectedYield?: {
                        units?: number | undefined;
                        nano?: number | undefined;
                    } | undefined;
                    positions?: {
                        figi?: string | undefined;
                        instrumentType?: string | undefined;
                        quantity?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        averagePositionPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        expectedYield?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        currentNkd?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        averagePositionPricePt?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        currentPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        averagePositionPriceFifo?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        quantityLots?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }[] | undefined;
                }): PortfolioResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sandboxPayIn: {
            readonly name: "SandboxPayIn";
            readonly requestType: {
                encode(message: SandboxPayInRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SandboxPayInRequest;
                fromJSON(object: any): SandboxPayInRequest;
                toJSON(message: SandboxPayInRequest): unknown;
                fromPartial(object: DeepPartial<SandboxPayInRequest>): SandboxPayInRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: SandboxPayInResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SandboxPayInResponse;
                fromJSON(object: any): SandboxPayInResponse;
                toJSON(message: SandboxPayInResponse): unknown;
                fromPartial(object: DeepPartial<SandboxPayInResponse>): SandboxPayInResponse;
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
