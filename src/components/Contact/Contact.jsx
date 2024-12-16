import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/m.png")} alt="Email icon"/>
          <a href="mailto:charanchelluboina7@gmail.com"><p>charanchelluboina7@gmail.com</p></a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/i.png")} alt="insta icon" />
          <a href="https://www.instagram.com/charan__x7/"><p>instagram.com/charan__x7</p></a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/g.png")} alt="Github icon" />
          <a href="https://github.com/Charanx7"><p>github.com/charanx7</p></a>
        </li>
      </ul>
    </footer>
  );
};
