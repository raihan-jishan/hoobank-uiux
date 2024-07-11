import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-0 sm:mr-5 mr-0 feedback-card">
      <img
        src={quotes}
        alt="double quote image was not found!"
        className="w-[42.6px] h-[276px] object-contain"
      />
      <p className="font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img
          src={img}
          alt={`${name} image was not found!`}
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

export default FeedbackCard;
