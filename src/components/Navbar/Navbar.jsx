import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/nav/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img src={logo} alt="Janhvi Rabade" />
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={
              menuOpen
                ? "/assets/nav/closeIcon.png"
                : "/assets/nav/menuIcon.png"
            }
            alt="menu-button"
          />
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#certificates">Certifications</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
