import { cinemas } from './cinemas.js'
import { movies } from './movies.js'
import { getNextSevenDays, hasStarted } from '../utils/dates.js'

// Mock schedule: every movie plays at these times on each day
const TIMES_BY_CINEMA = {
  downtown: ['13:00', '16:00', '19:30', '22:00'],
  riverside: ['12:30', '15:30', '18:45', '21:15'],
  northgate: ['14:00', '17:30', '20:30'],
}

// Showings that have already started today are left out
export function getAvailableTimes(cinemaId, date) {
  return TIMES_BY_CINEMA[cinemaId].filter((time) => !hasStarted(date, time))
}

// Each showing gets its own ID, e.g. "inception-downtown-2026-10-26-1930"
export function createShowtimeId(movieId, cinemaId, date, time) {
  return `${movieId}-${cinemaId}-${date}-${time.replace(':', '')}`
}

// Reads a showtime ID from the URL. Returns null if that showing can't be booked.
export function findShowtime(showtimeId) {
  const match = showtimeId.match(/^(.+)-([a-z]+)-(\d{4}-\d{2}-\d{2})-(\d{2})(\d{2})$/)

  if (!match) {
    return null
  }

  const [, movieId, cinemaId, date, hours, minutes] = match
  const time = `${hours}:${minutes}`
  const movie = movies.find((item) => item.id === movieId)
  const cinema = cinemas.find((item) => item.id === cinemaId)
  const isBookableDate = getNextSevenDays().some((day) => day.value === date)

  if (!movie || !cinema || !isBookableDate || !getAvailableTimes(cinemaId, date).includes(time)) {
    return null
  }

  return { id: showtimeId, movie, cinema, date, time }
}
