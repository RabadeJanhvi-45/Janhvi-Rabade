import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Janhvi Rabade</h1>
        <p className={styles.description}>
          A passionate technology enthusiast and problem-solver. I love turning ideas into impactful software solutions. With a focus on innovation and real-world applications, I strive to make a difference through code.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:janhvirabade04@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="hero/JANHVI RABADE.pdf" // Correct file path for your resume
            className={styles.downloadBtn}
            download="Janhvi_Rabade_Resume.pdf" // Ensure the filename ends with .pdf
          >
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Coding Me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
