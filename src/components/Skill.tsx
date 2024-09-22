// import { AnimatePage } from "@components/atoms/AnimatePage";
"use client";

import Image from "next/image";

const Skill = () => {
  return (
    <section id="tools" className="my-40">
      {/* <h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
        Some of my favourite tools
      </h2> */}

      <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-8">
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/laravel/art/master/logo-mark/5%20svg/3%20rgb/1%20Full%20Color/laravel-mark-rgb-red.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg"
          alt="tool"
          height={50}
          width={50}
          loading="eager"
        />
        {/* <LogoNext className="w-32" aria-label="Next.js" /> */}
        {/* <LogoVercel className="w-32 md:w-36" aria-label="Vercel" /> */}
      </div>
    </section>
  );
};

export default Skill;