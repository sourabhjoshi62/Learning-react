import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [color, setColor] = useState('olive')
  let newarr=[1,2,3,4]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
     <Cards username="Sourabh Joshi" />
     <Cards username/>
  
    </>
  )
}

export default App;
