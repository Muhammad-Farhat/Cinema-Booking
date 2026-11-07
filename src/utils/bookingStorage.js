// The only file that knows bookings are kept in localStorage.
// Pages just call these functions, so a backend can later replace the code
// inside them with API calls without changing the pages much.
import { generateBookingReference } from './bookingReference.js'

const STORAGE_KEY = 'cinaverse-bookings'

export function getBookings() {
  // localStorage only stores text, so the list is saved as JSON and parsed back.
  // If the saved text is missing or damaged, start with an empty list.
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function saveBookings(bookings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
}

export function getBookingByReference(reference) {
  return getBookings().find((booking) => booking.reference === reference)
}

// Adds the reference and creation time, saves the booking, and returns it
export function saveBooking(details) {
  const bookings = getBookings()

  const booking = {
    ...details,
    reference: generateBookingReference(bookings.map((item) => item.reference)),
    createdAt: new Date().toISOString(),
  }

  saveBookings([...bookings, booking])
  return booking
}

export function cancelBooking(reference) {
  saveBookings(getBookings().filter((booking) => booking.reference !== reference))
}

// Every seat already booked for one showing, so the seat map can mark them occupied
export function getBookedSeats(showtimeId) {
  return getBookings()
    .filter((booking) => booking.showtimeId === showtimeId)
    .flatMap((booking) => booking.seats)
}
