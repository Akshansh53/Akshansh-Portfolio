import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import propertease from "../assets/Projects/propertease.png";
import eazypay from "../assets/Projects/eazypay.png"
import cara from "../assets/Projects/cara.png"
import { motion } from "framer-motion"; 

export function Projects() {
    const project_array=[
        {
                        image: propertease,
                        title: "PropertEase",
                        minidesc: "A Property Listing website in which user can create account,listings",
                        type: "Blog website created by self by using MERN Stack (Indivisual Project)",
                        tech: ["mongo", "expressjs", "bootstrap", "nodejs"],
                        github:"https://github.com/Akshansh53/PropertEase--Property-Selling-Platform",
                        live:"https://propertease-property-selling-platform.onrender.com/",
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
                    },
    {
    image: eazypay, 
    title: "EazyPay",
    minidesc: "A Payment Platform where users can register, transfer money, and manage their profile securely.",
    type: "Payment website created by self using MERN Stack (Individual Project)",
    tech: ["mongo", "expressjs", "react", "nodejs"],
    github:"#",
    live:"#",
    features: [
        "A user can Sign in or Sign up with email and password.",
        "A user can Update their profile details (name, email, UPI ID, password).",
        "A user can View their account balance.",
        "A user can Transfer money to other users by searching them by name or email.",
        "A user can View a list of all registered users.",
        "A user can View transaction history for better financial tracking.",
        "A user can See a summary of sent and received transactions.",
        "A user can Securely manage sensitive information with basic validation and encryption.",
        "The platform ensures that users can only manage their own profiles and funds."
    ]
},
    {
    image: cara,  // make sure to import the image: import cara from "../assets/Projects/cara.png";
    title: "Cara - Ecommerce",
    minidesc: "A Responsive Ecommerce Website Home Page built using pure HTML, CSS, and JavaScript.",
    type: "Static Ecommerce Home Page created by self (Individual Project)",
    tech: ["html", "css", "javascript"],
    features: [
        "A modern, responsive home page for an ecommerce website.",
        "Includes a stylish navigation bar with logo and menu links.",
        "Features a full-width hero section with call-to-action button.",
        "Showcases featured product categories with images.",
        "Includes popular product sections with hover effects.",
        "Has a simple newsletter subscription section.",
        "Includes a clean footer with social media icons and links.",
        "Responsive design works seamlessly on desktop, tablet, and mobile devices.",
        "Built entirely using vanilla HTML, CSS, and JavaScript without any frameworks."
    ]
}
               
    ]
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
            {project_array.map((arr)=>{
                return (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <ProjectCard props={arr}/>
                </motion.div>
                )
            })}
            </motion.div>
        </div>
    );
}
