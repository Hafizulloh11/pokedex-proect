import { Card, Flex, Text } from '@mantine/core';

import { Types } from 'modules';

import cls from '../../../assets/styles/pokemon-basic.module.scss';

interface PokemonBasicInfoProps {
  pokemon: Types.IEntity.DetailPokemon;
}

const PokemonBasicInfo = ({ pokemon }: PokemonBasicInfoProps) => (
  <Card w="400px" h='max-content' shadow="xl" p={50}>
    <Flex w='100%' h='100%' direction="column" align="center" justify="center">
      <Flex w='100%' justify="space-between">
        <Flex direction="column">
          <Text className={cls.title}>height</Text>
          <Text className={cls.text}>{pokemon.height}</Text>
        </Flex>
        <Flex direction="column">
          <Text className={cls.title}>weight</Text>
          <Text className={cls.text}>{pokemon.weight}</Text>
        </Flex>
      </Flex>

      <Flex w='100%' justify="space-between" mt={20}>
        <Flex direction="column">
          <Text className={cls.title}>abilities</Text>
          <Text className={cls.text}>
            {pokemon.abilities.map(ability => (
              <Text key={ability.ability.name} className={cls.text}>
                {ability.ability.name}
              </Text>
            ))}
          </Text>
        </Flex>
        <Flex direction="column">
          <Text className={cls.title}>types</Text>
          <Text className={cls.text}>
            {pokemon.types.map(type => (
              <Text key={type.type.name} className={cls.text}>
                {type.type.name}
              </Text>
            ))}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Card>
);

export default PokemonBasicInfo;
