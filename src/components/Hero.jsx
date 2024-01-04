import { discount, robot } from "../assets";
import GetStartedCircle from "./GetStartedCircle";

const space = " ";
const jump = <br className="sm:block hidden" />;

//? Styles
const styles = {
  // * left side
  // section
  section_s: "flex md:flex-row flex-col paddingY",
  div_ls: "flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6",
  // d
  div_d:
    "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2",
  paragraph_d: "paragraph ml-2 uppercase text-[14px]",
  // ng
  div1_ng: "flex flex-row justify-between items-center w-full",
  h1_ng:
    "flex-1 font-poppins font-semibold ss:text-[66px] text-[52px] text-white ss:leading-[100px] leading-[75px]",
  // g
  div2_ng: "hidden ss:flex md:mr-4 mr-0",

  // * right side
  // rs
  div_rs: "flex-1 flex flexCenter md:my-0 my-10 relative",
  img_robot: "w-[100%] h-[100%] relative z-[5]",
};

const Hero = () => (
  // ? *************************************** DESK */
  <section id="home" className={styles.section_s}>
    {/* // * Left Side */}
    <div className={styles.div_ls}>
      {/* Discount --- d */}
      <div className={styles.div_d}>
        <img src={discount} alt="discount" />
        <p className={styles.paragraph_d}>
          <span className="text-white">20%</span> Discount for {space}
          <span className="text-white">1 MONTH</span> Account
        </p>
      </div>
      {/* Next generation --- ng */}
      <div className={styles.div1_ng}>
        <h1 className={styles.h1_ng}>
          The Next {jump}
          {space}
          <span className="text-gradient">Generation</span>
        </h1>
        {/* GetStartedCircle --- g */}
        <div className={styles.div2_ng}>
          <GetStartedCircle />
        </div>
      </div>
      <h1 className={styles.h1_ng}>Payment Method.</h1>
      {/* Paragraph */}
      <p className="paragraph max-w-[470px] mt-0">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    {/* // * Right Side */}
    <div className={styles.div_rs}>
      <img src={robot} alt="billing" className={styles.img_robot} />
      {/* Gradients */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20  bottom-20 blue__gradient" />
    </div>
    {/* GetStartedCircle for MOBILE */}
    <div className="ss:hidden flexCenter mt-6">
      <GetStartedCircle />
    </div>
  </section>
);

export default Hero;
