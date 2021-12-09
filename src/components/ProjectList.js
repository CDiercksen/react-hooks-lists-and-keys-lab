import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const ListItems = projects.map((project) =>
  <div key={project.id} >{ProjectItem(project)}</div> 
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ListItems}
      </div>
    </div>
  );
}

export default ProjectList;
