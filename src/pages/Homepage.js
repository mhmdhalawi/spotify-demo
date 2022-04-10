import { SimpleGrid } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArtistCard from '../components/ArtistCard';
import Search from '../components/Search';
import { useStore } from '../store';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useDebouncedValue } from '@mantine/hooks';
import { fetchArtistNextPage } from '../helpers';

import { Loader } from '@mantine/core';

const Homepage = () => {
  const { hash } = useLocation();
  const { artists, clearAlbums, setArtists, clearArtists } = useStore();

  const [search, setSearch] = useState('');
  const [debounced] = useDebouncedValue(search, 250);

  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // split hash to get access token
  const token = hash.split('#')[1].split('&')[0].split('=')[1];

  const fetchData = async () => {
    if (artists.length === 0) return;
    const nextArtists = await fetchArtistNextPage(debounced, artists.length);
    setArtists(nextArtists.items);
  };

  useEffect(() => {
    localStorage.setItem('accessToken', token);
    clearAlbums([]);
  }, [token, clearAlbums]);

  useEffect(() => {
    clearArtists();
  }, [debounced, clearArtists]);

  useEffect(() => {
    if (artists.length === total && total !== 0) {
      setHasMore(false);
    }
  }, [artists.length, total]);

  return (
    <div>
      <Search setTotal={setTotal} debounced={debounced} search={search} setSearch={setSearch} />

      <InfiniteScroll
        dataLength={artists.length}
        next={fetchData}
        hasMore={hasMore}
        loader={artists.length > 0 && <Loader size={25} color='#1DB954' />}
      >
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
      </InfiniteScroll>
    </div>
  );
};

export default Homepage;
