import { useState } from 'react';
import { Flex, LoadingOverlay, NativeSelect } from '@mantine/core';
import { paginate } from 'utils';

import { Types } from 'modules';
import { PokemonTypes } from 'modules/constants';
import { usePokemons } from 'modules/hooks';

import Paginate from 'components/paggination';

import Navbar from './components/navbar';
import PokemonList from './components/pokemon-list';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { pokemons, isLoading, selectedType, setSelectedType } = usePokemons();
  const [pokemonName, setPokemonName] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (words: string) => {
    setPokemonName(words);
  };

  const handleSelectedType = (selectedType: string) => {
    PokemonTypes.forEach(type => {
      if (type.name === selectedType) {
        setSelectedType({ url: type.url, name: type.name });
      } else if (selectedType === 'any') {
        setSelectedType(null);
      }
    });
  };

  const searchedPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
  const paginatedPokemons: Types.IEntity.PokemonList[] = paginate(searchedPokemon, currentPage, pageSize);

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;
  return (
    <>
      <Navbar onSearch={handleSearch} value={pokemonName} selectedType={selectedType} onChangeSelectedType={handleSelectedType} />
      <Flex p={30} direction="column" align="center" justify="center">
        <PokemonList pokemons={paginatedPokemons} />
        <Flex align="center" gap={20}>
          <Paginate total={searchedPokemon?.length ? searchedPokemon.length : 1} onPageChange={handlePageChange} pageSize={pageSize} currentPage={currentPage} />
          <NativeSelect value={pageSize} onChange={e => setPageSize(+e.target.value)} data={['10', '20', '50']} />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
