import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import profileImage from "../../assets/Ragul.png";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__content-wrapper">
        <div className="home__image-wrapper">
          <img src={profileImage} alt="Ragul" className="home__image" />
        </div>

        <div className="home__text-wrapper">
          <h1>
            Hello, I'm Ragul
            <br />
            FullStack Developer
          </h1>

          <div className="home__social-icons">
            <a
              href="https://linkedin.com/in/ragul-r-9928aa211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ragul1106"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/ragul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{ transform: "translateY(100px)", opacity: 0 }}
            end={{ transform: "translateY(0)", opacity: 1 }}
          >
            <div className="home__contact-me">
              <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Home;
