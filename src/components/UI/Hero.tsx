import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import HeroImg from "../../assets/developer.png";

export default function Hero() {
  return (
    <section className="pt-0" id="home">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="font-[500]"
            >
              Hello Welcome.
            </h5>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="leading-[45px] mt-5"
            >
              <h1 className="font-[700] text-[1.8rem] sm:text-[35px]">
                I'm Yusuf.
              </h1>
              <h1 className="text-cyan-700 font-[700] text-[2rem] sm:text-[40px]">
                Software Developer
              </h1>
              <h2 className="font-[500] text-[0.9rem] sm:text-[15px]">
                I'm a Frontend mobile and web developer.
              </h2>
              <div className="flex mt-3">
                <button className="text-[2rem] sm:text-[35px] mr-14">
                  <AiFillGithub />
                </button>
                <button className="text-[2rem] sm:text-[35px] mr-14">
                  <AiFillLinkedin />
                </button>
                <button className="text-[2rem] sm:text-[35px] mr-14">
                  <AiFillInstagram />
                </button>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img className="" src={HeroImg} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
