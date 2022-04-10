import { Card as MantineCard, Image, Text, Stack, Button } from '@mantine/core';

import StaticImage from '../../assets/img-placeholder.avif';

export default function AlbumCard({ album }) {
  const {
    images,
    artists,
    name,
    total_tracks,
    release_date,
    external_urls: { spotify },
  } = album;

  const handlePreview = () => {
    window.open(spotify, '_blank');
  };

  return (
    <div style={{ width: 300, marginBlock: 20 }}>
      <MantineCard shadow='sm' p={0}>
        <MantineCard.Section>
          <Image src={images.length > 0 ? images[0].url : StaticImage} height={210} alt='Norway' />
        </MantineCard.Section>

        <Stack style={{ marginTop: 10, gap: 0, padding: 15 }}>
          <Text weight={500} style={{ color: 'black', fontSize: 20 }}>
            {name}
          </Text>
          <Text size='sm' style={{ color: 'grey', marginBottom: 20 }}>
            {artists[0].name}
          </Text>
          <Text size='sm' style={{ color: 'grey' }}>
            {release_date}
          </Text>
          <Text size='sm' style={{ color: 'grey' }}>
            {total_tracks} tracks
          </Text>
        </Stack>
        <Button
          onClick={handlePreview}
          variant='light'
          color='blue'
          fullWidth
          style={{ marginTop: 14, borderRadius: 0 }}
        >
          Preview on Spotify
        </Button>
      </MantineCard>
    </div>
  );
}
