import config from 'config';

import http from 'services/http';

import { Types } from 'modules';

export const Pokemons = {
  List: (nextUrl: string | null) => http.get<Types.IApi.Pokemon.List.Response>(`${nextUrl}`),
  Single: (pokemonName: string | undefined) => http.get<Types.IEntity.DetailPokemon>(`${config.api.baseURL}/pokemon/${pokemonName}`),
};
