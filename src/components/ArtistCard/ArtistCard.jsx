import { Card as MantineCard, Image, Text, Stack, Group } from '@mantine/core';

import { AiFillStar } from 'react-icons/ai';

import StaticImage from '../../assets/img-placeholder.avif';

export default function ArtistCard() {
  return (
    <div style={{ width: 300, marginBlock: 20, marginInline: 10 }}>
      <MantineCard shadow='sm' p='lg'>
        <MantineCard.Section>
          <Image src={StaticImage} height={210} alt='Norway' />
        </MantineCard.Section>

        <Stack style={{ marginTop: 10, gap: 0, paddingBlock: 15 }}>
          <Text weight={500} style={{ color: 'black', fontSize: 20 }}>
            Tom Petty
          </Text>
          <Text size='sm' style={{ color: 'grey' }}>
            1,000 followers
          </Text>

          <Group style={{ color: 'grey', marginTop: 30, gap: 0 }}>
            <AiFillStar size={22} />
            <AiFillStar size={22} />
            <AiFillStar size={22} />
            <AiFillStar size={22} />
            <AiFillStar size={22} />
          </Group>
        </Stack>
      </MantineCard>
    </div>
  );
}
