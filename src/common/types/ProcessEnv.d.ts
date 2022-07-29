declare namespace NodeJS {
  export interface ProcessEnv {
    PG_HOST: string;
    PG_PORT: 5432;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    DATABASE_URL: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}
