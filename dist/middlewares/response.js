"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddleware = void 0;
const nice_grpc_1 = require("nice-grpc");
const api_errors_1 = require("../errors/api_errors");
function getMiddleware(loggerCb) {
    return async function* (call, options) {
        const { path } = call.method;
        const errorMetadata = {};
        options.onTrailer = (data) => {
            Object.assign(errorMetadata, {
                trackId: data.get('x-tracking-id'),
                message: data.get('message'),
                rateLimit: data.get('x-ratelimit-limit'),
                rateLimitRemaining: data.get('x-ratelimit-remaining'),
                rateLimitReset: data.get('x-ratelimit-reset'),
            });
        };
        try {
            if (!call.responseStream) {
                return yield* call.next(call.request, options);
            }
            else {
                for await (const response of call.next(call.request, options)) {
                    yield response;
                }
                return;
            }
        }
        catch (error) {
            const isClientError = error instanceof nice_grpc_1.ClientError;
            const errStatus = isClientError ? api_errors_1.errorStatus[error.details] : undefined;
            if (loggerCb) {
            }
            else {
                if (isClientError) {
                    const errDescription = errStatus && api_errors_1.errorStatus[error.details] && api_errors_1.errorStatus[error.details].description;
                }
                else {
                }
            }
            throw errorMetadata;
        }
    };
}
exports.getMiddleware = getMiddleware;
//# sourceMappingURL=response.js.map