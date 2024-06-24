import React from "react";
import Cards from "../Components/Cards";

function FindDoctor() {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-5 flex flex-col mx-auto md:flex-row py-10 md:ps-20">
        <h1>Find a Doctor</h1>

        <Cards />
      </div>
    </>
  );
}

export default FindDoctor;
