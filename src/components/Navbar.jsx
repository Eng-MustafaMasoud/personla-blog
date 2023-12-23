"use client"
import {useState} from 'react'
import ToggleThemes from "./ToggleThemes";
import Link from "next/link";
import Authitication from "./Authitication";

// icons
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Links from "./mobilenav/Links";

const Navbar = () => {
    const [open,setToggle]=useState(false)
  return (
    <div className="flex justify-between items-center h-[100px]">
      <div className="flex gap-4 flex-1 maxmd:hidden">
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
      <div className=" text-2xl maxsm:text-xl font-bold flex-1 text-center maxmd:text-start"><Link href="/">Mustafa Blog</Link></div>
      <div className="   flex-1 flex items-center justify-center maxmd:justify-end ">
        <Links open={open} setOpen={setToggle}/>
        <div className="flex items-center gap-2 ">

        <Authitication />
        <ToggleThemes />
        </div>
        
        <CiMenuFries className="ml-4 text-xl font-extrabold cursor-pointer md:hidden maxmd:block" onClick={()=>setToggle(!open)}/>
      </div>
    </div>
  );
};

export default Navbar;
