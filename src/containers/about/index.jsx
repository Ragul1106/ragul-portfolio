import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.css";
import { FaCode, FaDatabase, FaPython, FaReact } from "react-icons/fa";

const personalDetails = [
  { label: "Name", value: "Ragul .R" },
  { label: "Age", value: "26" },
  { label: "Address", value: "Sirkazhi" },
  { label: "Email", value: "ragul11699@gmail.com" },
  { label: "Contact No", value: "+91 9629496400" },
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
          <h3>Python FullStack Developer</h3>
          <p>{jobSummary}</p>

          <h3 className="personalInformationHeaderText">Personal Information</h3>
          <ul>
            {personalDetails.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div><FaCode size={60} color="var(--yellow-theme-main-color)" /></div>
            <div><FaPython size={60} color="var(--yellow-theme-main-color)" /></div>
            <div><FaReact size={60} color="var(--yellow-theme-main-color)" /></div>
            <div><FaDatabase size={60} color="var(--yellow-theme-main-color)" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
