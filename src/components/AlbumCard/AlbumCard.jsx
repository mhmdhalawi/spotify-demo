import { Card as MantineCard, Image, Text, Stack, Button } from '@mantine/core';

import StaticImage from '../../assets/img-placeholder.avif';

export default function AlbumCard() {
  return (
    <div style={{ width: 300 }}>
      <MantineCard shadow='sm' p={0}>
        <MantineCard.Section>
          <Image src={StaticImage} height={210} alt='Norway' />
        </MantineCard.Section>

        <Stack style={{ marginTop: 10, gap: 0, padding: 15 }}>
          <Text weight={500} style={{ color: 'black', fontSize: 20 }}>
            Highway Companion
          </Text>
          <Text size='sm' style={{ color: 'grey', marginBottom: 20 }}>
            Tom Petty
          </Text>
          <Text size='sm' style={{ color: 'grey' }}>
            2006-07-21
          </Text>
          <Text size='sm' style={{ color: 'grey' }}>
            12 tracks
          </Text>
        </Stack>
        <Button variant='light' color='blue' fullWidth style={{ marginTop: 14, borderRadius: 0 }}>
          Preview on Spotify
        </Button>
      </MantineCard>
    </div>
  );
}
