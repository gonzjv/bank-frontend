import { useState } from 'react'
import { Outlet } from 'react-router'

import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default App
