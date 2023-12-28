export namespace IEntity {
  export interface Pokemon {
    name: string;
    url: string;
  }
  export interface PokemonList {
    name: string;
    url: string;
    image: string;
    pokedexNumber: number;
  }
  export interface PokemonAbility {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  export interface PokemonType {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  export interface DetailPokemon {
    id: number;
    name: string;
    types: PokemonType[];
    weight: number;
    height: number;
    abilities: PokemonAbility[];
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    stats: PokemonStat[];
    color: string | null;
  }
  export interface pokemonTypes {
    name: string;
    url: string;
  }
  export interface IndexedPokemonByType {
    pokemon: Pokemon;
    slot: string;
  }
}

export namespace IApi {
  export namespace Pokemon {
    export namespace List {
      export interface Response {
        count: number;
        next: string | null;
        previous: string | null;
        results: IEntity.PokemonList[];
      }
    }
    export namespace Types {
      export interface Response {
        count: number;
        next: string | null;
        previous: string | null;
        results: IEntity.pokemonTypes[];
      }
    }
    export namespace PokemonByType {
      export interface Response {
        id: number;
        pokemon: IEntity.IndexedPokemonByType[]
      }
    }
  }
}

export namespace IQuery {
  export namespace Pokemons {
    export interface List {
      isLoading: boolean;
      pokemons: IEntity.PokemonList[];
    }
  }
}
