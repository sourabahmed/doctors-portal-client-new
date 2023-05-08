import React from "react";

const AppointOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="card  bg-base-100 shadow-xl my-11">
      <div className="card-body">
        <h2 className=" text-2xl card-title text-secondary justify-center">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : "Try Another Day"}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default AppointOption;
