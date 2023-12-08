import React from "react";
import { Field, useFormikContext } from "formik";
import ErrorMessage from "@/components/common/Form/Errors/ErrorMessage";

const FormField = ({
  options = [],
  type = "text",
  as = "input",
  name,
  label,
  className = "w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg",
  containerClassName = "w-full",
  labelClassName = "text-sm font-medium text-slate-600 my-2",
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div className={containerClassName}>
      <h2 className={labelClassName}>{label}</h2>
      {as === "select" ? (
        <Field as={as} type={type} name={name} className={className}>
          <option value="">Choose</option>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Field>
      ) : type === "file" ? (
        <input
          type={type}
          onChange={(event) => setFieldValue(name, event.target.files[0])}
          name={name}
          className={className}
          {...otherProps}
        />
      ) : (
        <Field
          as={as}
          type={type}
          name={name}
          className={className}
          {...otherProps}
        />
      )}
      <ErrorMessage name={name} />
    </div>
  );
};

export default FormField;
