import { fetchRecentTracks } from "../utils/lastfm";
import { useEffect, useState } from "react";
import type { Track } from "../types/lastfm";

export default function Music() {
  const [data, setData] = useState<Track[] | null>(null);

  useEffect(() => {
    fetchRecentTracks().then((tracks) => {
      setData(tracks);
    });
  }, []);

  const href = data?.[0]?.url ?? "#";
  const label = data
    ? `${data[0].name} by ${data[0].artist["#text"]}`
    : "loading…";

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        className="pointer-events-auto rounded-full bg-white/10 backdrop-blur px-3 py-1.5 
                   text-xs sm:text-sm text-white hover:bg-white/20 transition shadow"
      >
        Last Played Song: {label}
      </a>
    </div>
  );
}
