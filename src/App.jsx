
import { Routes, Route } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
<<<<<<< HEAD
import TrainingOfficePage from './pages/TrainingOfficePage'
import Student from "./components/student/Student";
=======
import TrainingOfficePage from "./pages/TrainingOfficePage";
import Student2 from "./components/student/Student2";
import LayoutStudent from './layouts/LayoutStudent';
import LayoutAdmin from './layouts/LayoutAdmin';
import StudentPage from "./pages/StudentPage";
import StudentManagementPage from "./components/admin/StudentManagementPage";

>>>>>>> parent of c20118f (Revert "long commit")
const App = () => {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />x
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
          <Route path="trainning" element={<TrainingOfficePage />} />
          <Route path="student" element={<Student />} />
          <Route path="khanh" element={<PageKhanh></PageKhanh>}></Route>
=======
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
          <Route path="trainning" element={<TrainingOfficePage />} />
          <Route path="students" element={<StudentManagementPage />} />
        </Route>
        <Route path="/student" element={<LayoutStudent />}>
          <Route index element={<StudentPage />} />
          <Route path="student2" element={<Student2 />} />
>>>>>>> parent of c20118f (Revert "long commit")
        </Route>
      </Routes>
    </>
  );
};

export default App;
