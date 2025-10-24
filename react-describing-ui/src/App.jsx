import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderingList from './components/RenderingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderingList/>
    </>
  )
}

export default App
