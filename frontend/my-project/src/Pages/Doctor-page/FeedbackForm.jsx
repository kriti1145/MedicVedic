import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="">
        <div className="text-center">
          <h3 className="text-[16px] leading-6 font-semibold  mb-4 mt-0">
            How would you rate your overall experience?
          </h3>
          <div>
            {[...Array(5).keys()].map((_, index) => {
              index += 1;
              return (
                <button
                  key={index}
                  type="button"
                  className={`${
                    index <= ((rating && hover) || hover)
                      ? "text-[#FDA403]"
                      : "text-gray-400"
                  } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  onDoubleClick={() => {
                    setHover(0);
                    setRating(0);
                  }}
                >
                  <span>
                    <AiFillStar />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-[30px]">
          <h3 className="text-[16px] leading-6 font-semibold  mb-4 mt-0">
            Share your feedback or suggestions*
          </h3>
          <textarea
            className="border border-solid border-[#C5D9CC] focus:outline outline-[#7cb8aa] w-full px-4 py-3 rounded-md bg-gray-100"
            row="5"
            placeholder="write your message"
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <button
          className="btn px-6 mt-5 text-[16px]  border-0 rounded-full bg-[#7cb8aa] text-gray-700 hover:bg-[#C5D9CC] text-[#7cb8aa] form-btn"
          onClick={handleSubmitReview}
        >
          {" "}
          Submit
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
