import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  //   console.log(options);
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value === "" ? option.id : option.value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
