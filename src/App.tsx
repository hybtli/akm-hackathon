import React from "react";
import Dashboard from "./components/Dashboard";
import CommandInjection from "./components/Command-Injection";
import Navbar from "./components/Navbar";
import "./App.css";
import SocialMedias from "./components/SocialMedias";
import { Routes, Route, redirect } from "react-router-dom";

import Login from "./components/login";
import Home from "./components/Home";

function App() {
  const token = localStorage.getItem("token");

  const TokenCheck = () => {
    if (!token) {
      return <Login />;
    } else {
      return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen space-y-12">
      <Navbar />
      <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
        <SocialMedias />
        <Routes>
          <Route path="/dashboard" element={<TokenCheck />} />
        </Routes>
        <Routes>
          <Route path="/command-injection" element={<CommandInjection />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
