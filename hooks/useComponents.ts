import { useEffect, useState } from 'react';
import { Project } from '../utils/types';

export function usePointer() {
  const [pointerEnabled, setPointerEnabled] = useState(false);

  useEffect(() => {
    setPointerEnabled(false);
    const timer = setTimeout(() => {
      setPointerEnabled(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return {
    pointerEnabled,
  };
}

export function useCarousel({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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
  return {
    activeIndex,
    handleBackdropClick,
    handleButtonClick,
  };
}
