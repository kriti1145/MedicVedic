import FindDoctor from "../Pages/FindDoctor";
import { Routes, Route } from "react-router-dom";
import Banner from "../Components/Banner";
import About from "../Components/About";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />

        <Route path="/findDoctor" element={<FindDoctor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Routers;
