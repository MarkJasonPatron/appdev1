import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function ButtonAndGreetings() {
  return(
    <>
      <h2>Hello user!</h2>
      <MyButton />
    </>
  );
}

function App() {

  return (
    <>
      <ButtonAndGreetings></ButtonAndGreetings>
    </>
  )
}

export default App
