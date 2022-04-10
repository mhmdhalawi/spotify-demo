import create from 'zustand';

export const useStore = create((set) => ({
  artists: [],
  setArtists: (artistsData) => set((state) => ({ artists: [...state.artists, ...artistsData] })),
  clearArtists: () => set((state) => ({ artists: [] })),
  albums: [],
  setAlbums: (albumData) => set((state) => ({ albums: [...state.albums, ...albumData] })),
  clearAlbums: () => set(() => ({ albums: [] })),
}));
