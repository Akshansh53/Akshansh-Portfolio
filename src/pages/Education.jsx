import { Heading } from "../components/Heading";
import { EducationCard } from "../components/EducationCard";
import "../components/Components.css";
import { motion } from "framer-motion";

export function Education() {
  return (
    <>
      <motion.div
        className="education"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Heading prop="Education & Internships" />

        <div className="educationpage">
          {[{
            start: "2025",
            end: "Present",
            course: "Full Stack Development",
            institute: "100xDev",
            description: "I am currently learning Full Stack Development in Cohort 2.0",
            align: "left"
          },
          {
            start: "2022",
            end: "2025",
            course: "BCA",
            institute: "KMC Language University",
            description: "An undergraduate Computer Engineering course covering hardware, software, and applications.",
            align: "right"
          },
          {
            start: "2021",
            end: "2022",
            course: "12th",
            institute: "R.K. Senior Secondary Lucknow",
            description: "Science (PCM)",
            align: "left"
          }].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <EducationCard props={edu} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
