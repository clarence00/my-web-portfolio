interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColor =
    status === 'completed'
      ? 'bg-success'
      : status === 'cancelled'
        ? 'bg-error'
        : 'bg-customYellow';

  return (
    <div className="group flex items-center">
      <div className={`h-2 w-2 rounded-full ${statusColor}`} />
      <span
        className={`pointer-events-none absolute -translate-x-8 translate-y-6 rounded-lg px-2 py-1 text-xs font-bold whitespace-nowrap opacity-0 group-hover:text-white group-hover:opacity-100 ${statusColor}`}
      >
        {status === 'completed'
          ? 'Completed'
          : status === 'cancelled'
            ? 'Cancelled'
            : 'In Progress'}
      </span>
    </div>
  );
};

export default StatusBadge;
