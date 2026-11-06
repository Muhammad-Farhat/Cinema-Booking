// Turns a number of minutes into readable text, e.g. 148 → "2h 28m"
export function formatDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}h ${minutes}m`
}
