import Link from 'next/link';

interface ExperienceMenuButtonProps {
  name: string;
  path: string;
  active: boolean;
  onClick: (name: string) => void;
}

const ExperienceMenuButton = ({
  name,
  path,
  active,
  onClick,
}: ExperienceMenuButtonProps) => {
  return (
    <Link href={path} key={name}>
      <button
        className={`${
          active
            ? 'btn-active text-neutral bg-accent border-accent'
            : 'text-secondary border-secondary'
        } btn-outline btn-secondary hover:bg-accent hover:text-neutral h-12 w-64 cursor-pointer rounded-2xl border text-sm font-medium`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </Link>
  );
};
export default ExperienceMenuButton;
