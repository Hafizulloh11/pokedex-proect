import { Card, Image } from '@mantine/core';

import { Types } from 'modules';

interface PokemonProps {
  pokemon: Types.IEntity.PokemonList;
}

const Pokemon = ({ pokemon }: PokemonProps) => (
  <Card w="300px" style={{ textAlign: 'center' }} shadow="xl" padding="lg" radius="md" withBorder>
    <Card.Section sx={{ objectFit: 'contain' }}>
      <Image src={pokemon.image} alt={pokemon.name} />
    </Card.Section>
    {pokemon.name}
  </Card>
);

export default Pokemon;
