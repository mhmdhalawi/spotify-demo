import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ArtistCard from '../components/ArtistCard';
// import AlbumCard from '../components/AlbumCard';
import Search from '../components/Search';

import { useStore } from '../store';

const Homepage = () => {
  const { hash } = useLocation();
  const { setAccessToken } = useStore();

  // split hash to get access token
  const accessToken = hash.split('#')[1].split('&')[0].split('=')[1];

  useEffect(() => {
    setAccessToken(accessToken);
  }, [accessToken, setAccessToken]);

  return (
    <div>
      <Search />
      <ArtistCard />

      {/* <AlbumCard /> */}
    </div>
  );
};

export default Homepage;
