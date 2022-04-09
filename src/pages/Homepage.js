import { SimpleGrid } from '@mantine/core';
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
      <SimpleGrid
        cols={4}
        spacing={10}
        mx={30}
        style={{ placeItems: 'center' }}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </SimpleGrid>

      {/* <AlbumCard /> */}
    </div>
  );
};

export default Homepage;
