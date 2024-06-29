import React from "react";
import faqImg from "../../assets/Images/faq-img/faq.png";
import { Link } from "react-router-dom";
import FaqList from "./FaqList";
const Faq = () => {
  return (
    <>
      <div className="max-w-screen-2xl container  px-[60px] flex flex-col mx-auto md:flex-row">
        <div className="flex justify-between gap-[50px] lg:gap-15">
          {/*====== about image ======*/}
          <div className="w-1/2 hidden md:block">
            <img
              src={faqImg}
              alt=""
              className="ms-10 mt-1 border-b-4 border-[#C5D9CC] "
            />
          </div>

          {/*====== about content ======*/}
          <div className="w-full md:w-1/2">
            <div className="">
              <h1 className="text-4xl font-bold pb-2 me-5 text-[#313340] ">
                Most questions asked by our beloved patients
              </h1>
              <FaqList className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
