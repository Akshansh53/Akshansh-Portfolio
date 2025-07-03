import Resume from "../assets/resume.png";
import Envelope from "../assets/envelope.png";
import "../components/Components.css";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

export function ResumeLayout() {
  return (
    <div className="ResumeLayout">

      <motion.div
        className="resume"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={Resume} alt="Resume" />
      </motion.div>

      <div className="envelope">
        <a
          href="https://drive.google.com/file/d/1iTCJh8Z67OVZmuU2XxTWM_2xBYqm2kBD/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Envelope} alt="Envelope" />
        </a>
      </div>

    </div>
  );
}
