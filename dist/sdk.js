"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSdk = void 0;
const utils_1 = require("./utils");
const nice_grpc_1 = require("nice-grpc");
const users_1 = require("./generated/users");
const stoporders_1 = require("./generated/stoporders");
const constants_1 = require("./constants");
const instruments_1 = require("./generated/instruments");
const marketdata_1 = require("./generated/marketdata");
const operations_1 = require("./generated/operations");
const orders_1 = require("./generated/orders");
const sandbox_1 = require("./generated/sandbox");
const response_1 = require("./middlewares/response");
const createSdk = (token, appName, loggerCb) => {
    const metadata = (0, utils_1.createMetadata)(token, appName);
    const metadataCred = (0, utils_1.createMetadataCredentials)(metadata);
    const sslCred = (0, utils_1.createSSLCredentials)(metadataCred);
    const channel = (0, utils_1.makeChannel)(constants_1.API_URL, sslCred);
    const clientFactory = (0, nice_grpc_1.createClientFactory)().use((0, response_1.getMiddleware)(loggerCb));
    return {
        instruments: clientFactory.create(instruments_1.InstrumentsServiceDefinition, channel),
        marketData: clientFactory.create(marketdata_1.MarketDataServiceDefinition, channel),
        marketDataStream: clientFactory.create(marketdata_1.MarketDataStreamServiceDefinition, channel),
        operations: clientFactory.create(operations_1.OperationsServiceDefinition, channel),
        orders: clientFactory.create(orders_1.OrdersServiceDefinition, channel),
        ordersStream: clientFactory.create(orders_1.OrdersStreamServiceDefinition, channel),
        sandbox: clientFactory.create(sandbox_1.SandboxServiceDefinition, channel),
        stopOrders: clientFactory.create(stoporders_1.StopOrdersServiceDefinition, channel),
        users: clientFactory.create(users_1.UsersServiceDefinition, channel),
    };
};
exports.createSdk = createSdk;
//# sourceMappingURL=sdk.js.map