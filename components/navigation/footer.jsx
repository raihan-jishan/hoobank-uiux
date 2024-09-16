import { logo } from "@/app/assets";
import IconCard from "@/components/ui/iconcard";
import { footerLinks, socialMedia } from "@/constants";
import { HeroAnimation } from "@/global/animation";
import styles from "@/style";
import Image from "next/image";

const Footer = () => {
  return (
   <HeroAnimation>
     <section className={`${styles.flexCenter}  ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Image
            src={logo}
            alt="hoobank logo was not found"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {/* links part */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink, index) => (
            <div
              key={index}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-semibold text-[18px] leading-[27px] text-white ">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((item, index) => (
                  <li
                    key={index}
                    className={`text-gray-600 font-normal text-[16px] leading-[24px]  hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-8"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* copywrite part */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ {new Date().getFullYear()} HooBank. All Rights Reserved.
        </p>

        {/* social links part */}

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((item, index) => (
            <IconCard key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </section>
   </HeroAnimation>
  );
};

export default Footer;
