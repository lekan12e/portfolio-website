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

    // Open the mailto in a new tab (although it will trigger email client)
    window.open(mailtoLink, "_blank");
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center px-20 mt-40 pt-20 font-mono pb-20  w-full ">
      <div className=" md:max-w-xl max-w-lg w-full flex flex-col justify-center items-center space-y-5">
        <h2 className="md:text-4xl text-2xl font-bold text-white">
          Contact Me
        </h2>
        <p className="md:text-lg text-zinc-400">
          Do you wanna Work or Make a suggestion or You just wanna say hi? Just
          send a message via the form or contact me via any of the other mediums
          listed below.
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:items-center md:space-x-4">
            <input
              name="name"
              type="text"
              placeholder="name"
              className="flex-grow outline-none placeholder:text-zinc-600 placeholder:font-semibold bg-slate-300 px-3 py-2 text-lg shadow-lg z-30 rounded-md"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="flex-grow outline-none placeholder:text-zinc-600 placeholder:font-semibold bg-slate-300 px-3 py-2 text-lg shadow-lg z-30 rounded-md"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            placeholder="Message"
            name="mess"
            className="p-3 w-full z-30 my-4 outline-none bg-slate-300 text-sm h-40 rounded-md shadow-lg placeholder:text-zinc-600 placeholder:font-semibold"
            value={form.mess}
            onChange={handleChange}></textarea>
          <button
            type="submit"
            className="px-4 py-2 text-cyan-300 hover:bg-cyan-300 hover:text-slate-800 transition-all duration-300 ease-in border-2 border-cyan-300 rounded-md">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex items-center mt-5 md:space-x-4 md:justify-start justify-between"></div>
    </div>
  );
};

export default Contact;
