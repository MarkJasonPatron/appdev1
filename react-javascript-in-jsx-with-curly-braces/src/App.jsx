import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// export default function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/7vQD0fPs.jpg"
//       alt="Gregorio Y. Zara"
//     />
//   );
// }

// export default function TodoList() {
//   const name = 'Gregorio Y. Zara';
//   return (
//     <h1>{name}'s To Do List</h1>
//   );
// }

export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
