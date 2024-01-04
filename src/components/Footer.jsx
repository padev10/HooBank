import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => (
  <section className="flexCenter paddingY flex-col">
    <div className="flexStart md:flex-row flex-col mb-8 w-full">
      <div className="flex flex-1 flex-col justify-start mr-10 ">
        <img
          src={logo}
          alt="hoobank"
          className="w-[256px] h-[72px] object-contain"
        />
        <p className="paragraph mt-4 max-w-[310px]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      {/* list */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((linkk, indexx) => (
                <li
                  key={linkk.name}
                  className={`font-popping font-normal text-[16px] leeading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    indexx !== footerLink.length ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={linkk.link}>{linkk.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <div className="flex">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyrights
        </p>
        <span className="text-white ml-2 mr-2">©</span>

        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2021 HooBank. All Rights Reserved.
        </p>
      </div>
      <div className="flex flew-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a href={social.link}>
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== social.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
