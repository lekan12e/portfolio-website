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
      {/* <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-primary">
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
        <h1 className="text-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sequi
          laudantium vel excepturi est harum dolores quasi iure aspernatur
          temporibus cupiditate voluptatem, architecto accusantium? Dicta eaque
          est commodi voluptates nulla?
        </h1>
      </motion.div> */}
    </div>
  );
}
