import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MyWorks() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={projects} direction="left" speed="fast" />
    </div>
  );
}

const projects = [
  {
    name: "IdeaBox",
    image: "https://i.imgur.com/v0IMFDH.jpg",
    description:
      "Developed a web app for users idea storage, featuring comprehensive CRUD functionality for streamlined interactions. Ensured data security with seamless sign-in process, strengthening the authentication system’s robustness. Improved user experience through efficient session management, eliminating repeated logins and ensuring seamless navigation.",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    sourceCodeUrl: "https://github.com/your-github/ideabox",
    deployUrl: "https://ideabox-iota.vercel.app/",
  },
  {
    name: "BlogVerse",
    image: "https://i.imgur.com/uXg823V.jpg",
    description:
      "Developed a web platform for writing interactive blog posts, featuring seamless user registration and login for an engaging experience. Authenticated users benefit from personalized dashboards, enhancing CRUD operations. Enhances  ecurity by implementing exclusive post modification rights for authors, ensuring a secure and user-friendly online environment.",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    sourceCodeUrl: "https://github.com/kumarsomesh10/BlogVerse",
    deployUrl: "",
  },
  // {
  //   name: "LawBot",
  //   image: "https://i.imgur.com/aqIBQe6.jpg",
  //   description:
  //     "LawBot, with its intuitive interface, seamlessly harnesses the OpenAI API for precise query analysis. It effectively stores and retrieves an extensive legal database through ChromaDB, enhancing its knowledge base. This system excels in delivering highly accurate legal answers, providing users with valuable insights and information firmly grounded in the Indian Constitution.",
  //   tech: "ReactJS, Open AI, ChromaDB",
  //   sourceCodeUrl: "https://github.com/kumarsomesh10/LawBot",
  //   deployUrl: "",
  // },
  {
    name: "Intrusion Detection System",
    image: "",
    description:
      "Analyzed NSL-KDD and CAN BUS datasets and explored various baseline models, ultimately determining that implementing Random Forest with PCA gives maximum 99.8% accuracy. Introduced diverse types of Noises and applied multiple scaling techniques to test the robustness of the models. Concluded that while Random Forest with PCA is adept for swift response, Gradient Boosting for 99.0054% accuracy and XGBoost for 99.6896% accuracy demonstrated greater robustness.",
    tech: "PyTorch, Python, Scikit-learn, and GANs",
    sourceCodeUrl: "https://github.com/kumarsomesh10/Intrusion-Detection-System",
    deployUrl: "",
  },
  {
    name: "Airline Management and Navigation System",
    image: "",
    description:
      "Developed a user-friendly flight booking software with an intuitive interface, offering tailored options through ticket filters for price, distance, time, and layovers. Implemented a robust database utilizing latitude and longitude data for pinpoint accuracy in flight information. Established a transparent admin-user hierarchy, enhancing system usability for administrators and users alike.",
    tech: "Java, Object oriented Programming, Netbeans",
    sourceCodeUrl: "https://github.com/kumarsomesh10/Airline-Management-and-Navigation-System",
    deployUrl: "",
  },
];
