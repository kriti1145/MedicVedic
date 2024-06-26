import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor, ServiceImg } = item;
  return (
    <>
      <div className="px-3 lg:px-5 border">
        <div className="flex justify-between">
          <h2 className="text-[26px]  font-[700] mt-7">{name}</h2>
          <img src={ServiceImg} alt="icon" className="h-10 w-10 mt-7" />
        </div>

        <p className="text-[16px] leading-7 font-[400] mt-4">{desc}</p>

        <div className="flex items-center justify-between m-[20px]">
          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] ms-[290px] flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none"
          >
            <BsArrowRight className="group-hover:text-[#C5D9CC] w-6 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
