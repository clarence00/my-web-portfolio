import Image from 'next/image';
import { useState, useEffect } from 'react';
import Icons from './Icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  date: string;
  details: string;
  website: string;
  images: string[];
  icons: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  // Auto swipe in carousel
  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  // Scroll to the active image in the carousel
  useEffect(() => {
    if (project.images.length === 0) return;
    const el = document.getElementById(
      `item${(activeIndex % project.images.length) + 1}`
    );
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeIndex, project.images.length]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Black low opacity background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-primary-content/70 fixed inset-0 z-10 h-screen w-screen"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-base-200 fixed inset-x-[15%] inset-y-[25%] flex h-[48%] w-[70%] rounded-lg shadow-lg shadow-black"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-4 px-8">
            {/* Left side of the modal */}
            <div className="bg-error-content flex h-80 w-full items-center justify-center rounded-md">
              <div className="carousel">
                {project.images.map((item, index) => (
                  <div
                    key={index}
                    id={`item${index + 1}`}
                    className="carousel-item w-full"
                  >
                    <Image
                      src={item}
                      alt={`Carousel item ${index + 1}`}
                      className="h-80 w-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute flex w-fit translate-y-36 justify-center gap-2 py-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={`btn-circle bg-base-100 hover:bg-primary h-2 w-2 border-none duration-100 ${
                      activeIndex === index ? 'scale-150' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Right side of the modal */}
            <div className="flex h-full w-[50%] flex-col justify-between pt-8 pb-4">
              <div>
                <div className="flex justify-between">
                  <h1 className="text-md font-bold">{project.title}</h1>
                  <h1 className="self-center text-xs">{project.date}</h1>
                </div>
                <h2 className="mt-2 text-xs">{project.details}</h2>
              </div>
              <div className="pb-4">
                {project.website != '' && (
                  <h2 className="text-sm italic">
                    Link:{' '}
                    <Link
                      href={project.website}
                      className="text-primary text-xs italic"
                    >
                      {project.website}
                    </Link>
                  </h2>
                )}
                <div className="divider -my-0"></div>
                <div className="flex flex-wrap gap-2">
                  {project.icons.map((icon, index) => (
                    <Icons
                      key={index}
                      type={icon}
                      size="22px"
                      position="translate-y-6"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectModal;
