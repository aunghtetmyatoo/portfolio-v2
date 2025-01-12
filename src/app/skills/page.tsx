import React from "react";
import styles from "./style.module.scss";
import {
  FaPhp,
  FaNodeJs,
  FaCss3Alt,
  FaBootstrap,
  FaVuejs,
  FaLaravel,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaAws,
  FaDocker,
  FaDigitalOcean,
  FaSass,
} from "react-icons/fa";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Link from "next/link";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoFirebase,
  BiLogoPostgresql,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  SiMysql,
  SiMongodb,
  SiVite,
  SiWebpack,
  SiAlpinedotjs,
  SiLivewire,
  SiFilament,
  SiNestjs,
  SiRedux,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const techData = [
  [
    {
      name: "PHP",
      icon: <FaPhp color="#777BB4" />,
      color: "#777BB4",
      link: "https://www.php.net",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs color="#339933" />,
      color: "#339933",
      link: "https://nodejs.org",
    },
    {
      name: "Typescript",
      icon: <BiLogoTypescript color="#3178C6" />,
      color: "#3178C6",
      link: "https://www.typescriptlang.org",
    },
    {
      name: "Javascript",
      icon: <BiLogoJavascript color="#F7DF1E" />,
      color: "#F7DF1E",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Git",
      icon: <FaGitAlt color="#F05032" />,
      color: "#F05032",
      link: "https://git-scm.com",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 color="#E34F26" />,
      color: "#E34F26",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt color="#1572B6" />,
      color: "#1572B6",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  ],
  [
    {
      name: "Laravel",
      icon: <FaLaravel color="#FF2D20" />,
      color: "#FF2D20",
      link: "https://laravel.com",
    },
    {
      name: "React",
      icon: <FaReact color="#61DAFB" />,
      color: "#61DAFB",
      link: "https://reactjs.org",
    },
    {
      name: "Vue",
      icon: <FaVuejs color="#42b883" />,
      color: "#42b883",
      link: "https://vuejs.org",
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill color="#000000" />,
      color: "#000000",
      link: "https://nextjs.org",
    },
    {
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss color="#06B6D4" />,
      color: "#06B6D4",
      link: "https://tailwindcss.com",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap color="#7952B3" />,
      color: "#7952B3",
      link: "https://getbootstrap.com",
    },
  ],
  [
    {
      name: "MySQL",
      icon: <SiMysql color="#4479A1" />,
      color: "#4479A1",
      link: "https://www.mysql.com",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" />,
      color: "#47A248",
      link: "https://www.mongodb.com",
    },
    {
      name: "Firebase",
      icon: <BiLogoFirebase color="#FFCA28" />,
      color: "#FFCA28",
      link: "https://firebase.google.com",
    },
    {
      name: "AWS",
      icon: <FaAws color="#FF9900" />,
      color: "#FF9900",
      link: "https://aws.amazon.com",
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql color="#336791" />,
      color: "#336791",
      link: "https://www.postgresql.org",
    },
  ],
  [
    {
      name: "Docker",
      icon: <FaDocker color="#2496ED" />,
      color: "#2496ED",
      link: "https://www.docker.com",
    },
    {
      name: "Vite",
      icon: <SiVite color="#646CFF" />,
      color: "#646CFF",
      link: "https://vitejs.dev",
    },
    {
      name: "Webpack",
      icon: <SiWebpack color="#8DD6F9" />,
      color: "#8DD6F9",
      link: "https://webpack.js.org",
    },
    {
      name: "Digital Ocean",
      icon: <FaDigitalOcean color="#0080FF" />,
      color: "#0080FF",
      link: "https://www.digitalocean.com",
    },
  ],
  [
    {
      name: "Alpine.js",
      icon: <SiAlpinedotjs color="#8BC0D0" />,
      color: "#8BC0D0",
      link: "https://alpinejs.dev",
    },
    {
      name: "Livewire",
      icon: <SiLivewire color="#FB6FA9" />,
      color: "#FB6FA9",
      link: "https://laravel-livewire.com",
    },
    {
      name: "Nest.js",
      icon: <SiNestjs color="#E0234E" />,
      color: "#E0234E",
      link: "https://nestjs.com",
    },
  ],
  [
    {
      name: "Filament",
      icon: <SiFilament color="#F2911A" />,
      color: "#F2911A",
      link: "https://filamentphp.com",
    },
    {
      name: "Redux",
      icon: <SiRedux color="#764ABC" />,
      color: "#764ABC",
      link: "https://redux.js.org",
    },
  ],
  [
    {
      name: "Sass",
      icon: <FaSass color="#CC6699" />,
      color: "#CC6699",
      link: "https://sass-lang.com",
    },
  ],
];

const Tech = () => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <section className="flex justify-center pl-[75px] pt-10">
          <div className="flex">
            {techData.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex flex-col ${columnIndex !== 0 ? "ml-[-75px]" : ""} ${styles[`column-${columnIndex + 1}`]}`}
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
                    <div className={`${styles["box-face"]}`}>
                      <div className={`${styles["box-text"]}`}>{tech.icon}</div>
                    </div>
                    <div className={`${styles["box-back"]}`}></div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default Tech;
