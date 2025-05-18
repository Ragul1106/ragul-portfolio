import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.css";
// import { DiApple, DiAndroid } from "react-icons/di";
import { FaCode, FaDatabase, FaPython, FaReact } from "react-icons/fa";
// import { FaHtml5, AiOutlineApi , FaCode, FaDatabase, FaPython, FaReact, FaLaptopCode  } from "react-icons/fa";




const personalDetails = [
  {
    label: "Name",
    value: "Ragul .R",
  },
  {
    label: "Age",
    value: "26",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "ragul11699@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 9629496400",
  },
];

const jobSummary =
  "Motivated and enthusiastic Python Full Stack Developer with strong foundational skills in HTML, CSS, JavaScript, Python, Django, React.js, MySQL, and RESTful APIs. Proficient in using Git for version control and committed to writing clean, maintainable code. Eager to apply learned skills in real-world projects and contribute to a collaborative development environment. Quick to learn new technologies and adapt to development best practices.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            {/* <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div> */}

            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaCode size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaPython size={60} color="var(--yellow-theme-main-color)" />
              </div>

              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;