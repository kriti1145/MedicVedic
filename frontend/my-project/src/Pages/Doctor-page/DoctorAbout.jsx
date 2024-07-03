import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <>
      <div>
        <h3 className="text-[24px] leading-[30px] font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-[#366459]  text-[28px] leading-9">
            Muhibur Rahman
          </span>
        </h3>
        <p className="text-[14px] leading-5 md:text-[15px]  mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad
          assumenda quisquam? Perferendis, ipsum! Unde blanditiis quos
          exercitationem sapiente cumque maiores, at, commodi praesentium illo,
          impedit neque soluta nam eum!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] font-semibold">Education</h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-[#366459] text-[15px] leading-6 font-semibold">
                {formateDate("01-03-2015")} - {formateDate("07-10-2018")}
              </span>
              <p className="text-[15px] leading-6 font-medium ">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-[#366459] text-[15px] leading-6 font-semibold">
                {formateDate("07-10-2010")} - {formateDate("07-10-2014")}
              </span>
              <p className="text-[15px] leading-6 font-medium ">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] font-semibold">Experience</h3>

        <ul className="grid md:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#e7f0dc]">
            <span className="text-[#366459] text-[15px] leading-6 font-semibold">
              {formateDate("07-10-2010")} - {formateDate("07-10-2014")}
            </span>
            <p className="text-[16px] leading-6 font-semibold ">Sr. Surgeon</p>
            <p className="text-[14px] leading-5 font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
          <li className="p-4 rounded bg-[#e7f0dc]">
            <span className="text-[#366459] text-[15px] leading-6 font-semibold">
              {formateDate("07-10-2010")} - {formateDate("07-10-2014")}
            </span>
            <p className="text-[16px] leading-6 font-semibold ">Sr. Surgeon</p>
            <p className="text-[14px] leading-5 font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DoctorAbout;
