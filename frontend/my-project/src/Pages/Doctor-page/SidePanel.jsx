import React from "react";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  return (
    <div className="shadow-panelShadow p-4 lg:p-6 rounded-md md:mt-8">
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg lg:text-xl">Consultant Price</p>
        <span className="text-lg lg:text-xl font-semibold text-[#366459]">
          Rs. {ticketPrice}
        </span>
      </div>

      <div className="mt-4 lg:mt-6">
        <p className="font-semibold text-[#366459] text-lg">
          Available Time Slots:
        </p>
        <ul className="mt-2">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex justify-between mb-2">
              <p className="text-base font-medium">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-base font-medium">
                {convertTime(item.startingTime)} -{convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn w-full mt-4 lg:mt-6 px-4 py-2 font-semibold text-base border-0 feature-btn">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
