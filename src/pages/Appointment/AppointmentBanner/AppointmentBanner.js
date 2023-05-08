import React from "react";
import { DayPicker } from "react-day-picker";

import backgroundImage from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      className="hero py-10 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="banner image"
        />
        <div className="lg:mr-11">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
