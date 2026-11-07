// Builds "YYYY-MM-DD" from the local date. toISOString() is avoided because it uses
// UTC, which can give the wrong day late in the evening or early in the morning.
function toDateValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Turns "2026-10-26" into readable text, e.g. "Mon, 26 Oct"
export function formatDate(dateValue) {
  return new Date(`${dateValue}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

// Today and the following six days, so past dates can never be selected
export function getNextSevenDays() {
  const days = []

  for (let offset = 0; offset < 7; offset++) {
    const date = new Date()
    date.setDate(date.getDate() + offset)

    const value = toDateValue(date)
    days.push({ value, label: offset === 0 ? 'Today' : formatDate(value) })
  }

  return days
}

export function hasStarted(dateValue, time) {
  return new Date(`${dateValue}T${time}:00`) <= new Date()
}
