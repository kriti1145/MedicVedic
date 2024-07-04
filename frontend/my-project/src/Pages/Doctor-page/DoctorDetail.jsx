import React, { useState } from "react";
import doctorImg from "../../assets/Images/doctor-img/doc-2.png";
import starIcon from "../../assets/Images/doctor-img/star.png";
import DoctorAbout from "./DoctorAbout";
import DocFeedback from "./DocFeedback";
import SidePanel from "./SidePanel";

const DoctorDetail = () => {
  const [tab, setTab] = useState("about");

  return (
    <div className="max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 mx-auto py-10 lg:py-20">
      <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <figure className="w-full md:max-w-[300px] max-h-[200px]">
              <img
                src={doctorImg}
                alt="Doctor"
                className="w-full h-auto object-cover border-b-4 border-[#C5D9CC]-600"
              />
            </figure>
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-2 md:mt-0">
                Muhibur Rahman
              </h3>
              <span className=" bg-[#C5D9CC] py-1 px-3 text-sm lg:text-base text-[#333333] font-semibold rounded mt-2 lg:mt-3">
                Surgeon
              </span>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center gap-1 text-sm lg:text-base font-semibold">
                  <img src={starIcon} alt="Star" className="h-4 w-4" /> 4.8
                </span>
                <span className="text-sm lg:text-base font-normal">(272)</span>
              </div>
              <p className="text-sm sm:text-base mt-3 md:mt-4 lg:mt-5 lg:max-w-[390px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia ad assumenda quisquam? Perferendis, ipsum! Unde
                blanditiis quos exercitationem sapiente cumque maiores, at,
                commodi praesentium illo, impedit neque soluta nam eum!
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-12 border-b border-solid border-[#333333]">
            <button
              onClick={() => setTab("about")}
              className={`py-2 px-4 sm:px-5 text-sm lg:text-base font-semibold ${
                tab === "about" && "border-b-4 border-[#7cb8aa]"
              } mr-4`}
            >
              About
            </button>
            <button
              onClick={() => setTab("feedback")}
              className={`py-2 px-4 sm:px-5 text-sm lg:text-base font-semibold ${
                tab === "feedback" && "border-b-4 border-[#7cb8aa]"
              }`}
            >
              Feedback
            </button>
          </div>

          <div className="mt-8 lg:mt-12">
            {tab === "about" && <DoctorAbout />}
            {tab === "feedback" && <DocFeedback />}
          </div>
        </div>

        <div
          className={`md:mt-0 ${tab === "about" ? "block" : "hidden md:block"}`}
        >
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
