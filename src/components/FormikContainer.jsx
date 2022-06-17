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

const optionss = [
  {
    key: "option 1",
    value: "option 1",
  },
  {
    key: "option 2",
    value: "option 2",
  },
  {
    key: "option 3",
    value: "option 3",
  },
];
const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkOptions: [],
    birthDate: null
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    description: Yup.string().required("Description is Required"),
    selectOption: Yup.string().required("Option is Required"),
    radioOptions: Yup.string().required("options radio is required"),
    checkOptions: Yup.array().required("check is required"),
    birthDate: Yup.date().required("date is Required").nullable()
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

          <FormikControl
            control="radio"
            label="Radio Topics"
            name="radioOptions"
            options={optionss}
          />
          <FormikControl
            control="checkbox"
            label="Check Topics"
            name="checkOptions"
            options={optionss}
          />
           <FormikControl
            control="datepicker"
            label="Date Picker"
            name="birthDate"

           
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
