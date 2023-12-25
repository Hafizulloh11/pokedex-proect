import http from 'services/http';

import { Types } from 'modules';

export const Pokemons = {
  List: () => http.get<Types.IApi.Pokemon.List.Response>('/pokemon'),
  Single: () => http.get(`/pokemon/`)
};
