"use client";
import { socialMedia } from "@/constants";
import Image from "next/image";

const IconCard = ({ item, index }) => {
  return (
    <Image
      src={item.icon}
      alt="social icon was not found!"
      className={`w-[21px] h-[21px] object-contain cursor-pointer ${
        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
      }`}
      onClick={() => window.open(item.link)}
    />
  );
};

export default IconCard;
