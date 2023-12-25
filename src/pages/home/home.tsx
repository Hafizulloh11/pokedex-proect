import { Box, LoadingOverlay } from '@mantine/core';

import { usePokemons } from 'modules/hooks';

import PokemonList from './components/pokemon-list';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { pokemons, isLoading } = usePokemons();

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;
  return (
    <Box>
      <PokemonList />
    </Box>
  );
};

export default Home;
