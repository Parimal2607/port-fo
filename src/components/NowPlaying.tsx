"use client";

interface NowPlayingProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  liked: boolean;
  progressPct: number;
  onTogglePlay: () => void;
  onSeek: (pct: number) => void;
  onToggleLike: () => void;
  onClose: () => void;
}

export default function NowPlaying({
  isPlaying,
  currentTime,
  duration,
  liked,
  progressPct,
  onTogglePlay,
  onSeek,
  onToggleLike,
  onClose,
}: NowPlayingProps) {
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    onSeek(x / rect.width);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-[#333] to-spotify-base flex flex-col animate-slide-up">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-12 pb-2">
        <button
          onClick={onClose}
          className="text-spotify-subtext hover:text-spotify-text transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </button>
        <p className="text-[11px] font-bold text-spotify-subtext uppercase tracking-widest">
          Now Playing
        </p>
        <button
          onClick={onToggleLike}
          className="transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill={liked ? "#e13300" : "none"}
            stroke={liked ? "#e13300" : "#b3b3b3"}
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      {/* Album Art */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-[320px] aspect-square rounded-full bg-gradient-to-br from-spotify-green to-[#169c46] shadow-2xl flex items-center justify-center mb-8">
          <span className="text-8xl font-black text-white">P</span>
        </div>

        {/* Track info */}
        <div className="w-full max-w-[320px] mb-10">
          <h2 className="text-2xl font-bold text-white truncate">Parimal Sharma</h2>
          <p className="text-sm text-spotify-subtext mt-1 truncate">Senior Frontend Engineer</p>
        </div>

        {/* Progress */}
        <div className="w-full max-w-[320px] mb-4">
          <div
            onClick={handleProgressClick}
            className="w-full h-1.5 bg-spotify-elevated rounded-full group cursor-pointer relative"
          >
            <div
              className="h-full rounded-full bg-white"
              style={{ width: `${progressPct}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
              style={{ left: `${progressPct}%`, marginLeft: "-8px" }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[11px] text-spotify-subtext tabular-nums">{formatTime(currentTime)}</span>
            <span className="text-[11px] text-spotify-subtext tabular-nums">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full max-w-[320px] flex items-center justify-center gap-6">
          <button className="text-spotify-subtext hover:text-spotify-text transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>
          <button className="text-spotify-subtext hover:text-spotify-text transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V7.172c0-1.441-1.555-2.342-2.805-1.628L12 9.516V7.172c0-1.441-1.555-2.342-2.805-1.628l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
            </svg>
          </button>
          <button
            onClick={onTogglePlay}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1" fill="currentColor">
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
              </svg>
            )}
          </button>
          <button className="text-spotify-subtext hover:text-spotify-text transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M5.055 7.172c0-1.441 1.555-2.342 2.805-1.628L12 9.516V7.172c0-1.441 1.555-2.342 2.805-1.628l7.108 4.062c1.26.72 1.26 2.536 0 3.256l-7.108 4.062c-1.25.714-2.805-.188-2.805-1.628v-2.344l-4.14 2.344c-1.25.714-2.805-.188-2.805-1.628V7.172z" />
            </svg>
          </button>
          <button className="text-spotify-subtext hover:text-spotify-text transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Volume */}
        <div className="w-full max-w-[320px] flex items-center justify-center gap-2 mt-6">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-spotify-subtext" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
          <div className="w-full h-1 bg-spotify-elevated rounded-full cursor-pointer relative">
            <div className="h-full w-3/5 bg-white rounded-full" />
          </div>
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-spotify-subtext" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424" />
          </svg>
        </div>
      </div>
    </div>
  );
}
