/**
 *  assets.ts - Static path utility
 *
 * Resolves asset paths relative to Vite's BASE_URL so that static files
 * load correctly regardless of deploymeny location.  Necessary when the app
 * is hosted at a non-root path (e.g. /portfolio/ on GitHub Pages) since
 * bare paths like /img/phote.jpg would resolve from the domain root instead
 *
 * @param path  - Asset path, with or without or without the leading slash
 * @returns     - Fully resolved path prefixed with BASE_URL, or empty string if no path provided
 *
 * @example
 * getAssetPath('/img/photo.jpg')  // → '/portfolio/img/photo.jpg' in prod
 * getAssetPath('img/photo.jpg')   // → '/portfolio/img/photo.jpg' in prod
 * getAssetPath('/img/photo.jpg')  // → '/img/photo.jpg' in dev
 */
export function getAssetPath(path: string): string {
  if (!path) return ''
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${cleanPath}`
}
