import { Card, Table } from '@mantine/core';

import { Types } from 'modules';

interface PocemonStatsProps {
  pokemon: Types.IEntity.DetailPokemon;
}

const PocemonStats = ({ pokemon }: PocemonStatsProps) => (
    <Card p={0} shadow='xl'>
      <Table fontSize="md" style={{ borderRadius: '6px' }}>
        <thead>
          <tr>
            {pokemon.stats.map(stat => (
              <th key={stat.stat.name}>{stat.stat.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {pokemon.stats.map(stat => (
              <td key={stat.stat.name}>{stat.base_stat}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Card>
  );

export default PocemonStats;
