"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("../sdk");
const orders_1 = require("../generated/orders");
!(async function example() {
    const { sandbox } = (0, sdk_1.createSdk)('YOUR_TOKEN');
    const sandboxAccounts = await sandbox.getSandboxAccounts({});
    console.log('Получение счетов в песочнице: ', sandboxAccounts);
    const openSandboxAccount = await sandbox.openSandboxAccount({});
    console.log('Регистрация счёта в песочнице: ', openSandboxAccount.accountId);
    const closeSandboxAccount = await sandbox.closeSandboxAccount({ accountId: '2c8ce770-befa-4544-9ab8-c7166abfe243' });
    console.log('Закрытие счёта в песочнице: ', closeSandboxAccount);
    const sandboxPayIn = await sandbox.sandboxPayIn({
        accountId: 'a4667599-8ce5-4f49-99e1-2dcfc0e5fc2f',
        amount: { currency: 'RUB', units: 15000, nano: 0 },
    });
    console.log('Пополнение счёта в песочнице: ', sandboxPayIn);
    const sandboxPortfolio = await sandbox.getSandboxPortfolio({ accountId: 'a4667599-8ce5-4f49-99e1-2dcfc0e5fc2f' });
    console.log('Получение портфолио в песочнице: ', sandboxPortfolio);
    const postSandboxOrder = await sandbox.postSandboxOrder({
        accountId: 'a4667599-8ce5-4f49-99e1-2dcfc0e5fc2f',
        figi: 'FUTMXI062200',
        quantity: 1,
        price: { units: 2598, nano: 0 },
        direction: orders_1.OrderDirection.ORDER_DIRECTION_BUY,
        orderType: orders_1.OrderType.ORDER_TYPE_LIMIT,
        orderId: '123456-fabc-12344',
    });
    console.log('Выставление торгового поручения в песочнице: ', postSandboxOrder);
    const sandboxOrders = await sandbox.getSandboxOrders({ accountId: 'a4667599-8ce5-4f49-99e1-2dcfc0e5fc2f' });
    console.log('Получение статуса заявок в песочнице: ', sandboxOrders);
    const cancelSandboxOrder = await sandbox.cancelSandboxOrder({
        accountId: 'a4667599-8ce5-4f49-99e1-2dcfc0e5fc2f',
        orderId: '17f8f759-e374-4a02-9ec3-bc0c59a2949a',
    });
    console.log('Отмена торгового поручения в песочнице: ', cancelSandboxOrder);
    const sandboxOrderState = await sandbox.getSandboxOrderState({
        orderId: '123456-fabc-12344',
        accountId: 'a4667599-8ce5-4f49-99e1-2dcfc0e5fc2f',
    });
    console.log('Получение статуса заявки в песочнице: ', sandboxOrderState);
    const sandboxOperations = await sandbox.getSandboxOperations({
        accountId: 'a4667599-8ce5-4f49-99e1-2dcfc0e5fc2f',
        from: new Date('2022-04-12T11:00:00Z'),
        to: new Date('2022-04-12T12:00:00Z'),
    });
    console.log('Получение операций в песочнице по номеру счёта: ', sandboxOperations);
})();
//# sourceMappingURL=sandbox.js.map