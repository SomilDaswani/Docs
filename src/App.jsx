import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
import './index.css'


function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
      <Plus />
    </div>
  )
}

export default App
