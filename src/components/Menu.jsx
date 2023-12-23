import React from "react";
import { Cards } from "../utils/cards";
const Menu = () => {
  const date = new Date();
  const dateNow = date.toDateString();
  return (
    <section className="flex-[2] h-full flex flex-col gap-8">
      <div className="">
        <span className="text-[10px] capitalize text-txt">what's hot</span>
        <h2 className="capitalize text-2xl font-bold">most popular</h2>
      </div>
      <div className="h-full flex flex-col gap-4  ">
        {Cards?.slice(0,4).map((card) => (
          <div
            className="flex flex-col gap-4 border p-4 rounded-lg"
            key={card.id}
          >
            <span
              style={{ backgroundColor: `${card.color}` }}
              className="capitalize w-[max-content] rounded-full  px-2.5 py-1.5"
            >
              {card.title}
            </span>
            <h2>{card.subtitle}</h2>
            <div className="">
              <span className="text-[14px] font-bold">{card.name} - </span>
              <span className="text-[12px] text-txt">{dateNow}</span>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex flex-col gap-2">
        <h2 className="font-bold">Categories</h2>
        <div className=" flex gap-2 flex-wrap">
          {Cards?.map((card) => (
            <div
              key={card.id}
              style={{ backgroundColor: `${card.color}` }}
              className="w-[max-content] rounded-full  px-2.5 py-1.5 "
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="capitalize text-2xl font-bold">Chosen By Editors</h2>
        <div className="flex flex-col gap-4">
          {Cards?.slice(0,4).map((card) => (
            <div key={card.id} className="flex gap-8 items-center mt-8">
              <img
                src={card.image}
                alt={card.title}
                className="rounded-full w-[50px] h-[50px]"
              />
              <div className=" flex flex-col gap-2 ">
                <span
                  style={{ backgroundColor: `${card.color}` }}
                  className=" capitalize text-sm w-[max-content] rounded-full  px-2.5 py-1.5"
                >
                  {card.title}
                </span>{" "}
                <p className="text-[14px]">{card.subtitle}</p>
                <div className="">
                  <span className="text-[14px] font-bold">{card.name} - </span>
                  <span className="text-[12px] text-txt">{dateNow}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
