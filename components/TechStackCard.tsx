import { useState, useEffect } from "react";
import Icons from "./Icons";

interface IconProps {
  icon: string;
}

interface TechStackCardProps {
  techData: IconProps[];
}

const TechStackCard = ({ techData }: TechStackCardProps) => {
  const [pointerEnabled, setPointerEnabled] = useState(false);

  useEffect(() => {
    setPointerEnabled(false);
    const timer = setTimeout(() => {
      setPointerEnabled(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`card-body grid gap-2 grid-cols-5 justify-items-center ${
        pointerEnabled ? "pointer-events-auto" : "pointer-events-none"
      }`}>
      {techData.map((data, index) => (
        <Icons
          key={index}
          className="p-7 bg-base-300 rounded-md duration-200 hover:scale-105 hover:border-2 hover:border-white/10"
          type={data.icon}
          size="36px"
          position="translate-y-9"
        />
      ))}
    </div>
  );
};

export default TechStackCard;
