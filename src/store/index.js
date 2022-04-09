import create from 'zustand';

export const useStore = create((set) => ({
  artists: [],
  setArtists: (artists) => set(() => ({ artists })),
  albums: [],
  setAlbums: (albums) => set(() => ({ albums })),
}));
