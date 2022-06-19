"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("../sdk");
const instruments_1 = require("../generated/instruments");
!(async function example() {
    const { instruments } = (0, sdk_1.createSdk)('YOUR_TOKEN');
    const schedule = await instruments.tradingSchedules({
        from: new Date('2022-04-04T00:00:00Z'),
        to: new Date('2022-04-08:20:55:59Z'),
        exchange: 'MOEX',
    });
    const scheduleAll = await instruments.tradingSchedules({
        from: new Date('2022-04-04T00:00:00Z'),
        to: new Date('2022-04-08:20:55:59Z'),
    });
    console.log('Расписание торгов Московской биржи в указанном временном промежутке: ', schedule.exchanges[0]);
    console.log('Расписание торгов всех бирж в указанном временном промежутке: ', scheduleAll.exchanges);
    const bonds = await instruments.bonds({ instrumentStatus: instruments_1.InstrumentStatus.INSTRUMENT_STATUS_BASE });
    const bondByFIGI = await instruments.bondBy({
        idType: instruments_1.InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        id: 'BBG011FHF1F7',
    });
    const bondCoupons = await instruments.getBondCoupons({
        figi: 'BBG011FHF1F7',
        from: new Date('2022-01-01T00:00:00Z'),
        to: new Date('2022-12-31:20:55:59Z'),
    });
    const accruedInterests = await instruments.getAccruedInterests({
        figi: 'BBG011FHF1F7',
        from: new Date('2022-01-01T00:00:00Z'),
        to: new Date('2022-01-31:20:55:59Z'),
    });
    console.log('Список облигаций, которыми можно торговать с помощью API: ', bonds);
    console.log('Получение информации об облигации по FIGI: ', bondByFIGI);
    console.log('Получение графика выплат купонов по облигации: ', bondCoupons);
    console.log('Получение накопленного купонного дохода по FIGI облигации: ', accruedInterests);
    const currencies = await instruments.currencies({
        instrumentStatus: instruments_1.InstrumentStatus.INSTRUMENT_STATUS_BASE,
    });
    const currencyByFIGI = await instruments.currencyBy({
        idType: instruments_1.InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        id: 'BBG0013HGFT4',
        classCode: 'CETS',
    });
    console.log('Получения списка валют, допущенных к торговле через API: ', currencies);
    console.log('Получения информации о конкретной валюте, по FIGI: ', currencyByFIGI);
    const etfs = await instruments.etfs({
        instrumentStatus: instruments_1.InstrumentStatus.INSTRUMENT_STATUS_BASE,
    });
    const etfByFIGI = await instruments.etfBy({
        idType: instruments_1.InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        id: 'BBG00NRFC2X2',
    });
    console.log('Получения ETF, допущенных к торговле через API: ', etfs);
    console.log('Получение информации о ETF по его FIGI: ', etfByFIGI);
    const futures = await instruments.futures({
        instrumentStatus: instruments_1.InstrumentStatus.INSTRUMENT_STATUS_BASE,
    });
    const futureByFIGI = await instruments.futureBy({
        idType: instruments_1.InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        id: 'FUTSI0623000',
    });
    const futuresMargin = await instruments.getFuturesMargin({
        figi: 'FUTSI0623000',
    });
    console.log('Получения фьючерсов, допущенных к торговле через API: ', futures);
    console.log('Получение информации о фьючерсе по его FIGI: ', futureByFIGI);
    console.log('Получение размера гарантийного обеспечения по фьючерсу: ', futuresMargin);
    const shares = await instruments.shares({
        instrumentStatus: instruments_1.InstrumentStatus.INSTRUMENT_STATUS_BASE,
    });
    const shareByFIGI = await instruments.shareBy({
        idType: instruments_1.InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        id: 'BBG005DXJS36',
    });
    console.log('Получение списка акций, допущенных к торговле через API: ', shares);
    console.log('Получение информации об акции по её FIGI: ', shareByFIGI);
    const instrument = await instruments.getInstrumentBy({
        idType: instruments_1.InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        id: 'BBG005DXJS36',
    });
    const dividends = await instruments.getDividends({
        figi: 'BBG0047315Y7',
        from: new Date('2021-01-01T00:00:00Z'),
        to: new Date('2021-12-31T20:55:59Z'),
    });
    console.log('Получение основной информации об инструменте: ', instrument);
    console.log('Получение событий выплаты дивидендов по инструменту: ', dividends);
    const assets = await instruments.getAssets({});
    const assetsByID = await instruments.getAssetBy({ id: '09411d72-f4f2-4dad-a494-3d91be1dabd8' });
    console.log('Получение списка активов: ', assets);
    console.log('Получение актива по его идентификатору: ', assetsByID);
})();
//# sourceMappingURL=instruments.js.map