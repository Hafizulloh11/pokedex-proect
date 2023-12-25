import { Flex, LoadingOverlay } from '@mantine/core';

import { usePokemons } from 'modules/hooks';

import PokemonList from './components/pokemon-list';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { pokemons, isLoading } = usePokemons();

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;
  return (
    <Flex p={30} align="center" justify="center">
      <PokemonList pokemons={pokemons} />
    </Flex>
  );
};

export default Home;
