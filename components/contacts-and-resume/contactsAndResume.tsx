import React, { FC } from "react";
import photoOfMe from "../../images/158076484_3112940962266952_8449161812741638923_n.jpg";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import github from "../../images/github.png"
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import location from "../../images/location.png";
import download from "../../images/download.png";

export interface ContactsAndResumeProps {
  themeButtonVal?: any;
}

const ContactsAndResume: FC<ContactsAndResumeProps> = ({themeButtonVal}) => {
  return (
    <div className="rounded-xl w-auto drop-shadow-xl">
      <div className="flex justify-center main-image">
        <img
          className="rounded-xl"
          src={photoOfMe.src}
          width={170}
          height={170}
          alt=""
        />
      </div>
      <div className={`rounded-xl height-and-width-contacts xl:justify-center xl:m-auto ${themeButtonVal ? "bg-light-black" : "bg-primary-white"}`}>
        <h1 className="flex text-2xl font-bold justify-center pt-24">Dura Dorin</h1>
        <h4 className="flex justify-center font-medium text-h4-grey">Front-End Developer</h4>
        <div className="flex items-center justify-center flex-row p-2">
          <div className="icons-contacts bg-icons-blue rounded-xl mx-2">
            <a className="icons-w-h" href="https://www.facebook.com/dorin.dura.31/">
              <img className="flex items-center" src={facebook.src} alt="Facebook" />
            </a>
          </div>
          <div className="icons-contacts bg-icons-blue rounded-xl mx-2">
            <a className="icons-w-h" href="">
              <img src={linkedin.src} alt="LinkedIn" />
            </a>
          </div>
          <div className="icons-contacts bg-icons-blue rounded-xl mx-2">
            <a className="icons-w-h" href="https://twitter.com/DorinDura">
              <img src={twitter.src} alt="Twitter" />
            </a>
          </div>
          <div className="icons-contacts bg-icons-blue rounded-xl mx-2">
            <a className="icons-w-h" href="https://github.com/dorindura">
              <img src={github.src} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="">
        <div className="bg-contact-card-color rounded-xl mx-6 mt-2 mb-6 ">
          <div className=" flex flex-col justify-center items-center">
            <div className="flex items-center phone-mail-location-sizes mt-4">
                <div className="padding-phone"><img src={phone.src} alt="Phone photo" /></div>
                <div>
                    <h5>Phone</h5>
                    <h5>0745 498 572</h5>
                </div>
            </div>
            <hr className="width-pel-container"/>
            <div className="flex items-center phone-mail-location-sizes">
                <div className="px-6"><img src={mail.src} alt="Mail photo" /></div>
                <div>
                    <h5>Email</h5>
                    <h5>duradorin11@yahoo.com</h5>
                </div>
            </div>
            <hr className="width-pel-container"/>
            <div className="flex items-center phone-mail-location-sizes">
                <div className="px-6"><img src={location.src} alt="Location photo" /></div>
                <div>
                    <h5>Location</h5>
                    <h5>Jud. Alba, Com. Bistra</h5>
                </div>
            </div>
            <hr className="width-pel-container"/>
            </div>
            <div className="flex justify-center pt-4 pb-4">
            <button className="bg-download-color-btn download-btn-styles rounded-xl flex items-center px"><img className="flex items-center px-2" src={download.src} alt="Download Photo" />Download Resume</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactsAndResume;