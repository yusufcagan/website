import React, { useState, useEffect } from "react";
import { MdDarkMode, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeDarkSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("theme:", theme);
  };

  return (
    <header className="bg-zinc-100 dark:bg-zinc-800 w-full h-[8s0px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*========menu===*/}
          <div className="hidden md:flex">
            <ul className="flex items-centers gap-9">
              <li>
                <Link
                  className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="project"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="https://1drv.ms/b/s!Auh-TbsIPoYsgS7vzF8dekyWl8zn?e=VfO3PM"
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          {nav ? (
            <div className="items-center md:hidden">
              <button
                onClick={() => setNav(!nav)}
                className="bg-white dark:bg-zinc-700 shadow-lg gap-2 py-2 px-4 rounded-[8px]
            max-h-[40px] hover:bg-gray-100 ease-in duration-500"
              >
                <MdMenu size={25} />
              </button>
            </div>
          ) : (
            <div className="">
              <div className="md:hidden">
                <button
                  onClick={() => setNav(!nav)}
                  className="bg-white dark:bg-zinc-700 shadow-lg gap-2 py-2 px-4 rounded-[8px]
            max-h-[40px] hover:bg-gray-100 ease-in duration-500"
                >
                  <MdMenu size={25} />
                </button>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                className="md:hidden"
              >
                <ul>
                  <li>
                    <Link
                      className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      to="/project"
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-white dark:bg-zinc-700 shadow-lg border-spacing-3 text-smallTextColor dark:text-white font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      to="https://1drv.ms/b/s!Auh-TbsIPoYsgS7vzF8dekyWl8zn?e=VfO3PM"
                      target="_blank"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/*====dark==*/}
          <div className="md:flex items-center gap-4">
            <button
              onClick={themeDarkSwitch}
              className="flex items-center bg-white dark:bg-zinc-700 shadow-lg gap-2 font-[600] 
              py-2 px-4 rounded-[8px] 
              max-h-[40px] hover:bg-slate-100 ease-in duration-500"
            >
              <MdDarkMode color={theme === "dark" ? "white" : ""} size={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
