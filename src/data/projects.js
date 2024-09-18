// Projects data.

const projects = [
  {
    id: 1,
    title: "Dynamic content company website",
    category: "Web Application",
    img: require("@/assets/images/web-project-2.jpg"),
    projectTag: "fullstack",
    status: "done",

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
    title: "Global Weather Insights",
    category: "Web Application",
    img: require("@/assets/images/weather2.png"),
    projectTag: "fullstack",
    status: "done",

    images: [
      {
        id: 1,
        title: "Weather Dashboard UI",
        img: require("@/assets/images/weather2.png"),
      },
      {
        id: 2,
        title: "Interactive Weather Map",
        img: require("@/assets/images/weather2.png"),
      },
      {
        id: 3,
        title: "Mobile Weather App View",
        img: require("@/assets/images/weather2.png"),
      },
    ],

    features: [
      {
        id: 1,
        description:
          "Real-time global weather data with interactive map visuals.",
      },
      {
        id: 2,
        description: "User-friendly interface with detailed weather forecasts.",
      },
      {
        id: 3,
        description:
          "Dynamic updates with seamless integration of weather APIs.",
      },
      {
        id: 4,
        description:
          "Responsive design to ensure smooth user experience on all devices.",
      },
    ],

    projectObjective:
      "To provide users with an engaging platform for accessing and exploring real-time global weather information through an interactive and user-friendly interface.",

    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Leaflet.js"],

    link: "https://everylocationweather.netlify.app",

    projectDetails: [
      {
        id: 1,
        details:
          "Created a dynamic weather application that integrates real-time weather data using the Leaflet API. The frontend, built with Vue.js and styled with TailwindCSS, offers an intuitive and engaging interface for users to explore weather conditions globally.",
      },
      {
        id: 2,
        details:
          "Designed an interactive weather map that provides users with real-time visualizations of weather patterns. The map updates dynamically, giving users up-to-date information about weather conditions in different locations around the world.",
      },
      {
        id: 3,
        details:
          "Implemented a responsive design that ensures the application functions smoothly across various devices, including desktops, tablets, and mobile phones. The application adapts to different screen sizes while maintaining a consistent and user-friendly experience.",
      },
      {
        id: 4,
        details:
          "Ensured the application efficiently fetches and displays real-time weather data through API integration. This allows users to get accurate and timely weather information, enhancing their overall experience and interaction with the platform.",
      },
    ],
  },

  {
    id: 3,
    title: "Innovative task tracking app",
    category: "Mobile Application",
    img: require("@/assets/images/mobile-project-2.jpg"),
    status: "ongoing",
  },

  {
    id: 4,
    title: "Project Management UI",
    category: "UI/UX Design",
    img: require("@/assets/images/ui-project-1.jpg"),
    status: "ongoing",
  },

  {
    id: 5,
    title: "Cloud Storage Platform",
    category: "UI/UX Design",
    img: require("@/assets/images/ui-project-2.jpg"),
    status: "ongoing",
  },

  {
    id: 6,
    title: "Wakala PA",
    category: "Web Application",
    img: require("@/assets/images/web-project-1.jpg"),
    status: "ongoing",
  },
];

export default projects;
