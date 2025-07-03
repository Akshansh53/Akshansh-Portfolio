import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import propertease from "../assets/Projects/propertease.png";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

export function Projects() {
    return (
        <div id="projects">
            <Heading prop="Projects" />

            <motion.div
                className="projects"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <ProjectCard props={{
                        image: propertease,
                        title: "PropertEase",
                        minidesc: "A Property Listing website in which user can create account,listings",
                        type: "Blog website created by self by using MERN Stack (Indivisual Project)",
                        tech: ["mongo", "expressjs", "react", "nodejs"],
                        features: [
                            "A user can Sign in or Sign up.",
                            "A user can List a property for sale or rent.",
                            "A user can View all listed properties.",
                            "A user can Filter or search properties by location, price, or type.",
                            "A user can View property details (images, description, price, contact info).",
                            "A user can Edit their own property listings.",
                            "A user can Delete their own property listings.",
                            "A user can Edit their profile and manage personal information.",
                            "A user can See other users' listings but only manage their own."
                        ]
                    }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <ProjectCard props={{
                        image: propertease,
                        title: "PropertEase",
                        minidesc: "A Property Listing website in which user can create account,listings",
                        type: "Blog website created by self by using MERN Stack (Indivisual Project)",
                        tech: ["mongo", "expressjs", "react", "nodejs"],
                        features: [
                            "A user can Sign in or Sign up.",
                            "A user can List a property for sale or rent.",
                            "A user can View all listed properties.",
                            "A user can Filter or search properties by location, price, or type.",
                            "A user can View property details (images, description, price, contact info).",
                            "A user can Edit their own property listings.",
                            "A user can Delete their own property listings.",
                            "A user can Edit their profile and manage personal information.",
                            "A user can See other users' listings but only manage their own."
                        ]
                    }} />
                </motion.div>
<motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <ProjectCard props={{
                        image: propertease,
                        title: "PropertEase",
                        minidesc: "A Property Listing website in which user can create account,listings",
                        type: "Blog website created by self by using MERN Stack (Indivisual Project)",
                        tech: ["mongo", "expressjs", "react", "nodejs"],
                        features: [
                            "A user can Sign in or Sign up.",
                            "A user can List a property for sale or rent.",
                            "A user can View all listed properties.",
                            "A user can Filter or search properties by location, price, or type.",
                            "A user can View property details (images, description, price, contact info).",
                            "A user can Edit their own property listings.",
                            "A user can Delete their own property listings.",
                            "A user can Edit their profile and manage personal information.",
                            "A user can See other users' listings but only manage their own."
                        ]
                    }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                <ProjectCard props={{
                        image: propertease,
                        title: "PropertEase",
                        minidesc: "A Property Listing website in which user can create account,listings",
                        type: "Blog website created by self by using MERN Stack (Indivisual Project)",
                        tech: ["mongo", "expressjs", "react", "nodejs"],
                        features: [
                            "A user can Sign in or Sign up.",
                            "A user can List a property for sale or rent.",
                            "A user can View all listed properties.",
                            "A user can Filter or search properties by location, price, or type.",
                            "A user can View property details (images, description, price, contact info).",
                            "A user can Edit their own property listings.",
                            "A user can Delete their own property listings.",
                            "A user can Edit their profile and manage personal information.",
                            "A user can See other users' listings but only manage their own."
                        ]
                    }} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                <ProjectCard props={{
                        image: propertease,
                        title: "PropertEase",
                        minidesc: "A Property Listing website in which user can create account,listings",
                        type: "Blog website created by self by using MERN Stack (Indivisual Project)",
                        tech: ["mongo", "expressjs", "react", "nodejs"],
                        features: [
                            "A user can Sign in or Sign up.",
                            "A user can List a property for sale or rent.",
                            "A user can View all listed properties.",
                            "A user can Filter or search properties by location, price, or type.",
                            "A user can View property details (images, description, price, contact info).",
                            "A user can Edit their own property listings.",
                            "A user can Delete their own property listings.",
                            "A user can Edit their profile and manage personal information.",
                            "A user can See other users' listings but only manage their own."
                        ]
                    }} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                <ProjectCard props={{
                        image: propertease,
                        title: "PropertEase",
                        minidesc: "A Property Listing website in which user can create account,listings",
                        type: "Blog website created by self by using MERN Stack (Indivisual Project)",
                        tech: ["mongo", "expressjs", "react", "nodejs"],
                        features: [
                            "A user can Sign in or Sign up.",
                            "A user can List a property for sale or rent.",
                            "A user can View all listed properties.",
                            "A user can Filter or search properties by location, price, or type.",
                            "A user can View property details (images, description, price, contact info).",
                            "A user can Edit their own property listings.",
                            "A user can Delete their own property listings.",
                            "A user can Edit their profile and manage personal information.",
                            "A user can See other users' listings but only manage their own."
                        ]
                    }} />
                </motion.div>


                {/* ➕ Repeat same pattern for all ProjectCards */}
            </motion.div>
        </div>
    );
}
