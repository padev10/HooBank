import { features } from "../constants";

const Business2 = () => (
  <div className="items-center xs:flex-col sm:flex justify-between font-poppins">
    {/* left side */}
    <div className="flex flex-col text-white">
      <h2 className="text-[48px] font-semibold">
        You do the business, <br /> we'll handle the money.
      </h2>
      <p className="mt-8 ss:w-[520px] xs:w-[700px]">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <button className="flex flex-start justify-center mt-8 bg-blue-gradient w-[170px] font-semibold rounded-md py-4 px-2 text-primary">
        Get Started
      </button>
    </div>
    {/* right side */}
    <div className="flex flex-col">
      {/* mapping implementation */}
      {features.map((feature, indexx) => (
        <div key={feature.id} className="flex items-center text-white">
          <div className="flexCenter w-[64px] h-[64px] bg-dimBlue rounded-full p-[2px]">
            <img src={feature.icon} alt="star" className="w-[32px] h-[30px]" />
          </div>

          <div className="flex flex-col ml-6 mt-8 text-[18px] w-[420px]">
            <span>{feature.title}</span>
            <p>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Business2;
