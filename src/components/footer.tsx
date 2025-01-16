import React from 'react';

import Social from './social';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="body-font bg-white dark:bg-secondary">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-8 py-8 sm:flex-row">
        <a
          href="/"
          className="logo select-none text-xl font-black leading-none text-secondary-600 dark:text-primary-100"
        >
          AHMO
          <span className="text-secondary-600 dark:text-primary-100">.</span>
        </a>
        <p className="mt-4 text-sm text-secondary-600 dark:text-primary-100 sm:ml-4 sm:mt-0 sm:border-l sm:border-secondary-600 sm:pl-4 sm:dark:border-white">
          © {currentYear} AHMO. All rights reserved.
        </p>
        <span className="mt-4 inline-flex justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <Social />
        </span>
      </div>
    </section>
  );
}
