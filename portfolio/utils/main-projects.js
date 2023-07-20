import {
  Notes,
  appie,
  carAgency,
  jobify,
  kanbanBoard,
} from "@/public/assets/images";

export const mainProjects = [
  {
    demo: "https://jobify-mern-app-q48s.onrender.com/",
    repoLink: "https://github.com/HazemHussein14/jobify",
    imageSrc: jobify,
    title: "Jobify",
    description:
      "A MERN stack job tracking app with CRUD operations, server-side validation, advanced filtering, charts, a demo user feature for easy access, and secure authentication using cookies.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    demo: "https://kalbonyan-mern-app.onrender.com/",
    repoLink: "https://github.com/HazemHussein14/kalbonyan-mern-app",
    imageSrc: Notes,
    title: "Notes App",
    description:
      "MERN stack todo list project with comprehensive functionality. It included CRUD operations for managing tasks, along with features for user registration, login, logout, and JWT authentication for secure access. Additionally, the project supported two languages and included a dark mode option for a personalized user experience.",
    techStack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    demo: "https://kalbonyan-react-project.vercel.app/",
    repoLink: "https://github.com/HazemHussein14/react-car-shop",
    imageSrc: carAgency,

    title: "Car Agency",
    description:
      "A visually stunning React application built with Tailwind CSS and Redux Toolkit. Car Agency fetches car data from a JSON file and presents it in a visually appealing carousel format. Users can easily add or remove cars from the cart, with all data seamlessly stored in the local storage. The project showcases effective use of modern tools for creating attractive interfaces and efficient state management.",
    techStack: ["React", "Redux Toolkit", "Tailwind CSS", "Vercel"],
  },
  {
    demo: "https://hazemhussein14.github.io/Kalbonyan-Board/",
    repoLink: "https://github.com/HazemHussein14/Kalbonyan-Board",
    imageSrc: kanbanBoard,

    title: "Kanban Board",
    description:
      "Kanban board project using vanilla JavaScript. This board included features like drag and drop, task creation, editing, deletion, and data saving to local storage.",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    demo: "https://hazemhussein14.github.io/Kalbonian-phase-1/",
    repoLink: "https://github.com/HazemHussein14/Kalbonian-phase-1",
    imageSrc: appie,

    title: "Appie",
    description:
      "Appie is an HTML and CSS template designed to test and refine your skills in flexbox, grid layout, and responsive design. It provides an interactive platform for experimenting with HTML and CSS techniques, allowing you to showcase your abilities in crafting visually appealing web designs.",
    techStack: ["HTML", "CSS"],
  },

];
