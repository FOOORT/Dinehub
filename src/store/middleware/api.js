/* eslint-disable curly */
import axios from 'axios';
import * as actions from '../api';
import {webUrl} from "@/constants";

const api = store => next => action => {
    if (action.type === actions.apiCallBegan.type) {
        next(action);
        // api call
        const {
            url,
            method,
            onStart,
            data,
            onSuccess,
            onPaginate,
            onError,
            headers,
            withBaseUrl = true,
        } = action.payload;
        if (onStart) store.dispatch({type: onStart});
        next(action);
        const callApi = async () => {
            try {
                const response = await axios.request({
                    baseURL: withBaseUrl ? webUrl : '',
                    url,
                    method,
                    data,
                    headers: {
                        ...headers,
                        Accept: 'application/json',
                        Authorization: store.getState().auth.user
                            ? 'Bearer ' + store.getState().auth.user.token
                            : null,
                    },
                });
                // general
                store.dispatch(
                    actions.apiCallSuccess(
                        response?.data?.data ? response.data.data : response.data,
                    ),
                );
                // // specific
                if (onSuccess) {
                    store.dispatch({
                        type: onSuccess,
                        payload: response.data?.data ? response.data.data : response.data
                    });
                }
            } catch (error) {
                // general
                store.dispatch(
                    actions.apiCallFailed(error.response && error.response.data),
                );
                // specific
                if (onError)
                    store.dispatch({
                        type: onError,
                        payload: {
                            status: error.response && error.response.status,
                            message: error.response ? error.response.message : null,
                            errors: error.response ? error.response.errors : null,
                        },
                    });
            }
        };
        callApi();
    } else {
        next(action);
    }
};

export default api;
