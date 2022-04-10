import { api } from '../api';

// spotify search for an artist
// https://api.spotify.com/v1/search?q=artist:drake&type=artist

export const searchArtist = async (artist) => {
  const { data } = await api.get(`/search?q=artist:${artist}&type=artist`);
  return data.artists;
};

// spotify get  next page of artist
// https://api.spotify.com/v1/artists/{id}/albums?include_groups=album&market=US&limit=50&offset=0

export const fetchArtistNextPage = async (artist, offset) => {
  const { data } = await api.get(`/search?q=artist:${artist}&type=artist&offset=${offset}`);
  return data.artists;
};

// spotify get an artist's album
// https://api.spotify.com/v1/artists/{id}/albums

export const getArtistAlbums = async (artistId) => {
  const { data } = await api.get(`/artists/${artistId}/albums`);
  return data;
};
// spotify get next page of album
// https://api.spotify.com/v1/artists/{id}/albums?offset=0

export const fetchNextPage = async (artistId, offset) => {
  const { data } = await api.get(`/artists/${artistId}/albums?offset=${offset}`);
  return data;
};
