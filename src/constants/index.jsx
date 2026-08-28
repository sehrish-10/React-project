import project1 from "../assets/project1.webp"
import project2 from "../assets/project2.webp"
import project3 from "../assets/project3.webp"
import project4 from "../assets/project4.webp"
import project5 from "../assets/project5.webp"
import project6 from "../assets/project6.webp"
import personImage from "../assets/testimonial.webp"
import personImage2 from "../assets/testimonial2.webp"

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiCodeSSlashLine,
  RiBootstrapLine,
  RiGitBranchLine,
  RiVercelLine,
} from "@remixicon/react"



// NAVIGATION
export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
]


// PROFILE
export const PROFILE = {
  name: "Sehrish Bibi",
  role: "Frontend Developer",
  subheading:
    "I'm a Computer Science student and frontend developer who enjoys turning ideas into clean, responsive, and user-friendly websites. I love learning new technologies and building projects that bring creative ideas to life.",
}


// PROJECTS
export const PROJECTS = [
  {
    id: 1,
    title: "Leaf & Bloom",
    description:
      "A responsive plant store landing page with a clean and modern design, built to provide a simple and engaging browsing experience.",
    techStack: ["HTML", "CSS"],
    imgSrc: project2,
    github: "https://github.com/sehrish-10/Landing-page",
    live:  "https://landing-page-seven-murex-67.vercel.app/",
  },

  {
    id: 2,
    title: "Tic-Tac-Toe",
    description:
      "An interactive Tic-Tac-Toe game featuring dynamic gameplay, player interactions, and JavaScript-based game logic.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project4,
    github: "https://github.com/sehrish-10/Tic-Tac-Toe-Game",
    live: "http://tic-tac-toe-game-lyart-rho.vercel.app",
  },

  {
    id: 3,
    title: "Rock Paper Scissors",
    description:
      "A fun and interactive Rock Paper Scissors game with a responsive interface and JavaScript-powered game logic.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project3,
    github: "https://github.com/sehrish-10/Rock-Paper-scissors-Game",
    live: "http://rock-paper-scissors-game-mu-three.vercel.app",
  },

  {
    id: 4,
    title: "Currency Converter",
    description:
      "A currency conversion website that uses an API to retrieve exchange rates and convert currencies dynamically.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    imgSrc: project6,
    github: "https://github.com/sehrish-10/Javascript-Full-Course",
    live: "http://javascript-full-course.vercel.app",
  },

  {
    id: 5,
    title: "Digital Journal",
    description:
      "A creative digital journal website with a simple and aesthetic interface for writing and organizing personal entries.",
    techStack: ["HTML", "CSS"],
    imgSrc: project1,
    github: "https://github.com/sehrish-10/CSS-and-HTML-project",
    live: "http://css-and-html-project-hazel.vercel.app",
  },

  {
    id: 6,
    title: "Glow & Beauty",
    description:
      "A responsive beauty and skincare website designed with Bootstrap, featuring a modern layout and visually appealing sections.",
    techStack: ["HTML", "CSS", "Bootstrap"],
    imgSrc: project5,
    github: "https://github.com/sehrish-10/Bootstrap",
    live: "http://bootstrap-ecru-phi.vercel.app",
  },
]

// SKILLS
export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },

  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },

  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },

  {
    name: "Bootstrap",
    icon: <RiBootstrapLine className="text-purple-500" />,
  },

  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },

  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },

  {
    name: "Git & GitHub",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },

  {
    name: "Vercel",
    icon: <RiVercelLine className="text-white" />,
  },
]

// WORK EXPERIENCE
export const EXPERIENCES = [
  {
    role: "Frontend Developer Intern",
    company: "Encova Solution Pvt Limited",
    description:
      "Worked on developing responsive web interfaces using modern frontend technologies.",
    techStack: ["HTML", "CSS", "JavaScript","Bootstrap" ,"React", "Tailwind Css", "Git and GitHub", "Vercel"],
  },
]

// EDUCATION

export const EDUCATION = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "Fazaia College of Education for Women",
        duration: "2024 - Present",
        description:
            "Currently pursuing a BS in Computer Science with a focus on programming, software development, data structures, computer networks, and web development.",
    },

    {
        id: 2,
        degree: "FSc Computer Science",
        institution: "Fazaia Inter College",
        duration: "2022 - 2024",
        description:
            "Completed FSc Computer Science with a strong foundation in mathematics, physics, and Programming.",
    },

  {
  id: 2,
  degree: "Matric in Medical",
  institution: "FG Public School Peshawar",
  duration: "2019 - 2022",
  description:
    "Completed Matric with Biology, building a strong foundation in biology, chemistry, physics, and mathematics.",
},
]


// TESTIMONIALS

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Teacher 1 Name",
        title: "Computer Science Instructor",
        quote:
            "Teacher's testimonial",

        image: personImage,
    },

    {
        id: 2,
        name: "Teacher 2 Name",
        title: "Computer Science Instructor",
        quote:
            "Teacher's testimonial",
        image: personImage2,
    },
]