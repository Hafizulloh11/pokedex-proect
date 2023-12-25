import { Box } from '@mantine/core';

import { Types } from 'modules';

import Pokemon from './pokemon';

interface PokemonListProps {
  pokemons: Types.IApi.Pokemon.List.Response;
}

const PokemonList = ({ pokemons }: PokemonListProps) => (
  <Box display="inline-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
    {pokemons.results.map(pokemon => (
      <Box key={pokemon.name}>
        <Pokemon pokemon={pokemon} />
      </Box>
    ))}
  </Box>
);

export default PokemonList;
