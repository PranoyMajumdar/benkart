declare global {
    namespace NodeJS {
        interface ProcessEnv {
            JWT_SECRET: string;
            DATABASE_URI: string;
            PORT: number;
            NODE_ENV: 'production' | 'developement'
        }
    }
}
export {}
