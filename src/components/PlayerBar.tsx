"use client";

import { useState } from "react";

export default function PlayerBar() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      {/* Mobile player strip */}
      <footer className="lg:hidden h-14 bg-spotify-player border-t border-spotify-border flex-shrink-0 flex items-center justify-between px-3 z-50">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="w-10 h-10 bg-spotify-elevated rounded flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-spotify-green" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm-2 17l-1-1 3-3-3-3 1-1 4 4-4 4zm4-2l-1-1 3-3-3-3 1-1 4 4-4 4z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs text-white font-medium truncate leading-tight">Parimal Sharma</p>
            <p className="text-[10px] text-spotify-subtext truncate leading-tight">Senior Frontend Engineer</p>
          </div>
          <button
            onClick={() => setLiked(!liked)}
            className={`ml-auto mr-2 flex-shrink-0 transition-colors ${liked ? "text-spotify-heart" : "text-spotify-muted hover:text-spotify-subtext"}`}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 ml-0.5" fill="currentColor">
              <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Desktop player bar */}
      <footer className="hidden lg:flex h-[90px] bg-spotify-player border-t border-spotify-border flex-shrink-0 items-center justify-between px-4 z-50">
        {/* Track Info */}
        <div className="flex items-center gap-3 w-[30%] min-w-[180px]">
          <div className="w-14 h-14 bg-spotify-elevated rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-spotify-green" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm-2 17l-1-1 3-3-3-3 1-1 4 4-4 4zm4-2l-1-1 3-3-3-3 1-1 4 4-4 4z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-sm text-white font-medium truncate leading-tight">Parimal Sharma</p>
            <p className="text-xs text-spotify-subtext truncate leading-tight">Senior Frontend Engineer</p>
          </div>
          <button
            onClick={() => setLiked(!liked)}
            className={`ml-2 flex-shrink-0 transition-colors ${liked ? "text-spotify-heart" : "text-spotify-muted hover:text-spotify-subtext"}`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-1 w-[40%] max-w-[600px]">
          <div className="flex items-center gap-4">
            <button className="text-spotify-muted hover:text-spotify-text transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </button>
            <button className="text-spotify-muted hover:text-spotify-text transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V7.172c0-1.441-1.555-2.342-2.805-1.628L12 9.516V7.172c0-1.441-1.555-2.342-2.805-1.628l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
              </svg>
            </button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-5 h-5 ml-0.5" fill="currentColor">
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
              </svg>
            </button>
            <button className="text-spotify-muted hover:text-spotify-text transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M5.055 7.172c0-1.441 1.555-2.342 2.805-1.628L12 9.516V7.172c0-1.441 1.555-2.342 2.805-1.628l7.108 4.062c1.26.72 1.26 2.536 0 3.256l-7.108 4.062c-1.25.714-2.805-.188-2.805-1.628v-2.344l-4.14 2.344c-1.25.714-2.805-.188-2.805-1.628V7.172z" />
              </svg>
            </button>
            <button className="text-spotify-muted hover:text-spotify-text transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-spotify-muted w-10 text-right">1:23</span>
            <div className="flex-1 h-1 bg-spotify-elevated rounded-full group cursor-pointer relative">
              <div className="h-full w-[45%] bg-white rounded-full group-hover:bg-spotify-green transition-colors" />
              <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow" />
            </div>
            <span className="text-xs text-spotify-muted w-10">4:56</span>
          </div>
        </div>

        {/* Volume / Extra Controls */}
        <div className="flex items-center justify-end gap-2 w-[30%] min-w-[180px]">
          <button className="text-spotify-muted hover:text-spotify-text transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            <button className="text-spotify-muted hover:text-spotify-text transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </button>
            <div className="w-[93px] h-1 bg-spotify-elevated rounded-full group cursor-pointer relative">
              <div className="h-full w-[70%] bg-white rounded-full group-hover:bg-spotify-green transition-colors" />
              <div className="absolute top-1/2 left-[70%] -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow" />
            </div>
          </div>
          <button className="text-spotify-muted hover:text-spotify-text transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
}
