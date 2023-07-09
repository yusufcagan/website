import React from "react";
import Hero from "../../components/UI/Hero";
import Skills from "../../components/UI/Skills";

export default function Home() {
  return (
    <div className="dark:bg-zinc-700">
      <div className="bg-zinc-100 dark:bg-zinc-800">
        <Hero />
      </div>
      <div className="flex justify-center bg-white dark:bg-zinc-700">
        <Skills />
      </div>
    </div>
  );
}
