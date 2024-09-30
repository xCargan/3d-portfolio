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
    figma,
    docker,
    postgresql,
    linux,
    github,
    meta,
    starbucks,
    tesla,
    buildwise,
    ephec,
    spott,
    abbaye,
    patro2,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    patro,
    voiture
  } from "../assets";

  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Permis B",
      icon: voiture,
    },
    {
      title: "Scout leader",
      icon: patro2,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PostGreSQL",
      icon: postgresql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "Github",
      icon: github,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Ephec",
      icon: ephec,
      iconBg: "#e6dedd",
      date: "Sept 2023 - Jan 2023",
      points: [
        "Ephec end-of-studies work",
        "Creation of a platform for a primary school teacher at the Villers La Ville municipal school in order to adapt his lessons in digital format",
        "FullStack project in ReactJs, NodeJs, PostGreSQL and mongodb",
        {
          text: "Repo Github here: ",
          link: {
            url: "https://github.com/zCargan/TFE",
            label: "La Classe de Madame Séverine",
          },
        },
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Buildwise",
      icon: buildwise,
      iconBg: "#e6dedd",
      date: "Fevr 2023 - Mai 2023",
      points: [
        "Working on an existing react-nodejs fullstack project",
        "Incorporation of the threejs library to allow 3D visualization of company projects",
        "Integrating reading BIM files into the browser using threejs",
        "Refractoring certain pages of the site in order to improve them",
      ],
    },
    {
      title: "Barman",
      company_name: "SPOTT",
      icon: spott,
      iconBg: "#e6dedd",
      date: "Sept 2022 - Dec 2023",
      points: [
        "Bartender",
        "Reception agent",
        "Handyman"
      ],
    },
    {
      title: "Barman",
      company_name: "Bar de l'abbaye",
      icon: abbaye,
      iconBg: "#e6dedd",
      date: "Juin 2022 - Aout 2022",
      points: [
        "Bartender",
      ],
    },
    {
      title: "Animateur Patro",
      company_name: "Patro",
      icon: patro2,
      iconBg: "#e6dedd",
      date: "Sept 2017 - Juil 2023",
      points: [
        "Scout leader for 7 years",
        "Leader of children aged 7 to 16",
        "Treasurer of the youth movement for 3 years",
        "Always present in the scouts as a leader guide"
      ],
    },
  ];
  
  const testimonials = [
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
  
  const projects = [
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };