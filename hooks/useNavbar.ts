import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useNavbar() {
  const links = [
    { name: 'About', path: './' },
    { name: 'Experience', path: './experience' },
    { name: 'Projects', path: './projects' },
  ];

  const getActivePath = (pathname: string) => {
    if (pathname === '/' || pathname === './') return 'About';
    if (pathname.startsWith('/experience')) return 'Experience';
    if (pathname.startsWith('/projects')) return 'Projects';
    return 'About';
  };

  const pathname = usePathname();
  const [active, setActive] = useState(() => getActivePath(pathname));

  useEffect(() => {
    setActive(getActivePath(pathname));
  }, [pathname]);

  const handleSetActive = (menuItem: string) => {
    setActive(menuItem);
  };

  return {
    active,
    links,
    handleSetActive,
  };
}
