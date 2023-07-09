import React from "react";
import { project } from "../../data/data";
import { BiLinkExternal } from "react-icons/bi";

export default function Project() {
  
  type ProjectType = {
    data: {
      name: string;
      description: string;
      image: string;
      link: string;
    };
  };

  const ProjectCard: React.FC<ProjectType> = ({ data }) => {
    return (
      <div className="md:flex sm:flex-row sm:justify-between w-5/6 m-3 rounded-lg hover:scale-105 transition-transform shadow-md p-4">
        <div className="flex flex-col justify-between p-2">
          <h3 className="font-bold text-lg">{data.name}</h3>
          <p>{data.description}</p>
          <div>
            <a href={data.link} className="mr-1">
              <BiLinkExternal className="inline-block" />
            </a>
          </div>
        </div>
        <img
          className="sm:float-right md:w-1/6 sm:w-1/6"
          src={data.image}
          alt={data.name}
        />
      </div>
    );
  };

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center m-5">
        <h1 className="text-black hover:scale-105 transition-transform text-xl font-bold">
          My Project
        </h1>
        {project.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
