import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const options = [
  {
    id: "select an option",
    value: "",
  },
  {
    id: 1,
    value: "foton",
  },
  {
    id: 2,
    value: "basuto",
  },
  {
    id: 3,
    value: "explotions",
  },
  {
    id: 4,
    value: "rozan",
  },
];

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    description: Yup.string().required("Description is Required"),
    selectOption: Yup.string().required("Option is Required"),
  });
  const onSubmit = (values) => console.log("form values", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Select Option"
            name="selectOption"
            options={options}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
