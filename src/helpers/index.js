import { api } from '../api';

// spotify search for an artist
// https://api.spotify.com/v1/search?q=artist:drake&type=artist

export const searchArtist = async (artist) => {
  const { data } = await api.get(`/search?q=artist:${artist}&type=artist`);
  return data.artists.items;
};
