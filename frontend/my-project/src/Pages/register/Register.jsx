import React, { useState } from "react";
import registerimg from "../../assets/Images/registeration/registerimg.png";
import avatar from "../../assets/Images/doctor-img/doc-1.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formDate, setFormDate] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormDate({ ...formDate, [e.target.name]: e.target.value });
  };

  const handelFileInputChange = async (event) => {
    const file = event.target.file[0];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 pt-[120px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ======= img box ========*/}
            <div className="hidden lg:block rounded-l-lg bg-[#C5D9CC] ">
              <figure className="rounded-l-lg">
                <img src={registerimg} alt="" className="w-full rounded-l-lg" />
              </figure>
            </div>

            {/* =========== form =========== */}
            <div className="rounded-r-lg lg:pl-16 py-10 text-center bg-gray-200 lg:pr-16 px-6 py-10">
              <h3 className="text-[29px] leading-9 font-bold mb-10">
                Create an <span className="text-[#366459]">account</span>
              </h3>

              <form className="py-4 md:py-0 px-5" onSubmit={handleSubmit}>
                <div className="mb-5 ">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    value={formDate.name}
                    onChange={handleInputChange}
                    className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
                    required
                  />
                </div>
                <div className="mb-5 ">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={formDate.email}
                    onChange={handleInputChange}
                    className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
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
                    className="bg-transparent w-full pr-4 py-1 border-b-[2px] border-solid focus:border-[#7cb8aa] focus:outline-none border-b-[#C5D9CC] text-[16px] leading-7  cursor-pointer"
                    required
                  />
                </div>

                <div className="mb-5 flex items-center justify-between ">
                  <label className="font-semibold text-[16px] leading-7">
                    Are you a:
                    <select
                      name="role"
                      value={formDate.role}
                      onChange={handleInputChange}
                      className="font-medium text-[15px] leading-7 px-4 py-2 focus:outline-none bg-transparent "
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>
                  <label className="font-semibold text-[16px] leading-7">
                    Gender:
                    <select
                      name="gender"
                      value={formDate.gender}
                      onChange={handleInputChange}
                      className="font-medium text-[15px] leading-7 px-4 py-2 focus:outline-none bg-transparent"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <figure className="w-[50px] h-[50px] rounded-full border border-solid border-[#7cb8aa] flex items-center justify-center bg-gray-200">
                    <img
                      src={avatar}
                      alt=""
                      className="w-full rounded-full bg-gray-200"
                    />
                  </figure>
                  <div className="relative w-[130px] h-[40px]">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      onChange={handelFileInputChange}
                      accept=".jpg, .png"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#C5D9CC] font-semibold rounded-lg truncate cursor-pointer"
                    >
                      Upload Photo
                    </label>
                  </div>
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
                  Already registered?
                  <Link
                    to="/login"
                    className="text-[#366459] font-semibold ml-1"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
