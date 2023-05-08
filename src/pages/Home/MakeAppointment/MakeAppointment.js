import React from "react";
import doctorImage from "../../../assets/images/doctor.png";
import appointmentImage from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="mt-16"
      style={{ background: `url(${appointmentImage})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctorImage}
            alt="doctor"
            className="-mt-32 lg:w-1/2 hidden md:block lg:block"
          />
          <div>
            <h4 className="text-lg text-secondary font-bold">Appointment</h4>
            <h1 className="text-white text-4xl font-bold">
              Make Appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
