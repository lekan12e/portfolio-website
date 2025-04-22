"use client";
import { useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="bg-[#000319] gap-3" ref={ref}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
