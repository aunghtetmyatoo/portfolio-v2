"use client";

import Image from "next/image";

import { workExperiences } from "../constants/index";

const Experience = () => {
  return (
    <section className="my-20 px-5 sm:px-10" id="work">
      <div className="text-white-600 flex w-full flex-col items-center justify-center space-y-12">
        <p className="text-gray_gradient text-3xl font-semibold sm:text-4xl">
          My Work Experience
        </p>

        <div className="bg-black-200 col-span-2 w-3/4 rounded-lg border border-white">
          <div className="px-2.5 py-5 sm:px-5 sm:py-10">
            {workExperiences.map((item, index) => (
              <div
                key={index}
                className="hover:bg-black-200 group grid cursor-pointer grid-cols-[auto_1fr] items-start gap-5 rounded-lg px-2.5 transition-all duration-500 ease-in-out sm:px-5"
              >
                <div className="flex h-full flex-col items-center justify-start py-2">
                  <div className="h-16 w-16 rounded-3xl bg-purple-600 p-2">
                    <Image
                      src="/favicon.ico"
                      alt=""
                      height={50}
                      width={50}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="group-hover:bg-black-500 mt-4 h-full w-0.5 flex-1 bg-white group-last:hidden" />
                </div>

                <div className="px-2.5 py-5 sm:p-5">
                  <p className="text-white-800 font-bold">{item.name}</p>
                  <p className="mb-5 text-sm">
                    {item.pos} -- <span>{item.duration}</span>
                  </p>
                  <p className="transition-all duration-500 ease-in-out group-hover:text-white">
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
};

export default Experience;
