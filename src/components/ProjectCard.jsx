import "../components/Components.css"
import { motion, AnimatePresence } from "framer-motion";

import Propertease from "../assets/Projects/propertease.png"
import { useState,useEffect } from "react"
import {Heading} from "./Heading";
import html from "../assets/Skills/html.png";
import css from "../assets/Skills/css.png";
import javascript from "../assets/Skills/js.png";
import typescript from "../assets/Skills/typescript.png";
import react from "../assets/Skills/react.png";
import redux from "../assets/Skills/redux.png";
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
import postman from "../assets/Skills/postman.png"
import burpsuite from "../assets/Skills/burpsuite.png"



export function ProjectCard({props}){
  
    let [showModal,setshowModal]=useState(false);
     const techImages = {
  html,
  css,
  typescript,
  javascript,
  react,
  redux,
  nextjs,
  bootstrap,
  tailwind,
  nodejs,
  expressjs,
  mongo,
  postgresql,
  docker,
  kubernetes,
  kafka,
  aws,
  git,
  postman,
  burpsuite,
};

    useEffect(() => {
  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // Cleanup if component unmounts
  return () => {
    document.body.style.overflow = "auto";
  };
}, [showModal]);

    return (
    <div className="project-card">
        <img src={props.image} alt="" />
        <div className="readmore">
            <span>{props.title}</span>
            <button onClick={()=>setshowModal(true)}>Read More</button>
        </div>
        <p>{props.minidesc}</p>
        {showModal ? (
  <motion.div
     className="allDetails"
  initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
  animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
  exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
    
  >
    <div
      className="detail-top"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="detail-heading">
        <Heading prop={props.title} />
      </div>
      <i
        style={{ fontSize: "2.5vw" }}
        className="fa-solid fa-xmark"
        onClick={() => setshowModal(false)}
      ></i>
    </div>

    <img src={props.image} alt="" />
    <div className="minidesc">
      <h2>{props.minidesc}</h2>
    </div>

    <div className="type detail-head">
      <div>
        <h2 style={{ width: "15vw" }}>Type:</h2>
      </div>
      <div>
        <h4>{props.type}</h4>
      </div>
    </div>

    <div className="tech-stack detail-head">
      <div>
        <h2 style={{ width: "15vw" }}>Tech Stack:</h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {props.tech.map((tech) => (
          <div
            key={tech}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={techImages[tech]}
              alt={tech}
              style={{ height: "30px", marginBottom: "4px" }}
            />
            <span style={{ color: "white", fontSize: "0.9rem" }}>
              {tech.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="features detail-head">
      <div>
        <h2 style={{ width: "15vw" }}>Features:</h2>
      </div>
      <div>
        {props.features.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </div>
    </div>

    <div className="go-link">
      <a href={props.github} target="_blank">
      <button>
        <i className="fa-brands fa-github"></i> Code
      </button>
      </a>
      <a href={props.live} target="_blank">
      <button>
        <i className="fa-solid fa-eye"></i> Demo
      </button>
      </a>
    </div>
  </motion.div>
) : (
  ""
)}

    </div>
    )
}