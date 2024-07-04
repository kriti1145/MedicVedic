import { Routes, Route } from "react-router-dom";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Service from "../Pages/Service";
import Feature from "../Components/Feature";
import Doctor from "../Components/Doctor";
import Faq from "../Components/faq/Faq";
import FindDoctor from "../Pages/Doctor-page/FindDoctor";
import DoctorDetail from "../Pages/Doctor-page/DoctorDetail";
import Login from "../Pages/login-form/Login";
import Register from "../Pages/register/Register";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />

        <Route path="/findDoctor" element={<FindDoctor />} />
        <Route path="/service" element={<Service />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/docdetail" element={<DoctorDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Routers;
