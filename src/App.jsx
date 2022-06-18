import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import CourseForm from "./components/CourseForm";
import ChakraInput from "./components/ChakraInput";
import { ThemeProvider, theme } from "@chakra-ui/react";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <FormikContainer/> */}
        <LoginForm/>
        {/* <RegisterForm/> */}
        {/* <CourseForm/> */}
        
      </div>
    </ThemeProvider>
  );
}

export default App;
