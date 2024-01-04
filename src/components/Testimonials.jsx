import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import { br } from "./CardDeal";

const Testimonials = () => (
  <section id="clients" className="paddingY flexCenter flex-col relative">
    {/* // gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="heading2">What people are {br} saying about us</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className="paragraph max-w-[470px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card, indexx) => (
        <FeedbackCard key={card.id} {...card} index={indexx} />
      ))}
    </div>
  </section>
);

export default Testimonials;
