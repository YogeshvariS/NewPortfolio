import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/111362569?s=400&u=4b7ed72f49cefd9e0eed14c2e38b561a160aa304&v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, I’m <span className="different">Yogeshvari Suryawanshi</span>, a{" "}
                <span className="different">Frontend-focused Full Stack Developer</span>{" "}
                with 2.5 years of experience building scalable and high-performance web
                applications. I specialize in creating responsive, user-centric interfaces
                and contributing to production-ready full-stack solutions with a strong
                focus on performance, usability, and clean architecture.
              </h4>
              <h4>Some of my interests outside of development :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading & Exploring Interesting Facts{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cooking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
