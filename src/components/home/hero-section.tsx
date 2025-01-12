import Image from 'next/image';
import Link from 'next/link';

import { TypeWriter } from './type-writer';

export default function HeroSection() {
  const talkAbout = [
    'Laravel',
    'Node.js',
    'React',
    'TypeScript',
    'Next.js',
    'Linux',
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden pt-14">
      <div className="bg-gradient-from-t from-off-white absolute inset-x-0 bottom-0 -z-10 h-24 dark:from-slate-950 sm:h-32" />
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-40deg] dark:shadow-slate-700 sm:-mr-80 lg:-mr-96 lg:shadow-xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[50deg] dark:shadow-slate-700 sm:-mr-80 lg:-mr-96 lg:shadow-xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-black dark:text-white lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="headline max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:col-span-2 xl:col-auto">
            I&apos;m Aung Htet Myat Oo
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="dark:text-off-white text-lg leading-8">
              I&apos;m a passionate full-stack developer specializing in web
              development, with expertise in PHP, Laravel, React, Nodejs, and
              Linux to develop customized software solutions for a variety of
              different businesses. In addition to my programming skills,
              I&apos;ve been practicing mindfulness regularly, which has helped
              me improve my concentration and problem-solving skills.
              <br />
              You can talk to me about <TypeWriter strings={talkAbout} />.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-secondary-800 transition-all hover:text-secondary-900 dark:text-secondary-100 dark:hover:text-secondary-300"
              >
                Read more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <Image
            src="/profile.jpg"
            alt="Photo of AHMO"
            height={300}
            width={450}
            loading="eager"
            className="mb-8 mt-10 aspect-[6/5] max-w-full rounded-2xl object-cover sm:mt-16 lg:mb-0 lg:ml-20 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
          />
        </div>
      </div>
      <div className="from-off-white absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t dark:from-secondary sm:h-32" />
    </section>
  );
}
