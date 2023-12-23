"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Links = ({ open,setOpen }) => {
  return (
    <>
      <ul className="  flex items-center gap-4 maxmd:hidden ml-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>

      {open && (
        <div className="mobNav border-2 border-txt bg-dark text-light flex-col  z-10  p-8  md:hidden">
          <IoIosCloseCircleOutline className="w-[50px] h-[50px] absolute top-5 right-5" onClick={()=>setOpen(!open)}/>

          <div className=" flex flex-col gap-8">

          <ul className="  flex flex-col w-full h-full items-center justify-center gap-4 text-lg  ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
          <div className="flex gap-4 flex-1 md:hidden">
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaGithub />
            </span>
            <span>
              <FaDiscord />
            </span>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
