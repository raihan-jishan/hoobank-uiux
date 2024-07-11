import { useState } from "react";
import { CiAlignRight } from "react-icons/ci";
const Button = ({ styles, text }) => {
  const [isShown, setIsShown] = useState(false);
  // ifHovered function
  const ifHovered = () => {
    setIsShown(true);
  };
  // closeHovered
  const closeHovered = () => {
    setIsShown(false);
  };
  return (
    <button
      type="button"
      className={`py-4 px-6   text-[18px] text-primary bg-blue-gradient rounded-full font-semibold outline-none ${styles} hover:scale-95  ease-in transition-all duration-700 `}
      onMouseEnter={ifHovered}
      onMouseLeave={closeHovered}
    >
      <div className="flex gap-3 transition-all">
      {text} {isShown && <CiAlignRight size={30} />}

      </div>
    </button>
  );
};

export default Button;
