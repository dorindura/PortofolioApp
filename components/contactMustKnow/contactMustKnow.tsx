import React from "react";
import phoneContactIcon from "../../images/contactImages/phone-contact-icon.png";
import mailContactIcon from "../../images/contactImages/mail-contact-icon.png";

export default function ContactMustKnow() {
  return (
    <div className="py-8 px-12">
        <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="font-medium text-3xl">Contact</div>
        <div className="line flex my-auto rounded-xl ml-8 justify-center bg-download-color-btn"></div>
      </div>
      <div className="my-4 flex flex-row gap-16 justify-center">
          <div className="cards-resume-part bg-icons-blue rounded-xl p-4 flex flex-col cards-resume-part w-6">
            <div className="flex items-start w-20">
              <img className="flex m-auto item-center" src={phoneContactIcon.src} alt="" />
            <h5 className="flex m-auto item-center">Phone:</h5>
            </div>
            <div className="flex items-start">
              <p className="px-6">+40745498572</p>
              <p className="px-6"></p>
            </div>
            </div>
          <div className="cards-resume-part bg-download-color-btn rounded-xl p-4 flex flex-col w-6">
          <div className="flex items-start w-20">
            <img className="flex m-auto item-center" src={mailContactIcon.src} alt="" />
            <h5 className="flex m-auto item-center">Email:</h5>
          </div>
            <div>
              <p className="px-6">duradorin11@yahoo.com</p>
              <p className="px-6">duradorin1@yahoo.com</p>
            </div>
          </div>
        </div>
        </div>
      <div className="contact-mknw-message-part py-4 flex-col justify-center mx-auto">
        <p>I am always open to discussing <b>new projects</b>, <b>opportunities in tech world</b> and <b>partnerships</b>.</p>
        <div className="my-4">
        <div className="pb-4">Name:</div>
        <div className="bg-download-color-btn line-contact my-2"></div>
        <div className="pb-4">Email:</div>
        <div className="bg-download-color-btn line-contact my-2"></div>
        <div className="pb-4">Message:</div>
        <div className="bg-download-color-btn line-contact my-2"></div>
        <button className="px-4 py-2 border-submit-btn rounded-xl mt-2 hover:bg-download-color-btn focus:bg-download-color-btn focus:border-black focus:text-white">Submit</button>
        </div>
      </div>
    </div>
  );
}