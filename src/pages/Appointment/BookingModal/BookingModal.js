import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  // treatment is appointment option
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form action="" className="grid gap-3 grid-clos-1 mt-6">
            <input
              type="text"
              placeholder={date}
              className="input input-bordered w-full "
              disabled
            />
            <select className="select select-bordered w-full">
              {slots &&
                slots.map((slot, index) => (
                  <option value={slot} key={index}>
                    {slot}
                  </option>
                ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              placeholder="Type here"
              className="btn btn-accent text-white w-full "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
