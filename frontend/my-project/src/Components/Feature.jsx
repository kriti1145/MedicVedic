import React from "react";
import { Link } from "react-router-dom";
import feaureImg from "../assets/Images/features/feature.jpg";
const Feature = () => {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto md:flex-row py-10 md:py-16 lg:gap-5">
        <div className="flex flex-col-reverse md:flex-row w-full mx-auto justify-between items-center ">
          {/*====== about content ======*/}
          <div className="w-full lg:w-full px-5 md:px-[10px]  order-2 lg:order-1 md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold pb-4 ">
              Get <span className="text-[#366459]">Virtual treatment </span>
              <br />
              anytime.
            </h1>
            <ul className="pl-1 text-[16px] md:text-lg ">
              <li className="mb-2">1. Schedule the appointment directlty.</li>
              <li className="mb-2">
                2. Search for your physician here, and contact their office.
              </li>
              <li className="mb-2">
                3. View our physicians who are accepting new patients, use the
                online scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link to="/">
              <button className="px-3 mt-5 ms-3 py-2 font-semibold text-sm md:text-base border-0  feature-btn">
                Learn more
              </button>
            </Link>
          </div>
        </div>
        {/*====== about image ======*/}
        <div className=" w-3/4 lg:w-2/4  hidden lg:block order-1 md:order-2 feature-img mb-5 md:transform ">
          <img src={feaureImg} alt="" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default Feature;
