import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center px-20 mt-40 pt-20 w-full font-mono gap-1">
      <h2 className="md:text-4xl text-center text-2xl font-bold text-white mb-5">
        About Me
      </h2>
      <p className="mb-3 md:text-lg font-semibold text-zinc-400">
        I am a <span className="text-cyan-300">fullstack developer</span> with a{" "}
        <span className="text-cyan-300">
          {" Bachelor's"} degree in Computer Science
        </span>
        . I love building and solving real-world problems with code. I’m
        passionate about leveraging technology to improve user experiences and
        streamline workflows. {"I'm"} also an avid learner, always exploring new
        technologies and trends to stay ahead of the curve.
      </p>
      <p className="mb-3 md:text-lg font-semibold text-zinc-400">
        I got my first hands-on experience as an intern at{" "}
        <span className="text-cyan-300">Codeware</span> in Ikeja, Lagos, where I
        created reports, participated in client meetings, and contributed to
        team discussions. This experience laid the foundation for my journey
        into tech.
      </p>
      <p className="mb-3 md:text-lg font-semibold text-zinc-400">
        Later, I joined <span className="text-cyan-300">Dimensions Data</span>{" "}
        as a Graduate Trainee, where I worked closely with senior developers,
        fixed bugs, and learned industry best practices through pair programming
        and code reviews. I transitioned into a{" "}
        <span className="text-cyan-300">
          Client Managed Service / Technical Support
        </span>{" "}
        role, where I used monitoring tools to manage systems, troubleshoot
        issues, and provide first- and second-line technical support across
        networks and software.
      </p>
      <p className="mb-3 md:text-lg font-semibold text-zinc-400">
        As a <span className="text-cyan-300">Frontend Engineer</span> at the
        same company, I led the development of an internal asset monitoring web
        app to track CC1 across client sites. I built dynamic UI components with
        React.js, integrated charts using Chart.js and Recharts, and applied
        solid state management practices. I collaborated with network and
        support teams to deliver seamless UX, and ensured quality with unit and
        integration testing using Cypress.
      </p>
      <p className="mb-3 md:text-lg font-semibold text-zinc-400">
        I also worked as a{" "}
        <span className="text-cyan-300">Frontend Engineer</span> at{" "}
        <span className="text-cyan-300">Xenial Tech</span>, where I contributed
        to building a modern HR solution using{" "}
        <span className="text-cyan-300">Next.js</span> with{" "}
        <span className="text-cyan-300">Typescrypt</span>. I focused on
        developing clean, responsive UI components and transforming user
        requirements into intuitive interfaces that enhanced the overall user
        experience.
      </p>
      <p className="mb-3 md:text-lg font-semibold text-zinc-400">
        Outside of coding, I enjoy playing video games, watching movies,
        listening to music, and hitting the pitch for a good game of soccer.
      </p>
    </div>
  );
};

export default About;
