import { stats } from "../constants";

const Stats = () => (
  <section className="flexCenter flex-row flex-wrap sm:mb-20 mb-6 text-white">
    {/* mapping through the stats */}
    <div className="flex flex-col md:flex-row flex-1 justify-center px-6 gap-4 mt-8">
      {stats.map((statss, indexx) => (
        <div key={statss.id} className="flex flex-grow justify-center gap-4 ">
          <div className={`font-poppins flex justify-between items-center `}>
            <h4 className="font-semibold xs:text-[35px] text-[30px]">
              {statss.value}
            </h4>
            <p className="whitespace-nowrap text-gradient xs:text-[20px] text-[15px] uppercase ml-4">
              {statss.title}
            </p>
          </div>
          <div
            className={`hidden md:flexCenter w-full ${
              indexx === stats.length - 1 ? "md:hidden" : ""
            }`}
          >
            <p>|</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
