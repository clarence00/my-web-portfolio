'use client';
import Link from 'next/link';
import { useNavbar } from '../hooks/useNavbar';

const Navbar = () => {
  const { active, links, handleSetActive } = useNavbar();

  return (
    <div className="navbar bg-base-300 sticky top-0 z-10 w-full justify-center shadow-lg md:px-40">
      <div className="hidden md:visible md:flex-1">
        <Link
          href="./"
          onClick={() => handleSetActive('About')}
          className="btn btn-ghost hover:bg-neutral-content/25 text-xl"
        >
          Clarence
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1 py-2.5">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`${active === item.name ? 'bg-neutral' : ''}`}
                onClick={() => handleSetActive(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
