import { arrowUp } from "../assets";

const GetStartedCircle = () => (
  // Circle
  <div className="flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
    {/* Create cicle stroke */}
    <div className="flexCenter flex-col bg-primary w-[100%] h-[100%] rounded-full">
      <div className="grid grid-rows-2 grid-cols-2 grid-flow-row items-center text-white text-gradient font-poppins">
        <p>Get</p>
        <img src={arrowUp} alt="arrow up" />
        <p className="col-span-2 text-[18px]">Started</p>
      </div>
    </div>
  </div>
);

export default GetStartedCircle;
