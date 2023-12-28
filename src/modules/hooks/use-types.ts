import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { Api, Types } from '..';

export const useTypes = () => {
  const [types, setTypes] = useState<Types.IEntity.pokemonTypes[]>([]);

  const request = async () => {
    try {
      const {
        data: { results }
      } = await Api.Pokemons.Types();

      setTypes(results);
    } catch (err: any) {
      notifications.show({ message: err?.message, color: 'red' });
      setTypes([]);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return types;
};
