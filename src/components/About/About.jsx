import React from "react";
import styles from "./About.module.css";
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiSpringboot, SiSolidity, SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbSql } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";

export const About = () => {
  const techs = [
    { icon: <FaJava color="#f89820" />, name: "Java" },
    { icon: <FaPython color="#3776ab" />, name: "Python" },
    { icon: <TbSql color="#00758f" />, name: "SQL" },
    { icon: <FaHtml5 color="#e34f26" />, name: "HTML" },
    { icon: <FaCss3Alt color="#1572b6" />, name: "CSS" },
    { icon: <FaJs color="#f7df1e" />, name: "JavaScript" },
    { icon: <FaReact color="#61dafb" />, name: "React" },
    { icon: <SiNextdotjs color="#000" />, name: "Next.js" },
    { icon: <GrMysql color="#00758f" />, name: "MySQL" },
    { icon: <SiMongodb color="#47a248" />, name: "MongoDB" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    { icon: <SiSpringboot color="#6db33f" />, name: "Spring Boot" },
    { icon: <FaNodeJs color="#43853d" />, name: "Node.js" },
    { icon: <SiSolidity color="#363636" />, name: "Solidity" },
    { icon: <FaEthereum color="#3c3c3d" />, name: "Ethereum" },
    { icon: <RiWallet3Line color="#f6851b" />, name: "MetaMask" },
  ];

  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.techGridContainer}>
        {techs.map((tech, index) => (
          <div className={styles.techCard} key={index}>
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
