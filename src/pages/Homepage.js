import { SimpleGrid } from '@mantine/core';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ArtistCard from '../components/ArtistCard';
// import AlbumCard from '../components/AlbumCard';
import Search from '../components/Search';
import { useStore } from '../store';

const Homepage = () => {
  const { hash } = useLocation();
  const { artists } = useStore();

  // split hash to get access token
  const token = hash.split('#')[1].split('&')[0].split('=')[1];

  useEffect(() => {
    localStorage.setItem('accessToken', token);
  }, [token]);

  return (
    <div>
      <Search />
      {artists.length > 0 && (
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
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </SimpleGrid>
      )}

      {/* <AlbumCard /> */}
    </div>
  );
};

export default Homepage;
