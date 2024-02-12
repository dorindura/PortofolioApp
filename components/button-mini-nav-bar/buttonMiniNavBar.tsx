import React from "react";
import { FC } from "react";

export interface ButtonMiniNavProps {
    HandleButtonsValue?:any;
    buttonValue?:boolean;
    children?: any;
    photosSrc?: any;
    photosSrc2?: any;
}

const ButtonMiniNav: FC<ButtonMiniNavProps> = ({HandleButtonsValue, buttonValue, children, photosSrc, photosSrc2}) => {

  return (
    <div>
      <button 
        onClick={HandleButtonsValue}
        className={`mx-4 m-2 sizes-mini-bar-buttons rounded-xl items-center ${
            buttonValue ? "bg-download-color-btn text-white" : "bg-mini-nav-color text-black "
        }`}
      >
        <img
          className="m-auto color-icons-mini-tab py-2"
          src={buttonValue ? photosSrc2 : photosSrc}
          alt="Home Button"
        />
        {children}
      </button>
    </div>
  );
}

export default ButtonMiniNav;