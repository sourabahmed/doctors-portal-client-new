import React from "react";
import quote from "../../../assets/icons/quote.svg";
import image1 from "../../../assets/images/people1.png";
import image2 from "../../../assets/images/people2.png";
import image3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winsor Herry",
      review:
        " It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ",
      location: "California",
      image: image1,
    },
    {
      _id: 2,
      name: "Angelina July",
      review:
        " It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ",
      location: "New York",
      image: image2,
    },
    {
      _id: 3,
      name: "Selena Gumez",
      review:
        " It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content ",
      location: "Arkansas",
      image: image3,
    },
  ];
  return (
    <section className="m-6">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-secondary font-bold">Testimonial</h4>
          <h2 className="text-4xl text-secondary ">What our patient says</h2>
        </div>
        <figure>
          <img src={quote} alt="" className="w-24 lg:w-48" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
