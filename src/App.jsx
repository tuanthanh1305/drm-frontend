import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/teacher" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
