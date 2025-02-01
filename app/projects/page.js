"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const importAllImages = (imageFilenames) => {
  return imageFilenames.map((filename) => {
    return require(`@/public/images/${filename}`).default;
  });
};

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [pointerEnabled, setPointerEnabled] = useState();

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

  const handleClick = (index) => {
    setExpandedProject(index);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold p-8 pt-16">Project</h1>
      <div className="grid gap-2 mx-[10%] grid-cols-[repeat(3,_minmax(320px,_1fr))] justify-items-center mb-20">
        {projects.map((item, index) => (
          // Project Cards
          <div
            key={index}
            className={`${
              pointerEnabled ? "pointer-events-auto" : "pointer-events-none"
            }`}>
            <div className="p-1 rounded-md duration-200 hover:bg-primary/[0.5] hover:scale-105">
              <div
                className="p-4 w-[320px] bg-base-300 rounded-md"
                onClick={() => handleClick(index)}>
                <ProjectCard
                  cover={item.cover}
                  title={item.title}
                  date={item.date}
                  caption={item.caption}
                  icons={item.icons}
                  expanded={expandedProject === index}
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
