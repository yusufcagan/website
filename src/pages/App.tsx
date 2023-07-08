import React from "react";
import Header from "../components/Header/Header";
import "../styles/App.css";
import Footer from "../components/Footer/Footer";
//import Hero from "../components/UI/Hero";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
        {/*<Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
