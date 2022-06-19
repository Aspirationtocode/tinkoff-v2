"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeChannel = exports.createSSLCredentials = exports.createMetadataCredentials = exports.createMetadata = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const nice_grpc_1 = require("nice-grpc");
const constants_1 = require("./constants");
const createMetadata = (token, appName) => {
    const metadata = new grpc_js_1.Metadata();
    metadata.add('Authorization', `Bearer ${token}`);
    metadata.add('x-app-name', appName || constants_1.APP_NAME);
    return metadata;
};
exports.createMetadata = createMetadata;
const createMetadataCredentials = (metadata) => grpc_js_1.credentials.createFromMetadataGenerator(function (args, callback) {
    callback(null, metadata);
});
exports.createMetadataCredentials = createMetadataCredentials;
const createSSLCredentials = (metadataCreds) => grpc_js_1.credentials.combineChannelCredentials(grpc_js_1.credentials.createSsl(), metadataCreds);
exports.createSSLCredentials = createSSLCredentials;
const makeChannel = (url, ssl_creds) => (0, nice_grpc_1.createChannel)(url, ssl_creds);
exports.makeChannel = makeChannel;
//# sourceMappingURL=utils.js.map