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
  const basicProjects = filterProjectsByCategory("basic");

  return (
    <div id="projects" className="my-16">
      <div className="text-center py-10 text-4xl font-semibold">Projects</div>
      <div className="container mx-auto">
        <Tabs className="space-y-4">
          <TabList className="">
            <div className="flex flex-wrap justify-center items-center gap-3">
              <Tab className={`px-5 py-2 rounded-lg `}>Full Stack</Tab>
              <Tab className={`px-5 py-2 rounded-lg `}>FrontEnd</Tab>
              <Tab className={`px-5 py-2 rounded-lg `}>DOM</Tab>
              <Tab className={`px-5 py-2 rounded-lg `}>Basic</Tab>
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

          <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center ">
            {frontendProjects.map((project) => (
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
        
          <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center ">
            {basicProjects.map((project) => (
              <CardImage
                key={project.id}
                id={project.id}
                image={project.image}
              />
            ))}
          </TabPanel>

        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
