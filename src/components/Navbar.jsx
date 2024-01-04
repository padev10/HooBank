import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

// ? Styles
const styles = {
  // DESK
  nav_desk: "w-full flex py-6 justify-between items-center",
  navLogo: "w-[124px] h-[32px]",
  ul_nav: "hidden sm:flex list-none justify-end items-center flex-1",
  li_desk: (indexx) =>
    `font-poppins font-normal cursor-pointer text-[16px] text-white ${
      indexx === navLinks.length - 1 ? "mr-0" : "mr-10"
    }`,

  // MOBILE
  logo_mobile: "w-[28px] h-[28px] object-contain",
  div_parent_ul: (togglee) =>
    `${
      togglee ? "flex" : "hidden"
    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`,
  ul_mobile: "flex flex-col list-none justify-end items-center flex-1",
  li_mobile: (indexx) =>
    `font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-cyan-300 transition ease-in ${
      indexx === navLinks.length - 1 ? "mb-0" : "mb-4"
    }`,
};

// TODO ################################################# NAVBAR 🦋
const Navbar = () => {
  // JS
  const [toggle, setToggle] = useState(false);

  // Render
  return (
    <nav className={styles.nav_desk}>
      {/* // ? *************************************** DESK */}

      {/* Image */}
      <img src={logo} alt="hoobank" className={styles.navLogo} />
      {/* Menu list */}
      <ul className={styles.ul_nav}>
        {navLinks.map((nav, index) => (
          // list
          <li key={nav.id} className={styles.li_desk(index)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* // ? *************************************** MOBILE */}

      <div className="sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={styles.logo_mobile}
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />
        {/* the div menu */}
        <div className={styles.div_parent_ul(toggle)}>
          <ul className={styles.ul_mobile}>
            {navLinks.map((nav, index) => (
              // list
              <li key={nav.id} className={styles.li_mobile(index)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
