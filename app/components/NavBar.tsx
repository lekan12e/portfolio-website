"use client";
import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants/index";
import MotionWrapper from "@/utils/MotionWrapper";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return (
    <nav className="w-full flex items-center sticky top-0 justify-between md:px-10 py-2 px-3 shadow-lg shadow-[#2A0E61]/50 bg-[#030014] backdrop-blur-md z-50">
      <MotionWrapper delay={0.05} duration={0.5}>
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="42"
            height="30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="#3DE8D1"
              strokeWidth="8"
              fill="none"
            />
            <path
              d="M70 130 L70 70 L90 70"
              stroke="#3DE8D1"
              strokeWidth="8"
              fill="none"
            />
            <path
              d="M110 70 L130 100 L110 130"
              stroke="#3DE8D1"
              strokeWidth="8"
              fill="none"
            />
          </svg>
          <h2 className="text-primary">Lekan Dev</h2>
        </Link>
      </MotionWrapper>
      <MotionWrapper
        delay={0.3}
        duration={0.6}
        className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="hidden text-sm md:inline text-zinc-300 font-semibold cursor-pointer hover:underline hover:text-cyan-300 transition-all duration-200 ease-out">
            {link.name}
          </Link>
        ))}
        <Link
          href="https://docs.google.com/document/d/13WErMOJwiyCBKfUTZLSgGctT0QXp4hxU/edit?pli=1"
          target="_blank"
          className="bg-transparent hidden md:inline rounded-md text-cyan-300 border-2 border-cyan-300 p-2 md:px-5 text-xs">
          Resume
        </Link>
        <HamburgerIcon
          isOpen={menuOpen}
          toggle={() => setMenuOpen(!menuOpen)}
        />
      </MotionWrapper>

      {menuOpen && (
        <div className="fixed top-14 left-0 w-full h-screen flex md:hidden flex-col z-[9999]  bg-[#030014] ">
          <div className="w-full flex flex-col flex-grow justify-center items-center space-y-5">
            {navLinks.map((link) => (
              <Link
                onClick={() => setMenuOpen(false)}
                href={link.path}
                key={link.name}
                className="text-2xl text-zinc-300 font-semibold cursor-pointer hover:scale-110 hover:text-cyan-300 transition-all duration-200 ease-out">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
