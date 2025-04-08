export interface Song {
    id: number;
    title: string;
    artist: string;
    file: string;       // path to .mp3 file in assets
    coverUrl?: string;  // optional: album art
  }
  