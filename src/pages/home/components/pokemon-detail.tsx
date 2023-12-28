/* eslint-disable no-nested-ternary */
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Flex, LoadingOverlay } from '@mantine/core';

// import { LoadingOverlay } from '@mantine/core';
import { usePokemon } from 'modules/hooks';

import PocemonStats from './pocemon-stats';
import PokemonAvatar from './pokemon-avatar';
import PokemonBasicInfo from './pokemon-basic-info';

interface PokemonDetailProps {}

const PokemonDetail = (props: PokemonDetailProps) => {
  const { pokemonName } = useParams();
  const { pokemon, isLoading } = usePokemon({ pokemonName });
  const navigate = useNavigate();

  // if (isLoading) return <LoadingOverlay visible overlayBlur={2} />;
  return (
    <Box w="100%" h="100vh" pt={40} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#eee' }}>
      {isLoading ? (
        <LoadingOverlay visible overlayBlur={2} />
      ) : pokemon ? (
        <Box>
          <Flex gap={20} mb={20}>
            <PokemonAvatar pokemon={pokemon} /> <PokemonBasicInfo pokemon={pokemon} />
          </Flex>
          <PocemonStats pokemon={pokemon} />
          <Button mt={20} radius="md" sx={{ color: '#eee', fontWeight: 500 }} onClick={() => navigate('/')}>
            Back to pokedex
          </Button>
        </Box>
      ) : (
        <Box>Pokemon not found</Box>
      )}
    </Box>
  );
};

export default PokemonDetail;
