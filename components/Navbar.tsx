"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { name: "About", path: "./" },
  { name: "Experience", path: "./experience" },
  { name: "Projects", path: "./projects" },
];

const getActivePath = (pathname: string) => {
  if (pathname === "/" || pathname === "./") return "About";
  if (pathname.startsWith("/experience")) return "Experience";
  if (pathname.startsWith("/projects")) return "Projects";
  return "About";
};

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(() => getActivePath(pathname));

  useEffect(() => {
    setActive(getActivePath(pathname));
  }, [pathname]);

  const handleSetActive = (menuItem: string) => {
    setActive(menuItem);
  };

  return (
    <div className="navbar bg-base-300 shadow-lg sticky top-0 z-10 px-40">
      <div className="flex-1">
        <Link
          href="./"
          onClick={() => handleSetActive("About")}
          className="btn btn-ghost text-xl hover:bg-neutral-content/25">
          Clarence
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2 py-2.5">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`${active === item.name ? "bg-neutral" : ""}`}
                onClick={() => handleSetActive(item.name)}>
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
