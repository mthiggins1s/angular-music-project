export interface Song {
    id: number;
    title: string;
    artist: string;
    file: string;       // path to .mp3 file in assets
    coverUrl?: string;  // optional: album art
  }

export const Songs = [
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { title: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
  ];