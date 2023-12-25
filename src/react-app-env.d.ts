/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly REACT_APP_BASE_URL: string;
    readonly REACT_APP_POKEMON_IMAGES_URL: string;
  }
}
