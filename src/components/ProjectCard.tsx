"use client";

import { useState } from "react";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  gradient: string;
  url?: string | null;
}

export default function ProjectCard({
  title,
  tech,
  description,
  gradient,
  url,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (url && !expanded) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    setExpanded(!expanded);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 cursor-pointer"
    >
      <div
        className="w-full aspect-video rounded-md mb-4 flex items-center justify-center text-2xl sm:text-4xl font-black text-white shadow-lg relative"
        style={{ background: gradient }}
      >
        {title.charAt(0)}
        {url && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-md flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              fill="currentColor"
            >
              <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-white font-bold text-sm sm:text-base truncate flex items-center gap-1.5">
            {title}
            {url && (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-spotify-subtext flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            )}
          </h3>
          <p className="text-spotify-green text-[11px] sm:text-xs font-semibold mt-1">{tech}</p>
        </div>
        <svg
          viewBox="0 0 24 24"
          className={`w-5 h-5 text-spotify-muted flex-shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <p
        className={`text-spotify-subtext text-xs sm:text-sm mt-2 transition-all ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
