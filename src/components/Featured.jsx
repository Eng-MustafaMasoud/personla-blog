import React from "react";

const Featured = () => {
  return (
    <section className="flex flex-col mt-16 gap-8">
      <div className=" text-center w-full px-4">
        <h1 className="text-7xl maxmd:text-4xl maxsm:text-2xl">
          Hey <span className="font-bold">Mustafa </span> here , Discover my blog and creative ideas
        </h1>
      </div>
      <div className="flex gap-4 maxmd:flex-col">
        <div className="flex-1 rounded-xl w-full h-[440px]   ">
          <img
            src="https://images.pexels.com/photos/19560882/pexels-photo-19560882/free-photo-of-a-large-building-with-a-large-bird-flying-over-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="blog"
            className="rounded-xl h-full w-full bg-cover"
          />
        </div>
        <div className="flex flex-col flex-1  justify-center gap-4 ">
          <h2 className="text-2xl text-txt">Lorem ipsum dolor sit amet.</h2>
          <p className="text-txtdark text-[14px] text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            officia reiciendis qui facilis dolor cupiditate.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Quod officia reiciendis qui
            facilis dolor cupiditate.Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quod officia reiciendis qui facilis dolor
            cupiditate.
          </p>
          <button className="w-[fit-content] dark:bg-light dark:text-dark px-2 py-1.5 rounded-lg  mix-blend-difference">read more!</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
