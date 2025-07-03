import { Heading } from "../components/Heading";
import html from "../assets/Skills/html.png";
import css from "../assets/Skills/css.png";
import js from "../assets/Skills/js.png";
import typescript from "../assets/Skills/typescript.png";
import react from "../assets/Skills/react.png";
// import reduxIcon from "../assets/Skills/redux.png";
import nextjs from "../assets/Skills/nextjs.png";
import bootstrap from "../assets/Skills/bootstrap.png";
import tailwind from "../assets/Skills/tailwind.png";
import nodejs from "../assets/Skills/nodejs.png";
import expressjs from "../assets/Skills/expressjs.png";
import mongo from "../assets/Skills/mongo.png";
import postgresql from "../assets/Skills/postgresql.png";
import docker from "../assets/Skills/docker.png";
import kubernetes from "../assets/Skills/kubernetes.png";
import kafka from "../assets/Skills/kafka.png";
import aws from "../assets/Skills/aws.png";
import git from "../assets/Skills/git.png";
import postman from "../assets/Skills/postman.png";
import burpsuite from "../assets/Skills/burpsuite.png";

import "../components/Components.css";
import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: typescript, name: "TypeScript" },
    { img: react, name: "React" },
    { img: nextjs, name: "Next.js" },
    { img: bootstrap, name: "Bootstrap" },
    { img: tailwind, name: "Tailwind" },
    { img: nodejs, name: "Node.js" },
    { img: expressjs, name: "Express.js" },
    { img: mongo, name: "MongoDB" },
    { img: postgresql, name: "PostgreSQL" },
    { img: docker, name: "Docker" },
    { img: aws, name: "AWS" },
    { img: git, name: "Git" },
  ];

  return (
    <>
      <Heading prop="Skills and Interests"></Heading>

      <motion.div
        className="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skillsbox"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
