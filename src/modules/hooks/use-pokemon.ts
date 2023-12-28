import { useEffect, useState } from 'react';
import { getColorFromUrl } from 'utils/colors';

import { Api, Types } from 'modules';

interface usePokemonProps {
  pokemonName: string | undefined;
}

export const usePokemon = ({ pokemonName }: usePokemonProps) => {
  const [pokemon, setPokemon] = useState<Types.IEntity.DetailPokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const pokemonImage = pokemon?.sprites.other['official-artwork'].front_default;

  const getPokemonColor = async () => {
    if (pokemonImage) {
      const color = await getColorFromUrl(pokemonImage);

      if (color) setPokemon({ ...pokemon, color });
    }
  };

  const fetchPokemon = async () => {
    if (pokemonName) {
      setIsLoading(true);
      const { data } = await Api.Pokemons.Single(pokemonName);

      if (data) {
        setPokemon(data);
      }

      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (pokemonName) fetchPokemon();
  }, [pokemonName]);

  useEffect(() => {
    if (pokemon) {
      getPokemonColor();
    }
  }, [pokemon]);

  return { pokemon, isLoading };
};
