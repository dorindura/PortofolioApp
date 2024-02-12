'use client';
import Navbar from "@/components/navbar/navbar";
import StaticMainInfos from "@/components/static-main-infos/staticMainInfos";
import { useState } from "react";

export default function Home() {

  const [themeButtonVal, setThemeButtonVal] = useState(false);

  const HandleThemeButton = () => {
    setThemeButtonVal(!themeButtonVal);
  }

  console.log(themeButtonVal);

  return (
    <main className={`${themeButtonVal ? "bg-dark-theme-color" : "bg-contact-card-color"} h-max`}>
      <Navbar HandleThemeButton={HandleThemeButton} themeButtonVal={themeButtonVal}/>
      <StaticMainInfos themeButtonVal={themeButtonVal}/>
    </main>
  );
}
