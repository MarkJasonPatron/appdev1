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

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}



function App() {

  return (
    <>
      <ButtonAndGreetings></ButtonAndGreetings>
      <AboutPage></AboutPage>
    </>
  )
}

export default App
