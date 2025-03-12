import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import LayoutAdmin from './layouts/LayoutAdmin'
import AdminPage from './pages/AdminPage'
import TrainingOfficePage from './pages/TrainingOfficePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/training" element={<TrainingOfficePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
