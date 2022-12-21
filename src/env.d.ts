/// <reference types="@astrojs/image/client" />
interface ImportMetaEnv {
    readonly PUBLIC_UMAMI: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}