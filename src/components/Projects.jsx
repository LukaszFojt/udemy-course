import React from "react";
import { generator3D,scifiCage } from "../assets";
import { projectsDescriptions } from "../constants";

const Projects = () => {
    return (
        <section id="projects">
            <div className="basic_container">
                <div className="projects grid-cols-2">
                    <div className="projects_info">
                    {projectsDescriptions.map((pdesc, index) => (
                            <ProjectCard key={pdesc.id} {...pdesc} index={index}/>
                        ))}
                    </div>
                    <div className="projects_images">
                        <img className="projects_img" alt="project-img-1" src={generator3D}></img>
                        <img className="projects_img" alt="project-img-2" src={scifiCage}></img>
                        <img className="projects_img" alt="project-img-3" src={generator3D}></img>
                    </div>
                </div>  
            </div>
            <hr className="solid"></hr>
        </section>
    )
}

const ProjectCard = ({id, title, content, index}) => (
    <div className="projects_info">
        <div>
            <h1 className="text-3xl">{title}</h1>
        </div>
        <div>
            <p className="text-lg">{content}</p>
        </div>
    </div>
)

export default Projects;