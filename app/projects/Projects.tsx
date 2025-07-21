'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import projectsData from '../../data/projects.json';
import ProjectCard from '../../components/ProjectCard';
import ProjectModal from '../../components/ProjectModal';

type ImageModule = {
  default: string;
};

const importAllImages = (imageFilenames: string[]): string[] => {
  return imageFilenames.map((filename: string): string => {
    return (require(`../../public/images/${filename}`) as ImageModule).default;
  });
};

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [pointerEnabled, setPointerEnabled] = useState(false);

  useEffect(() => {
    setPointerEnabled(false);
    const timer = setTimeout(() => {
      setPointerEnabled(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const projects = projectsData.map((project) => ({
    ...project,
    images: importAllImages(project.images || []),
    cover: importAllImages(project.cover || []),
  }));

  const handleClick = (index: number) => {
    setExpandedProject(index);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="p-8 pt-16 text-3xl font-bold">Project</h1>
      <div className="mx-[10%] mb-20 grid grid-cols-[repeat(3,minmax(320px,1fr))] justify-items-center gap-2">
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
