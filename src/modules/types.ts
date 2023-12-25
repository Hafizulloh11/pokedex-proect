export namespace IEntity {
 export interface Pokemon {
  name: string;
  url: string;
 }

}

export namespace IApi {
 export namespace Pokemon {
  export namespace List {
   export interface Response {
     count: number;
     next: string | null;
     previous: string | null;
     results: IEntity.Pokemon[];
   }
  }
 }
}

export namespace IQuery {
  export namespace Pokemons {
    export interface List {
      isLoading: boolean;
      pokemons: IApi.Pokemon.List.Response;
    }
  }
}