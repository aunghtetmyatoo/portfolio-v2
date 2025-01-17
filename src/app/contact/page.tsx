'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';

import Alert from '@/src/components/alert';
import Layout from '@/src/components/layout';
import useAlert from '@/src/hooks/use-alert';

export default function Contact() {
  // const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/contact', form);

      if (response.status === 200) {
        setLoading(false);
        showAlert({
          text: 'Thank you for your message 😃',
          type: 'success',
        });
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          hideAlert();
        }, 9000);
      } else {
        setLoading(false);
        showAlert({
          text: "I didn't receive your message 😢",
          type: 'danger',
        });
        setTimeout(() => {
          hideAlert();
        }, 5000);
      }
    } catch {
      setLoading(false);
      showAlert({
        text: "I didn't receive your message 😢",
        type: 'danger',
      });
      setTimeout(() => {
        hideAlert();
      }, 5000);
    }
  };

  return (
    <Layout>
      <section className="my-20 px-5 sm:px-10" id="contact">
        <div className="relative mx-0 flex min-h-screen flex-col items-center justify-center xl:mx-28">
          <Image
            src="/assets/terminal.png"
            alt="terminal-bg"
            className="absolute inset-0 min-h-screen"
            width={1920}
            height={1080}
          />

          <div className="relative z-10 mt-12 w-full px-7 sm:w-3/4 sm:px-0 lg:w-1/2">
            <h3 className="text-3xl font-semibold text-primary-100 sm:text-4xl">
              Contact Me
            </h3>

            <form
              // ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="text-lg text-primary-100">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="shadow-black-200 min-h-14 w-full rounded-lg bg-black px-5 py-2 text-lg text-primary-100 shadow-2xl placeholder:text-primary-100/70 focus:outline-none"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-3">
                <span className="text-lg text-primary-100">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="shadow-black-200 min-h-14 w-full rounded-lg bg-black px-5 py-2 text-lg text-primary-100 shadow-2xl placeholder:text-primary-100/70 focus:outline-none"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="text-lg text-primary-100">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="shadow-black-200 min-h-14 w-full rounded-lg bg-black px-5 py-2 text-lg text-primary-100 shadow-2xl placeholder:text-primary-100/70 focus:outline-none"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              {!alert.show && (
                <button
                  className="shadow-black-200 flex min-h-12 items-center justify-center gap-3 rounded-lg bg-black px-5 py-2 text-lg text-primary-100 shadow-2xl"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}

                  <FaLocationArrow className="text-lg" />
                </button>
              )}
              {alert.show && <Alert {...alert} />}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
