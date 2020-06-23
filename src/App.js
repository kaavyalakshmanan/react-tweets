// A coponent is a file that holds all the HTML, logic, & styling in one file
// Self-contained piece of code or modal

import React, {useState} from 'react';
import Tweet from "./tweet"
import './App.css'

// Create component by writing a function
function App() {
  // Get this from API and set in state
  const [users, setUsers] = useState([
    {
      name: 'Ed',
      message: 'hello'},
  {
      name: 'Jon',
      message: 'I am jon snow'
    },
    {
      name: 'bobby',
      message: "I am awesome"
    }
  ])
  // Data we want in state as param
  // State: app renders itself based on data
  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0);

  // Example setting user data

  // const [user, setUser] = setState({
  //   name: 'Ed',
  //   age: 25,
  //   posts: ['my first post', 'my lovely summer']
  // })

  const increment = () => {
    setCount(count+1)
    setRed(!isRed);
  };
  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ) )}
      {/* <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
     <button onClick={increment}>Increment</button>
     <h1>{count}</h1> */}
    </div>
  )
}

// Export this file
export default App;