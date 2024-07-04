import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <>
      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold flex items-center gap-2 ">
          About{" "}
          <span className="text-[#366459] text-xl sm:text-2xl md:text-3xl">
            Muhibur Rahman
          </span>
        </h3>
        <p className="text-sm md:text-base mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad
          assumenda quisquam? Perferendis, ipsum! Unde blanditiis quos
          exercitationem sapiente cumque maiores, at, commodi praesentium illo,
          impedit neque soluta nam eum!
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg md:text-xl font-semibold">Education</h3>
        <ul className="pt-4 md:pt-6">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-6">
            <div>
              <span className="text-[#366459] text-sm md:text-base font-semibold">
                {formateDate("01-03-2015")} - {formateDate("07-10-2018")}
              </span>
              <p className="text-sm md:text-base font-medium">
                United States Medical Licensing Examination
              </p>
            </div>
            <p className="text-sm md:text-base font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-6">
            <div>
              <span className="text-[#366459] text-sm md:text-base font-semibold">
                {formateDate("07-10-2010")} - {formateDate("07-10-2014")}
              </span>
              <p className="text-sm md:text-base font-medium">
                Surgical Residency
              </p>
            </div>
            <p className="text-sm md:text-base font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-lg md:text-xl font-semibold">Experience</h3>
        <ul className="grid gap-6 md:grid-cols-2 pt-4 md:pt-6">
          <li className="p-4 rounded bg-[#e7f0dc]">
            <span className="text-[#366459] text-sm md:text-base font-semibold">
              {formateDate("07-10-2010")} - {formateDate("07-10-2014")}
            </span>
            <p className="text-base md:text-lg font-semibold">Sr. Surgeon</p>
            <p className="text-sm md:text-base font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
          <li className="p-4 rounded bg-[#e7f0dc]">
            <span className="text-[#366459] text-sm md:text-base font-semibold">
              {formateDate("07-10-2010")} - {formateDate("07-10-2014")}
            </span>
            <p className="text-base md:text-lg font-semibold">Sr. Surgeon</p>
            <p className="text-sm md:text-base font-medium">
              New Apollo Hospital, New Delhi.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DoctorAbout;
