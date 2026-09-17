import { useEffect, useState } from 'react';
import projectsData from '../../../data/projects.json';

interface ImageModule {
  default: string;
}

export function useProjects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [pointerEnabled, setPointerEnabled] = useState(false);

  const importAllImages = (imageFilenames: string[]): string[] => {
    return imageFilenames.map((filename: string): string => {
      return (require(`../../../public/images/${filename}`) as ImageModule)
        .default;
    });
  };

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

  useEffect(() => {
    setPointerEnabled(false);
    const timer = setTimeout(() => {
      setPointerEnabled(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return {
    projects,
    pointerEnabled,
    expandedProject,
    handleClick,
    handleClose,
  };
}
