import React from "react";
import treatmentImage from "../../../assets/images/treatment.png";

const Care = () => {
  return (
    <div className=" m-6 p-8 card card-side bg-base-100 shadow-xl flex justify-center">
      <figure>
        <img src={treatmentImage} alt="treatment image" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Exceptional Dental Care, On Your Terms!</h1>
        <p>
          Click the button to watch on Jetflix app.Click the button to watch on
          Jetflix app.Click the button to watch on Jetflix app.Click the button
          to watch on Jetflix app.
        </p>
      </div>
    </div>
  );
};

export default Care;
