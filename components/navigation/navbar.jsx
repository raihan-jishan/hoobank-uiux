"use client";
import { useState } from "react";

import { close, logo, menu } from "@/app/assets";
import { navLinks } from "@/constants";
import { NavAnimation } from "@/global/animation";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <NavAnimation>
      <nav className="w-full flex py-6 justify-between items-center navbar ">
        <Image
          src={logo}
          alt={"logo was not found "}
          className="w-[124px] h-[32px]"
        />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((item, index) => {
            return (
              <li
                key={index}
                className={`font-normal cursor-pointer text-[16px] ${
                  active === item.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
                onClick={() => setActive(item.title)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu icon was not found!"
            className="w-[28px] h-[28px] object-contain"
            width={300}
            height={300}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul
              className={
                "list-none flex justify-end items-start flex-1 flex-col"
              }
            >
              {navLinks.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className={`font-medium cursor-pointer text-[16px] ${
                      active === item.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-10" : "mb-4"}`}
                    onClick={() => setActive(item.title)}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </NavAnimation>
  );
};

export default Navbar;
