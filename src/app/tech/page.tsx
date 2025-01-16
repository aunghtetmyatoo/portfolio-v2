import Link from 'next/link';
import React from 'react';

import Layout from '@/src/components/layout';
import { techData } from '@/src/components/tech-data';

import styles from './style.module.scss';

export default function Tech() {
  return (
    <Layout>
      <section className="flex justify-center py-10 pl-[75px]">
        <div className="flex">
          {techData.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col ${columnIndex === 0 ? '' : 'ml-[-75px]'} ${styles[`column-${columnIndex + 1}`]}`}
            >
              {column.map((tech, techIndex) => (
                <Link
                  href={tech.link}
                  target="_blank"
                  key={techIndex}
                  className={`${styles.box}`}
                >
                  <span
                    style={{ color: tech.color }}
                    className={`${styles.tooltip}`}
                  >
                    {tech.name}
                  </span>
                  <div
                    className={`${styles['box-face']} bg-gradient-to-r from-white to-[#efefef] dark:from-primary-200/25 dark:to-secondary-700/25`}
                  >
                    <div className={`${styles['box-text']}`}>{tech.icon}</div>
                  </div>
                  <div
                    className={`${styles['box-back']} bg-gradient-to-r from-white to-[#efefef] dark:from-primary-200/25 dark:to-secondary-700/25`}
                  ></div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
