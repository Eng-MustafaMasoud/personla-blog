import React from "react";

const Card = ({ ...card }) => {
  const color = card.color;
  const date = new Date();
  const dateNow = date.toDateString();
  return (
    <div className="flex h-full  gap-4  p-2 maxmd:flex-col">
      <div className="flex  w-full max-h-full h-[380px]">
        <img src={card.image} alt={card.title} className="w-full h-full bg-cover" />
      </div>
      <div className="flex flex-col   justify-between px-4 gap-4">
        <div className="flex gap-4 items-center">
          <span className="text-[12px]">{dateNow}</span>
          <p style={{ color }} className="capitalize">
            {card.title}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2  className="text-[22px] font-bold">{card.subtitle}</h2>
          <p className="text-[12px] text-txt">{card.desc}</p>
        </div>
        <button
          style={{ borderBottom: `2px solid ${color}` }}
          className="w-[fit-content]"
        >
          read more
        </button>
      </div>
    </div>
  );
};

export default Card;
