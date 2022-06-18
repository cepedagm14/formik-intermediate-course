import React from "react";
import ChakraInput from "./ChakraInput";
import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "datepicker":
      return <DatePicker {...rest} />;
    case "chakra":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
  return <div>FormikControl</div>;
}

export default FormikControl;
