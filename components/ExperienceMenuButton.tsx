import Link from "next/link";

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
    <Link
      href={path}
      key={name}>
      <button
        className={`${
          active
            ? "btn-active text-neutral bg-accent border-accent"
            : "text-secondary border-secondary"
        } h-12 w-64 text-sm font-medium border btn-outline rounded-2xl btn-secondary cursor-pointer hover:bg-accent hover:text-neutral`}
        onClick={() => onClick(name)}>
        {name}
      </button>
    </Link>
  );
};
export default ExperienceMenuButton;
