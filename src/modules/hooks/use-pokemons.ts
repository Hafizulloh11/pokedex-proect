import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

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

  useEffect(() => {
    const request = async () => {
      try {
        const { data: pokemons } = await Api.Pokemons.List();

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
  console.log(state.pokemons)
  return state;
};
