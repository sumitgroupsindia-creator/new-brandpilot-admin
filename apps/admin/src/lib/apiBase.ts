/**
 * Base URL for all API calls.
 *
 * Set `VITE_API_BASE_URL` when the backend uses a different public URL. The
 * production fallback matches the deployed BrandPilot API, while development
 * keeps using the Vite `/api` proxy.
 *
 *   VITE_API_BASE_URL=https://api.example.com
 *
 * Note: cross-origin requests require the backend's `WEB_APP_URL` to be set to
 * this app's origin, since that value drives its CORS `origin` allowlist.
 */
const raw = import.meta.env.VITE_API_BASE_URL?.trim();
const defaultBaseUrl = import.meta.env.PROD ? 'https://api2.sumitgroups.com' : '/api';

export const API_BASE_URL = raw ? raw.replace(/\/+$/, '') : defaultBaseUrl;

/** Build an absolute (or root-relative) URL for an API path. */
export function apiUrl(path: string): string {
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
