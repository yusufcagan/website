import React from "react";
import Hero from "../../components/UI/Hero";
import Skills from "../../components/UI/Skills";

export default function Home() {
  return (
    <div>
      <div className="bg-zinc-100">
        <Hero />
      </div>
      <div className="m-10">
        <Skills />
      </div>
    </div>
  );
}
