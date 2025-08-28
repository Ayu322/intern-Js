import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/home'
import Footer from './components/Footer/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
