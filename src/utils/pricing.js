import { PREMIUM_ROWS } from '../data/seatLayout.js'

export const SEAT_PRICES = { standard: 8, premium: 12 }

// The first character of a seat ID is its row, e.g. "A5" is in row "A"
export function getSeatType(seatId) {
  return PREMIUM_ROWS.includes(seatId[0]) ? 'premium' : 'standard'
}

export function calculateTotal(seatIds) {
  return seatIds.reduce((total, seatId) => total + SEAT_PRICES[getSeatType(seatId)], 0)
}

export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`
}
