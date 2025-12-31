import type { Personal, RadialItem } from '@/types/data.models'

export function extractRadialItems(data: Personal): RadialItem[] {
  const radialItems: RadialItem[] = []

  if (data) {
    radialItems.push(...extractContacts(data), ...extractLinks(data))
  }

  return radialItems
}

export function extractContacts(data: Personal): RadialItem[] {
  const contactData: RadialItem[] = []

  if (data.phone) {
    contactData.push(formatRadialItems('contact', 'phone', data.phone))
  }

  if (data.email) {
    contactData.push(formatRadialItems('contact', 'email', data.email))
  }

  return contactData
}

export function extractLinks(data: Personal): RadialItem[] {
  const linksData: RadialItem[] = []

  if (data.links) {
   Object.entries(data.links).forEach(([key, link]) => {
    linksData.push(formatRadialItems("link", key, link))
   })
  }

  return linksData
}

export function formatRadialItems(
  type: 'contact' | 'link',
  label: string,
  item: string
): RadialItem {

  if (type === "contact") {
    return {
      label: label,
      type: type,
      contact: item
    }
  } else {
    return {
      label: label,
      type: type,
      link: item
    }
  }
}
