import { card } from "@/app/assets";
import { HeroAnimation } from "@/global/animation";
import styles, { layout } from "@/style";
import Image from "next/image";
import { Button } from ".";
import Imagegradient from "./ui/imagegradient";

const Deal = () => {
  return (
   <HeroAnimation>
     <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-[2.5rem]`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
      <Imagegradient>
      <Image src={card} alt="billing" className="w-[100%] h-[100%]" />
      </Imagegradient>
      </div>
    </section>
   </HeroAnimation>
  );
};

export default Deal;
