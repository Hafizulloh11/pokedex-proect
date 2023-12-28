import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Flex, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { getColorFromUrl } from 'utils/colors';

import { Types } from 'modules';

interface PokemonProps {
  pokemon: Types.IEntity.PokemonList;
}

const Pokemon = ({ pokemon }: PokemonProps) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);
  const { hovered, ref } = useHover();

  const getPokemonColor = async () => {
    try {
      const color = await getColorFromUrl(pokemon.image);

      if (color) setPokemonColor(color);
    } catch (err: any) {
      notifications.show({ message: err?.message, color: 'red' });
    }
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

  return (
    <Link to={`pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'white' }}>
      <Card
        ref={ref}
        w="250px"
        style={{ textAlign: 'center', backgroundColor: pokemonColor!, cursor: 'pointer' }}
        shadow={hovered ? 'xl' : 'sm'}
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section sx={{ objectFit: 'contain' }}>
          <img width={150} src={pokemon.image} alt={pokemon.name} />
        </Card.Section>
        <Flex direction="column" align="center" sx={{ color: 'white', textTransform: 'capitalize', fontWeight: 500, fontSize: '26px' }}>
          <Text>{pokemon.name}</Text>
          <Text>#{pokemon.pokedexNumber}</Text>
        </Flex>
      </Card>
    </Link>
  );
};

export default Pokemon;
