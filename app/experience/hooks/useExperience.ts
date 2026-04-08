import { useState } from 'react';

export function useExperience() {
  const [active, setActive] = useState('Career');

  const handleSetActive = (menuItem: string) => {
    setActive(menuItem);
  };

  const links = [
    { name: 'Career', path: './experience' },
    { name: 'Tech Stacks', path: './experience' },
    { name: 'Tools', path: './experience' },
  ];

  return {
    active,
    links,
    handleSetActive,
  };
}
