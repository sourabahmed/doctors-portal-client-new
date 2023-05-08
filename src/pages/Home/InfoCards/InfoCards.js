import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Opner 9:00 AM to 5:00 PM Everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary text-white",
    },
    {
      id: 2,
      name: "Visit Our Location",
      description: "Opner 9:00 AM to 5:00 PM Everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us Now",
      description: "Opner 9:00 AM to 5:00 PM Everyday",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary text-white",
    },
  ];
  return (
    <div className="text-white mx-6 my-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card) => (
        <InfoCard card={card} key={card.id}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
