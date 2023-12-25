import { Box, LoadingOverlay } from '@mantine/core';

import PokemonList from './components/pokemon-list';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const isLoading = false;

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;
  return (
    <Box>
      <PokemonList />
    </Box>
  );
};

export default Home;
