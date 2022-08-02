import { CallOptions, ClientError, ClientMiddlewareCall } from 'nice-grpc';
import { ErrorMessagesType } from '../errors/api_errors';
declare type ErrorTrailers = {
    trackId?: string;
    message?: string;
    rateLimit?: string;
    rateLimitRemaining?: string;
    rateLimitReset?: string;
};
export declare type TypeLoggerCb = (errorMetadata: ErrorTrailers, error: ClientError | unknown, messages?: ErrorMessagesType) => void;
export declare function getMiddleware(loggerCb?: TypeLoggerCb): <Request_1, Response_1>(call: ClientMiddlewareCall<Request_1, Response_1, {}>, options: CallOptions) => AsyncGenerator<Awaited<Response_1>, Awaited<Response_1> | undefined, undefined>;
export {};
