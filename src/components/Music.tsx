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

  return(
    <p>{data?.[0]?.name ?? "Loading"}</p>
  );

}