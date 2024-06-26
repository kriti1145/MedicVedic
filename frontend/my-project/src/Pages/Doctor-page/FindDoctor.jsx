import DoctorCard from "../../Components/doctors/DoctorCard";
import { doctors } from "../../assets/data/doctors";
function FindDoctor() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-20 py-10 pt-[60px] bg-[#f5f5f5]">
        {/*====== about content ======*/}
        <div className="text-center ">
          <h1 className="text-3xl md:text-4xl font-bold pb-2 text-[#313340] ">
            Find a Doctor
          </h1>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#d8ded3] rounded-xl flex item-center justify-between border">
            <input
              type="search"
              className="py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer border border-gray-100"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md bg-[#7cb8aa] border border-gray-100 text-[#f5f5f5] hover:text-[#C5D9CC] hover:bg-[#313340] hover:border-none">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl container  px-3 flex flex-col mx-auto md:flex-row lg:px-10  ">
        <div className="max-w-screen-2xl  mx-auto md:px-2 m-5 sm:px-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto py-10 mt-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold pb-2 ">What Our Patient Say</h1>

          <p className="text-xl">
            World class care for everyone, Our health System offers unmatched,
            expert health care.
          </p>
        </div>
      </div>
    </>
  );
}

export default FindDoctor;
