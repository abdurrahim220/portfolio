import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardImage from "../CardImage/CardImage";
import projects from "../../../public/db";
const Projects = () => {
  const image = "https://i.ibb.co/FgFP6z1/full-page.png";

  const filterProjectsByCategory = (category) => {
    return projects.filter((project) => project.category === category);
  };

  const fullStackProjects = filterProjectsByCategory("fullStack");

  // console.log(fullStackProjects)

  const frontendProjects = filterProjectsByCategory("frontend");

  return (
    <div id="projects" className="my-16">
      <div className="text-center py-10 text-4xl font-semibold">Projects</div>
      <div className="container mx-auto">
        <Tabs className="space-y-4">
          <TabList className="">
            <div className="flex flex-wrap justify-center items-center gap-3">
              {" "}
              <Tab className="px-5 py-2 rounded-lg bg-red-300">Full Stack</Tab>
              <Tab className="px-5 py-2 rounded-lg bg-red-300">FrontEnd</Tab>
              <Tab className="px-5 py-2 rounded-lg bg-red-300">DOM</Tab>
              <Tab className="px-5 py-2 rounded-lg bg-red-300">Basic</Tab>
            </div>
          </TabList>

          <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center ">
            {fullStackProjects.map((project) => (
              <CardImage
                key={project.id}
                id={project.id}
                image={project.image}
              />
            ))}
          </TabPanel>
          <TabPanel>
            <CardImage image={image} />
          </TabPanel>
          <TabPanel>
            <CardImage image={image} />
          </TabPanel>
          <TabPanel className="flex gap-2">
            <CardImage image={image} />
            <CardImage image={image} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
