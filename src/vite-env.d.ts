interface ImportMetaEnv {
  readonly VITE_CONTACT_API_URL: string;
  readonly VITE_CONTACT_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
