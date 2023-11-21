import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardImage from "../CardImage/CardImage";

const Projects = () => {
  const image ="https://i.ibb.co/FgFP6z1/full-page.png"
  return (
    <div id="projects" className="my-16">
      <div className="text-center py-10 text-4xl font-semibold">Projects</div>
      <div className="container  mx-auto">
        <Tabs className="space-y-4">
          <TabList className="flex gap-4 justify-center">
            <Tab className="px-5 py-2 rounded-lg bg-red-300">Full Stack</Tab>
            <Tab className="px-5 py-2 rounded-lg bg-red-300">DOM</Tab>
            <Tab className="px-5 py-2 rounded-lg bg-red-300">Basic</Tab>
          </TabList>

          <TabPanel className=" flex gap-[4vw] justify-center items-center">
            <CardImage image={image}/>
            <CardImage image={image}/>
            <CardImage image={image}/>
          </TabPanel>
          <TabPanel>
          <CardImage image={image}/>
          </TabPanel>
          <TabPanel className="flex gap-2">
          <CardImage image={image}/>
          <CardImage image={image}/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
