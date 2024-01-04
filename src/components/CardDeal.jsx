import { card } from "../assets";
import Button from "./Button";

export const br = <br className="sm:block hidden" />;

const CardDeal = () => (
  <section className="section">
    <div className="sectionInfo">
      <h2 className="heading2">
        Find a better card deal {br} in few easy steps.
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" buttonName="Start Now" />
    </div>

    <div className="sectionImg">
      <img src={card} alt="card" className="w-[100%]"/>
    </div>
  </section>
);

export default CardDeal;
