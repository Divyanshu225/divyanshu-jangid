import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,

  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../../public/assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: "/assets/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/assets/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/assets/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mognodb.png",
  },
  {
    name: "mysql",
    icon: "/assets/tech/mtsql.png",
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
  },
  {
    name: "nextjs",
    icon: "/assets/tech/next js.png",
  },
  {
    name: "bootstrap",
    icon:  "/assets/bootstrap.png",
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "Freelance Frontend Developer",
    icon: starbucks,
    iconBg: "#383E56",
    date: " March 2025 -Persent",
    points: [
      "Developed responsive and user-friendly web interfaces using React.js, TailwindCSS, and Bootstrap for clients.",
      "Collaborated remotely with clients to understand their requirements and deliver customized solutions.",
      "Implemented cross-browser compatibility and optimized website performance.",
      "Managed project timelines and delivered quality work within deadlines.",
    ],
  },
  {
    title: "Backend Developer",
    companyName: "Freelance Backend Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2025 -Persent",
    points: [
      "Developing and maintaining server-side logic using Node.js and Express.js.",
      "Building RESTful APIs to connect frontend applications with databases.",
      "Collaborating with frontend developers to integrate user-facing elements with server-side logic.",
      "Ensuring data security and handling database operations with MongoDB and MySQL",
      "Writing clean, modular, and reusable code following best practices.",
      "Participating in code reviews and debugging to improve application performance and reliability."
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Freelance Full Stack Developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2025 -Persent",
    points: [
      "Developing and maintaining both frontend and backend components of web applications using React.js, Node.js, and related technologies.",
      "Collaborating with cross-functional teams to deliver complete and responsive web solutions.",
      "Writing clean and efficient code for user interfaces and server-side logic while following best practices.",
      "Learning and adapting quickly to new technologies to contribute effectively in team projects.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Freelance Full Stack Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2025 - Present",
    points: [
      "Building and maintaining websites using HTML, CSS, JavaScript, and modern frameworks like React.",
      "Ensuring websites are responsive, user-friendly, and optimized for performance across devices.",
      "Collaborating with designers and backend developers to create seamless web experiences.",
      "Continuously learning new web technologies to improve development skills and deliver better solutions.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
