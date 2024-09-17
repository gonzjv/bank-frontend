import { useState } from 'react'
import { Outlet } from 'react-router'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='min-h-[100vh] font-["Lusitana"] text-2xl bg-slate-900'>
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default App
