/**
 * Base URL for all API calls.
 *
 * Leave `VITE_API_BASE_URL` unset when the API is served from the same origin
 * as this app (the Vite dev proxy and the nginx config both map `/api` to the
 * backend). Set it to the backend's public URL when they are deployed to
 * separate hosts, e.g.
 *
 *   VITE_API_BASE_URL=https://api.example.com
 *
 * Note: cross-origin requests require the backend's `WEB_APP_URL` to be set to
 * this app's origin, since that value drives its CORS `origin` allowlist.
 */
const raw = import.meta.env.VITE_API_BASE_URL?.trim();

export const API_BASE_URL = raw ? raw.replace(/\/+$/, '') : '/api';

/** Build an absolute (or root-relative) URL for an API path. */
export function apiUrl(path: string): string {
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
