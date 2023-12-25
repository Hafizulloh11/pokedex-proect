import http from 'services/http';

// import { IApi } from './types';

export const Movie = {
  List: () => http.get('/movie/'),
  Single: () => http.get(`/movie/detail/`)
};
