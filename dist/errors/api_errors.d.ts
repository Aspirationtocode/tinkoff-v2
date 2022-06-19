declare type Errors = {
    [index: string]: ErrorMessagesType;
};
export declare type ErrorMessagesType = {
    message: string;
    type: string;
    description: string;
};
export declare const errorStatus: Errors;
export {};
