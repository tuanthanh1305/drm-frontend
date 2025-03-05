import React from "react";
import Sidebar from "../components/class-leader/sidebar";
import Header from "../components/class-leader/header";
import TableSection from "../components/class-leader/table";

function Dashboard() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <main className="flex min-h-screen max-sm:flex-col">
        <section className="flex-1 bg-white">
          <TableSection />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
