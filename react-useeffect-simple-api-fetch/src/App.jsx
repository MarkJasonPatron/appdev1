import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersFetch from './UsersFetch'
import PostsFetchAsync from './PostsFetchAsync'
import TodosFetchAxios from './TodosFetchAxios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UsersFetch/> */}
      {/* <PostsFetchAsync/> */}
      <TodosFetchAxios/>
    </>
  )
}

export default App
