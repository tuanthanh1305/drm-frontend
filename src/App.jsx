import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReporterPage from './components/class-leader/ReporterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReporterPage/>
    </>
  )
}

export default App
