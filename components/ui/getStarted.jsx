import { arrowUp } from "@/app/assets";
import styles from "@/style";
import Image from "next/image";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full  border  shadow-2xl shadow-secondary/20 p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <Image
            src={arrowUp}
            alt="arrowUp image was not found!"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <div className="font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
