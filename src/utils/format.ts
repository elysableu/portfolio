export function formatExperience(years: number): string{
  if (years === 1) {
    return `1 year of experience`
  } else if (years < 1) {
    return `${years * 12} months of experience`
  } else {
    return `${years} years of experience`
  }
}

export function formatDate(date: string | null): string {
  if (date === null) {
    return 'Present'
  }

  const [year, month] = date.split('-')

  if (!year || !month) {
    return date
  }

  const dateObj = new Date(parseInt(year), parseInt(month) - 1)

  return dateObj.toLocaleDateString('en-us', {
    month: 'short',
    year: 'numeric'
  })
}

export function formatDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate + '-01')
  const end = endDate ? new Date(endDate + '-01') : new Date()

  const difference = end.getTime() - start.getTime()

  const diffInWeeks = Math.floor(difference / (1000* 60 * 60 * 24 * 7))

  return `${diffInWeeks} Weeks`
}
