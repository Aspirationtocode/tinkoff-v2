import { CallCredentials, ChannelCredentials, Metadata } from '@grpc/grpc-js';
export declare const createMetadata: (token: string, appName?: string | undefined) => Metadata;
export declare const createMetadataCredentials: (metadata: Metadata) => CallCredentials;
export declare const createSSLCredentials: (metadataCreds: CallCredentials) => ChannelCredentials;
export declare const makeChannel: (url: string, ssl_creds: ChannelCredentials) => import("nice-grpc").Channel;
