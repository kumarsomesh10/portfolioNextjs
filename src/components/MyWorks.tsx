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
    image: "https://i.imgur.com/K6jWGe0.jpg",
    description:
      "MERN Stack web application that empowers users to efficiently manage their unique ideas with comprehensive CRUD functionality. Prioritizing data security, our platform offers robust user authentication, including Google Sign-In. We enhance the user experience by enabling seamless access to stored ideas through sessions and cookies, eliminating repeated logins.",
    tech: "ReactJS, Express, Node.js, and MongoDB Passport.js Google-OAuth",
    sourceCodeUrl: "https://github.com/your-github/ideabox",
    deployUrl: "https://your-deployed-url.com",
  },
  {
    name: "BlogVerse",
    image: "https://i.imgur.com/uXg823V.jpg",
    description:
      "Seamlessly engages users through efficient user registration and login functions. Authenticated users access personalized dashboards, enhancing (CRUD) operations. Leveraging the MERN stack, prioritizes security by granting only authors the ability to modify their own posts.",
    tech: "ReactJS, Express, Node.js, and MongoDB",
    sourceCodeUrl: "https://github.com/kumarsomesh10/BlogVerse",
    deployUrl: "",
  },
  {
    name: "LawBot",
    image: "https://i.imgur.com/aqIBQe6.jpg",
    description:
      "LawBot, with its intuitive interface, seamlessly harnesses the OpenAI API for precise query analysis. It effectively stores and retrieves an extensive legal database through ChromaDB, enhancing its knowledge base. This system excels in delivering highly accurate legal answers, providing users with valuable insights and information firmly grounded in the Indian Constitution.",
    tech: "ReactJS, Open AI, ChromaDB",
    sourceCodeUrl: "https://github.com/kumarsomesh10/LawBot",
    deployUrl: "",
  },
  {
    name: "Intrusion Detection System",
    image: "",
    description:
      "Delved into a variety of machine learning models aimed at bolstering network security by effectively detecting anomalies. The process involved fine-tuning through techniques such as hyperparameter tuning, feature extraction, and engineering to optimize overall model performance. Notably, the application of Random Forest in conjunction with PCA yielded remarkable results, achieving an impressive accuracy rate of 99.8%",
    tech: "PyTorch, Python, Scikit-learn, and GANs",
    sourceCodeUrl: "https://github.com/kumarsomesh10/Intrusion-Detection-System",
    deployUrl: "",
  },
  {
    name: "Airline Management and Navigation System",
    image: "",
    description:
      "Employed Java Swing and OOPs principles to create an intuitive flight booking software for user. The application integrated ticket filtering mechanisms based on price, distance, time, and layover. Users enjoyed the ease of booking, rescheduling, and canceling flights, underpinned by a robust latitude and longitude database for pinpoint accuracy. The incorporation of OOPs reinforced a transparent admin-user hierarchy, enhancing the overall system’s usability.",
    tech: "Java, JavaSwing, Object oriented Programming, Netbeans",
    sourceCodeUrl: "https://github.com/kumarsomesh10/Airline-Management-and-Navigation-System",
    deployUrl: "",
  },
];
