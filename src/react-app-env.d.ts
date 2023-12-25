/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
    readonly REACT_APP_BASE_URL: string
    readonly REACT_APP_TOKENS_KEY: string
  }
}
