import { Routes, Route } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import TrainingOfficePage from "./pages/TrainingOfficePage";
import PageKhanh from "./components/student/slider-Khanh/Page";
import DepartmentHeadPage from "./pages/DepartmentHeadPage";
import LayoutTruongKhoa from "./layouts/LayoutTruongKhoa";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />x
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<AdminPage />} />
                    <Route path="trainning" element={<TrainingOfficePage />} />
                    <Route
                        path="khanh"
                        element={<PageKhanh></PageKhanh>}
                    ></Route>
                </Route>
                <Route path="/truongkhoa" element={<LayoutTruongKhoa />}>
                    <Route path="departmenthead" element={<DepartmentHeadPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
