"use client";

import { useState } from "react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  gradient: string;
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  gradient,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="group bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 flex gap-4 items-start cursor-pointer"
    >
      <div
        className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex-shrink-0 flex items-center justify-center text-lg sm:text-2xl font-black text-white shadow-lg"
        style={{ background: gradient }}
      >
        {company.charAt(0)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-white font-bold text-sm sm:text-base">{company}</h3>
            <p className="text-spotify-subtext text-xs sm:text-sm">{role} · {period}</p>
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
    </div>
  );
}
