import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import SocialMedias from "./SocialMedias";
import { Route, Routes } from "react-router-dom";
import CommandInjection from "./Command-Injection";
import Login from "./login";
import Error from "./Error";
import { SnackbarProvider } from "notistack";
import Dashboard from "./Dashboard";

const Home = () => {
  const token = localStorage.getItem("token");

  const TokenCheck = () => {
    if (!token) {
      return <Login />;
    } else {
      return <Dashboard />;
    }
  };

  return (
    <>
      <SnackbarProvider>
        <div className="flex flex-col min-h-screen space-y-12">
          <Navbar />
          <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
            <Intro />
            <SocialMedias />
            <Routes>
              <Route path="/dashboard" element={<TokenCheck />} />
              <Route path="/command-injection" element={<CommandInjection />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Routes></Routes>
            <Routes></Routes>
            <Routes></Routes>
            <Routes></Routes>
          </main>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default Home;
