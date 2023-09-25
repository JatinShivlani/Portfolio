import {
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  express,
  tailwind,
  mern,
  backEnd,
  frontEnd,
  gpt3,
  movieSync,
  netflixClone,
  DoodleBook,TextEditor,
  swiggyClone
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const technologies = [
    {
      name: "HTML 5",
      image: html,
    },
    {
      name: "CSS 3",
      image: css,
    },
    {
      name: "JavaScript",
      image: javascript,
    },
    {
      name: "React JS",
      image: reactjs,
    },
    {
      name: "Express JS",
      image: express,
    },
    {
      name: "Tailwind CSS",
      image: tailwind,
    },
    {
      name: "Node JS",
      image: nodejs,
    },
    {
      name: "MongoDB",
      image: mongodb,
    },
    {
      name: "git",
      image: git,
    },
    {
      name: "figma",
      image: figma,
    }
  ];
  
  const specialization = [
    {
      title: "Front-End Development",
      icon: frontEnd,
      iconBg: "#000",
      points: [
        "Proficient in creating user-friendly and visually appealing websites that adapt seamlessly to various screen sizes and devices.",
        "Highly skilled in building dynamic and interactive user interfaces using React.js, a popular JavaScript library.",
        "Proficient in creating CSS animations and transitions to add visually appealing effects to web elements, enhancing user engagement and interactivity.",
        "Knowledgeable about utilizing CSS Libraries to rapidly style web applications with utility classes, promoting consistency and flexibility in design.",
      ],
    },
    {
      title: "Back-End Development",
      icon: backEnd,
      iconBg: "#000",
      points: [
        "Proficient in server-side JavaScript development with Node.js and Express.js",
        "Skilled in creating RESTful APIs for seamless communication between the front-end and back-end, enabling data exchange and functionality.",
        "Experienced in designing and optimizing databases using MongoDB for efficient data storage and retrieval.",
        "Knowledgeable about implementing security measures, encryption, and user authentication to protect sensitive data and user accounts.",
      ],
    },
    {
      title: "MERN Stack development",
      icon: mern,
      iconBg: "#000",
      points: [
        "Experienced in using MongoDB as a database solution for storing and managing data in MERN (MongoDB, Express.js, React, Node.js) stack applications.",
        "Proficient in building scalable and performant server applications using Express.js, enabling efficient routing and middleware integration.",
        "Adept at creating interactive and component-based user interfaces with React, optimizing performance for a seamless user experience.",
        "Skilled in server-side development with Node.js, facilitating real-time interactions and handling data requests in MERN stack applications.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Movie Sync",
      description:
        "Welcome to 'Movie-Sync,' your gateway to movie and TV show information. Powered by React, SCSS for style, and Fetch API for data.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "FetchAPI",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: movieSync,
      source_code_link: "https://movie-sync-fm84cdfqv-jatinshivlani.vercel.app/",
    },{
      name: "Doodle Book",
      description:
        "Unlock DoodleBook's potential with secure user authentication, a custom-built API, and full CRUD capabilities for seamless note management.",
        tags: [
        {
          name: "REST-API",
          color: "green-text-gradient",
        },
        {
          name: "CRUD",
          color: "pink-text-gradient",
        },
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        }
      ],
      image: DoodleBook,
      source_code_link: "https://doodle-book-app.onrender.com/",
    },
    {
      name: "Swiggy clone",
      description:
        "Introducing 'React Swiggy Clone,' a delectable journey through the world of food delivery. Savor the convenience with my React-powered app.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Clone",
          color: "green-text-gradient",
        },
        
      ],
      image: swiggyClone,
      source_code_link: "https://swiggy-clone-6tyn.onrender.com/",
    },
    {
      name: "GPT-3",
      description:
        "Explore a introductory website showcasing the potential of GPT-3, with a dynamic React interface and sleek design crafted in Figma.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "UI/UX",
          color: "green-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: gpt3,
      source_code_link: "https://gpt-3-e563.onrender.com/",
    },
    {
      name: "Netflix clone",
      description:
        "Welcome to 'Netflix Clone,' an immersive streaming experience. Crafted with HTML, CSS, and JavaScript, it's your gateway to endless entertainment.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: netflixClone,
      source_code_link: "https://netflix-clone-k9b3.onrender.com/",
    },{
      name: "Text Editor",
      description:
        "Experience the future of text editing with ZX-Text Editor. Streamlined, powerful, and intuitive – your words, your way.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
       
      ],
      image: TextEditor,
      source_code_link: "https://zx-text-editor.onrender.com/",
    },
  ];
  
  export {technologies, specialization, projects };