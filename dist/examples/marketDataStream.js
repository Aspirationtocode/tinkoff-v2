"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("../sdk");
const marketdata_1 = require("../generated/marketdata");
!(async function example() {
    const { marketDataStream } = (0, sdk_1.createSdk)('YOUR_TOKEN');
    let keepCalling = true;
    setTimeout(function () {
        keepCalling = false;
    }, 5000);
    const timer = (time) => new Promise(resolve => setTimeout(resolve, time));
    async function* createLastPriceRequest() {
        while (keepCalling) {
            await timer(1000);
            yield marketdata_1.MarketDataRequest.fromPartial({
                subscribeLastPriceRequest: {
                    subscriptionAction: marketdata_1.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                    instruments: [{ figi: 'BBG000N9MNX3' }],
                },
            });
        }
    }
    async function* createSubscriptionInfoRequest() {
        while (keepCalling) {
            await timer(1000);
            yield marketdata_1.MarketDataRequest.fromPartial({
                subscribeInfoRequest: {
                    subscriptionAction: marketdata_1.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                    instruments: [{ figi: 'BBG000N9MNX3' }],
                },
            });
        }
    }
    async function* createSubscriptionTradesRequest() {
        while (keepCalling) {
            await timer(1000);
            yield marketdata_1.MarketDataRequest.fromPartial({
                subscribeTradesRequest: {
                    subscriptionAction: marketdata_1.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                    instruments: [{ figi: 'BBG000N9MNX3' }],
                },
            });
        }
    }
    async function* createSubscriptionOrderBookRequest() {
        while (keepCalling) {
            await timer(1000);
            yield marketdata_1.MarketDataRequest.fromPartial({
                subscribeOrderBookRequest: {
                    subscriptionAction: marketdata_1.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                    instruments: [{ figi: 'BBG000N9MNX3', depth: 5 }],
                },
            });
        }
    }
    async function* createSubscriptionCandleRequest() {
        while (keepCalling) {
            await timer(1000);
            yield marketdata_1.MarketDataRequest.fromPartial({
                subscribeCandlesRequest: {
                    subscriptionAction: marketdata_1.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                    instruments: [{ figi: 'BBG000N9MNX3', interval: marketdata_1.SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }],
                },
            });
        }
    }
    const response = marketDataStream.marketDataStream(createLastPriceRequest());
    for await (const num of response) {
        console.log(num);
    }
})();
//# sourceMappingURL=marketDataStream.js.map