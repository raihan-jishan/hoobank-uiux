import { apple, bill, google } from "@/app/assets";
import { HeroAnimation } from "@/global/animation";
import styles, { layout } from "@/style";
import Image from "next/image";
import Imagegradient from "./ui/imagegradient";
const Billing = () => {
  return (
    <HeroAnimation>
      <section
        id="product"
        className={`${layout.sectionReverse} max-lg:flex-col`}
      >
        <div className={layout.sectionImgReverse}>
          <Imagegradient>
            <Image
              src={bill}
              alt="billing image was not found!"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          </Imagegradient>
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} text-[2.5rem]`}>
            Easily control your <br className="sm:block hidden" /> billing &
            invoicing
          </h2>

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <Image
              src={apple}
              alt="apple_play icon was not found!"
              className="w-[128.86px]  h-[42.05px] object-contain mr-5 cursor-pointer"
            />
            <div className="">
              <Image
                src={google}
                alt="google_play icon was not found!"
                className="w-[144.17px]  h-[43.08px] object-contain mr-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </HeroAnimation>
  );
};

export default Billing;
