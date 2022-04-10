import create from 'zustand';

export const useStore = create((set) => ({
  artists: [],
  setArtists: (artists) => set(() => ({ artists })),
  albums: [],
  setAlbums: (albumData) => set((state) => ({ albums: [...state.albums, ...albumData] })),
  clearAlbums: () => set(() => ({ albums: [] })),
}));
