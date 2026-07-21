import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  image?: ReactNode;
  gradient?: string;
  children?: ReactNode;
  href?: string;
}

export function SectionCard({
  title,
  subtitle,
  image,
  gradient,
  children,
}: SectionCardProps) {
  return (
    <div className="group bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 cursor-pointer">
      {image ? (
        <div className="mb-4">
          {image}
        </div>
      ) : gradient ? (
        <div
          className="w-full aspect-square rounded-full mb-4 flex items-center justify-center text-3xl font-black text-white shadow-lg"
          style={{ background: gradient }}
        >
          {title.charAt(0)}
        </div>
      ) : (
        <div className="w-full aspect-square rounded-full mb-4 bg-spotify-elevated flex items-center justify-center text-3xl font-black text-spotify-subtext shadow-lg">
          {title.charAt(0)}
        </div>
      )}
      <h3 className="text-white font-bold text-base truncate">{title}</h3>
      {subtitle && (
        <p className="text-spotify-subtext text-sm mt-1 line-clamp-2">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

export function WideCard({
  title,
  subtitle,
  gradient,
  children,
}: SectionCardProps) {
  return (
    <div className="group bg-spotify-surface hover:bg-spotify-card-hover transition-colors rounded-md p-4 cursor-pointer flex gap-4 items-center">
      {gradient ? (
        <div
          className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-black text-white shadow-lg"
          style={{ background: gradient }}
        >
          {title.charAt(0)}
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-spotify-elevated flex-shrink-0 flex items-center justify-center text-2xl font-black text-spotify-subtext">
          {title.charAt(0)}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-white font-bold text-base">{title}</h3>
        {subtitle && (
          <p className="text-spotify-subtext text-sm mt-0.5 line-clamp-2">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-white hover:underline cursor-pointer transition-colors">
        {title}
      </h2>
      {subtitle && (
        <p className="text-spotify-subtext text-sm mt-1">{subtitle}</p>
      )}
    </div>
  );
}
