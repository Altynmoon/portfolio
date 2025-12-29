import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d689a684-2294-422f-8eb4-ba7341aba523");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");

      if (event.target) {
        event.target.reset();
      }
    } else {
      setResult("Error");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]  "
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Conntect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-aauto hover:bg-black duration-500"
          type="submit"
        >
          Submit now
          <Image alt="" src={assets.right_arrow_white} className="w-4" />
        </button>
        <p className="mt-4 ">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
