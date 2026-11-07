import { ROWS, SEAT_NUMBERS } from './seatLayout.js'

const allSeats = ROWS.flatMap((row) => SEAT_NUMBERS.map((number) => `${row}${number}`))

// Mock data: turns the showtime ID into a number, then uses it to pick about 20% of
// the seats. The same showing always gets the same seats, and each showing can differ.
export function getOccupiedSeats(showtimeId) {
  let seed = 0

  for (const character of showtimeId) {
    seed = (seed * 31 + character.charCodeAt(0)) % 1000
  }

  return allSeats.filter((seat, index) => (seed + index * 37) % 100 < 20)
}
