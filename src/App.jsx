import { Routes, Route } from "react-router";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import TrainingOfficePage from "./pages/TrainingOfficePage";

import DepartmentHeadPage from "./pages/DepartmentHeadPage";
import LayoutTruongKhoa from "./layouts/LayoutTruongKhoa";
import Student from "./components/student/Student";

import Student2 from "./components/student/Student2";
import LayoutStudent from './layouts/LayoutStudent';
import LayoutAdmin from './layouts/LayoutAdmin';
import StudentPage from "./pages/StudentPage";
import CanBoLopPage from "./components/class-leader/CanBoLop1";
import ChildCriteria from "./components/admin/childCriteria/childCriteria";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/canbolop1" element={<CanBoLopPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
          <Route path="trainning" element={<TrainingOfficePage />} />
          <Route path="students" element={<StudentManagementPage />} />
          <Route path="student" element={<Student />} />
          <Route path="report" element={<ReporterPage />} />
        </Route>
        <Route path="/student" element={<LayoutStudent />}>
          <Route index element={<StudentPage />} />
          <Route path="student2" element={<Student2 />} />
        </Route>
        <Route path="/truongkhoa" element={<LayoutTruongKhoa />}>
          <Route path="departmenthead" element={<DepartmentHeadPage />} />
        </Route>
        <Route path="criteria" element={<LayoutAdmin />}>
          <Route path="childcriteria" element={<ChildCriteria />} />
        </Route>
      </Routes>
    </>
  );

};

export default App;
