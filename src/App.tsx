import React, { useEffect, useState } from "react";
import CommandInjection from "./components/Command-Injection";
import Navbar from "./components/Navbar";
import "./App.css";
import SocialMedias from "./components/SocialMedias";
import { Routes, Route } from "react-router-dom";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

import Home from "./components/Home";
import axios from "axios";
import Denied from "./components/Denied";

const getPublicIP = async () => {
  try {
    const response = await axios.get("https://api64.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("Error fetching public IP:", error);
    return null;
  }
};

const blockedIPs = async () => {
  await axios
    .get("https://wafnodeback.onrender.com/api/blockedips")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      enqueueSnackbar(error.blockType, { variant: "error" });
    });
};

function App() {
  const [blockedIPs, setBlockedIPs] = useState<any>([]);
  const [IP, setIP] = useState<string>("");

  useEffect(() => {
    blockedIPs.then((ips: any) => setBlockedIPs(ips));
  }, [blockedIPs]);

  const isIPBlocked = () => {
    return blockedIPs.includes(getPublicIP());
  };

  if (isIPBlocked()) {
    return <Denied message="Access Denied" />;
  } else {
    return <Home />;
  }
}

export default App;
