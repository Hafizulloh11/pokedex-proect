import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import config from 'config';

import { Api, Types } from '..';

export const usePokemons = () => {
  const [state, setState] = useState<Types.IQuery.Pokemons.List>({
    isLoading: true,
    pokemons: {
      count: 0,
      next: '',
      previous: '',
      results: []
    }
  });

  const getImagesToPokemon = (pokemon: Types.IEntity.Pokemon) => {
    const pokedexNumber = parseInt(pokemon.url.replace(`${config.api.baseURL}/pokemon/`, '').replace('/', ''), 10);

    const pokemonList: Types.IEntity.PokemonList = {
      name: pokemon.name,
      url: pokemon.url,
      image: `${config.api.pokemonImagesURL}/${pokedexNumber}.png`,
      pokedexNumber
    };

    return pokemonList;
  };

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Pokemons.List();
        const pokemons = { ...data, results: data.results.map(pokemon => getImagesToPokemon(pokemon)) };

        setState({ pokemons, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' });
        setState({
          pokemons: {
            count: 0,
            next: '',
            previous: '',
            results: []
          },
          isLoading: false
        });
      }
    };

    request();
  }, []);
  return state;
};
