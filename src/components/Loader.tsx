import React from "react";
import Typed from "react-typed";

const Loader = () => {
  return (
    <div className="loader">
      <Typed strings={["Welcome . . ."]} typeSpeed={65} />
    </div>
  );
};

export default Loader;
