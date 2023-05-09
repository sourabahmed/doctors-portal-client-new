import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointOption from "./AppointOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  // treatment is appointment option
  const [treatment, setTreatment] = useState(null);

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
          <AppointOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
