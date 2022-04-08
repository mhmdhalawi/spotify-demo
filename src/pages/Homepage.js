import React from 'react';
import AlbumCard from '../components/AlbumCard';
// import ArtistCard from '../components/ArtistCard';
import Search from '../components/Search';

const Homepage = () => {
  return (
    <div>
      <Search />
      {/* <ArtistCard />
       */}
      <AlbumCard />
    </div>
  );
};

export default Homepage;
