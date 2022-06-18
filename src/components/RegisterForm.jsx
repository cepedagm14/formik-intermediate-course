import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const RegisterForm = () => {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "phonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid format").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "password must match")
      .required("Password is Required"),
    modeOfContact: Yup.string().required("Required modo of contact"),
    phone: Yup.string().when("modeOfContact", {
      is: "phonemoc",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("submit values...", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />

            <FormikControl
              control="radio"
              label="Modo of Contact"
              name="modeOfContact"
              options={options}
            />

            <FormikControl
              control="input"
              type="phone"
              label="Modo of Contact"
              name="phone"
            />

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
