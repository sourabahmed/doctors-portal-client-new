import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointOption from "./AppointOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="mt-16">
      <p className="text-secondary text-center font-bold text-2xl">
        Available Appointment On {format(selectedDate, "PP")}.
      </p>
      <div className="m-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointOption key={option._id} option={option}></AppointOption>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
