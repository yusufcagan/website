import React from "react";
import Header from "../components/Header/Header";
import "../styles/App.css";
import Footer from "../components/Footer/Footer";
import Hero from "../components/UI/Hero";

export default function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
