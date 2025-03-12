
import { Routes, Route } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import TrainingOfficePage from './pages/TrainingOfficePage'
import ReporterPage from "./components/class-leader/ReporterPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />x
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
          <Route path="trainning" element={<TrainingOfficePage />} />
          <Route path="report" element={<ReporterPage />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
