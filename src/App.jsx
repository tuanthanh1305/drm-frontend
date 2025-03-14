import { Routes, Route } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import TrainingOfficePage from "./pages/TrainingOfficePage";
import Student from "./components/student/Student";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />x
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
          <Route path="trainning" element={<TrainingOfficePage />} />
          <Route path="student" element={<Student />} />
          <Route path="khanh" element={<PageKhanh></PageKhanh>}></Route>
        </Route>
        <Route path="/student" element={<LayoutStudent />}>
          <Route index element={<StudentPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
