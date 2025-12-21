import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiChakraui,
  SiExpress,
  SiMaterialui,
  SiTailwindcss,
  SiNpm,
  SiNetlify,
  SiPostman,
  SiJest,
  SiGit,
  SiGitlab,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <div className="section main" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>

      <div className="techsection">
        {/* ⭐ Core MERN + Language */}
        <div>
          <SiJavascript />
          <h5>JavaScript</h5>
        </div>
        <div>
          <SiTypescript />
          <h5>TypeScript</h5>
        </div>
        <div>
          <FaReact />
          <h5>React.js</h5>
        </div>
        <div>
          <SiRedux />
          <h5>Redux</h5>
        </div>
        <div>
          <FaNodeJs />
          <h5>Node.js</h5>
        </div>
        <div>
          <SiExpress />
          <h5>Express.js</h5>
        </div>
        <div>
          <DiMongodb />
          <h5>MongoDB</h5>
        </div>

        {/* 🎨 Frontend UI & Styling */}
        <div>
          <SiHtml5 />
          <h5>HTML5</h5>
        </div>
        <div>
          <DiCss3 />
          <h5>CSS3</h5>
        </div>
        <div>
          <SiTailwindcss />
          <h5>Tailwind CSS</h5>
        </div>
        <div>
          <BsBootstrap />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <SiMaterialui />
          <h5>Material UI</h5>
        </div>
        <div>
          <SiChakraui />
          <h5>Chakra UI</h5>
        </div>

        {/* ☁️ Backend / Cloud */}
        <div>
          <FaAws />
          <h5>AWS (S3)</h5>
        </div>
        <div>
          <SiPostman />
          <h5>Postman</h5>
        </div>

        {/* 🧪 Testing */}
        <div>
          <SiJest />
          <h5>Jest</h5>
        </div>

        {/* 🔧 Version Control */}
        <div>
          <SiGit />
          <h5>Git</h5>
        </div>
        <div>
          <VscGithub />
          <h5>GitHub</h5>
        </div>
        <div>
          <SiGitlab />
          <h5>GitLab</h5>
        </div>

        {/* 📦 Package & Deployment */}
        <div>
          <SiNpm />
          <h5>NPM</h5>
        </div>
        <div>
          <SiNetlify />
          <h5>Netlify</h5>
        </div>
      </div>
    </div>
  );
};
