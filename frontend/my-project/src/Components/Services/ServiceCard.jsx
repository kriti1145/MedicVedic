import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor, ServiceImg } = item;
  return (
    <>
      <div className="px-3 lg:px-5 border bg-[#e7f0dc] rounded-[20px] service-card">
        <div className="flex justify-between">
          <h2 className="text-[26px]  font-[700] mt-7">{name}</h2>
          <img src={ServiceImg} alt="icon" className="h-10 w-10 mt-7" />
        </div>

        <p className="text-[16px] leading-7 font-[400] mt-4">{desc}</p>

        <div className="flex items-center justify-between m-[20px] arrow">
          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#7cb8aa] ms-[290px] flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none  "
          >
            <BsArrowRight className=" text-[#7cb8aa] group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
