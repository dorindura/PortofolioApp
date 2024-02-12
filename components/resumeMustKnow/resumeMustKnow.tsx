import React from "react";
import briefCase from "../../images/resumeImages/briefcase-icon.png";
import graduationCapBtn from "../../images/resumeImages/graduation-cap-icon.png";

export default function ResumeMustKnow() {
  return (
    <div className="py-8 px-12">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="font-medium text-3xl">Resume</div>
          <div className="line flex my-auto rounded-xl ml-8 justify-center bg-download-color-btn"></div>
        </div>
        <div className="my-4 flex flex-row justify-stretch gap-14">
          <div>
            <div className="flex flex-row items-center text-2xl font-medium gap-2">
              <img src={graduationCapBtn.src} alt="Graduation Cap" />
              Education
            </div>
            <div className="cards-resume-part bg-download-color-btn rounded-xl my-4 items-center m-auto flex mx-0">
              <div className="p-4">
                <h6 className="px-2">2023-2024</h6>
                <h6 className="px-2">Software Development</h6>
                <h6 className="px-2">SkillBrain Academy</h6>
              </div>
            </div>
            <div className="cards-resume-part bg-icons-blue rounded-xl my-4 items-center m-auto flex mx-0">
              <div className="p-4">
                <h6 className="px-2">2019-2023</h6>
                <h6 className="px-2">SNE</h6>
                <h6 className="px-2">National Colege Campeni</h6>
              </div>
            </div>
            <div className="flex flex-row items-center text-2xl font-medium gap-2">
              Work Skills
            </div>
            <div className="flex flex-wrap py-2 gap-2">
              <div className="p-2 bg-contact-card-color rounded-xl">
                NEXT.js
              </div>
              <div className="p-2 bg-contact-card-color rounded-xl">
                React.js
              </div>
              <div className="p-2 bg-contact-card-color rounded-xl">HTML5</div>
              <div className="p-2 bg-contact-card-color rounded-xl">CSS3</div>
              <div className="p-2 bg-contact-card-color rounded-xl">
                Tailwind CSS
              </div>
              <div className="p-2 bg-contact-card-color rounded-xl">TypeScript</div>
              <div className="p-2 bg-contact-card-color rounded-xl">SASS</div>
              <div className="p-2 bg-contact-card-color rounded-xl">JavaScript</div>
              <div className="p-2 bg-contact-card-color rounded-xl">Git</div>
              <div className="p-2 bg-contact-card-color rounded-xl">GitHub</div>
              {/* <div className="p-2 bg-contact-card-color rounded-xl">Discord</div> */}
            </div>
          </div>
          <div></div>
          <div>
            <div className="flex flex-row items-center text-2xl font-medium gap-2">
              <img src={briefCase.src} alt="BriefCase" />
              Experience
            </div>
            <div className="cards-resume-part bg-icons-blue rounded-xl my-4 items-center m-auto flex mx-0">
              <div className="p-4">
                <h6 className="px-2">2023-2024</h6>
                <h6 className="px-2">Jogga Internship</h6>
                <h6 className="px-2">Jogga Company</h6>
              </div>
            </div>
            <div className="cards-resume-part bg-download-color-btn rounded-xl my-4 items-center m-auto flex mx-0">
              <div className="p-4">
                <h6 className="px-2">2023-Present</h6>
                <h6 className="px-2">Various Projects</h6>
                <h6 className="px-2">Various Clients</h6>
              </div>
            </div>
            <div className="flex flex-row items-center text-2xl font-medium gap-2">
              Soft Skills
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="p-2 bg-contact-card-color rounded-xl">
                Time Management
              </div>
              <div className="p-2 bg-contact-card-color rounded-xl">Research</div>
              <div className="p-2 bg-contact-card-color rounded-xl">
                Impeccable Communication
              </div>
              <div className="p-2 bg-contact-card-color rounded-xl">Flexibility</div>
              <div className="p-2 bg-contact-card-color rounded-xl">
                Writing
              </div>
              {/* <div className="p-2 bg-contact-card-color rounded-xl">Great Understanding</div> */}
              <div className="p-2 bg-contact-card-color rounded-xl">Ambitious</div>
              <div className="p-2 bg-contact-card-color rounded-xl">Determined</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
