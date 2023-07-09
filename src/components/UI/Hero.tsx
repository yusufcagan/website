import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import HeroImg from "../../assets/developer.png";

export default function Hero() {
  return (
    <div className="container pt-14">
      <div className="md:flex items-center justify-between sm:flex-row">
        <div className="w-full md:basis-1/2">
          <h5
            data-aos="fade-right"
            data-aos-duration="1500"
            className="font-[500] dark:text-gray-300"
          >
            Hello Welcome.
          </h5>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="leading-[45px] mt-5"
          >
            <h1 className="font-[700] text-[1.8rem] sm:text-[35px] dark:text-gray-300">
              I'm Yusuf.
            </h1>
            <h1 className="text-cyan-700 font-[700] text-[2rem] sm:text-[40px] dark:text-gray-400">
              Software Developer
            </h1>
            <h2 className="font-[500] text-[0.9rem] sm:text-[15px] dark:text-gray-300">
              I'm a Frontend mobile and web developer.
            </h2>
            <div className="flex mt-3">
              <button className="dark:text-gray-500 text-[2rem] sm:text-[35px] mr-14 hover:scale-110 transition-transform">
                <a
                  href="https://github.com/yusufcagan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </button>
              <button className="dark:text-gray-500 text-[2rem] sm:text-[35px] mr-14 hover:scale-110 transition-transform">
                <a
                  href="https://www.linkedin.com/in/yusuf-cagan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </button>
              <button className="dark:text-gray-500 text-[2rem] sm:text-[35px] mr-14 hover:scale-110 transition-transform">
                <a
                  href="https://www.instagram.com/yusuf.cagann/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="md:basis-1/3 mt-10 sm:mt-0">
          <figure>
            <img src={HeroImg} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
