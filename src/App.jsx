import { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    </>
  )
}

export default App
