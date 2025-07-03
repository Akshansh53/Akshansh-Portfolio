import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Social } from "../components/Social";
import { ButtonBox } from "../components/ButtonBox";
import "../components/Components.css";
import { useState } from "react";
import { motion } from "framer-motion";

export function GetInTouch() {
  let [name, setName] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = () => {
    const email = "akshanshverma53@gmail.com";
    const mailSubject = encodeURIComponent(subject || "New Message from Portfolio");
    const mailBody = encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${mailSubject}&body=${mailBody}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <>
      <Heading prop="Get in Touch" />

      <motion.div 
        className="touch-layout"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="contact-form"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <InputBox fn={(e) => setName(e.target.value)} props={{ placeholder: "Name" }} />
          <InputBox fn={(e) => setSubject(e.target.value)} props={{ placeholder: "Subject" }} />
          <InputBox fn={(e) => setMessage(e.target.value)} props={{ placeholder: "Message" }} />
          <div onClick={handleSubmit}>
            <ButtonBox props="Submit" />
          </div>
        </motion.div>

        <div className="social">
          {[
            { class: "fa-solid fa-phone", title: "Click Here for Phone Number", label: "+91 9899062440", link: "tel:+919899062440" },
            { class: "fa-solid fa-envelope", title: "Click Here for Email", label: "akshanshverma53@gmail.com", link: "https://mail.google.com/mail/?view=cm&fs=1&to=akshanshverma53@gmail.com" },
            { class: "fa-brands fa-linkedin", title: "Click Here for LinkedIn", label: "LinkedIn", link: "https://www.linkedin.com/in/akshansh-verma-b88082293/" },
            { class: "fa-brands fa-x-twitter", title: "Click Here for X", label: "X-Twitter", link: "https://x.com/Akshansh151894" },
            { class: "fa-brands fa-github", title: "Click Here for Github", label: "GitHub", link: "https://github.com/Akshansh53" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Social props={item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
