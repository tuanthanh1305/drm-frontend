import React from "react";
import Sidebar from "./components/student/Sidebar";
import NoticeBar from "./pages/PageStudents/NoticeBar";
import ScoreInfo from "./pages/PageStudents/ScoreInfo";
import ScoreTable from "./pages/PageStudents/ScoreTable";
import ActionButtons from "./pages/PageStudents/ActionButtons";
import ClassLeader from "./pages/ClassLeaderPage";

const MainLayout = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex w-full min-h-screen max-sm:flex-col">
        <ClassLeader/>
      </main>
    </>
  );
};

export default MainLayout;