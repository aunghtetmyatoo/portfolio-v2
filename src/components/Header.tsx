"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  console.log(router, "router");
  const [mounted, setMounted] = useState(false);
  const Links = [
    { name: "about", link: "/about" },
    { name: "works", link: "/works" },
    { name: "projects", link: "/projects" },
    { name: "contact", link: "/contact" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const touchRef = useRef<HTMLDivElement>(null);
  const clickHandler = (link: string) => {
    // if (router != link) {
    //   setTimeout(() => {
    //     setOpen(false);
    //   }, 700);
    // }
    if (router) {
      setTimeout(() => {
        setOpen(false);
      }, 700);
      router.push(link);
    }
  };
  const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(touchRef);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <nav
      ref={touchRef}
      className={`${
        isScrolled && "bg-opacity-[0.5] shadow-md drop-shadow-lg"
      } linear z-40 mx-auto w-[75%] max-w-6xl bg-white bg-opacity-50 font-medium transition-all duration-500 dark:bg-[#35353579] dark:text-white sm:w-[75%] md:w-[70%] lg:w-[55%] xl:w-[50%] ${
        open && "bg-opacity-100 dark:bg-[#000]"
      } drop-shadow-xs sticky top-4 rounded-2xl backdrop-blur-sm`}
    >
      <div className="flex place-items-center items-center justify-between px-8 py-3 md:flex md:justify-center md:space-x-10 md:px-10 lg:space-x-12 xl:space-x-16">
        <div className="order-2 flex cursor-pointer select-none items-center text-gray-800 md:order-1">
          <Link
            href={"/"}
            className={twMerge(
              "text-2xl font-extrabold italic",
              clsx({
                "text-white": currentTheme === "dark",
                "text-black": currentTheme === "light",
              }),
            )}
          >
            AHMO
          </Link>
        </div>
        {currentTheme === "dark" ? (
          <button
            onClick={() => {
              setTheme("light");
            }}
            className="w-max fill-purple-600 md:order-8"
          >
            <MdOutlineLightMode className="h-4 w-4" />{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme("dark");
            }}
            className="w-max fill-purple-600 text-black md:order-8"
          >
            <MdOutlineDarkMode className="h-4 w-4" />{" "}
          </button>
        )}

        <div
          onClick={() => setOpen(!open)}
          className="order-3 flex cursor-pointer flex-col items-center space-y-[0.2rem] text-lg font-semibold transition-all duration-500 ease-in md:hidden"
        >
          <div
            className={` ${
              open && "translate-y-[5px] rotate-45"
            } relative h-[0.1125rem] w-4 origin-center rounded-xl bg-black fill-black text-black transition-all duration-500 ease-in dark:bg-white/70 dark:text-white/70`}
          ></div>
          <div
            className={` ${
              open && "translate-x-20 opacity-0"
            } relative h-[0.1rem] w-4 origin-center rounded-xl bg-black fill-black text-black transition-all duration-1000 ease-in-out dark:bg-white/70 dark:text-white/70`}
          ></div>
          <div
            className={` ${
              open && "-translate-y-[5px] -rotate-45"
            } relative h-[0.1125rem] w-4 origin-center rounded-xl bg-black fill-black text-black transition-all duration-500 ease-in dark:bg-white/70 dark:text-white/70`}
          ></div>
        </div>
        <ul
          className={`rounded-3xl md:rounded-none ${
            open ? "dark:bg-[#000]" : "dark:bg-[#35353500]"
          } bg-light-blue absolute left-0 z-[-1] order-4 w-full bg-white py-4 pb-8 pl-9 font-semibold transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:bg-inherit md:bg-none md:py-0 md:pb-0 md:pl-0 lg:transition-none ${
            open ? "top-[3.5rem]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 text-base md:my-0 md:ml-8">
              <Link
                href={link.link}
                onClick={() => clickHandler(`${link.name}`)}
                className={`${
                  // router === link.link
                  router
                    ? "font-out text-purple-400"
                    : "font-out text-gray-700 dark:text-white"
                } duration-500 hover:text-purple-500 dark:hover:text-purple-500`}
              >
                <span>
                  {link.name}
                  {link.name === "timeline" && (
                    <sup className="rounded border-sky-100 bg-red-600 px-1 text-[8px] font-semibold text-white">
                      1
                    </sup>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
