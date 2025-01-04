"use client";

// import emailjs from "@emailjs/browser";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  // const formRef = useRef();
  const [loading] = useState(false);

  const [form] = useState({ name: "", email: "", message: "" });

  return (
    <section className="my-20 px-5 sm:px-10" id="contact">
      {/* {alert.show && <Alert {...alert} />} */}

      <div className="relative mx-0 flex min-h-screen flex-col items-center justify-center xl:mx-28">
        <Image
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
          width={1920}
          height={1080}
        />

        <div className="relative z-10 mt-12 w-full px-7 sm:w-3/4 sm:px-0 lg:w-1/2">
          <h3 className="text-gray_gradient text-3xl font-semibold sm:text-4xl">
            Contact Me
          </h3>

          <form
            // ref={formRef}
            // onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="text-white-600 text-lg">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                // onChange={handleChange}
                required
                className="placeholder:text-white-500 text-white-800 shadow-black-200 min-h-14 w-full rounded-lg bg-black px-5 py-2 text-lg shadow-2xl focus:outline-none"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="text-white-600 text-lg">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                // onChange={handleChange}
                required
                className="placeholder:text-white-500 text-white-800 shadow-black-200 min-h-14 w-full rounded-lg bg-black px-5 py-2 text-lg shadow-2xl focus:outline-none"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="text-white-600 text-lg">Your message</span>
              <textarea
                name="message"
                value={form.message}
                // onChange={handleChange}
                required
                rows={5}
                className="placeholder:text-white-500 text-white-800 shadow-black-200 min-h-14 w-full rounded-lg bg-black px-5 py-2 text-lg shadow-2xl focus:outline-none"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="shadow-black-200 flex min-h-12 items-center justify-center gap-3 rounded-lg bg-black px-5 py-2 text-lg text-white shadow-2xl"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}

              <Image
                src="/assets/arrow-up.png"
                alt="arrow-up"
                width={10}
                height={10}
                className="object-contain brightness-0 invert"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
