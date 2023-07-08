import React, { useState } from "react";
import { MdDarkMode, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState(true);
  return (
    <header className="bg-zinc-100 w-full h-[8s0px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*========menu===*/}
          <div className="hidden md:flex">
            <ul className="flex items-centers gap-9">
              <li>
                <Link
                  className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="/"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                  to="/"
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
                className="bg-white shadow-lg gap-2 py-2 px-4 rounded-[8px]
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
                  className="bg-white shadow-lg gap-2 py-2 px-4 rounded-[8px]
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
                    <a
                      className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      href="#project"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-white shadow-lg border-spacing-3 text-smallTextColor font-[500] rounded-[9px] 
                  py-2 px-2 hover:bg-gray-200 duration-500"
                      href="#resume"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/*====dark==*/}
          <div className="md:flex items-center gap-4">
            <button
              className="flex items-center bg-white shadow-lg gap-2 font-[600] 
              py-2 px-4 rounded-[8px] 
              max-h-[40px] hover:bg-slate-100 ease-in duration-500"
            >
              <MdDarkMode size={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
