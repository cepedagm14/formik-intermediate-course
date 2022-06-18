import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const CourseForm = () => {
  const optionss = [
    { id: "select an option", value: "" },
    { id: "React", value: "React" },
    { id: "Angular", value: "Angular" },
    { id: "Vue", value: "Vue" },
  ];
  const options = [
    { key: "HTML", value: "HTML" },
    { key: "CSS", value: "CSS" },
    { key: "JavaScript", value: "JavaScript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    date: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid format").required("Email is Required"),
    bio: Yup.string().required("bio is Required"),
    course: Yup.string().required("select a Course"),
    skillset: Yup.array().required("select a Skill"),
    date: Yup.date().required("select a date").nullable()
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
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={optionss}
            />

            <FormikControl
              control="checkbox"
              label="Skill set"
              name="skillset"
              options={options}
            />

            <FormikControl
              control="datepicker"
              label="Date of Course"
              name="date"
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

export default CourseForm;
