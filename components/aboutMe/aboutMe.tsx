import React from "react";
import appDevIcon from "../../images/aboutMeImages/app-dev-icon.png";
import webAppIcon from "../../images/aboutMeImages/web-dev-icon.png";
import studyingAppIcon from "../../images/aboutMeImages/studying-icon.png";
import helpingOtherIcon from "../../images/aboutMeImages/helping-others-icon.png";

export default function AboutMe() {
  return (
    <div className="py-8 px-12">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="font-medium uppercase text-3xl">About Me</div>
          <div className="line flex my-auto rounded-xl ml-8 justify-center bg-download-color-btn"></div>
        </div>
        <div className="my-4 text-justify">
          <h4>
            Hello there! I am thrilled to welcome you to my portfolio. I am a
            passionate and versatile front-end developer with a keen interest in
            exploring the latest cutting-edge technologies. My journey in the
            world of web development has been nothing short of exhilarating, and
            I constantly strive to enhance my skills and embrace emerging trends
            in the industry.
          </h4>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-2xl">What I do!</h3>
        <div className="flex flex-wrap gap-4 justify-between pt-4">
          <div className="cards-about-me p-2 bg-icons-blue rounded-xl">
            <div className="flex flex-row items-center p-2">
              <img src={webAppIcon.src} alt="Web App Icon" />
              <h4 className="px-2">Web Development</h4>
            </div>
            <p className="text-justify text-sm px-2">
              As a developer, I find myself most captivated by the power and
              flexibility of NEXT.js. I'm always eager to dive into new projects
              that leverage NEXT.js and discover innovative ways to create fast,
              scalable, and user-friendly applications.
            </p>
          </div>
          <div className="cards-about-me p-2 bg-download-color-btn rounded-xl">
            <div className="flex flex-row items-center p-2">
              <img src={appDevIcon.src} alt="App Dev Icon" />
              <h4 className="px-2">App Development</h4>
            </div>
            <p className="text-justify text-sm px-2">
              With a focus on user-centric design and cutting-edge technologies,
              I thrive on building intuitive and efficient apps that make a
              positive impact on people's lives. Let's turn ideas into reality
              and shape the future together.
            </p>
          </div>
          <div className="cards-about-me p-2 bg-download-color-btn rounded-xl">
            <div className="flex flex-row items-center p-2">
              <img src={studyingAppIcon.src} alt="Studying Icon" />
              <h4 className="px-2">Constantly Studying</h4>
            </div>
            <p className="text-justify text-sm px-2">
              Crafting visually appealing and intuitive user interfaces that
              offer a delightful user experience is something I'm truly fanatic
              about.
            </p>
          </div>
          <div className="cards-about-me p-2 bg-icons-blue rounded-xl">
            <div className="flex flex-row items-center p-2">
              <img src={helpingOtherIcon.src} alt="Helping Icon" />
              <h4 className="px-2">Helping Others</h4>
            </div>
            <p className="text-justify text-sm px-2 ">
              I have also found great joy in sharing my knowledge with others.
              Being a technical mentor allows me to give back to the community
              that has supported me throughout my career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
