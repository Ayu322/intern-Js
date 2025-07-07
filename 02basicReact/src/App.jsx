import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
     let [counter , setCounter] = useState(5)

  const AddValue = () => {
    // if (counter < 11){
       counter = counter + 1
    setCounter(counter)
    // }else  console.log("Reached Maximum Number"); 
  }

  const RemoveValue = () => {
    // if (counter == 0){
    // console.log("No more posible outcome");
    // }else 
    setCounter (counter - 1)
  }

  return (
    <>
      <h1>India Vs England</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={AddValue} >Wicket falls {counter}</button>
      <br />
      <button
       onClick={RemoveValue}>Remaining wicket {counter}</button>
    </>
  )
}

export default App
