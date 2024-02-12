import React from "react";
import { FC } from "react";

export interface CardWorkMustKnowProps {
    imageForCard?: any,
    title?: string,
    description?: string,
}

const CardWorkMustKnow: FC<CardWorkMustKnowProps> = ({imageForCard, title, description}) => {
    return (
        <div className="px-1.5 py-1.5 bg-download-color-btn m-width-w-cards rounded-xl">
          <img className="sizes-images-work rounded-xl" src={imageForCard} alt="App Development" />
          <div>
            <p>{title}</p>
            <p>{description}</p>
          </div>
          </div>
    )
}

export default CardWorkMustKnow;