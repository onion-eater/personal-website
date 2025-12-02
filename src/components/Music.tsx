"use client";

import { useEffect, useState } from "react";
import { fetchRecentTracks } from "../utils/lastfm";
import type { Track as ApiTrack } from "../types/lastfm";

type LastFmTrack = {
  trackName: string;
  artistName: string;
  albumName: string;
  trackUrl: string;
  albumArtUrl: string;
  nowPlaying: boolean;
  playedAt: number | null;
};

function normalizeTrack(track: ApiTrack): LastFmTrack {
  const albumArtUrl =
    track.image?.find((i) => i.size === "extralarge")?.["#text"] ||
    track.image?.find((i) => i.size === "large")?.["#text"] ||
    track.image?.find((i) => i.size === "medium")?.["#text"] ||
    track.image?.[0]?.["#text"] ||
    "";

  const nowPlaying = track["@attr"]?.nowplaying === "true";
  const playedAt = nowPlaying
    ? null
    : track.date?.uts
    ? Number(track.date.uts) * 1000
    : null;

  return {
    trackName: track.name,
    artistName: track.artist["#text"],
    albumName: track.album["#text"],
    trackUrl: track.url,
    albumArtUrl,
    nowPlaying,
    playedAt,
  };
}

export default function Music({ isDark }: { isDark: boolean }) {
  const [track, setTrack] = useState<LastFmTrack | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const recent = await fetchRecentTracks();
        if (!mounted) return;
        if (!recent || recent.length === 0) {
          setTrack(null);
          setError("No recent tracks");
          return;
        }
        setTrack(normalizeTrack(recent[0]));
        setError(null);
      } catch (e: any) {
        if (!mounted) return;
        setTrack(null);
        setError(e?.message || "Error loading track");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    const id = setInterval(load, 60000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const subtitle = track?.nowPlaying
    ? "now playing"
    : track?.playedAt
    ? `played ${timeAgo(track.playedAt)}`
    : error
    ? "error"
    : "last played";

  const label = track
    ? `${track.trackName} — ${track.artistName}`
    : loading
    ? "loading…"
    : error || "—";

  const href = "https://www.last.fm/user/nolanjiang88";

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none ${
        isDark ? "dark" : ""
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        className="pointer-events-auto group flex items-center gap-3 rounded-xl bg-gray-100/80 dark:bg-white/5 backdrop-blur px-4 py-3 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
      >
        {track?.albumArtUrl ? (
          <img
            src={track.albumArtUrl}
            alt={track.albumName}
            className="h-10 w-10 rounded-md object-cover"
          />
        ) : (
          <div
            className={`h-10 w-10 rounded-md ${
              loading
                ? "bg-gray-200/80 dark:bg-white/10 animate-pulse"
                : "bg-gray-200/40 dark:bg-white/10"
            }`}
          />
        )}

        <div className="min-w-0">
          <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
            {subtitle}
          </div>
          <div className="text-sm text-black dark:text-white truncate">
            {loading ? (
              <span className="inline-block h-4 w-40 rounded bg-gray-200/80 dark:bg-white/10 animate-pulse" />
            ) : track ? (
              <>
                {track.trackName}
                <span className="text-gray-600 dark:text-gray-400">
                  {" "}
                  — {track.artistName}
                </span>
              </>
            ) : (
              error || "—"
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

function timeAgo(timestampMs: number): string {
  const s = Math.floor((Date.now() - timestampMs) / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return `${d}d ago`;
  if (h > 0) return `${h}h ago`;
  if (m > 0) return `${m}m ago`;
  return "just now";
}
