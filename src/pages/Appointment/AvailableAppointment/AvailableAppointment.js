import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <div>
      <p className="text-secondary text-center font-bold">
        Available slots for Teeth Orthodontics on {format(selectedDate, "PP")}.
      </p>
    </div>
  );
};

export default AvailableAppointment;
