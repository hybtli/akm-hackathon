import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const getPublicIP = async () => {
    try {
      const response = await axios.get("https://api64.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Error fetching public IP:", error);
      return null;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
        02. File Upload Checker
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
        <div className="flex justify-center">
          <input
            type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
