import { TextInput, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

import { useDebouncedValue } from '@mantine/hooks';

import { searchArtist } from '../../helpers';
import { useStore } from '../../store';

const Search = () => {
  const [search, setSearch] = useState('');
  const { setArtists } = useStore();

  const [debounced] = useDebouncedValue(search, 250);

  const clearSearch = () => {
    setSearch('');
  };

  useEffect(() => {
    if (debounced) {
      searchArtist(debounced).then((artists) => {
        console.log({ artists });
        setArtists(artists.items);
      });
    }
  }, [debounced, setArtists]);

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
          placeholder='Search for an artist…'
          rightSection={
            search ? (
              <GrFormClose style={{ cursor: 'pointer' }} size={18} onClick={clearSearch} />
            ) : (
              <BiSearchAlt2 size={18} />
            )
          }
        />
      </Grid.Col>
    </Grid>
  );
};

export default Search;
