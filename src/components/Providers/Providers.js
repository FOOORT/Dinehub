'use client'
import React from 'react';
import {persistor, ReduxProvider} from "@/store/configureStore";
import {PersistGate} from "redux-persist/integration/react";

const Providers = ({children}) => {
    return (
        <ReduxProvider>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </ReduxProvider>
    );
}

export default Providers;