import { Card as MantineCard, Image, Text, Stack, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

import { AiFillStar } from 'react-icons/ai';

import StaticImage from '../../assets/img-placeholder.avif';

export default function ArtistCard({ artist }) {
  console.log({ artist });
  const {
    id,
    name,
    popularity,
    images,
    followers: { total },
  } = artist;

  // convert popularity to stars (1 star = 20 popularity)
  const starsArray = [];
  for (let i = 0; i < Math.floor(popularity / 20); i++) {
    starsArray.push(i);
  }

  return (
    <Link to={id} style={{ width: 300, marginBlock: 20, marginInline: 10 }}>
      <MantineCard shadow='sm' p='lg'>
        <MantineCard.Section>
          <Image src={images.length > 0 ? images[0].url : StaticImage} height={210} alt='Norway' />
        </MantineCard.Section>

        <Stack style={{ marginTop: 10, gap: 0, paddingBlock: 15 }}>
          <Text weight={500} style={{ color: 'black', fontSize: 20 }}>
            {name}
          </Text>
          <Text size='sm' style={{ color: 'grey' }}>
            {total.toLocaleString()} followers
          </Text>

          <Group style={{ color: 'grey', marginTop: 30, gap: 0 }}>
            {starsArray.map((_, i) => (
              <AiFillStar key={i} size={20} />
            ))}
          </Group>
        </Stack>
      </MantineCard>
    </Link>
  );
}
