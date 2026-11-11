import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import EmptyState from '../components/EmptyState.jsx'
import PaymentForm from '../components/PaymentForm.jsx'
import SeatGrid from '../components/SeatGrid.jsx'
import { getOccupiedSeats } from '../data/occupiedSeats.js'
import { findShowtime } from '../data/showtimes.js'
import { getBookedSeats, saveBooking } from '../utils/bookingStorage.js'
import { formatDate } from '../utils/dates.js'
import { SEAT_PRICES, calculateTotal, formatPrice, getSeatType } from '../utils/pricing.js'
import '../styles/SeatSelection.css'

function SeatSelection() {
  const { showtimeId } = useParams()
  const navigate = useNavigate()
  const showtime = findShowtime(showtimeId)

  const [selectedSeats, setSelectedSeats] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  // Without this, the page would open at the scroll position of the previous page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [showtimeId])

  if (!showtime) {
    return (
      <EmptyState
        title="Showing not found"
        message="This showing doesn't exist or is no longer available."
        isPageTitle
      >
        <Link to="/" className="btn btn-primary">
          Back to movies
        </Link>
      </EmptyState>
    )
  }

  function handleToggleSeat(seatId) {
    setErrorMessage('')
    setSelectedSeats((currentSeats) =>
      currentSeats.includes(seatId)
        ? currentSeats.filter((seat) => seat !== seatId)
        : [...currentSeats, seatId],
    )
  }

  // "numeric" puts A2 before A10, which plain alphabetical sorting would not
  const sortedSeats = [...selectedSeats].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  )
  const premiumCount = sortedSeats.filter((seat) => getSeatType(seat) === 'premium').length
  const standardCount = sortedSeats.length - premiumCount
  const hasSeats = sortedSeats.length > 0

  // Mock occupied seats plus seats from bookings saved in this browser
  const occupiedSeats = [...getOccupiedSeats(showtime.id), ...getBookedSeats(showtime.id)]

  // Runs every time the payment form is submitted
  function handlePaymentSubmit(isPaymentValid) {
    if (!hasSeats) {
      setErrorMessage('Please select at least one seat.')
      return
    }

    // The payment form already shows its own error under each field
    if (!isPaymentValid) {
      return
    }

    // Saving can fail, e.g. if the browser blocks storage in a private window
    try {
      const booking = saveBooking({
        showtimeId: showtime.id,
        movieId: showtime.movie.id,
        movieTitle: showtime.movie.title,
        cinemaName: showtime.cinema.name,
        date: showtime.date,
        time: showtime.time,
        seats: sortedSeats,
        total: calculateTotal(sortedSeats),
      })
      navigate(`/confirmation/${booking.reference}`)
    } catch {
      setErrorMessage("Sorry, your booking couldn't be saved. Please try again.")
    }
  }

  return (
    <section>
      <Link to={`/movies/${showtime.movie.id}`} className="seat-selection-back">
        ← Back to {showtime.movie.title}
      </Link>

      <h1 className="page-title">Choose Your Seats</h1>
      <p className="page-subtitle">
        {showtime.movie.title} · {showtime.cinema.name} · {formatDate(showtime.date)} ·{' '}
        {showtime.time}
      </p>

      <div className="seat-selection">
        <SeatGrid
          occupiedSeats={occupiedSeats}
          selectedSeats={selectedSeats}
          onToggleSeat={handleToggleSeat}
        />

        <aside className="seat-summary" aria-label="Booking summary">
          <h2>Your seats</h2>

          {/* aria-live makes screen readers announce the seats and total when they change */}
          <div aria-live="polite">
            {hasSeats ? (
              <>
                <p>{sortedSeats.join(', ')}</p>
                {standardCount > 0 && (
                  <p className="seat-summary-line">
                    <span>Standard × {standardCount}</span>
                    <span>{formatPrice(standardCount * SEAT_PRICES.standard)}</span>
                  </p>
                )}
                {premiumCount > 0 && (
                  <p className="seat-summary-line">
                    <span>Premium × {premiumCount}</span>
                    <span>{formatPrice(premiumCount * SEAT_PRICES.premium)}</span>
                  </p>
                )}
              </>
            ) : (
              <p className="page-subtitle">No seats selected yet.</p>
            )}

            <p className="seat-summary-line seat-summary-total">
              <span>Total</span>
              <span>{formatPrice(calculateTotal(sortedSeats))}</span>
            </p>
          </div>

          <PaymentForm total={calculateTotal(sortedSeats)} onSubmit={handlePaymentSubmit} />

          {errorMessage && (
            <p className="seat-summary-error" role="alert">
              {errorMessage}
            </p>
          )}
        </aside>
      </div>
    </section>
  )
}

export default SeatSelection
