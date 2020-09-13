declare global {
  interface Window {
    _HOME_SITE_ROOT: string;
  }
}

// export const BASE_PATH = "http://localhost:8001";
export const BASE_PATH = window._HOME_SITE_ROOT;
