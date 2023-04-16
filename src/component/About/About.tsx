import React from "react";
import { DUMMY_TEXT } from "../../utility/text/dummyText";
import logo from "../../assets/star-wars-logo.png";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.sectionContainer}>
      <img src={logo} alt="Star wars" />
      {DUMMY_TEXT.map((text: string) => (
        <p key={text}>{text}</p>
      ))}
    </section>
  );
};

export default About;
