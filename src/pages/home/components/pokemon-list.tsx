import { Box } from '@mantine/core';

import { Types } from 'modules';

import Pokemon from './pokemon';

interface PokemonListProps {
  pokemons: Types.IEntity.PokemonList[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => (
  <Box display="inline-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
    {pokemons.map(pokemon => (
      <Box key={pokemon.name}>
        <Pokemon pokemon={pokemon} />
      </Box>
    ))}
  </Box>
);

export default PokemonList;
