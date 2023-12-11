import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import Denied from "./Denied";

const CommandInjection = () => {
  const [ip, setIP] = useState<string>("");
  const [command, setCommand] = useState<string>("");
  const [blockedIP, setBlockIP] = useState<any>([]);
  const [block, setBlock] = useState<boolean>(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const getPublicIP = async () => {
    try {
      const response = await axios.get("https://api64.ipify.org?format=json");
      setIP(response.data.ip);
      return response.data.ip;
    } catch (error) {
      console.error("Error fetching public IP:", error);
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      const response = await axios
        .get("https://wafnodeback.onrender.com/blockedips")
        .then((response) => {
          setBlockIP(response.data);
        });
    })();
  }, []);

  useEffect(() => {
    const checkBlockedIP = () => {
      const userBlocked = blockedIP.some((item: any) => item === ip);
      setBlock(userBlocked);
    };

    checkBlockedIP();
  }, [blockedIP, ip]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ip = await getPublicIP();
    const response = await axios
      .post("https://wafnodeback.onrender.com/api/users", {
        message: command,
        ip: ip,
      })
      .then((response) => {
        enqueueSnackbar("Command have sent successfully ", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(error.blockType, { variant: "error" });
      });
    setCommand("");
  };

  if (block) {
    return <Denied message="Access Denied" />;
  }
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" id="waf">
      <p
        className="text-center mb-3"
        style={{
          fontFamily:
            '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
          color: "#64ffda",
          fontSize: "smaller",
          fontWeight: 400,
        }}
      >
        01. Injection Checker
      </p>
      <h2
        className="mb-4 text-4xl tracking-tight font-extrabold text-center"
        style={{ color: "#ccd6f6" }}
      >
        Get in Touch
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Interested in working together? Have a question about my work? Use the
        form below to check command.
      </p>
      <form action="#" className="space-y-8" onSubmit={handleFormSubmit}>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your command
          </label>
          <textarea
            id="message"
            rows={6}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg p-2.5 block w-full dark:bg-gray-700
            dark:placeholder-gray-400 dark:text-white"
            placeholder="Leave a command ..."
            onChange={(e) => setCommand(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-blue-500 sm:w-fit
          hover:bg-blue-600 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800
          dark:focus:ring-blue-900"
          >
            Send command
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommandInjection;
