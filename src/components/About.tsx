import React from "react";
import { Box } from "@mui/material";

const About = () => {
  const languages = [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Java" },
    { name: "C" },
    { name: "Assembly" },
    { name: "HTML" },
    { name: "CSS" },
  ];

  const tools = [
    { name: "Git" },
    { name: "Github" },
    { name: "Bash" },
    { name: "Dev Azure" },
    { name: "MongoDB" },
  ];

  const frameworks = [{ name: "React" }, { name: "NodeJS" }];

  return (
    <Box className="about" id="about">
      <div className="about-part-I">
        <p className="fs-2 fw-bold">
          <span
            style={{
              fontFamily:
                '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
              color: "#64ffda",
              fontSize: "smaller",
              fontWeight: 400,
            }}
          >
            00.
          </span>{" "}
          About Me
        </p>
      </div>
    </Box>
  );
};

export default About;
