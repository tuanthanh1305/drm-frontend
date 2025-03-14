  import { Routes, Route } from "react-router";
  import AdminPage from "./pages/AdminPage";
  import Register from "./pages/Auth/Register";
  import HomeLogin from "./pages/Auth/LoginHome";
  import Login from "./pages/Login";
  import TrainingOfficePage from "./pages/TrainingOfficePage";

  import DepartmentHeadPage from "./pages/DepartmentHeadPage";
  import LayoutTruongKhoa from "./layouts/LayoutTruongKhoa";

  import Student2 from "./components/student/Student2";
  import LayoutStudent from './layouts/LayoutStudent';
  import LayoutAdmin from './layouts/LayoutAdmin';
  import StudentPage from "./pages/StudentPage";
  import CanBoLopPage from "./components/class-leader/CanBoLop1";
  import ChildCriteria from "./components/admin/childCriteria/childCriteria";
  import Teacher from './pages/Lecturer';


  const App = () => {
    return (
      <>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home-login" element={<HomeLogin />} />
          <Route path="/canbolop1" element={<CanBoLopPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<AdminPage />} />
            <Route path="trainning" element={<TrainingOfficePage />} />
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
          <Route path="/teacher" element={<Teacher />}></Route>
        </Routes>
      </>
    );

  };

  export default App;
