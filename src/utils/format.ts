export function formatExperience(years: number): string{
  if (years === 1) {
    return `1 year of experience`
  } else if (years < 1) {
    return `${years * 12} months of experience`
  } else {
    return `${years} years of experience`
  }
}
