import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { Api, Mappers } from '../..';

export const useList = () => {
  const [state, setState] = useState({ isLoading: true, pokemons: [] });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Movie.List();
        const pokemons = (data || []).map(Mappers.Movie);

        setState({ pokemons, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' });
        setState({ pokemons: [], isLoading: false });
      }
    };

    request();
  }, []);
  return state;
};