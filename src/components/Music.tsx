import { fetchRecentTracks } from "../utils/lastfm";
import { useEffect, useState } from "react";
import type { Track } from "../types/lastfm";

export default function Music({ isDark }: { isDark: boolean }) {
  const [data, setData] = useState<Track[] | null>(null);

  useEffect(() => {
    fetchRecentTracks().then((tracks) => {
      setData(tracks);
    });
  }, []);

  const href = "https://www.last.fm/user/nolanjiang88";
  const label = data
    ? `${data[0].name} by ${data[0].artist["#text"]}`
    : "loading…";

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 pointer-events-none ${
        isDark ? "dark" : ""
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        className="pointer-events-auto rounded-full bg-black/10 backdrop-blur px-3 py-1.5 
                   text-xs sm:text-sm text-black hover:bg-black/20 transition shadow dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        Last Played Song: {label}
      </a>
    </div>
  );
}