import { TextInput, Grid } from '@mantine/core';
import { useEffect } from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

import { searchArtist } from '../../helpers';
import { useStore } from '../../store';

const Search = ({ setTotal, debounced, search, setSearch }) => {
  const { setArtists, clearArtists } = useStore();

  const clearSearch = () => {
    setSearch('');
  };

  useEffect(() => {
    if (debounced) {
      searchArtist(debounced).then((artists) => {
        clearArtists();
        setArtists(artists.items);

        setTotal(artists.total);
      });
    }
  }, [debounced, setArtists, clearArtists, setTotal]);

  return (
    <Grid
      justify={'center'}
      m={0}
      style={{
        transform: `${search ? 'translateY(0px)' : 'translateY(300px) '}`,
        transition: 'all 0.25s ease-in',
        marginBottom: `${search ? '70px' : '350px'}`,
      }}
    >
      <Grid.Col md={4} style={{ margin: 0 }}>
        <TextInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size='lg'
          style={{ border: '1px solid #1DB954', padding: '2px 10px', borderRadius: 4 }}
          placeholder='Search for an artist…'
          variant='unstyled'
          rightSection={
            search ? (
              <GrFormClose
                style={{ cursor: 'pointer' }}
                color='#1DB954'
                size={18}
                onClick={clearSearch}
              />
            ) : (
              <BiSearchAlt2 size={18} color='#1DB954' />
            )
          }
        />
      </Grid.Col>
    </Grid>
  );
};

export default Search;
