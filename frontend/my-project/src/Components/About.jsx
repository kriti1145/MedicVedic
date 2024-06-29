import React from "react";
import { Link } from "react-router-dom";
import aboutImag from "../assets/Images/about.jpg";
const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto py-10 md:py-20 px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/*====== about image ======*/}
          <div className="relative w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <img
              src={aboutImag}
              alt=""
              className="aboutimg w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/*====== about content ======*/}
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Proud to be one of the nation's best
            </h1>
            <p className="mb-4">
              For 30 years in a row, U.S. News & World Report has recognized us
              as one of the best public hospitals in the Nation and #1 in Texas.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              aliquam quia quos minima ipsa ex non, quis neque iste cupiditate
              fuga hic, ducimus consectetur! Nostrum minus repudiandae vitae ut
              ullam.
            </p>
            <p className="mb-6">
              Our best is something we strive for each day, caring for our
              patients - not looking back at what we accomplished but towards
              what we can do tomorrow. Providing the best. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Sequi illo cupiditate
              laborum quidem labore similique esse consectetur corporis
              perspiciatis dolorum, libero consequuntur rerum ratione adipisci
              assumenda pariatur officiis. Est, cupiditate.
            </p>
            <Link to="/">
              <button className="btn aboutbtn px-7 py-2 font-bold text-white ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
