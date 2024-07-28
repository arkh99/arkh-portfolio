"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDatabase,
  FaLinux,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorum!",
  info: [
    {
      fieldName: "Name",
      filedValue: "Alireza Khoshnami",
    },
    {
      fieldName: "Phone",
      filedValue: "+1 613 620 3221",
    },
    {
      fieldName: "Email",
      filedValue: "arkh919@gmail.com",
    },
    {
      fieldName: "Education",
      filedValue:
        "Algonquin college, Web development and Internet Applications",
    },
    {
      fieldName: "Technologies",
      filedValue: "Full stack dev, UX/UX design",
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorum!",
  items: [
    {
      company: "Error 404",
      position: "Full stack developer",
      duration: "2024 - Present",
    },
    {
      company: "Error 404",
      position: "Full stack developer",
      duration: "2024 - Present",
    },
    {
      company: "Error 404",
      position: "Full stack developer",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorum!",
  items: [
    {
      institution: "Algonquin College, School of Advanced Technology",
      degree: "College Diploma",
      duration: "2024 - Present",
    },
    {
      institution: "Udemy",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "The Complete JavaScript Bootcamp",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "The Complete React Bootcamp",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDatabase />,
      name: "Html 5",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
              <Tabs>
                  <TabsList>
                      <TabsTrigger>Experience</TabsTrigger>
                      <TabsTrigger>Education</TabsTrigger>
                      <TabsTrigger>Skills</TabsTrigger>
                      <TabsTrigger>About me</TabsTrigger>
                  </TabsList>
            </Tabs>    
        </div>
    </motion.div>
  );
};

export default Resume;
