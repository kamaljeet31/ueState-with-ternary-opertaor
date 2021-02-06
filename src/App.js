import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('👩‍❤️')
  const IncNum = () => {
    // if (count === 50) {
    //   setCount(100)
    // } else {
    //   setCount(50)
    // }

    count === '👩‍❤️‍👨' ? setCount('❤️') : setCount('👩‍❤️‍👨')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{count}</p>
        <button onClick={IncNum}>Love Shalantru</button>
      </header>
    </div>
  )
}

export default App
