export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/artists'
    : 'https://spotify-work-clone.netlify.app/artists';

const clientId = '7bdc5f0fb9fa429c8e412f58763ced3f';

// const scopes = [
//   'user-read-currently-playing',
//   'user-read-recently-played',
//   'user-read-playback-state',
//   'user-top-read',
//   'user-modify-playback-state',
// ];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
