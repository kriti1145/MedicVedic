import React from "react";
import { Link } from "react-router-dom";
import aboutImag from "../assets/Images/about.jpg";
const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto md:flex-row py-10 md:ps-20">
        <div className="flex justify-content gap-[50px] md:gap-[130px] xl:gap-0 flex-col md:flex-row mt-7">
          {/*====== about image ======*/}
          <div className="relative w-3/4 md:w-2/3 z-10 order-2 md:order-1 ms-9">
            <img src={aboutImag} alt="" className="aboutimg" />
          </div>

          {/*====== about content ======*/}
          <div className="max-w-screen-2xl  mx-auto md:px-[50px] ms-9 me-8 order-1 md:order-2 w-3/4 md:w-2/3">
            <div className="">
              <h1 className="text-4xl font-bold pb-2 ">
                Proud to be one of the nations best
              </h1>
              <p>
                For 30 years in a row , U.S. News & world Report has recognized
                us as one of thr best public hospitals in the Nation and #1 in
                Texas. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Saepe aliquam quia quos minima ipsa ex non, quis neque iste
                cupiditate fuga hic, ducimus consectetur! Nostrum minus
                repudiandae vitae ut ullam.
              </p>
              <p className="mt-5">
                {" "}
                Our best is something we strive for each day, caring for our
                patients-not looking back at what we accomplished but towards
                what we can do tomorrow. Providing the best. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Sequi illo cupiditate
                laborum quidem labore similique esse consectetur corporis
                perspiciatis dolorum, libero consequuntur rerum ratione adipisci
                assumenda pariatur officiis. Est, cupiditate.
              </p>
              <Link to="/">
                <button className="btn aboutbtn px-7 font-[700] border-0 mt-5 text-[16px]">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
