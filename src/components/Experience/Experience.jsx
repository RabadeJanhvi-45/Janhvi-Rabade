import React, { useState } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import Collapse from 'react-collapse';

export const Experience = () => {
  const [openSection, setOpenSection] = useState("hackathons");

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const getToggleSymbol = (section) => {
    return openSection === section ? "-" : "+";
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.dropdownContainer}>
          {/* Hackathon Section */}
          <div className={styles.dropdown} onClick={() => handleToggle("hackathons")}>
            <h3 className={styles.dropdownTitle}>
              Hackathons <span className={styles.toggleSymbol}>{getToggleSymbol("hackathons")}</span>
            </h3>
          </div>
          <Collapse isOpened={openSection === "hackathons"}>
            <ul className={styles.history}>
              {history.hackathons.map((historyItem, id) => (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => (
                        <li key={id}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </li>
              ))}
            </ul>
          </Collapse>

          {/* Volunteer Section */}
          <div className={styles.dropdown} onClick={() => handleToggle("volunteers")}>
            <h3 className={styles.dropdownTitle}>
            Volunteerships <span className={styles.toggleSymbol}>{getToggleSymbol("volunteers")}</span>
            </h3>
          </div>
          <Collapse isOpened={openSection === "volunteers"}>
            <ul className={styles.history}>
              {history.volunteers.map((historyItem, id) => (
                <li key={id} className={styles.historyItem}>
                 
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => (
                        <li key={id}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </Collapse>

          {/* Events Organized Section */}
          <div className={styles.dropdown} onClick={() => handleToggle("eventsOrganized")}>
            <h3 className={styles.dropdownTitle}>
              Events Organized <span className={styles.toggleSymbol}>{getToggleSymbol("eventsOrganized")}</span>
            </h3>
          </div>
          <Collapse isOpened={openSection === "eventsOrganized"}>
            <ul className={styles.history}>
              {history.eventsOrganized.map((historyItem, id) => (
                <li key={id} className={styles.historyItem}>
                  
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => (
                        <li key={id}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </section>
  );
};
