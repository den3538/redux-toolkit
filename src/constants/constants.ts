export const DEFAULT_BASE_URL = 'https://fakestoreapi.com';
export const BASE_URL: string =
  import.meta.env.VITE_BASE_URL ?? DEFAULT_BASE_URL;
