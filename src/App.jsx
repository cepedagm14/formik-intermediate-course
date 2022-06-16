import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FormikContainer from './components/FormikContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormikContainer/>
    </div>
  )
}

export default App
