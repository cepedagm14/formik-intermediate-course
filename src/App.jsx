import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  const incrmeent = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      {/* <FormikContainer/> */}
      <LoginForm/>
    </div>
  );
}

export default App;
