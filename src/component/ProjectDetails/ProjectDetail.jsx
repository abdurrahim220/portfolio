import { Link, useParams } from "react-router-dom";

import projects from "../../../public/db";
import { FaGithub } from "react-icons/fa";
const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  // console.log(project)

  return (
    <div className="container mx-auto py-10 h-auto px-2 md:px-0">
      <div className="md:flex space-y-10 justify-center gap-5">
        <div>
          <img
            src={project.image}
            className="overflow-hidden h-[600px] w-[800px]"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">{project.projectName}</h1>
          <div>
            <p>
              <span className="">AdminEmail</span>: {project.adminEmail}
            </p>
            <p>Admin Password:{project.adminPassword}</p>
          </div>
          <Link  target="_blank" className="text-red-700" to={project.liveLink}>LiveLink</Link>

          <div className="flex  items-center gap-5">
            <div className="flex justify-center items-center gap-1">
              <FaGithub size={25} /> <h2>Github Code Link</h2>
            </div>
            <Link  target="_blank" 
              to={project.frontEndGithub}
              className="flex justify-center text-red-700 items-center"
            >
              <span>FrontEnd</span>
            </Link>
            <Link
             target="_blank" 
              to={project.backEndGithub}
              className="flex justify-center text-red-700 items-center"
            >
              <span>BackEnd</span>
            </Link>
          </div>

          <div className="space-y-2">
            <div>
              <h1 className="text-2xl font-semibold">FrontEnd dependencies</h1>
              <p>{project["front-end"]}</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">BackEnd dependencies</h1>
              <p>{project["back-End"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
