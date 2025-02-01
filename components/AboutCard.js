"use client";
import React, { useState, useEffect } from "react";

const AboutCard = ({ href, title, subtitle, details, duration }) => {
  const [pointerEnabled, setPointerEnabled] = useState();

  useEffect(() => {
    setPointerEnabled(false);
    const timer = setTimeout(() => {
      setPointerEnabled(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col rounded-2xl w-[90%] mx-4 duration-200 hover:scale-105 bg-accent/[0.1] shadow-xl ${
        pointerEnabled ? "pointer-events-auto" : "pointer-events-none"
      }`}>
      <div className="card-body p-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-md card-title hover:underline underline-offset-2">
          {title}
        </a>
        <div className="flex justify-between -mt-2 italic">
          <h6 className="text-sm">{subtitle}</h6>
          <h6 className="text-sm">{duration}</h6>
        </div>
        <h6 className="-mt-2 text-sm">{details}</h6>
      </div>
    </div>
  );
};

export default AboutCard;
