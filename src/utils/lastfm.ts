import type { LastFmRecentTracksResponse, Track } from "../types/lastfm";

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const USERNAME = "nolanjiang88";

export async function fetchRecentTracks(): Promise<Track[]> {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=5`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch recent tracks");
  } 

  const data: LastFmRecentTracksResponse = await response.json();

  return data.recenttracks.track;
}