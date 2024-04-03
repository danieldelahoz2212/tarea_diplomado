import { useState } from 'react'
import Cards from './components/Cards';
import Contador from './components/Contador';
import './App.css'

function App() {

  return (
    <div className='App'>
      <Cards />
      <Contador />
    </div>
  )
}

export default App
