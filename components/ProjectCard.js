import React from "react";
import Image from "next/image";
import Icons from "./Icons";
import imo from "@/public/images/imodatabase/cover.png";

const ProjectCard = ({ cover, title, date, caption, icons }) => {
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
        <h1 className="text-xs self-center">{date}</h1>
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
