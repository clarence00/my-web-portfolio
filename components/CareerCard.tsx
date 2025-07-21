import { useState, useEffect } from 'react';
import Icons from './Icons';

interface CareerCardProps {
  title: string;
  href: string;
  company: string;
  duration: string;
  details: string[];
  icons: string[];
  size: string;
  position: string;
}

const CareerCard = ({
  title,
  href,
  company,
  duration,
  details,
  icons,
  size,
  position,
}: CareerCardProps) => {
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
      className={`hover:bg-base-300/[0.8] hover: mx-auto my-4 flex flex-col rounded-2xl border-white/10 duration-200 hover:scale-105 hover:border hover:shadow-lg ${
        pointerEnabled ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="card-body group p-4">
        <h2 className="card-title text-xl">{title}</h2>
        <div className="-mt-2 flex justify-between italic">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline-offset-2 hover:underline"
          >
            {company}
          </a>
          <h6 className="text-sm">{duration}</h6>
        </div>
        <div className="divider my-0"></div>
        <ul className="max-h-0 list-disc pl-8 text-sm opacity-0 duration-200 group-hover:max-h-full group-hover:opacity-100">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="divider -my-2 max-h-0 opacity-0 duration-200 group-hover:my-0 group-hover:max-h-full group-hover:opacity-100"></div>
        <div className="flex gap-4 px-2">
          {icons.map((icon, index) => (
            <Icons key={index} type={icon} size={size} position={position} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
