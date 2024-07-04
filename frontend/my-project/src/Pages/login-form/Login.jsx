import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formDate, setFormDate] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormDate({ ...formDate, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 pt-[120px]">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 ">
          <h3 className="text-[29px] leading-9 font-bold mb-10 text-center">
            Hello! <span className="text-[#366459]">Welcome</span> Back 🎉
          </h3>

          <form className="py-4 md:py-0 px-5">
            <div className="mb-5 ">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formDate.email}
                onChange={handleInputChange}
                className="bg-transparent w-full  py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formDate.password}
                onChange={handleInputChange}
                className="bg-transparent w-full  py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7 cursor-pointer"
                required
              />
            </div>
            <div className=" mt-7">
              <button
                className="btn px-4 text-[15px] text-white border-none login-form-btn w-full rounded-lg
              "
              >
                Submit
              </button>
            </div>

            <p className="mt-5 text-[#676869] text-center text-[14px]">
              Don't have an acoount?
              <Link
                to="/register"
                className="text-[#366459] font-semibold ml-1"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
