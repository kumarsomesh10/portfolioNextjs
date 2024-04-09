"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function About() {
  return (
    <CardContainer className="inter-var w-fit">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-900 dark:border-white/[0.7] border-black/[0.7] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border">
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
        >
          Hey 🤝, I&apos;m Somesh Kumar, a B.Tech CSE student @IIIT Kalyani. I&apos;m passionate about 👨‍💻 coding, problem-solving, and building impactful web apps. For the frontend, I specialize in React/Next.js with Tailwind CSS and TypeScript, while for the backend, I work in Node.js with MongoDB and ExpressJS. 🚀


        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://i.imgur.com/P1Ns2Y9.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover object-top rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
