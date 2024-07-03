import React, { useState } from "react";
import doctorImg from "../../assets/Images/doctor-img/doc-2.png";
import starIcon from "../../assets/Images/doctor-img/star.png";
import DoctorAbout from "./DoctorAbout";
import DocFeedback from "./DocFeedback";

const DoctorDetail = () => {
  const [tab, setTab] = useState("about");

  return (
    <>
      <div className="max-w-screen-2xl px-5 mx-auto md:px-20 lg:py-20 py-10">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[300px] max-h-[200px]">
                <img
                  src={doctorImg}
                  alt=""
                  className="w-full object-cover border-b-4 border-[#C5D9CC]-600"
                />
              </figure>
              <div>
                <h3 className="text-[22px] leading-9 mt-3 font-bold">
                  Muhibur Rahman
                </h3>
                <span className="bg-[#C5D9CC] py-1 px-3 text-sm lg:text-base text-[#333333] font-semibold rounded mt-3 mb-3">
                  Surgeon
                </span>
                <div className="flex items-center gap-[6px] mt-2">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold ">
                    <img src={starIcon} alt="" className="h-4 w-4 " /> 4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400]">
                    (272)
                  </span>
                </div>

                <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia ad assumenda quisquam? Perferendis, ipsum! Unde
                  blanditiis quos exercitationem sapiente cumque maiores, at,
                  commodi praesentium illo, impedit neque soluta nam eum!
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#333333] ">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" &&
                  "border-b border-solid border-[#7cb8aa] border-b-4"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-[#7cb8aa] border-b-4"
                } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <DocFeedback />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetail;
