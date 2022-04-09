import { SimpleGrid, Text } from '@mantine/core';
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getArtistAlbums } from '../helpers';
import { useStore } from '../store';

import AlbumCard from '../components/AlbumCard';

export default function Artist() {
  const { id } = useParams();

  const { albums, setAlbums } = useStore();

  useEffect(() => {
    getArtistAlbums(id).then((albums) => {
      console.log(albums);
      setAlbums(albums);
    });
  }, [id, setAlbums]);

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
    </div>
  );
}
