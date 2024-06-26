import React from "react";
import img from "../assets/Images/img.png";
import find from "../assets/Images/find.png";
import location from "../assets/Images/location.png";
import booking from "../assets/Images/booking.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About";
import Service from "../Pages/Service";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto md:flex-row py-10 md:ps-20 ">
        <div className=" order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12 ">
          <div className="space-y-12 ">
            <h1 className="text-6xl font-bold">
              We help patients
              <br /> live a <span className="span-text">healthy</span>,
              <br />
              <span className="span-text">longer life.</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facere
              quod ipsam sit similique in tempore. Ipsum aspernatur enim
              sapiente, doloremque consequuntur harum perspiciatis dicta
              provident nihil dignissimos numquam voluptatem.
            </p>
          </div>
          <button className="btn btn-active outline-none mt-7 text-white banner-btn">
            Request an Appointement
          </button>
        </div>
        <div className=" order-1 md:order-2 w-full md:w-1/2 md:mt-20  mt-10 p-200 ml-10 splash">
          {" "}
          <img
            src={img}
            alt=""
            className="w-100 h-92 md:w-100 md:h-92
           "
          />
        </div>
      </div>
      {/*=========banner counter=========*/}
      <div className=" flex flex-col md:item-center item-center mx-auto gap-3 md:gap-[50px] md:flex-row counter place-items-center md:mt-[40px]">
        <div className="">
          <h2 className="text-[36px] leading-[56px] md:text-[44px] md:leading:[54px] font-[700] text-neutral-800 text-center">
            30+
          </h2>
          <span className=" h-2 bg-amber-400 rounded-full block mt-[-14px]"></span>
          <p className="mt-2 text-sm text-center">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-[36px] leading-[56px] md:text-[44px] md:leading:[54px] font-[700] text-neutral-800 text-center">
            15+
          </h2>
          <span className="h-2 bg-sky-900 rounded-full block mt-[-14px]"></span>
          <p className="mt-2 text-sm text-center">Clinc Location</p>
        </div>
        <div>
          <h2 className="text-[36px] leading-[56px] md:text-[44px] md:leading:[54px] font-[700] text-neutral-800 text-center">
            100%
          </h2>
          <span className="h-2 bg-green-600 rounded-full block mt-[-14px]"></span>
          <p className="mt-2 text-sm text-center">Patient Satisfaction</p>
        </div>
      </div>

      {/*how it work section*/}
      <div className="max-w-screen-2xl  mx-auto md:px-20 px-4 m-3 py-1">
        <div className="mt-[30px]">
          <h1 className="text-3xl font-bold pb-2 text-center">
            Providing the best medical services
          </h1>
          <div className="md:px-[450px]">
            <p className="text-center font-[26px]">
              World class care for everyone, Our health System offers unmatched,
              expert health care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt[55px]">
          <div className="py-[30px] px-5 border box">
            <div className="flex item-center justify-center">
              <img src={find} alt="" />
            </div>
            <div className="mt-[30px] text-center text-[26px] font-bold">
              <h2>Find a Doctor</h2>
              <p className="text-[16px] leading-77 font-[40] mt-1 text-center">
                {" "}
                World class care for everyone, Our health System offers
                unmatched, expert health care. From the lab to the clinic
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none"
              >
                <BsArrowRight className="group-hover:text-[#C5D9CC] w-6 h-5" />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5 border box">
            <div className="flex item-center justify-center">
              <img src={location} alt="" />
            </div>
            <div className="mt-[30px] text-center text-[26px] font-bold">
              <h2>Find a Location</h2>
              <p className="text-[16px] leading-77 font-[40] mt-1 text-center">
                {" "}
                World class care for everyone, Our health System offers
                unmatched, expert health care. From the lab to the clinic
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none"
              >
                <BsArrowRight className="group-hover:text-[#C5D9CC] w-6 h-5" />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5 border box">
            <div className="flex item-center justify-center">
              <img src={booking} alt="" className="h-[275px] w-[275px]" />
            </div>
            <div className="mt-[30px] text-center text-[26px] font-bold">
              <h2>Book an Appointment</h2>
              <p className="text-[16px] leading-77 font-[40] mt-1 text-center">
                {" "}
                World class care for everyone, Our health System offers
                unmatched, expert health care. From the lab to the clinic
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#7cb8aa] hover:border-none"
              >
                <BsArrowRight className="group-hover:text-[#C5D9CC] w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*======about section======*/}
      <About />
      {/*====== Services======*/}
      <Service />
    </>
  );
}

export default Banner;
