interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColor = status === 'completed' ? 'bg-success' : 'bg-error';

  return (
    <div className="group flex items-center">
      <div className={`h-2 w-2 rounded-full ${statusColor}`} />
      <span
        className={`pointer-events-none absolute -translate-x-8 translate-y-6 rounded-lg px-1.5 py-0.5 text-xs font-bold whitespace-nowrap opacity-0 group-hover:text-white group-hover:opacity-100 ${statusColor}`}
      >
        {status === 'completed' ? 'Completed' : 'In Progress'}
      </span>
    </div>
  );
};

export default StatusBadge;
