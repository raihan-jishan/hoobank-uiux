import { quotes } from "@/app/assets";
import { features } from "@/constants";
import styles from "@/style";
import Image from "next/image";

 

// feed card
export const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <Image
        src={quotes}
        alt="double quote image was not found!"
        className={"w-[42.6px] h-[27.6px] object-contain"}
      />
      <p className="font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <Image
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />

        <div className="flex flex-col ml-4">
          <h4 className="font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>

          <p className="font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

// featureCard
export const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <Image
          src={icon}
          alt="star icon was not found!"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-normal text-dimWhite text-[16px]  leading-[24px] ">
          {content}
        </p>
      </div>
    </div>
  );
};


