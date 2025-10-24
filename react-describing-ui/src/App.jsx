import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './components/Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Props/>
    </>
  )
}

export default App
