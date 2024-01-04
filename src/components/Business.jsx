import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  // in each div, do the following
  <div
    className={`flex flex-grow p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card w-full`}
  >
    <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flexCenter">
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins  font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className="section">
      {/* left side */}
      <div className="sectionInfo">
        <h2 className="heading2">
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" buttonName="Get Started" />
      </div>
      {/* right side */}
      <div className="sectionImg flex-col">
        {/* mapping through feature */}
        {features.map((feature, indexx) => (
          <FeatureCard key={feature.id} {...feature} index={indexx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
