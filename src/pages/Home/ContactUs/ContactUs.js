import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import contactImage from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div className="" style={{ background: `url(${contactImage})` }}>
      <div className="text-center mt-20 pt-20">
        <h4 className="text-xl text-primary">Contact us</h4>
        <h2 className="text-3xl text-white ">Stay Connected With Us</h2>
      </div>
      <form action="" className=" text-center mt-7 pb-20">
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered input-sm w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Subjects"
          className="input input-bordered input-sm w-full max-w-xs my-3"
        />{" "}
        <br />
        <textarea
          placeholder="Message"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>{" "}
        <br />
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactUs;
