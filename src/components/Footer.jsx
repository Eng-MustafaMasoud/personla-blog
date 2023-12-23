import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 w-full ">
      <div className=" flex gap-32 mb-8 maxmd:flex-col maxmd:gap-16">
        <div className="flex flex-col gap-4 flex-[3]  ">
          <div className="flex items-center gap-4">
            <img
              className="w-[50px] h-[50px] rounded-full border-2"
              src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8fDA%3D"
              alt="read more"
            />
            <h1 className="font-bold text-xl">Mustafa Blog</h1>
          </div>
          <p className="text-txt text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repellendus beatae veritatis! Corrupti eveniet harum, esse autem
            quisquam aliquid itaque.
          </p>
        </div>
        <div className="flex-[2] flex justify-between">
          <div className=" flex flex-col gap-4">
            <h2 className="text-lg font-bold">Links</h2>
            <nav className="" aria-labelledby="second navbar">
              <ul className="flex flex-col gap-4 text-txt text-sm">
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Tags</h2>
            <ul className="flex flex-col gap-4 text-txt text-sm">
              <li>Food</li>
              <li>Coding</li>
              <li>Travel</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Socials</h2>
            <ul className="flex flex-col gap-4 text-txt text-sm">
              <li>Facebook</li>
              <li>Linked in</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
      </div>
      <span className="mt-8 text-center flex items-center justify-center text-txt text-sm  border-t">
        Copyrights reserved &copy; 2024 &nbsp; <b> Mustafa Masoud </b>
      </span>
    </footer>
  );
};

export default Footer;
