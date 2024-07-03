import React, { useState } from "react";
import avatar from "../../assets/Images/user.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const DocFeedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold mb-[30px]">
          All reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px] bg-[#e7f0dc] p-5">
          <div className="flex gap-3 ">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 font-bold text-[#366459]">
                Ali ahmed
              </h5>
              <p className="text-[13px] leading-6 text-gray-600 ">
                {formateDate("07-10-2019")}
              </p>
              <p className="mt-2 font-medium text-[14px] ">
                Good services, highly recommended
              </p>
            </div>
          </div>
          <div className="flex gap-1 ">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#FDA403" />
            ))}
          </div>
        </div>

        {!showFeedbackForm && (
          <div className=" text-center">
            <button
              className="px-3 mt-5 ms-3 py-2 font-semibold text-sm md:text-base border-0  feature-btn "
              onClick={() => setShowFeedbackForm(true)}
            >
              {" "}
              Give Feedback
            </button>
          </div>
        )}
        {showFeedbackForm && <FeedbackForm />}
      </div>
    </>
  );
};

export default DocFeedback;
