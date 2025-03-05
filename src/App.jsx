import { Route, Routes } from "react-router-dom";
import "./App.css";
import DepartmentHeadPage from "./pages/DepartmentHeadPage";

function App() {

  return <>
    <Routes >
      <Route path="/department-head" element={<DepartmentHeadPage />} />
    </Routes>
  </>;
}

export default App;
