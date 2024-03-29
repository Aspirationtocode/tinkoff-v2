"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("../sdk");
const marketdata_1 = require("../generated/marketdata");
!(async function example() {
    const { marketData } = (0, sdk_1.createSdk)('YOUR_TOKEN');
    const candles = await marketData.getCandles({
        figi: 'BBG0047315Y7',
        from: new Date('2022-04-04T11:00:00Z'),
        to: new Date('2022-04-04T11:20:59Z'),
        interval: marketdata_1.CandleInterval.CANDLE_INTERVAL_5_MIN,
    });
    console.log('Запрос исторических свечей по инструменту: ', candles);
    const lastPrice = await marketData.getLastPrices({
        figi: ['BBG0047315Y7'],
    });
    console.log('Запрос последних цен по инструментам: ', lastPrice);
    const orderBook = await marketData.getOrderBook({
        figi: 'BBG0047315Y7',
        depth: 5,
    });
    console.log('Получение стакана по инструменту: ', orderBook);
    const tradingStatus = await marketData.getTradingStatus({
        figi: 'BBG0047315Y7',
    });
    console.log('Запрос статуса торгов по инструментам: ', tradingStatus);
    const lastTrades = await marketData.getLastTrades({
        figi: 'BBG0047315Y7',
    });
    console.log('Запрос статуса торгов по инструментам: ', lastTrades);
})();
//# sourceMappingURL=marketData.js.map