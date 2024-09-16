import { HeroAnimation } from "@/global/animation";
import styles from "@/style";
import Discount from "./ui/discount";
import GetStarted from "./ui/getStarted";
import HeroImage from "./ui/heroImage";

const Hero = () => {
  return (
   <HeroAnimation>
     <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <Discount />

      <HeroImage />
      {/* get started button */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
   </HeroAnimation>
  );
};

export default Hero;
