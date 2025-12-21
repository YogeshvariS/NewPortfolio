import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack MERN Developer",
          "React & Node.js Specialist",
          "Building Scalable Web Applications",
          "Full Stack Engineer with AWS Experience",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};
