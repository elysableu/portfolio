import type { TickerProjectType, TickerImageType } from "@/types/data.models";

export function isTickerProject(item: any): item is TickerProjectType {
  return 'url' in item && 'title' in item && 'thumbnail' in item
}

export function isTickerImage(item: any): item is TickerImageType {
  return 'src' in item && 'alt' in item
}
