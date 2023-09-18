"use client";
import LeftNavigation from "../Navigation";
import "../../../public/css/home.css";
import Image from "next/image";
import { bg } from "../../../public/assets/images";
// import { formBg } from "../../../public/assets/images";
// import {
//   onCurrentWeatherDetails,
//   onHourlyWeatherDetails,
//   onWeeklyWeatherDetails,
// } from "../services/api";
const Landing = () => {
  // useEffect(() => {
  //   onCurrentWeatherDetails(id)
  //     .then((response) => response.json())
  //     .then((apiData) => {
  //       apiData.map((item) => setCurrentDetails(item));
  //     });
  // }, [id]);
  return (
    <div className="flex flex-column justify-content-center align-items-center p-d-flex p-flex-column p-jc-center p-ai-center h-screen formBgImage">
      <div className="overlay"></div>
      <div className="formBg flex h-screen gap-9 justify-content-between pt-7 justify-content-center align-items-center p-jc-center p-ai-center w-12 flex flex-row border-round-2xl px-4 absolute">
        <div className="w-2 leftNavigation">
          <LeftNavigation />
        </div>
        <div className="w-6 leftNavigation">b</div>
        <div className="w-3 leftNavigation">c</div>
      </div>
    </div>
  );
};

export default Landing;
