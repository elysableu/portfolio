import type { Personal, RadialItem, RadialConfig, RadialItemWithPosition } from '@/types/data.models'

const iconMap: Record<string, string> = {
  'github': '/img/radial/GitHub_Logo.svg',
  'linkedin': '/img/radial/LinkedIn_Logo.svg',
  'email': '/img/radial/Mail_Icon.svg',
  'phone': '/img/radial/Call_Icon.svg',
  'resume': '/img/radial/Reader_Icon.svg'
}

export function extractRadialItems(data: Personal): RadialItem[] {
  const radialItems: RadialItem[] = []


  if (data) {
    radialItems.push(...extractContacts(data), ...extractLinks(data), ...extractResume(data))
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

export function extractResume(data: Personal): RadialItem[] {
  const resumeData: RadialItem[] = []

  if (data.resume) {
    resumeData.push(formatRadialItems('resume', 'resume', data.resume))
  }

  return resumeData
}

export function formatRadialItems(
  type: 'contact' | 'link' | 'resume',
  label: string,
  item: string
): RadialItem {
  const iconSrc = iconMap[label.toLowerCase()] || 'Link'

  if (type === "contact") {
    return {
      label: label,
      type: type,
      contact: item,
      icon: iconSrc
    }
  } else if (type === "resume") {
    return {
      label: label,
      type: type,
      resume: item,
      icon: iconSrc
    }
  } else {
    return {
      label: label,
      type: type,
      link: item,
      icon: iconSrc
    }
  }
}

export function calculateRadialPostions(
  items: RadialItem[],
  config: RadialConfig
): RadialItemWithPosition[] {
  const { headshotRadius, orbitGap, startAngle, endAngle } = config
  const orbitRadius = headshotRadius + orbitGap
  const totalItems = items.length
  const angleRange = endAngle - startAngle

  return items.map((item, index) => {
    const angle = startAngle + (angleRange / (totalItems - 1)) * index
    const radians = (angle * Math.PI) / 180

    const x = orbitRadius * Math.sin(radians)
    const y = -orbitRadius * Math.cos(radians)

    const rotation = angle + 90

    return {
      ...item,
      x,
      y,
      rotation
    }
  })
}
