import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "@chakra-ui/react";
const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid format").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
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
              control="chakra"
              type="email"
              label="email"
              name="email"
            />
            <FormikControl
              control="chakra"
              type="password"
              label="password"
              name="password"
            />
            <Button colorScheme="blue" type="submit" disabled={!formik.isValid}>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
