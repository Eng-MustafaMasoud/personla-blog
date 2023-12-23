"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
const Links = ({ open }) => {
  return (
    <>
      <ul className="flex items-center gap-4 maxmd:hidden ml-4">
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
        <div className="absolute top-[100px] p-8 rounded-xl border-2 border-txt bg-dark text-light w-[200px] max-w-[30%] flex flex-col items-center gap-8 md:hidden">

        <ul className="  flex flex-col items-center gap-4 ">
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
      )}
    </>
  );
};

export default Links;
