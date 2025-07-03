import { Heading } from "../components/Heading";
import { AboutCard } from "../components/AboutCard";
import { motion } from "framer-motion";

export function Readmore() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
      >
        <Heading prop="About Me"></Heading>
        <AboutCard
          props={{
            quote: "Life always begins with one step outside of your comfort zone.",
            author: "—— Shannon L. Alder",
            bio: "I am currently learning Full Stack Web Development & DevOps in Cohort 2.0 at 100xdev by Harkirat Singh. I am passionate about solving real-world problems and actively looking for opportunities in the field of Web Development and Software Engineering."
          }}
        />
      </motion.div>
    </>
  );
}
