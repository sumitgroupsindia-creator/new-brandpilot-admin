/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TENANT_SLUG?: string;
  /** Backend base URL. Unset = same-origin `/api`. */
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
