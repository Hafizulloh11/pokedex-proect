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
  const [nextUrl, setNextUrl] = useState<string | null>(`${config.api.baseURL}/pokemon`);
  const [prevUrl, setPrevUrl] = useState<string | null>(`${config.api.baseURL}/pokemon`);

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

  const request = async () => {
    try {
      const { data } = await Api.Pokemons.List(`${config.api.baseURL}/pokemon?limit=1000&offset=0`);
      // const { data: types } = await Api.Pokemons.Types();
      const pokemons: Types.IApi.Pokemon.List.Response = {
        ...data,
        results: [...state.pokemons.results, ...data.results.map((pokemon, idx) => getImagesToPokemon(pokemon))]
      };

      setState({ pokemons, isLoading: false });
      // setNextUrl(pokemons.next);
      // setPrevUrl(pokemons.previous);
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

  useEffect(() => {
    request();
  }, []);

  return { ...state };
};
