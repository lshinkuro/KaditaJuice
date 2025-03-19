/// <reference types="vite/client" />

interface ImportMetaEnv {
    APP_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
