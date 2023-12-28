import { Card, Flex, Image, Text } from '@mantine/core';

import { Types } from 'modules';

interface PokemonAvatarProps {
  pokemon: Types.IEntity.DetailPokemon;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => (
  <Card w="300px" style={{ textAlign: 'center', backgroundColor: pokemon.color!, cursor: 'pointer' }} shadow="xl" padding="lg" radius="md" withBorder>
    <Card.Section sx={{ objectFit: 'contain' }}>
      <Image sx={{ objectFit: 'contain' }} src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
    </Card.Section>
    <Flex direction="column" align="center" sx={{ textTransform: 'capitalize', fontWeight: 500, fontSize: '26px' }}>
      <Text>{pokemon.name}</Text>
      <Text>#{pokemon.id}</Text>
    </Flex>
  </Card>
);

export default PokemonAvatar;
