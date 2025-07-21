import Image from 'next/image';
import Icons from './Icons';
import StatusBadge from './StatusBadge';

interface ProjectCardProps {
  cover: string[];
  title: string;
  date: string;
  caption: string;
  icons: string[];
  status: string;
}

const ProjectCard = ({
  cover,
  title,
  date,
  caption,
  icons,
  status,
}: ProjectCardProps) => {
  return (
    <>
      <div className="bg-error-content rounded-lg">
        <Image src={cover[0]} alt=" " className="h-36 object-contain" />
      </div>
      <div className="mt-2 flex justify-between">
        <h1 className="text-md font-bold">{title}</h1>
        <div className="flex items-center gap-2">
          <StatusBadge status={status} />
          <h1 className="self-center text-xs">{date}</h1>
        </div>
      </div>
      <h2 className="mt-1 text-xs">{caption}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {icons.map((icon, index) => (
          <Icons key={index} type={icon} size="24px" position="translate-y-6" />
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
