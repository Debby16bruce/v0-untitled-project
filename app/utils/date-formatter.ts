/**
 * Formats a Unix timestamp to a human-readable date
 * @param timestamp Unix timestamp in seconds
 * @returns Formatted date string
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/**
 * Formats a Unix timestamp to a day of the week
 * @param timestamp Unix timestamp in seconds
 * @returns Day of the week (e.g., "Mon")
 */
export function formatDay(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString("en-US", { weekday: "short" })
}

/**
 * Formats a Unix timestamp to a time string
 * @param timestamp Unix timestamp in seconds
 * @returns Formatted time string (e.g., "8:30 AM")
 */
export function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}
