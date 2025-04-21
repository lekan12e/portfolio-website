"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

declare global {
  interface HTMLElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}
interface TiltCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

const TiltCard: React.FC<TiltCardProps> = ({
  technologies,
  title,
  description,
  link,
  image,
}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,

        "max-glare": 0.2,
        perspective: 1000,
        scale: 1.05,
      });
    }
    return () => {
      tiltRef.current?.vanillaTilt?.destroy?.();
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className="flex md:flex-row max-w-lg md:max-w-none space-y-2 md:space-y-0 flex-col p-3 md:w-max w-full mb-7 bg-slate-900 shadow-lg z-30 rounded-md">
      <div className="w-full z-30 md:max-w-sm md:p-5 md:space-y-3 space-y-1">
        <p className="text-xl text-cyan-300 font-semibold">{title}</p>
        <h3 className="text-sm font-medium text-zinc-400">{description}</h3>
        <div className="flex items-center space-x-4 text-wrap">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="flex text-zinc-200 items-center min-w-max text-xs md:font-normal font-semibold">
              {tech}
            </p>
          ))}
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 flex items-center text-sm ">
          see it live{" "}
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </Link>
      </div>
      <Image
        src={image}
        alt="image"
        width={320}
        height={208}
        className="md:h-52 h-48 md:w-80 w-full object-cover z-30 backdrop-blur-md"
        priority={false}
      />
    </div>
  );
};

export default TiltCard;
