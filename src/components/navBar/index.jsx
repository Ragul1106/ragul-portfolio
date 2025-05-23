import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./styles.css";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <NavLink to="/" className="navbar__container__logo">
            <FaReact size={30} />
          </NavLink>
        </div>

        <ul
          className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "navbar__container__menu__item__links active"
                    : "navbar__container__menu__item__links"
                }
                onClick={() => setToggleIcon(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
