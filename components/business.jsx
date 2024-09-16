import { features } from "@/constants";
import { HeroAnimation } from "@/global/animation";
import styles, { layout } from "@/style";
import { Button } from ".";
import { FeatureCard } from "./ui/card";

const Business = () => {
  return (
    <HeroAnimation>
      <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-[2.5rem]`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
    </HeroAnimation>
  );
};

export default Business;
