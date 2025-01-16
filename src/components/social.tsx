import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

export default function Social() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/aunghtetmyatoo"
        target="_blank"
        className="text-2xl text-secondary-600 hover:text-secondary-900 dark:text-primary-100 dark:hover:text-primary-300"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://github.com/aunghtetmyatoo"
        target="_blank"
        className="text-2xl text-secondary-600 hover:text-secondary-900 dark:text-primary-100 dark:hover:text-primary-300"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://gitlab.com/aunghtetmyatoo"
        target="_blank"
        className="text-2xl text-secondary-600 hover:text-secondary-900 dark:text-primary-100 dark:hover:text-primary-300"
      >
        <FaGitlab />
      </Link>
    </>
  );
}
