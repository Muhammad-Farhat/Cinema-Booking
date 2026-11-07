import { formatDate } from '../utils/dates.js'
import { formatPrice } from '../utils/pricing.js'
import '../styles/BookingDetails.css'

function BookingDetails({ booking }) {
  return (
    <dl className="booking-details">
      <dt>Movie</dt>
      <dd>{booking.movieTitle}</dd>

      <dt>Cinema</dt>
      <dd>{booking.cinemaName}</dd>

      <dt>Date</dt>
      <dd>{formatDate(booking.date)}</dd>

      <dt>Time</dt>
      <dd>{booking.time}</dd>

      <dt>Seats</dt>
      <dd>{booking.seats.join(', ')}</dd>

      <dt>Total</dt>
      <dd>{formatPrice(booking.total)}</dd>
    </dl>
  )
}

export default BookingDetails
