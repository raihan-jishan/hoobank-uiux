import { ButtonAnimation } from "@/global/animation";
import { LuAlignStartVertical } from "react-icons/lu";
const Button = ({ styles, text, icon }) => {
  return (
    <ButtonAnimation>
      <button
        type="button"
        className={`shadow-2xl shadow-dimWhite/30 py-4 px-6   font-semibold text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} flex gap-3`}
      >
        {text ? "" : "Get Started"} {icon ? "" : <LuAlignStartVertical size={25} />}
      </button>
    </ButtonAnimation>
  );
};

export default Button;
