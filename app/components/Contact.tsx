import MotionWrapper from "@/utils/MotionWrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  mess: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    mess: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, mess } = form;

    if (!name || !email || !mess) {
      alert("All fields must be filled, boss 🙏🏽");
      return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${mess}\n\nFrom: ${name} <${email}>`);
    const mailtoLink = `mailto:oyeniranolalekan6@gmail.com?subject=${subject}&body=${body}`;

    // Open the mailto in Link new tab (although it will trigger email client)
    window.open(mailtoLink, "_blank");
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center px-20 mt-20 pt-20 font-mono pb-40  w-full ">
      <div className=" md:max-w-xl max-w-lg w-full flex flex-col justify-center items-center space-y-5">
        <MotionWrapper duration={1} delay={0.4}>
          <h2 className="md:text-4xl text-2xl font-bold text-white">
            Contact Me
          </h2>
        </MotionWrapper>
        <MotionWrapper direction="top" duration={1} delay={0.3}>
          <p className="md:text-lg text-zinc-400">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </MotionWrapper>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:items-center md:space-x-4">
            <MotionWrapper delay={0.3} duration={1} direction="left">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="flex-grow outline-none placeholder:text-zinc-600 placeholder:font-semibold bg-slate-300 px-3 py-2 text-lg shadow-lg z-30 rounded-md"
                value={form.name}
                onChange={handleChange}
              />
            </MotionWrapper>
            <MotionWrapper delay={0.3} duration={1} direction="right">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="flex-grow outline-none placeholder:text-zinc-600 placeholder:font-semibold bg-slate-300 px-3 py-2 text-lg shadow-lg z-30 rounded-md"
                value={form.email}
                onChange={handleChange}
              />
            </MotionWrapper>
          </div>
          <MotionWrapper delay={0.3} duration={1}>
            <textarea
              placeholder="Message"
              name="mess"
              className="p-3 w-full z-30 my-4 outline-none bg-slate-300 text-sm h-40 rounded-md shadow-lg placeholder:text-zinc-600 placeholder:font-semibold"
              value={form.mess}
              onChange={handleChange}></textarea>
          </MotionWrapper>
          <MotionWrapper delay={0.3} duration={1}>
            <button
              type="submit"
              className="px-4 py-2 text-cyan-300 cursor-pointer hover:bg-cyan-300 hover:text-slate-800 transition-all duration-300 ease-in border-2 border-cyan-300 rounded-md">
              Send Message
            </button>
          </MotionWrapper>
        </form>
        <div className="flex items-center mt-5 md:space-x-4 md:justify-start justify-between">
          <MotionWrapper delay={0.1} duration={1}>
            <Link target="_blank" href="https://github.com/lekan12e">
              <Image
                src="/github.svg"
                color="white"
                width={18}
                height={18}
                alt="github-logo"
                className="cursor-pointer invert hover:animate-bounce"
              />
            </Link>
          </MotionWrapper>
          <MotionWrapper delay={0.2} duration={1}>
            <Link target="_blank" href="https://twitter.com/dayveed_xx">
              <Image
                src="/twitter.svg"
                width={18}
                height={18}
                alt="twitter-log"
                className="cursor-pointer invert inverted-colors:re hover:animate-bounce"
              />
            </Link>
          </MotionWrapper>
          <MotionWrapper delay={0.3} duration={1}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ebireni-david/">
              <Image
                src="/linkden.svg"
                width={18}
                height={18}
                alt="twitter-log"
                className="cursor-pointer invert inverted-colors:re hover:animate-bounce"
              />
            </Link>
          </MotionWrapper>
          <MotionWrapper delay={0.4} duration={1}>
            <Link target="_blank" href="tel:+2349031873661">
              <Image
                src="/phone.svg"
                width={18}
                height={18}
                alt="twitter-log"
                className="cursor-pointer invert inverted-colors:re hover:animate-bounce"
              />
            </Link>
          </MotionWrapper>
          <MotionWrapper delay={0.5} duration={1}>
            <Link
              target="_blank"
              href="mailto:oyeniranolalekan6@gmail.com?subject=Hello%20Lekan!">
              <Image
                src="/email.svg"
                width={18}
                height={18}
                alt="twitter-log"
                className="cursor-pointer invert inverted-colors:re hover:animate-bounce"
              />
            </Link>
          </MotionWrapper>
          <MotionWrapper delay={0.6} duration={1}>
            <Link href="https://wa.me/2349031873661" target="_blank">
              <Image
                src="/whatsapp.svg"
                width={18}
                height={18}
                alt="whatsapp-icon"
                className="cursor-pointer invert hover:animate-bounce"
              />
            </Link>
          </MotionWrapper>
        </div>
      </div>
      <div className="flex items-center mt-5 md:space-x-4 md:justify-start justify-between"></div>
    </div>
  );
};

export default Contact;
