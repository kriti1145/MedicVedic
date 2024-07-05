import React from "react";
import map from "../../assets/Images/contact/map.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-8 lg:py-16 pt-20">
      <div className=" text-center">
        <h1 className="text-3xl font-bold pb-2">Contact Us</h1>
        <p className="text-lg lg:px-7">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="w-full max-w-2xl mx-auto p-4 hidden md:block">
          <img src={map} alt="map" className="w-full h-auto rounded" />
        </div>
        <div className="w-full max-w-2xl mx-auto  sm:order-2 my-auto border border-[#7cb8aa] bg-[#F2F2F2] rounded-[15px] px-[50px] py-[50px]">
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-[#333333]"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 border border-[#C5D9CC] focus:outline-none focus:border-[#7cb8aa] text-base placeholder-gray-400 rounded-md bg-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-semibold mb-2 text-[#333333]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Let us know how we can help you"
                className="w-full px-4 py-2 border border-[#C5D9CC] focus:outline-none focus:border-[#7cb8aa] text-base placeholder-gray-400 rounded-md bg-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2 text-[#333333]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Leave a comment here..."
                className="w-full px-4 py-2 border border-[#C5D9CC] focus:outline-none focus:border-[#7cb8aa] text-base placeholder-gray-400 rounded-md bg-transparent"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-7 py-2 text-white  text-base contact-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" mt-[40px] flex flex-col md:flex-row mx-5 md:mx-[37px] items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-5 p-6 bg-gray-200 rounded-sm shadow-t-xl shadow-b-xl">
        <div className="address flex items-center mb-4 md:mb-0">
          <FaMapMarkerAlt className="text-xl md:text-5xl text-[#366459] mr-3" />
          <div>
            <div className="font-bold text-gray-700 md:text-[22px]">
              Address
            </div>
            <div className="text-gray-600">Surkhet, NP12</div>
            <div className="text-gray-600">Birendranagar 06</div>
          </div>
        </div>
        <div className="phone flex items-center mb-4 md:mb-0">
          <FaPhoneAlt className="text-xl md:text-5xl text-[#366459] mr-3" />
          <div>
            <div className="font-bold text-gray-700 md:text-[22px]">Phone</div>
            <div className="text-gray-600">+0098 9893 5647</div>
            <div className="text-gray-600">+0096 3434 5678</div>
          </div>
        </div>
        <div className="email flex items-center">
          <FaEnvelope className="text-xl md:text-5xl text-[#366459] mr-3" />
          <div>
            <div className="font-bold text-gray-700 md:text-[22px]">Email</div>
            <div className="text-gray-600">codinglab@gmail.com</div>
            <div className="text-gray-600">info.codinglab@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
