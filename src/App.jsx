import { Route, Routes } from "react-router-dom";
import "./App.css";
import Teacher from "./pages/ClassLeaderPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/teacher" element={<Teacher />}></Route>
      </Routes>
    </>
  );
}

export default App;
