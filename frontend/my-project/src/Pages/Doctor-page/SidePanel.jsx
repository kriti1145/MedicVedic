import React from "react";

const SidePanel = () => {
  return (
    <>
      <div className="shadow-panelShadow p-3 lg:p-5 rounded-md mt-[30px]">
        <div className="flex items-center justify-between">
          <p className="mt-0 font-bold text-[18px]">Ticket Price</p>
          <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 font-semibold text-[#366459]">
            Rs. 500
          </span>
        </div>

        <div className="mt-[20px] ">
          <p className="mt-0 font-semibold text-[#366459] text-[18px]">
            Available Time Slots:
          </p>
          <ul className="mt-3">
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 font-medium">Sunday</p>

              <p className="text-[15px] leading-6 font-medium">
                4:30 PM - 8:00 PM
              </p>
            </li>
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 font-medium">Wednesday</p>

              <p className="text-[15px] leading-6 font-medium">
                6:30 PM - 8:00 PM
              </p>
            </li>
            <li className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 font-medium">Friday</p>

              <p className="text-[15px] leading-6 font-medium">
                1:30 PM - 6:00 PM
              </p>
            </li>
          </ul>
        </div>

        <button className="btn w-full rounded-md px-3 mt-5  py-2 font-semibold text-sm md:text-base border-0  feature-btn ">
          Book Appointment
        </button>
      </div>
    </>
  );
};

export default SidePanel;
