import React, { useState } from "react";
import { menu, close } from "../assets";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  return (
    <div className="relative flex justify-between items-center w-full">
      <a className="z-40" href="/">
        <img className="pl-5 w-40 mt-2" src="/wewomenlogo.png" alt="logo" />
      </a>
      <div className="hidden lg:flex pl-40 gap-[4.75rem] text-[#6F6F6F] text-base font-normal items-center">
        <a href="/">Home</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="pr-5 hidden lg:flex gap-5 items-center">
        <a href="/register">
          <button className="px-8 py-2 rounded-2xl bg-black text-white">
            Register
          </button>
        </a>
        <a href="/login">
          <button className="px-8 py-2 rounded-2xl border-[1px] border-solid border-black">
            Log in
          </button>
        </a>
      </div>
      <div className="lg:hidden z-40" onClick={handleClick}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-5 cursor-pointer"
        />
      </div>
      <ul
        className={
          toggle
            ? "pt-24 pb-8 absolute top-0 bg-white shadow-sm z-20 w-full px-8 lg:hidden flex flex-col items-center gap-5"
            : "hidden"
        }
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <div className="flex flex-col gap-5 my-2">
          <a href="/register">
            <button className="w-full px-6 py-1.5 rounded-3xl bg-black text-white">
              Register
            </button>
          </a>
          <a href="/login">
            <button className="w-full px-6 py-1.5 rounded-3xl border-2 border-solid border-black">
              Log in
            </button>
          </a>
        </div>
      </ul>
    </div>
  );
}
