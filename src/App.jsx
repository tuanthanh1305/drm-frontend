
import { Routes, Route } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Auth/Login";
import TrainingOfficePage from './pages/TrainingOfficePage'
import Student from "./components/student/Student";
import Register from "./pages/Auth/Register";
import HomeLogin from "./pages/Auth/LoginHome";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home-login" element={<HomeLogin />} />

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
          <Route path="trainning" element={<TrainingOfficePage />} />
          <Route path="student" element={<Student />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
