import {createAction} from "@reduxjs/toolkit";

// export interface Payload {
//   onStart?: string;
//   data?: unknown;
//   onSuccess?: string;
//   onError?: string;
// }

export const appActionCallBegan =
    createAction("appAction/callBegan");
export const appActionCallSuccess =
    createAction("appAction/callSuccess");
export const appActionCallFailed =
    createAction("appAction/callFailed");
