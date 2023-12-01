import {createAction} from '@reduxjs/toolkit';

// export interface Payload {
//   url: string;
//   method?: string;
//   onStart?: string;
//   data?: unknown;
//   onSuccess?: string;
//   onError?: string;
// }

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');
