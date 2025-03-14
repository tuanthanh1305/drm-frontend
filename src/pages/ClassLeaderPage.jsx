
import ScorePage from "../components/class-leader/ScorePage";
import Headers from "../components/class-leader/Headers";
import React from "react";
import Slidebar from "../components/class-leader/Slidebar";

const ClassLeader = () => {
  return (
    <>
      <main className="flex w-full min-h-screen max-sm:flex-col">
        <Slidebar />
        <section className="flex flex-col flex-1 max-sm:w-full">
          <Headers />
          <article className="p-5">
            <ScorePage />
          </article>
        </section>
      </main>
    </>
  );
};

export default ClassLeader;

