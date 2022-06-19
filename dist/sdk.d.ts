import { TypeLoggerCb } from './middlewares/response';
export declare const createSdk: (token: string, appName?: string | undefined, loggerCb?: TypeLoggerCb | undefined) => {
    instruments: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "InstrumentsService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.InstrumentsService";
        readonly methods: {
            readonly tradingSchedules: {
                readonly name: "TradingSchedules";
                readonly requestType: {
                    encode(message: import("./generated/instruments").TradingSchedulesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").TradingSchedulesRequest;
                    fromJSON(object: any): import("./generated/instruments").TradingSchedulesRequest;
                    toJSON(message: import("./generated/instruments").TradingSchedulesRequest): unknown;
                    fromPartial(object: {
                        exchange?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                    }): import("./generated/instruments").TradingSchedulesRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").TradingSchedulesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").TradingSchedulesResponse;
                    fromJSON(object: any): import("./generated/instruments").TradingSchedulesResponse;
                    toJSON(message: import("./generated/instruments").TradingSchedulesResponse): unknown;
                    fromPartial(object: {
                        exchanges?: {
                            exchange?: string | undefined;
                            days?: {
                                date?: Date | undefined;
                                isTradingDay?: boolean | undefined;
                                startTime?: Date | undefined;
                                endTime?: Date | undefined;
                                openingAuctionStartTime?: Date | undefined;
                                closingAuctionEndTime?: Date | undefined;
                                eveningOpeningAuctionStartTime?: Date | undefined;
                                eveningStartTime?: Date | undefined;
                                eveningEndTime?: Date | undefined;
                                clearingStartTime?: Date | undefined;
                                clearingEndTime?: Date | undefined;
                                premarketStartTime?: Date | undefined;
                                premarketEndTime?: Date | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").TradingSchedulesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly bondBy: {
                readonly name: "BondBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentRequest;
                    toJSON(message: import("./generated/instruments").InstrumentRequest): unknown;
                    fromPartial(object: {
                        idType?: import("./generated/instruments").InstrumentIdType | undefined;
                        classCode?: string | undefined;
                        id?: string | undefined;
                    }): import("./generated/instruments").InstrumentRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").BondResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").BondResponse;
                    fromJSON(object: any): import("./generated/instruments").BondResponse;
                    toJSON(message: import("./generated/instruments").BondResponse): unknown;
                    fromPartial(object: {
                        instrument?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            couponQuantityPerYear?: number | undefined;
                            maturityDate?: Date | undefined;
                            nominal?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            stateRegDate?: Date | undefined;
                            placementDate?: Date | undefined;
                            placementPrice?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            aciValue?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            issueKind?: string | undefined;
                            issueSize?: number | undefined;
                            issueSizePlan?: number | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            floatingCouponFlag?: boolean | undefined;
                            perpetualFlag?: boolean | undefined;
                            amortizationFlag?: boolean | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        } | undefined;
                    }): import("./generated/instruments").BondResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly bonds: {
                readonly name: "Bonds";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments").InstrumentsRequest): unknown;
                    fromPartial(object: {
                        instrumentStatus?: import("./generated/instruments").InstrumentStatus | undefined;
                    }): import("./generated/instruments").InstrumentsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").BondsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").BondsResponse;
                    fromJSON(object: any): import("./generated/instruments").BondsResponse;
                    toJSON(message: import("./generated/instruments").BondsResponse): unknown;
                    fromPartial(object: {
                        instruments?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            couponQuantityPerYear?: number | undefined;
                            maturityDate?: Date | undefined;
                            nominal?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            stateRegDate?: Date | undefined;
                            placementDate?: Date | undefined;
                            placementPrice?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            aciValue?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            issueKind?: string | undefined;
                            issueSize?: number | undefined;
                            issueSizePlan?: number | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            floatingCouponFlag?: boolean | undefined;
                            perpetualFlag?: boolean | undefined;
                            amortizationFlag?: boolean | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").BondsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getBondCoupons: {
                readonly name: "GetBondCoupons";
                readonly requestType: {
                    encode(message: import("./generated/instruments").GetBondCouponsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetBondCouponsRequest;
                    fromJSON(object: any): import("./generated/instruments").GetBondCouponsRequest;
                    toJSON(message: import("./generated/instruments").GetBondCouponsRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                    }): import("./generated/instruments").GetBondCouponsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").GetBondCouponsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetBondCouponsResponse;
                    fromJSON(object: any): import("./generated/instruments").GetBondCouponsResponse;
                    toJSON(message: import("./generated/instruments").GetBondCouponsResponse): unknown;
                    fromPartial(object: {
                        events?: {
                            figi?: string | undefined;
                            couponDate?: Date | undefined;
                            couponNumber?: number | undefined;
                            fixDate?: Date | undefined;
                            payOneBond?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            couponType?: import("./generated/instruments").CouponType | undefined;
                            couponStartDate?: Date | undefined;
                            couponEndDate?: Date | undefined;
                            couponPeriod?: number | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").GetBondCouponsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly currencyBy: {
                readonly name: "CurrencyBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentRequest;
                    toJSON(message: import("./generated/instruments").InstrumentRequest): unknown;
                    fromPartial(object: {
                        idType?: import("./generated/instruments").InstrumentIdType | undefined;
                        classCode?: string | undefined;
                        id?: string | undefined;
                    }): import("./generated/instruments").InstrumentRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").CurrencyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").CurrencyResponse;
                    fromJSON(object: any): import("./generated/instruments").CurrencyResponse;
                    toJSON(message: import("./generated/instruments").CurrencyResponse): unknown;
                    fromPartial(object: {
                        instrument?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            nominal?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            isoCurrencyName?: string | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        } | undefined;
                    }): import("./generated/instruments").CurrencyResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly currencies: {
                readonly name: "Currencies";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments").InstrumentsRequest): unknown;
                    fromPartial(object: {
                        instrumentStatus?: import("./generated/instruments").InstrumentStatus | undefined;
                    }): import("./generated/instruments").InstrumentsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").CurrenciesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").CurrenciesResponse;
                    fromJSON(object: any): import("./generated/instruments").CurrenciesResponse;
                    toJSON(message: import("./generated/instruments").CurrenciesResponse): unknown;
                    fromPartial(object: {
                        instruments?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            nominal?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            isoCurrencyName?: string | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").CurrenciesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly etfBy: {
                readonly name: "EtfBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentRequest;
                    toJSON(message: import("./generated/instruments").InstrumentRequest): unknown;
                    fromPartial(object: {
                        idType?: import("./generated/instruments").InstrumentIdType | undefined;
                        classCode?: string | undefined;
                        id?: string | undefined;
                    }): import("./generated/instruments").InstrumentRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").EtfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").EtfResponse;
                    fromJSON(object: any): import("./generated/instruments").EtfResponse;
                    toJSON(message: import("./generated/instruments").EtfResponse): unknown;
                    fromPartial(object: {
                        instrument?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            fixedCommission?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            focusType?: string | undefined;
                            releasedDate?: Date | undefined;
                            numShares?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            rebalancingFreq?: string | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        } | undefined;
                    }): import("./generated/instruments").EtfResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly etfs: {
                readonly name: "Etfs";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments").InstrumentsRequest): unknown;
                    fromPartial(object: {
                        instrumentStatus?: import("./generated/instruments").InstrumentStatus | undefined;
                    }): import("./generated/instruments").InstrumentsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").EtfsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").EtfsResponse;
                    fromJSON(object: any): import("./generated/instruments").EtfsResponse;
                    toJSON(message: import("./generated/instruments").EtfsResponse): unknown;
                    fromPartial(object: {
                        instruments?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            fixedCommission?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            focusType?: string | undefined;
                            releasedDate?: Date | undefined;
                            numShares?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            rebalancingFreq?: string | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").EtfsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly futureBy: {
                readonly name: "FutureBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentRequest;
                    toJSON(message: import("./generated/instruments").InstrumentRequest): unknown;
                    fromPartial(object: {
                        idType?: import("./generated/instruments").InstrumentIdType | undefined;
                        classCode?: string | undefined;
                        id?: string | undefined;
                    }): import("./generated/instruments").InstrumentRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").FutureResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").FutureResponse;
                    fromJSON(object: any): import("./generated/instruments").FutureResponse;
                    toJSON(message: import("./generated/instruments").FutureResponse): unknown;
                    fromPartial(object: {
                        instrument?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            firstTradeDate?: Date | undefined;
                            lastTradeDate?: Date | undefined;
                            futuresType?: string | undefined;
                            assetType?: string | undefined;
                            basicAsset?: string | undefined;
                            basicAssetSize?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            expirationDate?: Date | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        } | undefined;
                    }): import("./generated/instruments").FutureResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly futures: {
                readonly name: "Futures";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments").InstrumentsRequest): unknown;
                    fromPartial(object: {
                        instrumentStatus?: import("./generated/instruments").InstrumentStatus | undefined;
                    }): import("./generated/instruments").InstrumentsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").FuturesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").FuturesResponse;
                    fromJSON(object: any): import("./generated/instruments").FuturesResponse;
                    toJSON(message: import("./generated/instruments").FuturesResponse): unknown;
                    fromPartial(object: {
                        instruments?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            firstTradeDate?: Date | undefined;
                            lastTradeDate?: Date | undefined;
                            futuresType?: string | undefined;
                            assetType?: string | undefined;
                            basicAsset?: string | undefined;
                            basicAssetSize?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            expirationDate?: Date | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").FuturesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly shareBy: {
                readonly name: "ShareBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentRequest;
                    toJSON(message: import("./generated/instruments").InstrumentRequest): unknown;
                    fromPartial(object: {
                        idType?: import("./generated/instruments").InstrumentIdType | undefined;
                        classCode?: string | undefined;
                        id?: string | undefined;
                    }): import("./generated/instruments").InstrumentRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").ShareResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").ShareResponse;
                    fromJSON(object: any): import("./generated/instruments").ShareResponse;
                    toJSON(message: import("./generated/instruments").ShareResponse): unknown;
                    fromPartial(object: {
                        instrument?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            ipoDate?: Date | undefined;
                            issueSize?: number | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            issueSizePlan?: number | undefined;
                            nominal?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            divYieldFlag?: boolean | undefined;
                            shareType?: import("./generated/instruments").ShareType | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        } | undefined;
                    }): import("./generated/instruments").ShareResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly shares: {
                readonly name: "Shares";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentsRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentsRequest;
                    toJSON(message: import("./generated/instruments").InstrumentsRequest): unknown;
                    fromPartial(object: {
                        instrumentStatus?: import("./generated/instruments").InstrumentStatus | undefined;
                    }): import("./generated/instruments").InstrumentsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").SharesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").SharesResponse;
                    fromJSON(object: any): import("./generated/instruments").SharesResponse;
                    toJSON(message: import("./generated/instruments").SharesResponse): unknown;
                    fromPartial(object: {
                        instruments?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            ipoDate?: Date | undefined;
                            issueSize?: number | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            sector?: string | undefined;
                            issueSizePlan?: number | undefined;
                            nominal?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            divYieldFlag?: boolean | undefined;
                            shareType?: import("./generated/instruments").ShareType | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").SharesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getAccruedInterests: {
                readonly name: "GetAccruedInterests";
                readonly requestType: {
                    encode(message: import("./generated/instruments").GetAccruedInterestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetAccruedInterestsRequest;
                    fromJSON(object: any): import("./generated/instruments").GetAccruedInterestsRequest;
                    toJSON(message: import("./generated/instruments").GetAccruedInterestsRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                    }): import("./generated/instruments").GetAccruedInterestsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").GetAccruedInterestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetAccruedInterestsResponse;
                    fromJSON(object: any): import("./generated/instruments").GetAccruedInterestsResponse;
                    toJSON(message: import("./generated/instruments").GetAccruedInterestsResponse): unknown;
                    fromPartial(object: {
                        accruedInterests?: {
                            date?: Date | undefined;
                            value?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            valuePercent?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            nominal?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").GetAccruedInterestsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getFuturesMargin: {
                readonly name: "GetFuturesMargin";
                readonly requestType: {
                    encode(message: import("./generated/instruments").GetFuturesMarginRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetFuturesMarginRequest;
                    fromJSON(object: any): import("./generated/instruments").GetFuturesMarginRequest;
                    toJSON(message: import("./generated/instruments").GetFuturesMarginRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                    }): import("./generated/instruments").GetFuturesMarginRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").GetFuturesMarginResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetFuturesMarginResponse;
                    fromJSON(object: any): import("./generated/instruments").GetFuturesMarginResponse;
                    toJSON(message: import("./generated/instruments").GetFuturesMarginResponse): unknown;
                    fromPartial(object: {
                        initialMarginOnBuy?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        initialMarginOnSell?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        minPriceIncrement?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        minPriceIncrementAmount?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }): import("./generated/instruments").GetFuturesMarginResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getInstrumentBy: {
                readonly name: "GetInstrumentBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments").InstrumentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentRequest;
                    fromJSON(object: any): import("./generated/instruments").InstrumentRequest;
                    toJSON(message: import("./generated/instruments").InstrumentRequest): unknown;
                    fromPartial(object: {
                        idType?: import("./generated/instruments").InstrumentIdType | undefined;
                        classCode?: string | undefined;
                        id?: string | undefined;
                    }): import("./generated/instruments").InstrumentRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").InstrumentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").InstrumentResponse;
                    fromJSON(object: any): import("./generated/instruments").InstrumentResponse;
                    toJSON(message: import("./generated/instruments").InstrumentResponse): unknown;
                    fromPartial(object: {
                        instrument?: {
                            figi?: string | undefined;
                            ticker?: string | undefined;
                            classCode?: string | undefined;
                            isin?: string | undefined;
                            lot?: number | undefined;
                            currency?: string | undefined;
                            klong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            kshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlong?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshort?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dlongMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            dshortMin?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            shortEnabledFlag?: boolean | undefined;
                            name?: string | undefined;
                            exchange?: string | undefined;
                            countryOfRisk?: string | undefined;
                            countryOfRiskName?: string | undefined;
                            instrumentType?: string | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            otcFlag?: boolean | undefined;
                            buyAvailableFlag?: boolean | undefined;
                            sellAvailableFlag?: boolean | undefined;
                            minPriceIncrement?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            apiTradeAvailableFlag?: boolean | undefined;
                            uid?: string | undefined;
                        } | undefined;
                    }): import("./generated/instruments").InstrumentResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getDividends: {
                readonly name: "GetDividends";
                readonly requestType: {
                    encode(message: import("./generated/instruments").GetDividendsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetDividendsRequest;
                    fromJSON(object: any): import("./generated/instruments").GetDividendsRequest;
                    toJSON(message: import("./generated/instruments").GetDividendsRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                    }): import("./generated/instruments").GetDividendsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").GetDividendsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").GetDividendsResponse;
                    fromJSON(object: any): import("./generated/instruments").GetDividendsResponse;
                    toJSON(message: import("./generated/instruments").GetDividendsResponse): unknown;
                    fromPartial(object: {
                        dividends?: {
                            dividendNet?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            paymentDate?: Date | undefined;
                            declaredDate?: Date | undefined;
                            lastBuyDate?: Date | undefined;
                            dividendType?: string | undefined;
                            recordDate?: Date | undefined;
                            regularity?: string | undefined;
                            closePrice?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            yieldValue?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            createdAt?: Date | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").GetDividendsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getAssetBy: {
                readonly name: "GetAssetBy";
                readonly requestType: {
                    encode(message: import("./generated/instruments").AssetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").AssetRequest;
                    fromJSON(object: any): import("./generated/instruments").AssetRequest;
                    toJSON(message: import("./generated/instruments").AssetRequest): unknown;
                    fromPartial(object: {
                        id?: string | undefined;
                    }): import("./generated/instruments").AssetRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").AssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").AssetResponse;
                    fromJSON(object: any): import("./generated/instruments").AssetResponse;
                    toJSON(message: import("./generated/instruments").AssetResponse): unknown;
                    fromPartial(object: {
                        asset?: {
                            uid?: string | undefined;
                            type?: import("./generated/instruments").AssetType | undefined;
                            name?: string | undefined;
                            nameBrief?: string | undefined;
                            description?: string | undefined;
                            deletedAt?: Date | undefined;
                            requiredTests?: string[] | undefined;
                            currency?: {
                                baseCurrency?: string | undefined;
                            } | undefined;
                            security?: {
                                isin?: string | undefined;
                                type?: string | undefined;
                                share?: {
                                    type?: import("./generated/instruments").ShareType | undefined;
                                    issueSize?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    nominal?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    nominalCurrency?: string | undefined;
                                    primaryIndex?: string | undefined;
                                    dividendRate?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    preferredShareType?: string | undefined;
                                    ipoDate?: Date | undefined;
                                    registryDate?: Date | undefined;
                                    divYieldFlag?: boolean | undefined;
                                    issueKind?: string | undefined;
                                    placementDate?: Date | undefined;
                                    represIsin?: string | undefined;
                                    issueSizePlan?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    totalFloat?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                } | undefined;
                                bond?: {
                                    currentNominal?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    borrowName?: string | undefined;
                                    issueSize?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    nominal?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    nominalCurrency?: string | undefined;
                                    issueKind?: string | undefined;
                                    interestKind?: string | undefined;
                                    couponQuantityPerYear?: number | undefined;
                                    indexedNominalFlag?: boolean | undefined;
                                    subordinatedFlag?: boolean | undefined;
                                    collateralFlag?: boolean | undefined;
                                    taxFreeFlag?: boolean | undefined;
                                    amortizationFlag?: boolean | undefined;
                                    floatingCouponFlag?: boolean | undefined;
                                    perpetualFlag?: boolean | undefined;
                                    maturityDate?: Date | undefined;
                                    returnCondition?: string | undefined;
                                    stateRegDate?: Date | undefined;
                                    placementDate?: Date | undefined;
                                    placementPrice?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    issueSizePlan?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                } | undefined;
                                sp?: {
                                    borrowName?: string | undefined;
                                    nominal?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    nominalCurrency?: string | undefined;
                                    type?: import("./generated/instruments").StructuredProductType | undefined;
                                    logicPortfolio?: string | undefined;
                                    assetType?: import("./generated/instruments").AssetType | undefined;
                                    basicAsset?: string | undefined;
                                    safetyBarrier?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    maturityDate?: Date | undefined;
                                    issueSizePlan?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    issueSize?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    placementDate?: Date | undefined;
                                    issueKind?: string | undefined;
                                } | undefined;
                                etf?: {
                                    totalExpense?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    hurdleRate?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    performanceFee?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    fixedCommission?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    paymentType?: string | undefined;
                                    watermarkFlag?: boolean | undefined;
                                    buyPremium?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    sellDiscount?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    rebalancingFlag?: boolean | undefined;
                                    rebalancingFreq?: string | undefined;
                                    managementType?: string | undefined;
                                    primaryIndex?: string | undefined;
                                    focusType?: string | undefined;
                                    leveragedFlag?: boolean | undefined;
                                    numShare?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    ucitsFlag?: boolean | undefined;
                                    releasedDate?: Date | undefined;
                                    description?: string | undefined;
                                    primaryIndexDescription?: string | undefined;
                                    primaryIndexCompany?: string | undefined;
                                    indexRecoveryPeriod?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    inavCode?: string | undefined;
                                    divYieldFlag?: boolean | undefined;
                                    expenseCommission?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    primaryIndexTrackingError?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    rebalancingPlan?: string | undefined;
                                    taxRate?: string | undefined;
                                    rebalancingDates?: Date[] | undefined;
                                    issueKind?: string | undefined;
                                    nominal?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    nominalCurrency?: string | undefined;
                                } | undefined;
                                clearingCertificate?: {
                                    nominal?: {
                                        units?: number | undefined;
                                        nano?: number | undefined;
                                    } | undefined;
                                    nominalCurrency?: string | undefined;
                                } | undefined;
                            } | undefined;
                            gosRegCode?: string | undefined;
                            cfi?: string | undefined;
                            codeNsd?: string | undefined;
                            status?: string | undefined;
                            brand?: {
                                uid?: string | undefined;
                                name?: string | undefined;
                                description?: string | undefined;
                                info?: string | undefined;
                                company?: string | undefined;
                                sector?: string | undefined;
                                countryOfRisk?: string | undefined;
                                countryOfRiskName?: string | undefined;
                            } | undefined;
                            updatedAt?: Date | undefined;
                            brCode?: string | undefined;
                            brCodeName?: string | undefined;
                            instruments?: {
                                uid?: string | undefined;
                                figi?: string | undefined;
                                instrumentType?: string | undefined;
                                ticker?: string | undefined;
                                classCode?: string | undefined;
                                links?: {
                                    type?: string | undefined;
                                    instrumentUid?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): import("./generated/instruments").AssetResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getAssets: {
                readonly name: "GetAssets";
                readonly requestType: {
                    encode(_: import("./generated/instruments").AssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").AssetsRequest;
                    fromJSON(_: any): import("./generated/instruments").AssetsRequest;
                    toJSON(_: import("./generated/instruments").AssetsRequest): unknown;
                    fromPartial(_: {}): import("./generated/instruments").AssetsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/instruments").AssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/instruments").AssetsResponse;
                    fromJSON(object: any): import("./generated/instruments").AssetsResponse;
                    toJSON(message: import("./generated/instruments").AssetsResponse): unknown;
                    fromPartial(object: {
                        assets?: {
                            uid?: string | undefined;
                            type?: import("./generated/instruments").AssetType | undefined;
                            name?: string | undefined;
                            instruments?: {
                                uid?: string | undefined;
                                figi?: string | undefined;
                                instrumentType?: string | undefined;
                                ticker?: string | undefined;
                                classCode?: string | undefined;
                                links?: {
                                    type?: string | undefined;
                                    instrumentUid?: string | undefined;
                                }[] | undefined;
                            }[] | undefined;
                        }[] | undefined;
                    }): import("./generated/instruments").AssetsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    marketData: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "MarketDataService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataService";
        readonly methods: {
            readonly getCandles: {
                readonly name: "GetCandles";
                readonly requestType: {
                    encode(message: import("./generated/marketdata").GetCandlesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetCandlesRequest;
                    fromJSON(object: any): import("./generated/marketdata").GetCandlesRequest;
                    toJSON(message: import("./generated/marketdata").GetCandlesRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                        interval?: import("./generated/marketdata").CandleInterval | undefined;
                    }): import("./generated/marketdata").GetCandlesRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata").GetCandlesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetCandlesResponse;
                    fromJSON(object: any): import("./generated/marketdata").GetCandlesResponse;
                    toJSON(message: import("./generated/marketdata").GetCandlesResponse): unknown;
                    fromPartial(object: {
                        candles?: {
                            open?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            high?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            low?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            close?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            volume?: number | undefined;
                            time?: Date | undefined;
                            isComplete?: boolean | undefined;
                        }[] | undefined;
                    }): import("./generated/marketdata").GetCandlesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getLastPrices: {
                readonly name: "GetLastPrices";
                readonly requestType: {
                    encode(message: import("./generated/marketdata").GetLastPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetLastPricesRequest;
                    fromJSON(object: any): import("./generated/marketdata").GetLastPricesRequest;
                    toJSON(message: import("./generated/marketdata").GetLastPricesRequest): unknown;
                    fromPartial(object: {
                        figi?: string[] | undefined;
                    }): import("./generated/marketdata").GetLastPricesRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata").GetLastPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetLastPricesResponse;
                    fromJSON(object: any): import("./generated/marketdata").GetLastPricesResponse;
                    toJSON(message: import("./generated/marketdata").GetLastPricesResponse): unknown;
                    fromPartial(object: {
                        lastPrices?: {
                            figi?: string | undefined;
                            price?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            time?: Date | undefined;
                        }[] | undefined;
                    }): import("./generated/marketdata").GetLastPricesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getOrderBook: {
                readonly name: "GetOrderBook";
                readonly requestType: {
                    encode(message: import("./generated/marketdata").GetOrderBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetOrderBookRequest;
                    fromJSON(object: any): import("./generated/marketdata").GetOrderBookRequest;
                    toJSON(message: import("./generated/marketdata").GetOrderBookRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        depth?: number | undefined;
                    }): import("./generated/marketdata").GetOrderBookRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata").GetOrderBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetOrderBookResponse;
                    fromJSON(object: any): import("./generated/marketdata").GetOrderBookResponse;
                    toJSON(message: import("./generated/marketdata").GetOrderBookResponse): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        depth?: number | undefined;
                        bids?: {
                            price?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            quantity?: number | undefined;
                        }[] | undefined;
                        asks?: {
                            price?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            quantity?: number | undefined;
                        }[] | undefined;
                        lastPrice?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        closePrice?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        limitUp?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        limitDown?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }): import("./generated/marketdata").GetOrderBookResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getTradingStatus: {
                readonly name: "GetTradingStatus";
                readonly requestType: {
                    encode(message: import("./generated/marketdata").GetTradingStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetTradingStatusRequest;
                    fromJSON(object: any): import("./generated/marketdata").GetTradingStatusRequest;
                    toJSON(message: import("./generated/marketdata").GetTradingStatusRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                    }): import("./generated/marketdata").GetTradingStatusRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata").GetTradingStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetTradingStatusResponse;
                    fromJSON(object: any): import("./generated/marketdata").GetTradingStatusResponse;
                    toJSON(message: import("./generated/marketdata").GetTradingStatusResponse): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                        limitOrderAvailableFlag?: boolean | undefined;
                        marketOrderAvailableFlag?: boolean | undefined;
                    }): import("./generated/marketdata").GetTradingStatusResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getLastTrades: {
                readonly name: "GetLastTrades";
                readonly requestType: {
                    encode(message: import("./generated/marketdata").GetLastTradesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetLastTradesRequest;
                    fromJSON(object: any): import("./generated/marketdata").GetLastTradesRequest;
                    toJSON(message: import("./generated/marketdata").GetLastTradesRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                    }): import("./generated/marketdata").GetLastTradesRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/marketdata").GetLastTradesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").GetLastTradesResponse;
                    fromJSON(object: any): import("./generated/marketdata").GetLastTradesResponse;
                    toJSON(message: import("./generated/marketdata").GetLastTradesResponse): unknown;
                    fromPartial(object: {
                        trades?: {
                            figi?: string | undefined;
                            direction?: import("./generated/marketdata").TradeDirection | undefined;
                            price?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            quantity?: number | undefined;
                            time?: Date | undefined;
                        }[] | undefined;
                    }): import("./generated/marketdata").GetLastTradesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    marketDataStream: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "MarketDataStreamService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService";
        readonly methods: {
            readonly marketDataStream: {
                readonly name: "MarketDataStream";
                readonly requestType: {
                    encode(message: import("./generated/marketdata").MarketDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").MarketDataRequest;
                    fromJSON(object: any): import("./generated/marketdata").MarketDataRequest;
                    toJSON(message: import("./generated/marketdata").MarketDataRequest): unknown;
                    fromPartial(object: {
                        subscribeCandlesRequest?: {
                            subscriptionAction?: import("./generated/marketdata").SubscriptionAction | undefined;
                            instruments?: {
                                figi?: string | undefined;
                                interval?: import("./generated/marketdata").SubscriptionInterval | undefined;
                            }[] | undefined;
                        } | undefined;
                        subscribeOrderBookRequest?: {
                            subscriptionAction?: import("./generated/marketdata").SubscriptionAction | undefined;
                            instruments?: {
                                figi?: string | undefined;
                                depth?: number | undefined;
                            }[] | undefined;
                        } | undefined;
                        subscribeTradesRequest?: {
                            subscriptionAction?: import("./generated/marketdata").SubscriptionAction | undefined;
                            instruments?: {
                                figi?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        subscribeInfoRequest?: {
                            subscriptionAction?: import("./generated/marketdata").SubscriptionAction | undefined;
                            instruments?: {
                                figi?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        subscribeLastPriceRequest?: {
                            subscriptionAction?: import("./generated/marketdata").SubscriptionAction | undefined;
                            instruments?: {
                                figi?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }): import("./generated/marketdata").MarketDataRequest;
                };
                readonly requestStream: true;
                readonly responseType: {
                    encode(message: import("./generated/marketdata").MarketDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/marketdata").MarketDataResponse;
                    fromJSON(object: any): import("./generated/marketdata").MarketDataResponse;
                    toJSON(message: import("./generated/marketdata").MarketDataResponse): unknown;
                    fromPartial(object: {
                        subscribeCandlesResponse?: {
                            trackingId?: string | undefined;
                            candlesSubscriptions?: {
                                figi?: string | undefined;
                                interval?: import("./generated/marketdata").SubscriptionInterval | undefined;
                                subscriptionStatus?: import("./generated/marketdata").SubscriptionStatus | undefined;
                            }[] | undefined;
                        } | undefined;
                        subscribeOrderBookResponse?: {
                            trackingId?: string | undefined;
                            orderBookSubscriptions?: {
                                figi?: string | undefined;
                                depth?: number | undefined;
                                subscriptionStatus?: import("./generated/marketdata").SubscriptionStatus | undefined;
                            }[] | undefined;
                        } | undefined;
                        subscribeTradesResponse?: {
                            trackingId?: string | undefined;
                            tradeSubscriptions?: {
                                figi?: string | undefined;
                                subscriptionStatus?: import("./generated/marketdata").SubscriptionStatus | undefined;
                            }[] | undefined;
                        } | undefined;
                        subscribeInfoResponse?: {
                            trackingId?: string | undefined;
                            infoSubscriptions?: {
                                figi?: string | undefined;
                                subscriptionStatus?: import("./generated/marketdata").SubscriptionStatus | undefined;
                            }[] | undefined;
                        } | undefined;
                        candle?: {
                            figi?: string | undefined;
                            interval?: import("./generated/marketdata").SubscriptionInterval | undefined;
                            open?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            high?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            low?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            close?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            volume?: number | undefined;
                            time?: Date | undefined;
                            lastTradeTs?: Date | undefined;
                        } | undefined;
                        trade?: {
                            figi?: string | undefined;
                            direction?: import("./generated/marketdata").TradeDirection | undefined;
                            price?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            quantity?: number | undefined;
                            time?: Date | undefined;
                        } | undefined;
                        orderbook?: {
                            figi?: string | undefined;
                            depth?: number | undefined;
                            isConsistent?: boolean | undefined;
                            bids?: {
                                price?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                quantity?: number | undefined;
                            }[] | undefined;
                            asks?: {
                                price?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                quantity?: number | undefined;
                            }[] | undefined;
                            time?: Date | undefined;
                            limitUp?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            limitDown?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                        } | undefined;
                        tradingStatus?: {
                            figi?: string | undefined;
                            tradingStatus?: import("./generated/common").SecurityTradingStatus | undefined;
                            time?: Date | undefined;
                            limitOrderAvailableFlag?: boolean | undefined;
                            marketOrderAvailableFlag?: boolean | undefined;
                        } | undefined;
                        ping?: {
                            time?: Date | undefined;
                        } | undefined;
                        subscribeLastPriceResponse?: {
                            trackingId?: string | undefined;
                            lastPriceSubscriptions?: {
                                figi?: string | undefined;
                                subscriptionStatus?: import("./generated/marketdata").SubscriptionStatus | undefined;
                            }[] | undefined;
                        } | undefined;
                        lastPrice?: {
                            figi?: string | undefined;
                            price?: {
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            time?: Date | undefined;
                        } | undefined;
                    }): import("./generated/marketdata").MarketDataResponse;
                };
                readonly responseStream: true;
                readonly options: {};
            };
        };
    }>, {}>;
    operations: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "OperationsService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.OperationsService";
        readonly methods: {
            readonly getOperations: {
                readonly name: "GetOperations";
                readonly requestType: {
                    encode(message: import("./generated/operations").OperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").OperationsRequest;
                    fromJSON(object: any): import("./generated/operations").OperationsRequest;
                    toJSON(message: import("./generated/operations").OperationsRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                        state?: import("./generated/operations").OperationState | undefined;
                        figi?: string | undefined;
                    }): import("./generated/operations").OperationsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").OperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").OperationsResponse;
                    fromJSON(object: any): import("./generated/operations").OperationsResponse;
                    toJSON(message: import("./generated/operations").OperationsResponse): unknown;
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
                            state?: import("./generated/operations").OperationState | undefined;
                            quantity?: number | undefined;
                            quantityRest?: number | undefined;
                            figi?: string | undefined;
                            instrumentType?: string | undefined;
                            date?: Date | undefined;
                            type?: string | undefined;
                            operationType?: import("./generated/operations").OperationType | undefined;
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
                    }): import("./generated/operations").OperationsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getPortfolio: {
                readonly name: "GetPortfolio";
                readonly requestType: {
                    encode(message: import("./generated/operations").PortfolioRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PortfolioRequest;
                    fromJSON(object: any): import("./generated/operations").PortfolioRequest;
                    toJSON(message: import("./generated/operations").PortfolioRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/operations").PortfolioRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").PortfolioResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PortfolioResponse;
                    fromJSON(object: any): import("./generated/operations").PortfolioResponse;
                    toJSON(message: import("./generated/operations").PortfolioResponse): unknown;
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
                    }): import("./generated/operations").PortfolioResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getPositions: {
                readonly name: "GetPositions";
                readonly requestType: {
                    encode(message: import("./generated/operations").PositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PositionsRequest;
                    fromJSON(object: any): import("./generated/operations").PositionsRequest;
                    toJSON(message: import("./generated/operations").PositionsRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/operations").PositionsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").PositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PositionsResponse;
                    fromJSON(object: any): import("./generated/operations").PositionsResponse;
                    toJSON(message: import("./generated/operations").PositionsResponse): unknown;
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
                    }): import("./generated/operations").PositionsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getWithdrawLimits: {
                readonly name: "GetWithdrawLimits";
                readonly requestType: {
                    encode(message: import("./generated/operations").WithdrawLimitsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").WithdrawLimitsRequest;
                    fromJSON(object: any): import("./generated/operations").WithdrawLimitsRequest;
                    toJSON(message: import("./generated/operations").WithdrawLimitsRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/operations").WithdrawLimitsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").WithdrawLimitsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").WithdrawLimitsResponse;
                    fromJSON(object: any): import("./generated/operations").WithdrawLimitsResponse;
                    toJSON(message: import("./generated/operations").WithdrawLimitsResponse): unknown;
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
                        blockedGuarantee?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        }[] | undefined;
                    }): import("./generated/operations").WithdrawLimitsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getBrokerReport: {
                readonly name: "GetBrokerReport";
                readonly requestType: {
                    encode(message: import("./generated/operations").BrokerReportRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").BrokerReportRequest;
                    fromJSON(object: any): import("./generated/operations").BrokerReportRequest;
                    toJSON(message: import("./generated/operations").BrokerReportRequest): unknown;
                    fromPartial(object: {
                        generateBrokerReportRequest?: {
                            accountId?: string | undefined;
                            from?: Date | undefined;
                            to?: Date | undefined;
                        } | undefined;
                        getBrokerReportRequest?: {
                            taskId?: string | undefined;
                            page?: number | undefined;
                        } | undefined;
                    }): import("./generated/operations").BrokerReportRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").BrokerReportResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").BrokerReportResponse;
                    fromJSON(object: any): import("./generated/operations").BrokerReportResponse;
                    toJSON(message: import("./generated/operations").BrokerReportResponse): unknown;
                    fromPartial(object: {
                        generateBrokerReportResponse?: {
                            taskId?: string | undefined;
                        } | undefined;
                        getBrokerReportResponse?: {
                            brokerReport?: {
                                tradeId?: string | undefined;
                                orderId?: string | undefined;
                                figi?: string | undefined;
                                executeSign?: string | undefined;
                                tradeDatetime?: Date | undefined;
                                exchange?: string | undefined;
                                classCode?: string | undefined;
                                direction?: string | undefined;
                                name?: string | undefined;
                                ticker?: string | undefined;
                                price?: {
                                    currency?: string | undefined;
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                quantity?: number | undefined;
                                orderAmount?: {
                                    currency?: string | undefined;
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                aciValue?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                totalOrderAmount?: {
                                    currency?: string | undefined;
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                brokerCommission?: {
                                    currency?: string | undefined;
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                exchangeCommission?: {
                                    currency?: string | undefined;
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                exchangeClearingCommission?: {
                                    currency?: string | undefined;
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                repoRate?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                party?: string | undefined;
                                clearValueDate?: Date | undefined;
                                secValueDate?: Date | undefined;
                                brokerStatus?: string | undefined;
                                separateAgreementType?: string | undefined;
                                separateAgreementNumber?: string | undefined;
                                separateAgreementDate?: string | undefined;
                                deliveryType?: string | undefined;
                            }[] | undefined;
                            itemsCount?: number | undefined;
                            pagesCount?: number | undefined;
                            page?: number | undefined;
                        } | undefined;
                    }): import("./generated/operations").BrokerReportResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getDividendsForeignIssuer: {
                readonly name: "GetDividendsForeignIssuer";
                readonly requestType: {
                    encode(message: import("./generated/operations").GetDividendsForeignIssuerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").GetDividendsForeignIssuerRequest;
                    fromJSON(object: any): import("./generated/operations").GetDividendsForeignIssuerRequest;
                    toJSON(message: import("./generated/operations").GetDividendsForeignIssuerRequest): unknown;
                    fromPartial(object: {
                        generateDivForeignIssuerReport?: {
                            accountId?: string | undefined;
                            from?: Date | undefined;
                            to?: Date | undefined;
                        } | undefined;
                        getDivForeignIssuerReport?: {
                            taskId?: string | undefined;
                            page?: number | undefined;
                        } | undefined;
                    }): import("./generated/operations").GetDividendsForeignIssuerRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").GetDividendsForeignIssuerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").GetDividendsForeignIssuerResponse;
                    fromJSON(object: any): import("./generated/operations").GetDividendsForeignIssuerResponse;
                    toJSON(message: import("./generated/operations").GetDividendsForeignIssuerResponse): unknown;
                    fromPartial(object: {
                        generateDivForeignIssuerReportResponse?: {
                            taskId?: string | undefined;
                        } | undefined;
                        divForeignIssuerReport?: {
                            dividendsForeignIssuerReport?: {
                                recordDate?: Date | undefined;
                                paymentDate?: Date | undefined;
                                securityName?: string | undefined;
                                isin?: string | undefined;
                                issuerCountry?: string | undefined;
                                quantity?: number | undefined;
                                dividend?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                externalCommission?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                dividendGross?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                tax?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                dividendAmount?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                currency?: string | undefined;
                            }[] | undefined;
                            itemsCount?: number | undefined;
                            pagesCount?: number | undefined;
                            page?: number | undefined;
                        } | undefined;
                    }): import("./generated/operations").GetDividendsForeignIssuerResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    orders: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "OrdersService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersService";
        readonly methods: {
            readonly postOrder: {
                readonly name: "PostOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders").PostOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").PostOrderRequest;
                    fromJSON(object: any): import("./generated/orders").PostOrderRequest;
                    toJSON(message: import("./generated/orders").PostOrderRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        quantity?: number | undefined;
                        price?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        direction?: import("./generated/orders").OrderDirection | undefined;
                        accountId?: string | undefined;
                        orderType?: import("./generated/orders").OrderType | undefined;
                        orderId?: string | undefined;
                    }): import("./generated/orders").PostOrderRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").PostOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").PostOrderResponse;
                    fromJSON(object: any): import("./generated/orders").PostOrderResponse;
                    toJSON(message: import("./generated/orders").PostOrderResponse): unknown;
                    fromPartial(object: {
                        orderId?: string | undefined;
                        executionReportStatus?: import("./generated/orders").OrderExecutionReportStatus | undefined;
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
                        direction?: import("./generated/orders").OrderDirection | undefined;
                        initialSecurityPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        orderType?: import("./generated/orders").OrderType | undefined;
                        message?: string | undefined;
                        initialOrderPricePt?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }): import("./generated/orders").PostOrderResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly cancelOrder: {
                readonly name: "CancelOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders").CancelOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").CancelOrderRequest;
                    fromJSON(object: any): import("./generated/orders").CancelOrderRequest;
                    toJSON(message: import("./generated/orders").CancelOrderRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        orderId?: string | undefined;
                    }): import("./generated/orders").CancelOrderRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").CancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").CancelOrderResponse;
                    fromJSON(object: any): import("./generated/orders").CancelOrderResponse;
                    toJSON(message: import("./generated/orders").CancelOrderResponse): unknown;
                    fromPartial(object: {
                        time?: Date | undefined;
                    }): import("./generated/orders").CancelOrderResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getOrderState: {
                readonly name: "GetOrderState";
                readonly requestType: {
                    encode(message: import("./generated/orders").GetOrderStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").GetOrderStateRequest;
                    fromJSON(object: any): import("./generated/orders").GetOrderStateRequest;
                    toJSON(message: import("./generated/orders").GetOrderStateRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        orderId?: string | undefined;
                    }): import("./generated/orders").GetOrderStateRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").OrderState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").OrderState;
                    fromJSON(object: any): import("./generated/orders").OrderState;
                    toJSON(message: import("./generated/orders").OrderState): unknown;
                    fromPartial(object: {
                        orderId?: string | undefined;
                        executionReportStatus?: import("./generated/orders").OrderExecutionReportStatus | undefined;
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
                        direction?: import("./generated/orders").OrderDirection | undefined;
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
                        orderType?: import("./generated/orders").OrderType | undefined;
                        orderDate?: Date | undefined;
                    }): import("./generated/orders").OrderState;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getOrders: {
                readonly name: "GetOrders";
                readonly requestType: {
                    encode(message: import("./generated/orders").GetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").GetOrdersRequest;
                    fromJSON(object: any): import("./generated/orders").GetOrdersRequest;
                    toJSON(message: import("./generated/orders").GetOrdersRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/orders").GetOrdersRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").GetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").GetOrdersResponse;
                    fromJSON(object: any): import("./generated/orders").GetOrdersResponse;
                    toJSON(message: import("./generated/orders").GetOrdersResponse): unknown;
                    fromPartial(object: {
                        orders?: {
                            orderId?: string | undefined;
                            executionReportStatus?: import("./generated/orders").OrderExecutionReportStatus | undefined;
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
                            direction?: import("./generated/orders").OrderDirection | undefined;
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
                            orderType?: import("./generated/orders").OrderType | undefined;
                            orderDate?: Date | undefined;
                        }[] | undefined;
                    }): import("./generated/orders").GetOrdersResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    ordersStream: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "OrdersStreamService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.OrdersStreamService";
        readonly methods: {
            readonly tradesStream: {
                readonly name: "TradesStream";
                readonly requestType: {
                    encode(_: import("./generated/orders").TradesStreamRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").TradesStreamRequest;
                    fromJSON(_: any): import("./generated/orders").TradesStreamRequest;
                    toJSON(_: import("./generated/orders").TradesStreamRequest): unknown;
                    fromPartial(_: {}): import("./generated/orders").TradesStreamRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").TradesStreamResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").TradesStreamResponse;
                    fromJSON(object: any): import("./generated/orders").TradesStreamResponse;
                    toJSON(message: import("./generated/orders").TradesStreamResponse): unknown;
                    fromPartial(object: {
                        orderTrades?: {
                            orderId?: string | undefined;
                            createdAt?: Date | undefined;
                            direction?: import("./generated/orders").OrderDirection | undefined;
                            figi?: string | undefined;
                            trades?: {
                                dateTime?: Date | undefined;
                                price?: {
                                    units?: number | undefined;
                                    nano?: number | undefined;
                                } | undefined;
                                quantity?: number | undefined;
                            }[] | undefined;
                            accountId?: string | undefined;
                        } | undefined;
                        ping?: {
                            time?: Date | undefined;
                        } | undefined;
                    }): import("./generated/orders").TradesStreamResponse;
                };
                readonly responseStream: true;
                readonly options: {};
            };
        };
    }>, {}>;
    sandbox: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "SandboxService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.SandboxService";
        readonly methods: {
            readonly openSandboxAccount: {
                readonly name: "OpenSandboxAccount";
                readonly requestType: {
                    encode(_: import("./generated/sandbox").OpenSandboxAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox").OpenSandboxAccountRequest;
                    fromJSON(_: any): import("./generated/sandbox").OpenSandboxAccountRequest;
                    toJSON(_: import("./generated/sandbox").OpenSandboxAccountRequest): unknown;
                    fromPartial(_: {}): import("./generated/sandbox").OpenSandboxAccountRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/sandbox").OpenSandboxAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox").OpenSandboxAccountResponse;
                    fromJSON(object: any): import("./generated/sandbox").OpenSandboxAccountResponse;
                    toJSON(message: import("./generated/sandbox").OpenSandboxAccountResponse): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/sandbox").OpenSandboxAccountResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxAccounts: {
                readonly name: "GetSandboxAccounts";
                readonly requestType: {
                    encode(_: import("./generated/users").GetAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetAccountsRequest;
                    fromJSON(_: any): import("./generated/users").GetAccountsRequest;
                    toJSON(_: import("./generated/users").GetAccountsRequest): unknown;
                    fromPartial(_: {}): import("./generated/users").GetAccountsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users").GetAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetAccountsResponse;
                    fromJSON(object: any): import("./generated/users").GetAccountsResponse;
                    toJSON(message: import("./generated/users").GetAccountsResponse): unknown;
                    fromPartial(object: {
                        accounts?: {
                            id?: string | undefined;
                            type?: import("./generated/users").AccountType | undefined;
                            name?: string | undefined;
                            status?: import("./generated/users").AccountStatus | undefined;
                            openedDate?: Date | undefined;
                            closedDate?: Date | undefined;
                            accessLevel?: import("./generated/users").AccessLevel | undefined;
                        }[] | undefined;
                    }): import("./generated/users").GetAccountsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly closeSandboxAccount: {
                readonly name: "CloseSandboxAccount";
                readonly requestType: {
                    encode(message: import("./generated/sandbox").CloseSandboxAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox").CloseSandboxAccountRequest;
                    fromJSON(object: any): import("./generated/sandbox").CloseSandboxAccountRequest;
                    toJSON(message: import("./generated/sandbox").CloseSandboxAccountRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/sandbox").CloseSandboxAccountRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(_: import("./generated/sandbox").CloseSandboxAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox").CloseSandboxAccountResponse;
                    fromJSON(_: any): import("./generated/sandbox").CloseSandboxAccountResponse;
                    toJSON(_: import("./generated/sandbox").CloseSandboxAccountResponse): unknown;
                    fromPartial(_: {}): import("./generated/sandbox").CloseSandboxAccountResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly postSandboxOrder: {
                readonly name: "PostSandboxOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders").PostOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").PostOrderRequest;
                    fromJSON(object: any): import("./generated/orders").PostOrderRequest;
                    toJSON(message: import("./generated/orders").PostOrderRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        quantity?: number | undefined;
                        price?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        direction?: import("./generated/orders").OrderDirection | undefined;
                        accountId?: string | undefined;
                        orderType?: import("./generated/orders").OrderType | undefined;
                        orderId?: string | undefined;
                    }): import("./generated/orders").PostOrderRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").PostOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").PostOrderResponse;
                    fromJSON(object: any): import("./generated/orders").PostOrderResponse;
                    toJSON(message: import("./generated/orders").PostOrderResponse): unknown;
                    fromPartial(object: {
                        orderId?: string | undefined;
                        executionReportStatus?: import("./generated/orders").OrderExecutionReportStatus | undefined;
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
                        direction?: import("./generated/orders").OrderDirection | undefined;
                        initialSecurityPrice?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        orderType?: import("./generated/orders").OrderType | undefined;
                        message?: string | undefined;
                        initialOrderPricePt?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }): import("./generated/orders").PostOrderResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxOrders: {
                readonly name: "GetSandboxOrders";
                readonly requestType: {
                    encode(message: import("./generated/orders").GetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").GetOrdersRequest;
                    fromJSON(object: any): import("./generated/orders").GetOrdersRequest;
                    toJSON(message: import("./generated/orders").GetOrdersRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/orders").GetOrdersRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").GetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").GetOrdersResponse;
                    fromJSON(object: any): import("./generated/orders").GetOrdersResponse;
                    toJSON(message: import("./generated/orders").GetOrdersResponse): unknown;
                    fromPartial(object: {
                        orders?: {
                            orderId?: string | undefined;
                            executionReportStatus?: import("./generated/orders").OrderExecutionReportStatus | undefined;
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
                            direction?: import("./generated/orders").OrderDirection | undefined;
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
                            orderType?: import("./generated/orders").OrderType | undefined;
                            orderDate?: Date | undefined;
                        }[] | undefined;
                    }): import("./generated/orders").GetOrdersResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly cancelSandboxOrder: {
                readonly name: "CancelSandboxOrder";
                readonly requestType: {
                    encode(message: import("./generated/orders").CancelOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").CancelOrderRequest;
                    fromJSON(object: any): import("./generated/orders").CancelOrderRequest;
                    toJSON(message: import("./generated/orders").CancelOrderRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        orderId?: string | undefined;
                    }): import("./generated/orders").CancelOrderRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").CancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").CancelOrderResponse;
                    fromJSON(object: any): import("./generated/orders").CancelOrderResponse;
                    toJSON(message: import("./generated/orders").CancelOrderResponse): unknown;
                    fromPartial(object: {
                        time?: Date | undefined;
                    }): import("./generated/orders").CancelOrderResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxOrderState: {
                readonly name: "GetSandboxOrderState";
                readonly requestType: {
                    encode(message: import("./generated/orders").GetOrderStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").GetOrderStateRequest;
                    fromJSON(object: any): import("./generated/orders").GetOrderStateRequest;
                    toJSON(message: import("./generated/orders").GetOrderStateRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        orderId?: string | undefined;
                    }): import("./generated/orders").GetOrderStateRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/orders").OrderState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/orders").OrderState;
                    fromJSON(object: any): import("./generated/orders").OrderState;
                    toJSON(message: import("./generated/orders").OrderState): unknown;
                    fromPartial(object: {
                        orderId?: string | undefined;
                        executionReportStatus?: import("./generated/orders").OrderExecutionReportStatus | undefined;
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
                        direction?: import("./generated/orders").OrderDirection | undefined;
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
                        orderType?: import("./generated/orders").OrderType | undefined;
                        orderDate?: Date | undefined;
                    }): import("./generated/orders").OrderState;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxPositions: {
                readonly name: "GetSandboxPositions";
                readonly requestType: {
                    encode(message: import("./generated/operations").PositionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PositionsRequest;
                    fromJSON(object: any): import("./generated/operations").PositionsRequest;
                    toJSON(message: import("./generated/operations").PositionsRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/operations").PositionsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").PositionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PositionsResponse;
                    fromJSON(object: any): import("./generated/operations").PositionsResponse;
                    toJSON(message: import("./generated/operations").PositionsResponse): unknown;
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
                    }): import("./generated/operations").PositionsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxOperations: {
                readonly name: "GetSandboxOperations";
                readonly requestType: {
                    encode(message: import("./generated/operations").OperationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").OperationsRequest;
                    fromJSON(object: any): import("./generated/operations").OperationsRequest;
                    toJSON(message: import("./generated/operations").OperationsRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        from?: Date | undefined;
                        to?: Date | undefined;
                        state?: import("./generated/operations").OperationState | undefined;
                        figi?: string | undefined;
                    }): import("./generated/operations").OperationsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").OperationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").OperationsResponse;
                    fromJSON(object: any): import("./generated/operations").OperationsResponse;
                    toJSON(message: import("./generated/operations").OperationsResponse): unknown;
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
                            state?: import("./generated/operations").OperationState | undefined;
                            quantity?: number | undefined;
                            quantityRest?: number | undefined;
                            figi?: string | undefined;
                            instrumentType?: string | undefined;
                            date?: Date | undefined;
                            type?: string | undefined;
                            operationType?: import("./generated/operations").OperationType | undefined;
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
                    }): import("./generated/operations").OperationsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getSandboxPortfolio: {
                readonly name: "GetSandboxPortfolio";
                readonly requestType: {
                    encode(message: import("./generated/operations").PortfolioRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PortfolioRequest;
                    fromJSON(object: any): import("./generated/operations").PortfolioRequest;
                    toJSON(message: import("./generated/operations").PortfolioRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/operations").PortfolioRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/operations").PortfolioResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/operations").PortfolioResponse;
                    fromJSON(object: any): import("./generated/operations").PortfolioResponse;
                    toJSON(message: import("./generated/operations").PortfolioResponse): unknown;
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
                    }): import("./generated/operations").PortfolioResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly sandboxPayIn: {
                readonly name: "SandboxPayIn";
                readonly requestType: {
                    encode(message: import("./generated/sandbox").SandboxPayInRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox").SandboxPayInRequest;
                    fromJSON(object: any): import("./generated/sandbox").SandboxPayInRequest;
                    toJSON(message: import("./generated/sandbox").SandboxPayInRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        amount?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }): import("./generated/sandbox").SandboxPayInRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/sandbox").SandboxPayInResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/sandbox").SandboxPayInResponse;
                    fromJSON(object: any): import("./generated/sandbox").SandboxPayInResponse;
                    toJSON(message: import("./generated/sandbox").SandboxPayInResponse): unknown;
                    fromPartial(object: {
                        balance?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }): import("./generated/sandbox").SandboxPayInResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    stopOrders: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "StopOrdersService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.StopOrdersService";
        readonly methods: {
            readonly postStopOrder: {
                readonly name: "PostStopOrder";
                readonly requestType: {
                    encode(message: import("./generated/stoporders").PostStopOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders").PostStopOrderRequest;
                    fromJSON(object: any): import("./generated/stoporders").PostStopOrderRequest;
                    toJSON(message: import("./generated/stoporders").PostStopOrderRequest): unknown;
                    fromPartial(object: {
                        figi?: string | undefined;
                        quantity?: number | undefined;
                        price?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        stopPrice?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        direction?: import("./generated/stoporders").StopOrderDirection | undefined;
                        accountId?: string | undefined;
                        expirationType?: import("./generated/stoporders").StopOrderExpirationType | undefined;
                        stopOrderType?: import("./generated/stoporders").StopOrderType | undefined;
                        expireDate?: Date | undefined;
                    }): import("./generated/stoporders").PostStopOrderRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/stoporders").PostStopOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders").PostStopOrderResponse;
                    fromJSON(object: any): import("./generated/stoporders").PostStopOrderResponse;
                    toJSON(message: import("./generated/stoporders").PostStopOrderResponse): unknown;
                    fromPartial(object: {
                        stopOrderId?: string | undefined;
                    }): import("./generated/stoporders").PostStopOrderResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getStopOrders: {
                readonly name: "GetStopOrders";
                readonly requestType: {
                    encode(message: import("./generated/stoporders").GetStopOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders").GetStopOrdersRequest;
                    fromJSON(object: any): import("./generated/stoporders").GetStopOrdersRequest;
                    toJSON(message: import("./generated/stoporders").GetStopOrdersRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/stoporders").GetStopOrdersRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/stoporders").GetStopOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders").GetStopOrdersResponse;
                    fromJSON(object: any): import("./generated/stoporders").GetStopOrdersResponse;
                    toJSON(message: import("./generated/stoporders").GetStopOrdersResponse): unknown;
                    fromPartial(object: {
                        stopOrders?: {
                            stopOrderId?: string | undefined;
                            lotsRequested?: number | undefined;
                            figi?: string | undefined;
                            direction?: import("./generated/stoporders").StopOrderDirection | undefined;
                            currency?: string | undefined;
                            orderType?: import("./generated/stoporders").StopOrderType | undefined;
                            createDate?: Date | undefined;
                            activationDateTime?: Date | undefined;
                            expirationTime?: Date | undefined;
                            price?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                            stopPrice?: {
                                currency?: string | undefined;
                                units?: number | undefined;
                                nano?: number | undefined;
                            } | undefined;
                        }[] | undefined;
                    }): import("./generated/stoporders").GetStopOrdersResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly cancelStopOrder: {
                readonly name: "CancelStopOrder";
                readonly requestType: {
                    encode(message: import("./generated/stoporders").CancelStopOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders").CancelStopOrderRequest;
                    fromJSON(object: any): import("./generated/stoporders").CancelStopOrderRequest;
                    toJSON(message: import("./generated/stoporders").CancelStopOrderRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                        stopOrderId?: string | undefined;
                    }): import("./generated/stoporders").CancelStopOrderRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/stoporders").CancelStopOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/stoporders").CancelStopOrderResponse;
                    fromJSON(object: any): import("./generated/stoporders").CancelStopOrderResponse;
                    toJSON(message: import("./generated/stoporders").CancelStopOrderResponse): unknown;
                    fromPartial(object: {
                        time?: Date | undefined;
                    }): import("./generated/stoporders").CancelStopOrderResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
    users: import("nice-grpc").RawClient<import("nice-grpc/lib/service-definitions/ts-proto").FromTsProtoServiceDefinition<{
        readonly name: "UsersService";
        readonly fullName: "tinkoff.public.invest.api.contract.v1.UsersService";
        readonly methods: {
            readonly getAccounts: {
                readonly name: "GetAccounts";
                readonly requestType: {
                    encode(_: import("./generated/users").GetAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetAccountsRequest;
                    fromJSON(_: any): import("./generated/users").GetAccountsRequest;
                    toJSON(_: import("./generated/users").GetAccountsRequest): unknown;
                    fromPartial(_: {}): import("./generated/users").GetAccountsRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users").GetAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetAccountsResponse;
                    fromJSON(object: any): import("./generated/users").GetAccountsResponse;
                    toJSON(message: import("./generated/users").GetAccountsResponse): unknown;
                    fromPartial(object: {
                        accounts?: {
                            id?: string | undefined;
                            type?: import("./generated/users").AccountType | undefined;
                            name?: string | undefined;
                            status?: import("./generated/users").AccountStatus | undefined;
                            openedDate?: Date | undefined;
                            closedDate?: Date | undefined;
                            accessLevel?: import("./generated/users").AccessLevel | undefined;
                        }[] | undefined;
                    }): import("./generated/users").GetAccountsResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getMarginAttributes: {
                readonly name: "GetMarginAttributes";
                readonly requestType: {
                    encode(message: import("./generated/users").GetMarginAttributesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetMarginAttributesRequest;
                    fromJSON(object: any): import("./generated/users").GetMarginAttributesRequest;
                    toJSON(message: import("./generated/users").GetMarginAttributesRequest): unknown;
                    fromPartial(object: {
                        accountId?: string | undefined;
                    }): import("./generated/users").GetMarginAttributesRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users").GetMarginAttributesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetMarginAttributesResponse;
                    fromJSON(object: any): import("./generated/users").GetMarginAttributesResponse;
                    toJSON(message: import("./generated/users").GetMarginAttributesResponse): unknown;
                    fromPartial(object: {
                        liquidPortfolio?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        startingMargin?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        minimalMargin?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        fundsSufficiencyLevel?: {
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                        amountOfMissingFunds?: {
                            currency?: string | undefined;
                            units?: number | undefined;
                            nano?: number | undefined;
                        } | undefined;
                    }): import("./generated/users").GetMarginAttributesResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getUserTariff: {
                readonly name: "GetUserTariff";
                readonly requestType: {
                    encode(_: import("./generated/users").GetUserTariffRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetUserTariffRequest;
                    fromJSON(_: any): import("./generated/users").GetUserTariffRequest;
                    toJSON(_: import("./generated/users").GetUserTariffRequest): unknown;
                    fromPartial(_: {}): import("./generated/users").GetUserTariffRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users").GetUserTariffResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetUserTariffResponse;
                    fromJSON(object: any): import("./generated/users").GetUserTariffResponse;
                    toJSON(message: import("./generated/users").GetUserTariffResponse): unknown;
                    fromPartial(object: {
                        unaryLimits?: {
                            limitPerMinute?: number | undefined;
                            methods?: string[] | undefined;
                        }[] | undefined;
                        streamLimits?: {
                            limit?: number | undefined;
                            streams?: string[] | undefined;
                        }[] | undefined;
                    }): import("./generated/users").GetUserTariffResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
            readonly getInfo: {
                readonly name: "GetInfo";
                readonly requestType: {
                    encode(_: import("./generated/users").GetInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetInfoRequest;
                    fromJSON(_: any): import("./generated/users").GetInfoRequest;
                    toJSON(_: import("./generated/users").GetInfoRequest): unknown;
                    fromPartial(_: {}): import("./generated/users").GetInfoRequest;
                };
                readonly requestStream: false;
                readonly responseType: {
                    encode(message: import("./generated/users").GetInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): import("./generated/users").GetInfoResponse;
                    fromJSON(object: any): import("./generated/users").GetInfoResponse;
                    toJSON(message: import("./generated/users").GetInfoResponse): unknown;
                    fromPartial(object: {
                        premStatus?: boolean | undefined;
                        qualStatus?: boolean | undefined;
                        qualifiedForWorkWith?: string[] | undefined;
                        tariff?: string | undefined;
                    }): import("./generated/users").GetInfoResponse;
                };
                readonly responseStream: false;
                readonly options: {};
            };
        };
    }>, {}>;
};
