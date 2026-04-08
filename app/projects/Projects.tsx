'use client';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import ProjectModal from '../../components/ProjectModal';
import { useProjects } from './hooks/useProjects';

const Projects = () => {
  const {
    projects,
    pointerEnabled,
    expandedProject,
    handleClick,
    handleClose,
  } = useProjects();

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-8 pt-16 text-3xl font-bold">Project</h1>
      <div className="mx-[10%] mb-20 grid grid-cols-1 justify-items-center gap-2 md:grid-cols-[repeat(3,minmax(320px,1fr))]">
        {projects.map((item, index) => (
          // Project Cards
          <div
            key={index}
            className={`${
              pointerEnabled ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
            <div className="hover:bg-primary/[0.5] rounded-md p-1 duration-200 hover:scale-105">
              <div
                className="bg-base-300 w-[320px] rounded-md p-4"
                onClick={() => handleClick(index)}
              >
                <ProjectCard
                  cover={item.cover}
                  title={item.title}
                  date={item.date}
                  caption={item.caption}
                  icons={item.icons}
                  status={item.status}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {expandedProject !== null && (
          <>
            <ProjectModal
              key={expandedProject}
              project={projects[expandedProject]}
              onClose={handleClose}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
