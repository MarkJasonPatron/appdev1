import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>This is a button</button>
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

function AdminPanel() {
  return "This is the Admin Panel"
}

function LoginForm() {
  return "This is the Login Form"
}

function App() {

  const user = {
    name: "Rick Astley",
    imageUrl: "https://i.insider.com/602ee9ced3ad27001837f2ac?width=200",
  };

  const isLoggedIn = true;

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <>
      <ButtonAndGreetings></ButtonAndGreetings>
      <AboutPage></AboutPage>
      <h2>
        {user.name}
      </h2>
      <img
          className="avatar"
          src={user.imageUrl}
          alt="image"
      />
      <br></br>
      {content}
    </>
  )
}

export default App
