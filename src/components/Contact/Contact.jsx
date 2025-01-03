import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:janhvirabade04@gmail.com">janhvirabade04@gmail.com</a>
        </li>
        </ul>
        </div>
        <div className={styles.text}>
        <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/RabadeJanhvi-45">RabadeJanhvi-45</a>
        </li>
        </ul>
        </div>
        <div className={styles.text}>
        <ul className={styles.links}> <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/janhvi-rabade/">linkedin.com/janhvi-rabade</a>
        </li></ul>
        
        </div>
        {/* <div>
        <ul className={styles.links}> <li className={styles.link}></li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/RabadeJanhvi-45">RabadeJanhvi-45</a>
        </li>
      </ul>
      </div> */}
     
      {/* <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul> */}
    </footer>
  );
};
