import type { ImageCollection } from '@/types/data.models'

export function createImageCollection<T extends ImageCollection>(images: T): T {
  return images
}
