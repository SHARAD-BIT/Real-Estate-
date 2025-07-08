import { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjects = () => useContext(ProjectContext);