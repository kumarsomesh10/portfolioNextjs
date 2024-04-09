"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const languages = [
  {
    id: 1,
    name: "C",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  },
  {
    id: 2,
    name: "C++",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    id: 3,
    name: "Python",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 4,
    name: "Java",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
];
const frontend = [
  {
    id: 1,
    name: "HTML",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "BootStrap",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: 4,
    name: "Tailwind",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 5,
    name: "Javascript",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 6,
    name: "Typescript",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 7,
    name: "ReactJs",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 8,
    name: "NextJs",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
];
const backend = [
  {
    id: 1,
    name: "Node",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 2,
    name: "MongoDB",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 3,
    name: "Express.Js",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 4,
    name: "SQL",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];
const versionControl = [
  {
    id: 1,
    name: "Git",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 2,
    name: "Github",
    designation: "",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

export function Skills() {
  return (
    <div className="flex flex-col items-center justify-center pb-10 w-full">
      <div className="flex flex-row m-2"><AnimatedTooltip items={languages} /></div>
      <div className="flex flex-row m-2"><AnimatedTooltip items={frontend} /></div>
      <div className="flex flex-row m-2"><AnimatedTooltip items={backend} /></div>
      <div className="flex flex-row m-2"><AnimatedTooltip items={versionControl} /></div>
    </div>
  );
}
