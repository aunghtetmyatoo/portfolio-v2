'use client';

import Image from 'next/image';

import { workExperiences } from '../../constants/index';

export default function Experience() {
  return (
    <section className="my-20 px-5 sm:px-10" id="work">
      <div className="flex w-full flex-col items-center justify-center space-y-12 text-secondary-600 dark:text-white">
        <p className="text-gray_gradient text-3xl font-semibold sm:text-4xl">
          Professional Experience
        </p>

        <div className="col-span-2 w-full rounded-lg border border-secondary-400 bg-white dark:border-white dark:bg-secondary lg:w-3/4">
          <div className="px-2.5 py-5 sm:px-5 sm:py-10">
            {workExperiences.map((item, index) => (
              <div
                key={index}
                className="group grid cursor-pointer grid-cols-[auto_1fr] items-start gap-5 rounded-lg px-2.5 transition-all duration-500 ease-in-out hover:bg-secondary-100 dark:hover:bg-secondary-900 sm:px-5"
              >
                <div className="flex h-full flex-col items-center justify-start py-2">
                  <div className="h-16 w-16 rounded-3xl bg-white dark:bg-secondary-900">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      height={50}
                      width={50}
                      className="h-full w-full rounded-3xl"
                    />
                  </div>

                  <div className="mt-4 h-full w-0.5 flex-1 bg-secondary-300 group-last:hidden group-hover:bg-secondary-300 dark:group-hover:bg-secondary-100" />
                </div>

                <div className="px-2.5 py-5 sm:p-5">
                  <p className="font-bold">{item.name}</p>
                  <p className="mb-5 text-sm">
                    {item.pos} (<span>{item.duration}</span>)
                  </p>
                  <p className="transition-all duration-100 ease-in-out">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
