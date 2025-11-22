import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersFetch from './UsersFetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsersFetch/>
    </>
  )
}

export default App
