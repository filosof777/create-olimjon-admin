/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ROOT: string;
  readonly VITE_YANDEX_MAPS_API_KEY?: string;
  readonly REACT_APP_ENV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
