import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import config from 'config';

import http from 'services/http';

import { Api, Types } from '..';

export const usePokemons = () => {
  const [state, setState] = useState<Types.IQuery.Pokemons.List>({
    isLoading: true,
    pokemons: []
  });
  const [selectedType, setSelectedType] = useState<Types.IEntity.pokemonTypes | null>(null);

  const indexedPokemonToListPokemon = (pokemon: Types.IEntity.Pokemon) => {
    const pokedexNumber = parseInt(pokemon.url.replace(`${config.api.baseURL}/pokemon/`, '').replace('/', ''), 10);

    const pokemonList: Types.IEntity.PokemonList = {
      name: pokemon.name,
      url: pokemon.url,
      image: `${config.api.pokemonImagesURL}/${pokedexNumber}.png`,
      pokedexNumber
    };

    return pokemonList;
  };

  const fetchPokemonsByType = async () => {
    try {
      const { data } = await http.get<Types.IApi.Pokemon.PokemonByType.Response>(selectedType?.url!);
      const listPokemons = data.pokemon.map(pokemon => indexedPokemonToListPokemon(pokemon.pokemon));

      setState({ pokemons: listPokemons, isLoading: false });
    } catch (err: any) {
      notifications.show({ message: err?.message, color: 'red' });
      setState({ pokemons: [], isLoading: false });
    }
  };

  const fetchPokemons = async () => {
    try {
      const { data } = await Api.Pokemons.List(`${config.api.baseURL}/pokemon?limit=1000&offset=0`);
      const pokemons: Types.IEntity.PokemonList[] = [...data.results.map((pokemon, idx) => indexedPokemonToListPokemon(pokemon))];

      setState({ pokemons, isLoading: false });
    } catch (err: any) {
      notifications.show({ message: err?.message, color: 'red' });
      setState({
        pokemons: [],
        isLoading: false
      });
    }
  };

  useEffect(() => {
    if (selectedType) {
      fetchPokemonsByType();
    } else {
      fetchPokemons();
    }
  }, [selectedType]);

  return { ...state, selectedType, setSelectedType };
};
