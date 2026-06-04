/**
 *  formatters.ts - Display formatting utilities
 *
 *  Pure functions for converting raw data values into humna-readable strings.
 *  Used across experience, education, and project components
 *
 */

/**
 *  Formats a years-of-experience number into a readable string.
 *  Handles sub-year values by converting to months
 *  @example
 *  formatExperience(3)    // → '3 years of experience'
 *  formatExperience(1)    // → '1 year of experience'
 *  formatExperience(0.5)  // → '6 months of experience'
 */
export function formatExperience(years: number): string{
  if (years === 1) {
    return `1 year of experience`
  } else if (years < 1) {
    return `${years * 12} months of experience`
  } else {
    return `${years} years of experience`
  }
}

/**
 *  Formats a YYYY-MM date string into a short human-readable date.
 *  Returns 'Present' for null values (i.e. current roles or ongoing projects)
 *  Falls back to the raw string if the format is unexpected.
 *
 *  @example
 *  formatDate('2023-06')  // → 'Jun 2023'
 *  formatDate(null)       // → 'Present'
 *  formatDate('2023')     // → '2023' (fallback, missing month)
 */
export function formatDate(date: string | null): string {
  if (date === null) {
    return 'Present'
  }

  const [year, month] = date.split('-')

  if (!year || !month) {
    return date // fallback for unexpected formats
  }

  // month is parsed as 1-indexed, so subtract 1 for the Date constructor
  const dateObj = new Date(parseInt(year), parseInt(month) - 1)

  return dateObj.toLocaleDateString('en-us', {
    month: 'short',
    year: 'numeric'
  })
}

/**
 *  Calculates the duration between two YYYY-MM dates and returns it in weeks.
 *  Uses the current date if endDate is null (i.e. ongoing).
 *
 *  Note: appends '-01' to input dates to satisfy the Date constructor,
 *  since input strings are YYYY-MM rather than full ISO dates.
 *
 *  @example
 *  formatDuration('2023-01', '2023-07')  // → '26 Weeks'
 *  formatDuration('2023-01', null)       // → weeks from Jan 2023 to today
 */
export function formatDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate + '-01')
  const end = endDate ? new Date(endDate + '-01') : new Date() // null = ongoing, use today

  const difference = end.getTime() - start.getTime()

  // converts milliseconds => weeks
  const diffInWeeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))

  return `${diffInWeeks} Weeks`
}
