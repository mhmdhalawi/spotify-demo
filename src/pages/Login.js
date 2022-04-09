import React from 'react';

import { loginUrl } from '../utils/spotify';

import { Grid, Button } from '@mantine/core';

import { BsSpotify } from 'react-icons/bs';

export default function Login() {
  const handleSpotifyLogin = () => {
    window.location.href = loginUrl;
  };

  return (
    <Grid style={{ height: '100vh' }} m={0} justify='center' align='center'>
      <Grid.Col span={3}>
        <Button
          style={{
            height: '50px',
            fontSize: '1.2rem',
            color: '#1DB954',
            borderColor: '#1DB954',
          }}
          fullWidth
          rightIcon={<BsSpotify size={24} />}
          variant='outline'
          onClick={handleSpotifyLogin}
        >
          Login
        </Button>
      </Grid.Col>
    </Grid>
  );
}
