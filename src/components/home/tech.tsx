// import { AnimatePage } from "@components/atoms/AnimatePage";
'use client';

import { techData } from '@/src/components/tech-data';

export default function Tech() {
  return (
    <section id="tools" className="my-20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-6">
        {techData
          .flat()
          .slice(0, -12)
          .map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-5xl">{tech.icon}</div>
            </a>
          ))}
      </div>
    </section>
  );
}
