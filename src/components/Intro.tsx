import React from "react";
import Typed from "react-typed";

const Intro = () => {
  return (
    <section className="">
      <div
        className="mockup-code mt-5"
        style={{ backgroundColor: "#112240", color: "#f57dff" }}
      >
        <pre data-prefix=">" style={{ color: "#f57dff" }}>
          <code>
            <Typed strings={["AKM Hackathon ..."]} typeSpeed={70} />
          </code>
        </pre>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      ></div>
    </section>
  );
};

export default Intro;
