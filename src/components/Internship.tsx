"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";

export function Internship() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative text-white">
        {internshipData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className="text-xl mb-4">
              {item.title}
            </p>
            {item.badge === "" ? null : 
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            {item.badge}
          </h2>
            }
            {item.liveLink === "" ? null : 
            <p>{item.liveLink}</p>
            }

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const internshipData = [
  {
    title: "BannerBot Internship",
    description: (
      <>
        <p>
            <b>Roal</b> : Javascript Developer Intern <br/>
            <b>Location</b> : Work From Home <br/>
            <b>Tech Stack Used</b> : HTML, CSS, ChakraUI, Javascript, TypeScript, ReactJS, NextJS <br/>
        During my internship as a JavaScript Developer at BannerBot, I had the opportunity to work remotely and contribute significantly to the team&apos;s efforts. My primary role was collaborating with the internal admin panel team to enhance functionality, streamline workflows, and ultimately improve the user experience. This involved not only backend development but also front-end web development, where I focused on creating a seamless user interface and introducing engaging features. As part of my contributions, I developed a captivating landing page for the company&apos;s website. Moreover, I had the privilege of creating aweb application designed to empower users to craft stunning posters with ease. <br/>
        These experiences allowed me to strengthen my development skills and contribute to the company&apos;s vision of enhancing design and user interaction.
        </p>
      </>
    ),
    badge: "",
    image:
      "",
      liveLink : "",
  },
  {
    title: "Groweasy Landing Page",
    description: (
      <>
        <p>
        In my Groweasy landing page project, I translated a Figma design into a fully functional webpage from scratch. Using vanilla CSS, I meticulously styled and made the page responsive. I also integrated a user-friendly email submission form for visitors to receive future notifications from the company, creating an engaging landing page that boosts the company&apos;s online presence and user interaction.
        </p>
      </>
    ),
    badge: "HTML, CSS, ReactJS",
    image:
      "https://i.imgur.com/2CnlsXe.jpg",
    liveLink : (
        <a
          href="https://groweasy.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md  leading-[1.6] text-gray-400 font-normal hover:text-white hover:underline"
        >
          Link
        </a>
      ),
  },
  {
    title: "Poster Designing App",
    description: (
      <>
        <p>
        In my Poster Designing App project, I created an easy-to-use application for designing attractive posters. Users can choose from three frame options: landscape, portrait, and square, and are able to download their creations as JPG images. This project enhances design capabilities and offers a user-friendly poster creation experience.
        </p>
      </>
    ),
    badge: "HTML, CSS, ReactJS,Typescript, Canvas",
    image:
      "https://i.imgur.com/Gxv1Lpt.jpg",
      liveLink : (
        <a
          href="https://bannerdesigning-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md  leading-[1.6] text-gray-400 font-normal hover:text-white hover:underline"
        >
          Link
        </a>
      ),
    
  },
];
