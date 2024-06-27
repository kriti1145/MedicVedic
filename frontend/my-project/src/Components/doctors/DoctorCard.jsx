import React from "react";
import star from "../../assets/Images/doctor-img/star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <>
      <div className="p-3 lg:p-5 bg-[#d9e9df] border border-[#7cb8aa] rounded-[6px]">
        <div>
          <img
            src={photo}
            alt="icon"
            className="w-full bg-[#F2F2F2] rounded-[6px]"
          />
        </div>
        <h2 className="text-[22px]  font-[600] mt-3 ">{name}</h2>

        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className="bg-[#C5D9CC] py-1 px-2 text-[14px] text-[#333333] font-semibold rounded">
            {specialization}
          </span>
          <div className="flex items-center gap-[6px]">
            <span className="flex items-center gap-[6px] text-[14px] font-semibold ">
              <img src={star} alt="" className="h-4 w-4" />
              {avgRating}
            </span>
            <span className="text-[14px] font-[400] ">({totalRating})</span>
          </div>
        </div>

        <div className="mt-[18px] md:mt-5 flex items-center justify-between">
          <div>
            <h3 className="text-[16px] font-semibold">
              + {totalPatients} patients
            </h3>
            <p className="text-[13px] font-[400] text-[#313340]">
              At {hospital}
            </p>
          </div>
          <Link
            to="/doctors"
            className="w-[44px] h-[44px] rounded-full border border-solid border-[#7cb8aa] mt-3 flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none  "
          >
            <BsArrowRight className=" text-[#7cb8aa] group-hover:text-white w-6 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
