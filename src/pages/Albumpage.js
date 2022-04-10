import { SimpleGrid, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { fetchNextPage, getArtistAlbums } from '../helpers';
import { useStore } from '../store';

import AlbumCard from '../components/AlbumCard';

import InfiniteScroll from 'react-infinite-scroll-component';

export default function Artist() {
  const { id } = useParams();

  const { albums, setAlbums } = useStore();

  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (albums.length === 0) {
      getArtistAlbums(id).then((albums) => {
        setAlbums(albums.items);
        setTotal(albums.total);
      });
    }
  }, [id, albums, setAlbums]);

  const fetchData = async () => {
    if (albums.length === 0) return;
    const nextAlbums = await fetchNextPage(id, albums.length);
    setAlbums(nextAlbums.items);
  };

  useEffect(() => {
    if (albums.length === total && total !== 0) {
      setHasMore(false);
    }
  }, [albums.length, total]);

  return (
    <div style={{ marginInline: 40, marginTop: 20 }}>
      <div style={{ marginBlock: 20, marginInline: 20 }}>
        <Text as='h1' style={{ fontSize: 32 }}>
          {albums[0] && albums[0].artists[0].name}
        </Text>
        <Text as='h1' style={{ fontSize: 18, color: 'grey' }}>
          Albums
        </Text>
      </div>

      <div>
        <InfiniteScroll
          dataLength={albums.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {albums.length > 0 && (
            <SimpleGrid
              cols={4}
              spacing={10}
              my={50}
              style={{ placeItems: 'center' }}
              breakpoints={[
                { maxWidth: 980, cols: 3, spacing: 'md' },
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 1, spacing: 'sm' },
              ]}
            >
              {albums.map((album) => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </SimpleGrid>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}
