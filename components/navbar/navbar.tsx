import React from "react";
import { Poppins } from "next/font/google";
import ph_moon from "../../images/ph_moon.png"
import ph_sun from "../../images/ph_sun.png";
import { FC } from "react";

export interface NavbarProps {
  HandleThemeButton?: any;
  themeButtonVal?:any;
}

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar: FC<NavbarProps> = ({HandleThemeButton, themeButtonVal}) => {
  return (
    <div className={`flex flex-row items-center justify-between max-w-screen-xl flex-wrap mx-auto p-4 ${poppins.className}`}>
      <div className="flex justify-center text-xl drop-shadow-name">
        <span className="text-primary-blue">Dura</span>
        <span className="text-primary-grey">Dorin</span>
      </div>
      <button onClick={HandleThemeButton} className="drop-shadow-moon"><img src={`${themeButtonVal ? ph_sun.src : ph_moon.src}`} alt="Photo of a half moon" /></button>
    </div>
  );
}

export default Navbar;