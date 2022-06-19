"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("../sdk");
!(async function example() {
    var _a, _b;
    const { operations } = (0, sdk_1.createSdk)('YOUR_TOKEN');
    const userOperations = await operations.getOperations({
        accountId: '1234567890',
        from: new Date('2022-04-05T07:00:00Z'),
        to: new Date('2022-04-05T15:45:00Z'),
    });
    console.log('Получение списка операций по счёту: ', userOperations);
    const portfolio = await operations.getPortfolio({
        accountId: '1234567890',
    });
    console.log('Получение портфеля по счёту: ', portfolio);
    const positions = await operations.getPositions({
        accountId: '1234567890',
    });
    console.log('Получение списка позиций по счёту: ', positions);
    const withDrawLimit = await operations.getWithdrawLimits({
        accountId: '1234567890',
    });
    console.log('Получение доступного остатка для вывода средств: ', withDrawLimit);
    const brokerReport = await operations.getBrokerReport({
        generateBrokerReportRequest: {
            accountId: '1234567890',
            from: new Date('2022-04-04T07:00:00Z'),
            to: new Date('2022-04-04T15:45:00Z'),
        },
    });
    const reportResponse = await operations.getBrokerReport({
        getBrokerReportRequest: {
            taskId: (_a = brokerReport.generateBrokerReportResponse) === null || _a === void 0 ? void 0 : _a.taskId,
        },
    });
    console.log('Получение брокерского отчёта: ', reportResponse);
    const dividentsForeighIssuer = await operations.getDividendsForeignIssuer({
        generateDivForeignIssuerReport: {
            accountId: '1234567890',
            from: new Date('2022-04-04T07:00:00Z'),
            to: new Date('2022-04-04T15:45:00Z'),
        },
    });
    const dfiResponse = await operations.getDividendsForeignIssuer({
        getDivForeignIssuerReport: {
            taskId: (_b = dividentsForeighIssuer.generateDivForeignIssuerReportResponse) === null || _b === void 0 ? void 0 : _b.taskId,
        },
    });
    console.log('Получения отчёта "Справка о доходах за пределами РФ: ', dfiResponse);
})();
//# sourceMappingURL=operations.js.map