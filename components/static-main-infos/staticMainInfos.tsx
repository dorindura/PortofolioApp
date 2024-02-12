import React, { FC } from "react";
import ContactsAndResume from "../contacts-and-resume/contactsAndResume";
import MustKnowThings from "../mustKnowThings/mustKnowThings";

export interface StaticMainInfosProps {
    themeButtonVal?:any;
}

const StaticMainInfos: FC<StaticMainInfosProps> =({themeButtonVal}) => {
    return (
        <div className="flex flex-row xl:flex-col justify-between my-0 pt-0 max-w-screen-xl flex-wrap mx-auto px-4">
            <ContactsAndResume themeButtonVal={themeButtonVal}/>
            <MustKnowThings themeButtonVal={themeButtonVal}/>
        </div>
    )
};

export default StaticMainInfos;