import { Routes, Route } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import TrainingOfficePage from "./pages/TrainingOfficePage";
import DepartmentHeadPage from "./pages/DepartmentHeadPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />x
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
          <Route path="trainning" element={<TrainingOfficePage />} />
          <Route path="department-head" element={<DepartmentHeadPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;