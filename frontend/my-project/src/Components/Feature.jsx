import React from "react";
import { Link } from "react-router-dom";
import feaureImg from "../assets/Images/features/feature.jpg";
const Feature = () => {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto md:flex-row py-2 md:ps-20">
        <div className="flex justify-content gap-[50px] md:gap-[100px] xl:gap-0 flex-col md:flex-row mt-7">
          {/*====== about content ======*/}
          <div className="max-w-screen-2xl  mx-auto md:px-[25px] w-3/4 md:w-2/3 order-2 md:order-1">
            <div className="">
              <h1 className="text-3xl font-bold pb-2 ">
                Get <span className="text-[#366459]">Virtual treatment </span>
                <br />
                anytime.
              </h1>
              <ul className="pl-4">
                <li className="font-[26px]">
                  1. Schedule the appointment directlty.
                </li>
                <li className="font-[26px]">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="font-[26px]">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="px-3 mt-3 ms-3 py-2 font-[600] border-0 text-[14px] feature-btn">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          {/*====== about image ======*/}
          <div className="relative w-3/4 md:w-1/3 z-10 mx-auto order-1 md:order-2">
            <img src={feaureImg} alt="" className="featureimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
