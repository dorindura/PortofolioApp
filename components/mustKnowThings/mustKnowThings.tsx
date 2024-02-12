import React, { useState } from "react";
import { FC } from "react";
import homebtn from "../../images/home-btn.png";
import resumebtn from "../../images/resume-btn.png";
import workbtn from "../../images/work-btn.png";
import contactbtn from "../../images/contact-btn.png";
import ButtonMiniNav from "../button-mini-nav-bar/buttonMiniNavBar";
import resumeBtnWhite from "../../images/resume-btn-white.png";
import homeBtnWhite from "../../images/home-btn-white.png";
import workBtnWhite from "../../images/work-btn-white.png";
import contactBtnWhite from "../../images/contact-btn-white.png";
import AboutMe from "../aboutMe/aboutMe";
import ResumeMustKnow from "../resumeMustKnow/resumeMustKnow";
import WorkMustKnow from "../workMustKnow/workMustKnow";
import ContactMustKnow from "../contactMustKnow/contactMustKnow";

export interface MustKnowThingsProps {
  b1ValueDefault?: true;
  b2ValueDefault?: false;
  b3ValueDefault?: false;
  b4ValueDefault?: false;
  themeButtonVal?: any;
}

const MustKnowThings: FC<MustKnowThingsProps> = ({themeButtonVal}) => {
  const [b1Value, setB1Value] = useState(true);
  const [b2Value, setB2Value] = useState(false);
  const [b3Value, setB3Value] = useState(false);
  const [b4Value, setB4Value] = useState(false);

  const HandleButtonsValue1: any = () => {
    if (b1Value === false) {
      setB2Value(false);
      setB3Value(false);
      setB4Value(false);
      setB1Value(true);
    }
  };
  const HandleButtonsValue2: any = () => {
    if (b2Value === false) {
      setB1Value(false);
      setB3Value(false);
      setB4Value(false);
      setB2Value(true);
    }
  };
  const HandleButtonsValue3: any = () => {
    if (b3Value === false) {
      setB2Value(false);
      setB3Value(true);
      setB4Value(false);
      setB1Value(false);
    }
  };
  const HandleButtonsValue4: any = () => {
    if (b4Value === false) {
      setB2Value(false);
      setB3Value(false);
      setB4Value(true);
      setB1Value(false);
    }
  };

  return (
    <div className="mt-12 rounded-xl drop-shadow-xl flex flex-col justify-between w-auto xl:justify-center xl:m-auto">
        <div className="w-auto xl:justify-center xl:m-auto xl:my-4">
      <div className={`max-width-mini-nav rounded-xl flex flex-row justify-between p-2 ${themeButtonVal ? "bg-light-black" : "bg-icons-blue"}`}>
        <ButtonMiniNav
          buttonValue={b1Value}
          photosSrc={homebtn.src}
          photosSrc2={homeBtnWhite.src}
          HandleButtonsValue={HandleButtonsValue1}
        >
          Home
        </ButtonMiniNav>
        <ButtonMiniNav
          buttonValue={b2Value}
          photosSrc={resumebtn.src}
          photosSrc2={resumeBtnWhite.src}
          HandleButtonsValue={HandleButtonsValue2}
        >
          Resume
        </ButtonMiniNav>
        <ButtonMiniNav
          buttonValue={b3Value}
          photosSrc={workbtn.src}
          photosSrc2={workBtnWhite.src}
          HandleButtonsValue={HandleButtonsValue3}
        >
          Work
        </ButtonMiniNav>
        <ButtonMiniNav
          buttonValue={b4Value}
          photosSrc={contactbtn.src}
          photosSrc2={contactBtnWhite.src}
          HandleButtonsValue={HandleButtonsValue4}
        >
          Contact
        </ButtonMiniNav>
      </div>
      </div>

      <div className={`height-and-width-informations xl:mb-4 rounded-xl ${themeButtonVal ? "bg-light-black" : "bg-primary-white"}`}>
        {b1Value ? <AboutMe/> : null}
        {b2Value ? <ResumeMustKnow/> : null}
        {b3Value ? <WorkMustKnow/> : null}
        {b4Value ? <ContactMustKnow/> : null}
        {/* <AboutMe/> */}
        {/* <ResumeMustKnow/> */}
        {/* <WorkMustKnow/> */}
        {/* <ContactMustKnow/> */}
      </div>
    </div>
  );
};

export default MustKnowThings;
