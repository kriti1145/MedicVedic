import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-4 lg:p-6 rounded-md md:mt-8">
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg lg:text-xl">Consultant Price</p>
        <span className="text-lg lg:text-xl font-semibold text-[#366459]">
          Rs. 500
        </span>
      </div>

      <div className="mt-4 lg:mt-6">
        <p className="font-semibold text-[#366459] text-lg">
          Available Time Slots:
        </p>
        <ul className="mt-2">
          <li className="flex justify-between mb-2">
            <p className="text-base font-medium">Sunday</p>
            <p className="text-base font-medium">4:30 PM - 8:00 PM</p>
          </li>
          <li className="flex justify-between mb-2">
            <p className="text-base font-medium">Wednesday</p>
            <p className="text-base font-medium">6:30 PM - 8:00 PM</p>
          </li>
          <li className="flex justify-between mb-2">
            <p className="text-base font-medium">Friday</p>
            <p className="text-base font-medium">1:30 PM - 6:00 PM</p>
          </li>
        </ul>
      </div>

      <button className="btn w-full mt-4 lg:mt-6 px-4 py-2 font-semibold text-base border-0 feature-btn">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
