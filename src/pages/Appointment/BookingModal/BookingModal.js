import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  // treatment is appointment option
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(slot, name, email, phone);
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
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
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid gap-3 grid-clos-1 mt-6"
          >
            <input
              type="text"
              placeholder={date}
              className="input input-bordered w-full "
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots &&
                slots.map((slot, index) => (
                  <option value={slot} key={index}>
                    {slot}
                  </option>
                ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
              required
            />
            <input
              type="submit"
              placeholder="Submit"
              className="btn btn-accent text-white w-full "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
