import React from "react";
import { BiMenu } from "react-icons/bi";

const Tabs = ({ tabs, setTabs }) => {
  return (
    <>
      <div className="">
        <span className=" lg:hidden">
          <BiMenu className="w-6 h-6 cursor-pointer" />
        </span>
        <div className=" hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
          <button
            className={`${
              tabs === "overview"
                ? "bg-indigo-100 text-gray-200"
                : "bg-transparent text-black"
            } w-full btn mt-0 rounded-md`}
          >
            Overview
          </button>
          <button
            className={`${
              tabs === "appointments"
                ? "bg-indigo-100 text-gray-200"
                : "bg-transparent text-black"
            } w-full btn mt-0 rounded-md`}
          >
            Appointments
          </button>
          <button
            className={`${
              tabs === "settings"
                ? "bg-indigo-100 text-gray-200"
                : "bg-transparent text-black"
            } w-full btn mt-0 rounded-md`}
          >
            Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Tabs;
