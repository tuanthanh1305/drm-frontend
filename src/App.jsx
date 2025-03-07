import React from "react";
import Sidebar from "./components/student/Sidebar";
import Header from "./components/student/Header";
import NoticeBar from "./pages/PageStudents/NoticeBar";
import ScoreInfo from "./pages/PageStudents/ScoreInfo";
import ScoreTable from "./pages/PageStudents/ScoreTable";
import ActionButtons from "./pages/PageStudents/ActionButtons";

const MainLayout = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex w-full min-h-screen max-sm:flex-col">
        <Sidebar />
        <section className="flex flex-col flex-1 max-sm:w-full">
          <Header />
          <article className="p-5">
            <NoticeBar />
            <ScoreInfo />
            <ScoreTable />
            <ActionButtons />
          </article>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
