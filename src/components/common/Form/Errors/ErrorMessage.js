import React from 'react';
import {useFormikContext} from "formik";

const ErrorMessage = ({name}) => {
    const {errors, touched} = useFormikContext()
    return touched[name] ? (
        <p className={'text-red-500 text-sm font-semibold my-2'}>{errors[name]}</p>
    ) : null;
};

export default ErrorMessage;
