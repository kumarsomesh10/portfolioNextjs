"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "👋",
    },
    {
      text: "Hi,",
      className: " text-white-100",
    },
    {
      text: "I",
      className: " text-white-100",
    },
    {
      text: "am",
      className: " text-white-100",
    },
    {
      text: "Somesh Kumar",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
