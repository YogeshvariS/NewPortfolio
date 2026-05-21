import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          {/* 💼 Eccentrix Innovation - StyleForge */}
          <VerticalTimelineElement
            date={"Sept 2025 - Dec 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Eccentrix Innovation Pvt. Ltd. – Hyderabad
            </h4>
            <p>
             Contributed to <b>StyleForge</b>, a fashion e-commerce platform with 3D customization features, involving full-stack development, REST API integration, admin CMS modules, AWS S3 integration, and performance optimization.
            </p>
          </VerticalTimelineElement>

          {/* 💼 Techie Source */}
          <VerticalTimelineElement
            date={"May 2023 - Aug 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Techie Source Pvt. Ltd. – Indore
            </h4>
            <p>
              Developed web and mobile features using React.js, Redux, Node.js, and MongoDB, including authentication flows, API integration, reusable components, social modules, and API testing with Jest and Postman.
            </p>
          </VerticalTimelineElement>

          {/* 🎓 Universal Informatics */}
          <VerticalTimelineElement
            date={"Dec 2022 - May 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Development Training
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Universal Informatics
            </h4>
            <p>
              Completed industry-oriented training in full-stack web development with focus on the MERN stack, REST APIs, data structures, and real-world application development.
            </p>
          </VerticalTimelineElement>

          {/* 🎓 B.Tech */}
          <VerticalTimelineElement
            date={"July 2018 - June 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology, IT
            </h3>
            <p>Lakshmi Narain College of Technology, Indore</p>
          </VerticalTimelineElement>

          {/* 🎓 Higher Secondary */}
          <VerticalTimelineElement
            date={"2016 - 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{ borderRight: "16px solid rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary – Science
            </h3>
            <p>Govt. Higher Secondary School, Amla</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};
