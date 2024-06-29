import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
const DoctorList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  lg:gap-4 mt-8 sm:mt-7 lg:mt-9">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </>
  );
};

export default DoctorList;
