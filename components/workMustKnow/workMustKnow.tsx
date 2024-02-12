import React, { useState } from "react";
import { FC } from "react";
import CardWorkMustKnow from "./cardWorkMustKnow";
import appDevImg from "../../images/workImages/app-development-work.jpg";
import webDevImg from "../../images/workImages/web-development-work.jpg";
import coWorkImg from "../../images/workImages/co-workers-work.jpg";
import solvingWorkImg from "../../images/workImages/solving-work.jpg";

export interface WorkMustKnowProps {
  bAllValueDefault?: true;
  b1ValueDefault?: false;
  b2ValueDefault?: false;
  b3ValueDefault?: false;
  b4ValueDefault?: false;
}

const WorkMustKnow: FC<WorkMustKnowProps> = ({}) => {
  const [bAllValue, setBALLValue] = useState(true);
  const [b1Value, setB1Value] = useState(false);
  const [b2Value, setB2Value] = useState(false);
  const [b3Value, setB3Value] = useState(false);
  const [b4Value, setB4Value] = useState(false);

  const HandleAllButtonsValue: any = () => {
    setBALLValue(true);
    setB2Value(false);
    setB3Value(false);
    setB4Value(false);
    setB1Value(false);
  };

  const HandleButtonsValue1: any = () => {
    if (b1Value === false) {
      setBALLValue(false);
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
      setBALLValue(false);
      setB2Value(true);
    }
  };
  const HandleButtonsValue3: any = () => {
    if (b3Value === false) {
      setB2Value(false);
      setB3Value(true);
      setB4Value(false);
      setB1Value(false);
      setBALLValue(false);
    }
  };
  const HandleButtonsValue4: any = () => {
    if (b4Value === false) {
      setB2Value(false);
      setB3Value(false);
      setB4Value(true);
      setB1Value(false);
      setBALLValue(false);
    }
  };

  return (
    <div className="py-8 px-12">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="font-medium text-3xl">Portofolio</div>
          <div className="line flex my-auto rounded-xl ml-8 justify-center bg-download-color-btn"></div>
        </div>
        <div className="my-4 pt-2 flex flex-row justify-between">
          <button className={`font-medium ${bAllValue ? "text-download-color-btn text-xl font-black" : "text-current"}`} onClick={HandleAllButtonsValue}>All</button>
          <button className={`font-medium ${b1Value ? "text-download-color-btn text-xl font-black" : "text-current"}`} onClick={HandleButtonsValue1}>App Development</button>
          <button className={`font-medium ${b2Value ? "text-download-color-btn text-xl font-black" : "text-current"}`} onClick={HandleButtonsValue2}>Web Development</button>
          <button className={`font-medium ${b3Value ? "text-download-color-btn text-xl font-black" : "text-current"}`} onClick={HandleButtonsValue3}>Comunicative Skills</button>
          <button className={`font-medium ${b4Value ? "text-download-color-btn text-xl font-black" : "text-current"}`} onClick={HandleButtonsValue4}>Logic Problems Lover</button>
        </div>
      </div>
      {bAllValue ? (
        <div className="flex flex-wrap gap-10 py-4 justify-evenly">
          <CardWorkMustKnow
            title={"App Development"}
            description={"Portofolio Projects"}
            imageForCard={appDevImg.src}
          />
          <CardWorkMustKnow
            title={"Web Development"}
            description={"Portofolio Projects"}
            imageForCard={webDevImg.src}
          />
          <CardWorkMustKnow
            title={"Comunicative Skills"}
            description={"Love Sharing Thoughts"}
            imageForCard={coWorkImg.src}
          />
          <CardWorkMustKnow
            title={"Logic Problems Lover"}
            description={"Various Projects"}
            imageForCard={solvingWorkImg.src}
          />
        </div>
      ) : null}
      {b1Value ? (
        <CardWorkMustKnow
          title={"App Development"}
          description={"Portofolio Projects"}
          imageForCard={appDevImg.src}
        />
      ) : null}
      {b2Value ? (
        <CardWorkMustKnow
          title={"Web Development"}
          description={"Portofolio Projects"}
          imageForCard={webDevImg.src}
        />
      ) : null}
      {b3Value ? (
        <CardWorkMustKnow
          title={"Comunicative Skills"}
          description={"Love Sharing Thoughts"}
          imageForCard={coWorkImg.src}
        />
      ) : null}
      {b4Value ? (
        <CardWorkMustKnow
          title={"Logic Problems Lover"}
          description={"Various Projects"}
          imageForCard={solvingWorkImg.src}
        />
      ) : null}
    </div>
  );
};

export default WorkMustKnow;
