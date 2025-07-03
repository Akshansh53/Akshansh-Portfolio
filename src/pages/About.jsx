import "../components/Components.css";
import Profile from "./Profile.png";
import { motion } from "framer-motion";

export function About() {
  return (
    <>
      <div className="about">
        <motion.div
          className="aboutinfo"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1>Akshansh Verma</h1>
          <h3>Full Stack Developer</h3>
          <p>
            Hi, it's nice to meet you. I am a Full Stack Developer residing in Uttar Pradesh.
          </p>
          <a href="#projects">
            <button className="knowmore">Projects</button>
          </a>
        </motion.div>

        <motion.img
          className="profilepic"
          src={Profile}
          alt="Profile Picture"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        />
      </div>

      <motion.div
        className="arrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
      </motion.div>
    </>
  );
}
