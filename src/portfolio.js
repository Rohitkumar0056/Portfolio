import splashAnimation from "./assets/lottie/splashAnimation";
import emoji from "react-easy-emoji";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000 
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rohit Kumar",
  title: "Hi all, I'm Rohit",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 who enjoys crafting clean, fast and user-friendly web experiences. Curious by nature, always learning and always ready for the next big challenge."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QbWZz1cq8gyUhxPlHrbjpFARs2pe4oCa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/Rohitkumar0056",
  linkedin: "https://www.linkedin.com/in/rohit-kumar-764518292/",
  gmail: "rohitkum0056@gmail.com",
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fa-solid fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fa-solid fa-t"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fa-solid fa-server"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fa-solid fa-n"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fa-solid fa-e"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fa-solid fa-layer-group"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fa-solid fa-wind"
    },
    {
      skillName: "Vector Database",
      fontAwesomeClassname: "fa-solid fa-magnifying-glass"
    },
    {
      skillName: "Socket.io",
      fontAwesomeClassname: "fa-solid fa-bolt"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fa-brands fa-github"
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "fa-solid fa-v"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharaja Surajmal Institute of Technology",
      logo: require("./assets/images/msit.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "September 2023 - August 2027"
    },
    {
      schoolName: "Army Public School Delhi Cantt",
      logo: require("./assets/images/aps1.avif"),
      subHeader: "Senior Secondary",
      duration: "March 2022 - March 2023"
    },
    {
      schoolName: "Army Public School Delhi Cantt",
      logo: require("./assets/images/aps1.avif"),
      subHeader: "Secondary",
      duration: "March 2020 - March 2021"
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Developer Intern",
      company: "Shambho AI",
      companylogo: require("./assets/images/shambho.png"),
      date: "June 2025 - July 2025",
      descBullets: [
        " Developed and integrated a GitHub MCP server, actively collaborating on the design of backend architecture and API development to enhance system scalability and maintainability.",
        " Implemented vector, text and hybrid search in databases, improving data retrieval accuracy and query performance.",
        " Built a ReAct agent for multi-tool interactions with MCP servers and automated agentic AI workflows with Node-RED."
      ]
    },
    {
      role: "DSA Head",
      company: "Microsoft Student Chapter MSIT",
      companylogo: require("./assets/images/msc.png"),
      date: "Sept 2024 - Aug 2025",
      descBullets: [
        " Mentored 50+ peers through problem-solving guidance and doubt resolution, enhancing programming proficiency.",
        " Organized a comprehensive 4-week DSA bootcamp, covering core algorithmic concepts with daily coding challenges.",
        " Organized 2 campus coding competitions, designing challenges and managing logistics to enhance technical engagement."
      ]  
    }
  ]
}

const openSource = {
  repo: [
    {
      name: "Interviewly",
      description: "Role-based video interview platform with real-time collaboration.",
      url: "https://github.com/Rohitkumar0056/Interviewly",
      demo: "https://code-sync-woad.vercel.app/",
      primaryLanguage: 
        {
          color: "violet",
          name: "TypeScript"
        }
    },
    {
      name: "Invoice Maker",
      description: "A full-stack web application that generate and send/download invoices via email.",
      url: "https://github.com/Rohitkumar0056/Invoice-Maker",
      demo: "https://invoicemaker-nu.vercel.app/",
      primaryLanguage: 
        {
          color: "violet",
          name: "JavaScript"
        }
    },
    {
      name: "GitHub MCP Tool Manager",
      description: "A modern web application for managing GitHub tokens and accessing development tools.",
      url: "https://github.com/Rohitkumar0056/GitHub-MCP",
      demo: "https://github-mcp-fl2j.onrender.com/",
      primaryLanguage: 
        {
          color: "violet",
          name: "TypeScript"
        }
    },
    {
      name: "ReAct Agent MCP",
      description: "ReAct agent based GitHub MCP server for multi tool selection and execution automation.",
      url: "https://github.com/Rohitkumar0056/ReAct-Agent-MCP",
      primaryLanguage: 
        {
          color: "violet",
          name: "TypeScript"
        }
    },
    {
      name: "Semantic Search",
      description: "Backend service for embedding generation and MongoDB based text, vector and hybrid search service and databases.",
      url: "https://github.com/Rohitkumar0056/Semantic-Search",
      primaryLanguage: 
        {
          color: "violet",
          name: "TypeScript"
        }
    },
    {
      name: "Chatty",
      description: "A Full Stack Chatting App that enables real-time communication between users via messaging.",
      url: "https://github.com/Rohitkumar0056/chatty",
      demo: "https://chatty-peach.vercel.app/",
      primaryLanguage: 
        {
          color: "violet",
          name: "TypeScript"
        }
    },
  ], // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

export {
  greeting,
  splashScreen,
  workExperiences,
  illustration,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  openSource,
};
