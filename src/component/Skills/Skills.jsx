import React from "react";
import { Flat, Heat, Nested } from "@alptugidin/react-circular-progress-bar";
const Skills = () => {
  return (
    <div id="skills" className="my-10 lg:my-24">
      <h1 className="text-center py-10 font-bold leading-6 md:text-4xl text-3xl">Skills</h1>
      <div className="grid grid-cols-1 container px-2 lg:px-5 mx-auto gap-5 md:grid-cols-3">
        <div>
          <h1 className="text-center text-2xl lg:text-3xl font-bold py-5">
            Basic
          </h1>
          <Nested
            circles={[
              { text: "HTML", value: 80, color: "#c248c0" },
              { text: "CSS", value: 75, color: "#7c3aed" },
              { text: "Javascript", value: 75, color: "#fde047" },
              { text: "ReactJs", value: 80, color: "#0ea5e9" },
              { text: "Tailwind css", value: 90, color: "#c026d3" },
            ]}
            sx={{
              bgColor: "#cbd5e1",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              strokeLinecap: "round",
              
              loadingTime: 800,
              valueAnimation: true,
              intersectionEnabled: true,
            }}
          />
        </div>

        <div>
          <h1 className="text-center text-2xl lg:text-3xl font-bold py-5">
            Framework
          </h1>
          <Nested
            circles={[
              { text: "Mongoose", value: 80, color: "#fde047" },
              { text: "Typescript", value: 85, color: "#0ea5e9" },
              { text: "NodeJS", value: 80, color: "#c248cD" },
              { text: "ExpressJS", value: 85, color: "#7c3aed" },
              { text: "NextJs", value: 85, color: "#c026d3" },
            ]}
            sx={{
              bgColor: "#cbd5e1",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              strokeLinecap: "round",
              loadingTime: 800,
              valueSize: 8,
              textSize: 8,
              valueAnimation: true,
              intersectionEnabled: true,
            }}
          />
        </div>

        <div>
          <h1 className="text-center text-2xl lg:text-3xl font-bold py-5">
            Tools Kit
          </h1>
          <Nested
            circles={[
              
              { text: "Postman", value: 90, color: "#0ea5e9" },
              { text: "GitHub", value: 90, color: "#7c3aed" },
              { text: "Mongodb", value: 85, color: "#c026d3" },
              { text: "Firebase", value: 85, color: "#0ea5e9" },
              { text: "Netlify", value: 90, color: "#c248cd" },
              { text: "Vercel", value: 90, color: "#7c3aed" },
            ]}
            sx={{
              bgColor: "#cbd5e1",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              strokeLinecap: "round",
              valueSize: 8,
              textSize: 8,
              barWidth: 5,
              loadingTime: 800,
              valueAnimation: true,
              intersectionEnabled: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
