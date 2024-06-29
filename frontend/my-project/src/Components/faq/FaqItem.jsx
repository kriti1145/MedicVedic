import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="p-2 rounded-[12px] border border-solid  mb-5 cursor-pointer">
        <div
          className="flex items-center justify-between gap-5"
          onClick={toggleAccordion}
        >
          <h4 className="text-[16px] leading-7 lg:text-[18px] font-semibold text-[#313340] p-1">
            {item.question}
          </h4>
          <div
            className={`${
              isOpen && " border-none"
            } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#7cb8aa] rounded flex items-center justify-center text-[#7cb8aa]`}
          >
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {isOpen && (
          <div className="">
            <p className="text-[14px] leading-6 lg:text-[16px]  font-[500] p-1 text-[#333333]">
              {item.content}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FaqItem;
