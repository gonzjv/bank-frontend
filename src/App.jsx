import { useState } from 'react'
import { Outlet } from 'react-router'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AppContext from './context/AppContext.js';

function App() {
  const [state, setState] = useState(null);
  const appState = {state: state, setState: setState}

  return (
    <AppContext.Provider value={appState}>
      <div className='min-h-[100vh] font-["Lusitana"] text-2xl bg-slate-900'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </AppContext.Provider>
  )
}

export default App
