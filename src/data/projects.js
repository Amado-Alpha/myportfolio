// Projects data.

const projects = [
  {
    id: 1,
    title: "Google Health Platform",
    category: "Web Application",
    img: require("@/assets/images/web-project-2.jpg"),
    projectTag: "fullstack",

    images: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],

    features: [
      {
        id: 1,
        description: "Responsive and user-friendly UI for easy navigation.",
      },
      {
        id: 2,
        description:
          "Admin panel for managing products, projects, and system users.",
      },
      {
        id: 3,
        description: "User authentication and authorization.",
      },
      {
        id: 4,
        description:
          "Real-time data synchronization and updates provided by the backend API.",
      },
    ],

    projectObjective:
      "To streamline the management of products, projects, and personnel for the electronics company.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "TailwindCSS",
      "Laravel API",
    ],

    link: "https://mtonix.netlify.app/",

    projectDetails: [
      {
        id: 1,
        details:
          "Developed a comprehensive platform integrating a Vue.js frontend with a Laravel backend. The frontend provides a user-friendly interface for managing operations, while the backend handles complex data processing, user authentication, and interactions with the database. This integration ensures a seamless and efficient user experience.",
      },
      {
        id: 2,
        details:
          "The UI is designed to be intuitive and responsive, adapting to various devices and screen sizes. The frontend communicates with the backend through APIs to fetch and display real-time data, ensuring that users always see the most current information and can interact with the system effectively.",
      },
      {
        id: 3,
        details:
          "Security is a critical aspect of the platform, with authentication based access implemented through the backend and frontend. This ensures that only authenticated users (in this case an admin who manages the platform) can access the guarded parts of the application, protecting sensitive information and functions from unauthorized access.",
      },
      {
        id: 4,
        details:
          "The backend supports real-time data synchronization. This means that any updates or changes made in the system are instantly reflected across all the respective user interfaces.",
      },
    ],
  },

  {
    id: 2,
    title: "Phoenix Digital Agency",
    category: "Mobile Application",
    img: require("@/assets/images/mobile-project-2.jpg"),
  },

  {
    id: 3,
    title: "Project Management UI",
    category: "UI/UX Design",
    img: require("@/assets/images/ui-project-1.jpg"),
  },

  {
    id: 4,
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: require("@/assets/images/ui-project-2.jpg"),
  },

  {
    id: 5,
    title: "React Social App",
    category: "Mobile Application",
    img: require("@/assets/images/mobile-project-1.jpg"),
  },

  {
    id: 6,
    title: "Apple Design System",
    category: "Web Application",
    img: require("@/assets/images/web-project-1.jpg"),
  },
];

export default projects;
