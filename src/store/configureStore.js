import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import appActions from './middleware/appActions';
import api from "./middleware/api"
import reducer from './reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

export const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: persistReducer(persistConfig, reducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        }).concat(appActions).concat(api),
});

export const persistor = persistStore(store);

export const ReduxProvider = (props) =>
    Provider({store: store, ...props});
