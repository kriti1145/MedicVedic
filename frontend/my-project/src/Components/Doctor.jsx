import React from "react";
import DoctorList from "../Components/doctors/DoctorList";
const Doctor = () => {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto md:flex-row py-10 md:ps-20 ">
        <div className="max-w-screen-2xl  mx-auto md:px-5 m-7">
          <div className="">
            <h1 className="text-3xl font-bold pb-2 text-center">
              Our Great Doctors
            </h1>

            <p className="text-center font-[26px]">
              World class care for everyone, Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </div>
    </>
  );
};

export default Doctor;
