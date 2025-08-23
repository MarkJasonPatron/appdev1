import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>About Me:</h2> 
     <p>Name: Mark Jason L. Patron <br /> 
         Course/Year: BS Information Technology 3rd Year <br /> 
         Fun Fact: I enjoy watching others play horror games because I'm afraid to play it myself.</p> 
      <h2>Why I Want to Learn React:</h2>
      <p>I want to learn React because I’ve noticed it’s kind of the industry standard for front-end development right now. It’s supported by a huge community and backed by Meta, so it feels like a smart investment of my time. I’ve also seen so many job listings asking for it, and I figured if I’m serious about building a career, it just makes sense to get comfortable with it early on.</p>
    </>
  )
}

export default App
