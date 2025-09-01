import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import ShortlistedTeams from "./components/ShortlistedTeams";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortlisted-teams" element={<ShortlistedTeams />} />
      </Routes>
      <Footer />
    </Router>
  );
}