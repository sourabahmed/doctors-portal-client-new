import React from "react";
import treatmentImage from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Care = () => {
  return (
    // <div className="m-6 card lg:card-side bg-base-100 ">
    //   <figure>
    //     <img src={treatmentImage} alt="Album" className="lg:w-1/2 rounded-md" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title text-4xl">
    //       Exceptional Dental <br></br>Care, On Your Terms.
    //     </h2>
    //     <p>
    //       Click the button to listen on Spotiwhy app.Click the button <br></br>{" "}
    //       to listen on Click the button to listen on Spotiwhy app. <br></br>
    //       Click the button to listen on Spotiwhy app.
    //     </p>
    //   </div>
    // </div>
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatmentImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="ps-2 lg:ps-14">
          <h1 className="text-5xl font-bold">
            {" "}
            Exceptional Dental <br></br>Care, On Your Terms.
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Care;
