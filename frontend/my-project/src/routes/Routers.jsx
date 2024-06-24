import FindDoctor from "../Pages/FindDoctor";
import { Routes, Route } from "react-router-dom";
import Banner from "../Components/Banner";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Banner />} />
        <Route path="/findDoctor" element={<FindDoctor />} />
      </Routes>
    </>
  );
};

export default Routers;
