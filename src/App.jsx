
import { Routes, Route } from "react-router";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminPage />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
