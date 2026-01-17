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
