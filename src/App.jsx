import React from 'react'
import {DashboardView} from './views'
import Navbar from './components/molecules/Navbar/Navbar'
function App() {

  return (
    <div className="App">
      <Navbar/>
      <DashboardView/>
    </div>
  )
}

export default App
