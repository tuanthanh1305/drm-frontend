import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Đúng
import Sidebar from "./components/student/Sidebar";
import Header from "./components/student/Header";
import NoticeBar from "./pages/PgaesStudent/NoticeBar";
import ScoreInfo from "./pages/PgaesStudent/ScoreInfo";
import ScoreTable from "./pages/PgaesStudent/ScoreTable";
import ActionButtons from "./pages/PgaesStudent/ActionButtons";
import ConfirmationModal from "./pages/PgaesStudent/ConfirmationModal";

const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/");
    setShowModal(false);
  };

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
            <ActionButtons onSubmit={() => setShowModal(true)} />
          </article>
          {showModal && (
            <ConfirmationModal
              onConfirm={handleConfirm}
              onCancel={() => setShowModal(false)}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default MainLayout;
