import { useState } from "react";
import Loading from "../../loader/Loading";
import Error from "../../Error/Error";
import useGetProfile from "../../hooks/usefetchData";
import Tabs from "../doctor-account/Tabs";
import { BASE_URL } from "../../config";

const DoctorAccount = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  const [tab, setTab] = useState("overview");

  return (
    <>
      <div className="max-w-screen-2xl container  px-3 mx-auto  py-10 md:py-16 lg:px-20 ">
        <div className="px-5 mx-auto pt-[60px] ">
          {loading && !error && <Loading />}
          {error && !loading && <Error errMessage={error} />}

          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-[30px] lg:gap-[50px]">
              <Tabs tab={tab} setTab={setTab} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorAccount;
