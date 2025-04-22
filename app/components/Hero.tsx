import MotionWrapper from "@/utils/MotionWrapper";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-20 pt-20 mb-36 md:mb-0 w-full font-mono gap-2">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="h-full md:w-9/12 w-full mx-auto h-full items-center justify-center">
          <div className="relative">
            <MotionWrapper
              direction="left"
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="text-cyan-300 mr-[10px] h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clip-rule="evenodd"></path>
              </svg>
              <h1 className="Welcome-text text-cyan-300 text-[13px]">
                Portfolio
              </h1>
            </MotionWrapper>
            <MotionWrapper direction="right">
              <p className="md:text-xl  z-30 font-semibold text-white">
                Hi there, {"I'm"}
              </p>
            </MotionWrapper>
            <MotionWrapper
              direction="left"
              className="flex items-center md:space-x-5 space-x-3">
              <h1 className="md:text-6xl sm:text-6xl text-5xl font-bold text-cyan-300">
                NOSIRUDEEN
              </h1>
            </MotionWrapper>
            <MotionWrapper
              direction="left"
              className="flex items-center md:space-x-5 space-x-3">
              <h1 className="md:text-6xl sm:text-6xl text-5xl font-bold text-white">
                OYENIRAN
              </h1>
            </MotionWrapper>
            <MotionWrapper
              direction="right"
              className="flex items-center space-x-3 font-semibold">
              <h3 className="md:text-2xl text-lg text-zinc-500">{"I'm"} a</h3>
              <h3 className="md:text-5xl text-2xl text-gray-200 font-medium">
                FULLSTACK DEVELOPER
              </h3>{" "}
            </MotionWrapper>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Image
          alt="work icons"
          src="/mainIconsdark.svg"
          width={650}
          height={0}
          className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[650px]"
        />
      </div>
    </div>
  );
};

export default Hero;
