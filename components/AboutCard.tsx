import { useState, useEffect } from 'react';

interface AboutCardProps {
  href: string;
  title: string;
  subtitle: string;
  details: string;
  duration: string;
}

const AboutCard = ({
  href,
  title,
  subtitle,
  details,
  duration,
}: AboutCardProps) => {
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
      className={`bg-accent/[0.1] mx-4 flex w-[90%] flex-col rounded-2xl shadow-xl duration-200 hover:scale-105 ${
        pointerEnabled ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="card-body p-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="card-title text-xl font-bold underline-offset-2 hover:underline"
        >
          {title}
        </a>
        <div className="-mt-2 flex justify-between italic">
          <h6 className="text-sm">{subtitle}</h6>
          <h6 className="text-sm">{duration}</h6>
        </div>
        <h6 className="-mt-2 text-sm">{details}</h6>
      </div>
    </div>
  );
};

export default AboutCard;
