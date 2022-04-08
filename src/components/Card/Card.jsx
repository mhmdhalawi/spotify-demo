import React from 'react';

import { Group, Text, Badge, Button } from '@mantine/core';

export default function Card() {
  return (
    <div>
      <Card shadow='sm' p='lg'>
        <Card.Section>
          {/* <Image src='./image.png' height={160} alt='Norway' /> */}
          <h1>Image Here</h1>
        </Card.Section>

        <Group position='apart' style={{ marginBottom: 5, marginTop: '20px' }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color='pink' variant='light'>
            On Sale
          </Badge>
        </Group>

        <Text size='sm' style={{ color: 'blue', lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </div>
  );
}
