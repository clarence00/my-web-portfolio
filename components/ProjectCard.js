import React from "react";
import Image from "next/image";
import Icons from "./Icons";

const ProjectCard = ({ cover, title, date, caption, icons, bgStatus }) => {
  return (
    <>
      <div className="bg-error-content rounded-lg">
        <Image
          src={cover[0]}
          alt=" "
          className="object-contain h-36"
        />
      </div>
      <div className="flex justify-between mt-2">
        <h1 className="text-md font-bold">{title}</h1>
        <div className="flex gap-2 items-center">
          <div className="group">
            <div className={`relative h-2 w-2 rounded-full ${bgStatus}`} />
            <span
              className={`absolute translate-y-2 -translate-x-8 text-xs font-bold rounded-lg opacity-0 px-1.5 py-0.5 whitespace-nowrap group-hover:text-white group-hover:opacity-100 ${bgStatus}`}>
              {bgStatus === "bg-success" ? "Completed" : "In Progress"}
            </span>
          </div>
          <h1 className="text-xs self-center">{date}</h1>
        </div>
      </div>
      <h2 className="text-xs mt-1">{caption}</h2>
      <div className="flex mt-4 gap-2 flex-wrap">
        {icons.map((icon, index) => (
          <Icons
            key={index}
            type={icon}
            size="24px"
            position="translate-y-6"
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
