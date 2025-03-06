import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrainingOfficePage from './pages/TrainingOfficePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/trainning" element={<TrainingOfficePage />}></Route>
      </Routes>
    </>
  )
}

export default App
