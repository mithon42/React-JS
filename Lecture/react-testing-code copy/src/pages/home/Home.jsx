import React from "react";
import { FaArrowRight } from "react-icons/fa";
import home from "../../assets/images/home.jpg";
import "./home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="md:container md:mx-auto flex items-center justify-start">
        <div className="w-[60%]">
          <h1 className="home-title pl-[100px] text-white text-7xl font-bold leading-snug">
            I'm Mithon Ali.<span className="text-primary"> Web designer</span>
          </h1>

          <p className="text-white text-[16px] font-normal py-3">
            Hi! I am Mithon from Bangladesh. I am a CSE student. I have been a
            professional Front end web developer since 2022. I have much
            experience in front-end web development. I love coding and
            programming And Front-end development is not my hobby It is only my
            passion.
          </p>

          <button className="flex items-center gap-3 bg-transparent border-2 rounded-2xl py-3 px-5 font-medium text-white text-3xl">
            <span className="">More About Me</span>
            <FaArrowRight className="text-primary" />
          </button>
        </div>
        <div className="w-[40%] h-[100vh] flex items-center justify-end">
          <img src={home} alt={home} className="w-[90%] rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Home;
