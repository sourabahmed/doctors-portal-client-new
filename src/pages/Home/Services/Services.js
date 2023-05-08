import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: fluoride,
    },

    {
      id: 2,
      name: "Cavity Treatment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: cavity,
    },

    {
      id: 3,
      name: "Whitening Treatment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      icon: whitening,
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h4 className="text-2xl mt-16 text-secondary font-bold">
          OUR SERVICES
        </h4>
        <h3 className="text-4xl mt-5">Service We Provide</h3>
      </div>
      <div className="mx-6 my-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
