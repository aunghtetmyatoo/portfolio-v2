import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="body-font bg-white text-white dark:bg-secondary">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-8 py-8 sm:flex-row">
        <a
          href="/"
          className="logo select-none text-xl font-black leading-none text-secondary-600 dark:text-white"
        >
          AHMO<span className="text-secondary-600 dark:text-white">.</span>
        </a>
        <p className="mt-4 text-sm text-secondary-600 dark:text-white sm:ml-4 sm:mt-0 sm:border-l sm:border-secondary-600 sm:pl-4 sm:dark:border-white">
          © {currentYear} AHMO. All rights reserved.
        </p>
        <span className="mt-4 inline-flex justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <Link
            href="https://www.linkedin.com/in/aunghtetmyatoo"
            target="_blank"
            className="text-2xl text-secondary-600 hover:text-secondary-900 dark:text-white dark:hover:text-secondary-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/aunghtetmyatoo"
            target="_blank"
            className="text-2xl text-secondary-600 hover:text-secondary-900 dark:text-white dark:hover:text-secondary-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://gitlab.com/aunghtetmyatoo"
            target="_blank"
            className="text-2xl text-secondary-600 hover:text-secondary-900 dark:text-white dark:hover:text-secondary-300"
          >
            <FaGitlab />
          </Link>
        </span>
      </div>
    </section>
  );
}
