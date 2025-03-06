import React from "react";

const StatusBadge = ({ status }) => {
  const statusColor = status === "completed" ? "bg-success" : "bg-error";

  return (
    <div className="group flex items-center">
      <div className={`h-2 w-2 rounded-full ${statusColor}`} />
      <span
        className={`absolute translate-y-6 -translate-x-8 text-xs font-bold rounded-lg pointer-events-none opacity-0 px-1.5 py-0.5 whitespace-nowrap group-hover:text-white group-hover:opacity-100 ${statusColor}`}>
        {status === "completed" ? "Completed" : "In Progress"}
      </span>
    </div>
  );
};

export default StatusBadge;
