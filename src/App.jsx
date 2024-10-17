import { useState } from 'react'
import Summary from './components/summary'
import Info from './components/info'
import './styles/App.css'

function App() {

  return (
    <main className='main'>    
    <Summary />
      <Info/>
    </main>
  )
}

export default App
