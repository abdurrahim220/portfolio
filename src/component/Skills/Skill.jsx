import React from "react";
import Marquee from "react-fast-marquee";

import bootstrap from "../../assets/icons/bootstrap-svgrepo-com.svg";
import css from "../../assets/icons/css-3-svgrepo-com (1).svg";
import tailwindCss from "../../assets/icons/tailwind-svgrepo-com.svg";
import html from "../../assets/icons/html-5-svgrepo-com.svg";
import js from "../../assets/icons/js-svgrepo-com.svg";
import typeScript from "../../assets/icons/typescript-official-svgrepo-com.svg";
import NodeJs from "../../assets/icons/node-js-svgrepo-com.svg";
import Mongoose from "../../assets/icons/mongodb-svgrepo-com.svg";
import Redux from "../../assets/icons/redux-svgrepo-com.svg";
import github from "../../assets/icons/github-142-svgrepo-com.svg";
import firebase from "../../assets/icons/firebase-svgrepo-com.svg";
import Postman from "../../assets/icons/postman-svgrepo-com.svg";
import Vercel from "../../assets/icons/vercel-svgrepo-com.svg";
import Netlify from "../../assets/icons/netlify-svgrepo-com.svg";
import Linux from "../../assets/icons/linux-svgrepo-com.svg";
// import NodeJs from "../../assets/icons";

const Skill = () => {
  const basicsData = [
    { name: "HTML", value: 80, icons: html },
    { name: "CSS", value: 75, icons: css },
    { name: "Javascript", value: 75, icons: js },
    { name: "Tailwind css", value: 90, icons: tailwindCss },
    { name: "Bootstrap", value: 90, icons: bootstrap },
    { name: "Typescript", value: 90, icons: typeScript },
    { name: "NodeJs", value: 90, icons: NodeJs },
  ];

  const framework = [
    
    { name: "ReactNative", value: 80, icons: "#fde047" },
    { name: "ReactJs", value: 85, icons: React },
    { name: "ViteJs", value: 80, icons: "#c248cD" },
    { name: "ExpressJS", value: 85, icons: "#7c3aed" },
    { name: "NextJs", value: 85, icons: "#c026d3" },
    { name: "Redux", value: 85, icons: Redux },
  ];

  const tools = [
    { name: "Postman", value: 90, icons: Postman },
    { name: "GitHub", value: 90, icons: github },
    { name: "Mongoose", value: 80, icons: Mongoose },
    { name: "Firebase", value: 85, icons: firebase },
    { name: "Netlify", value: 90, icons: Netlify },
    { name: "Vercel", value: 90, icons: Vercel },
    { name: "VS Code", value: 90, icons: Vercel },
    { name: "NPM", value: 90, icons: Vercel },
    { name: "YARN", value: 90, icons: Vercel },
    { name: "FIGMA", value: 90, icons: Vercel },
    { name: "Chrome Dev Tools", value: 90, icons: Vercel },
  ];
  const operating = [
   
    { name: "Linux", value: 85, icons: Linux },
    { name: "Windows", value: 85, icons: Linux },
    { name: "Mac OS", value: 85, icons: Linux },
   
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-3">
      <div className="my-10">
        <h1 className="text-center my-10 text-3xl font-semibold">
          Basics language
        </h1>

        <Marquee pauseOnHover="true">
          <div className="flex justify-center items-center gap-5">
            {basicsData.map((item) => (
              <div className="border-2 space-y-2 border-[#f6f6] rounded-full p-5 grid justify-items-center items-center">
                <img src={item.icons} className="h-12 w-12" alt="" />

                <p className="text-lg">{item.name}</p>

                <p className="text-lg">{item.value}%</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="my-10">
        <h1 className="text-center my-10 text-3xl font-semibold">
          Framework
        </h1>

        <Marquee pauseOnHover="true">
          <div className="flex justify-center items-center gap-5">
            {framework.map((item) => (
              <div className="border-2 space-y-2 border-[#f6f6] rounded-full p-5 grid justify-items-center items-center">
                <img src={item.icons} className="h-12 w-12" alt="" />

                <p className="text-lg">{item.name}</p>

                <p className="text-lg">{item.value}%</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="my-10">
        <h1 className="text-center my-10 text-3xl font-semibold">
          Tools Kit
        </h1>

        <Marquee pauseOnHover="true">
          <div className="flex justify-center items-center gap-5">
            {tools.map((item) => (
              <div className="border-2 space-y-2 border-[#f6f6] rounded-full p-5 grid justify-items-center items-center">
                <img src={item.icons} className="h-12 w-12" alt="" />

                <p className="text-lg">{item.name}</p>

                <p className="text-lg">{item.value}%</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="my-10">
        <h1 className="text-center my-10 text-3xl font-semibold">
        Operating System
        </h1>

        <Marquee pauseOnHover="true">
          <div className="flex justify-center items-center gap-5">
            {tools.map((item) => (
              <div className="border-2 space-y-2 border-[#f6f6] rounded-full p-5 grid justify-items-center items-center">
                <img src={item.icons} className="h-12 w-12" alt="" />

                <p className="text-lg">{item.name}</p>

                <p className="text-lg">{item.value}%</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

    </section>
  );
};

export default Skill;
