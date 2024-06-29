import React from "react";
import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  return (
    <>
      <ul className="mt-[20px] me-[35px]">
        {faqs.map((item, index) => (
          <FaqItem item={item} key={index} />
        ))}
      </ul>
    </>
  );
};

export default FaqList;