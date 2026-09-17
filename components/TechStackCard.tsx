import Icons from './Icons';
import { usePointer } from '../hooks/useComponents';

interface IconProps {
  icon: string;
}

interface TechStackCardProps {
  techData: IconProps[];
}

const TechStackCard = ({ techData }: TechStackCardProps) => {
  const { pointerEnabled } = usePointer();

  return (
    <div
      className={`card-body grid grid-cols-5 justify-items-center gap-2 ${
        pointerEnabled ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {techData.map((data, index) => (
        <Icons
          key={index}
          className="bg-base-300 rounded-md p-7 duration-200 hover:scale-105 hover:border-2 hover:border-white/10"
          type={data.icon}
          size="36px"
          position="translate-y-9"
        />
      ))}
    </div>
  );
};

export default TechStackCard;
