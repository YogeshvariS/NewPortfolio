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
                Hi Everyone, I am{" "}
                <span className="different">Yogeshvari Suryawanshi </span> a{" "}
                <span className="different"> Full Stack MERN Developer </span>
                with 2.5 years of professional experience in building scalable,
                high-performance web applications. I specialize in developing
                modern, responsive user interfaces with React.js and delivering
                robust backend solutions using Node.js, Express, and MongoDB. I
                have hands-on experience with REST API development, AWS S3
                integration, performance optimization, and SEO. I enjoy
                collaborating with cross-functional teams to build reliable,
                user-focused, and production-ready applications.
              </h4>
              <h4>Some of my interests outside of development :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Facts{" "}
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
