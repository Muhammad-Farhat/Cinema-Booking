import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import BookingDetails from '../components/BookingDetails.jsx'
import EmptyState from '../components/EmptyState.jsx'
import MoviePoster from '../components/MoviePoster.jsx'
import { movies } from '../data/movies.js'
import { getBookingByReference } from '../utils/bookingStorage.js'
import '../styles/Confirmation.css'

function Confirmation() {
  const { reference } = useParams()
  const booking = getBookingByReference(reference)

  // Without this, the page would open at the scroll position of the seat page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [reference])

  if (!booking) {
    return (
      <EmptyState
        title="Booking not found"
        message="We couldn't find a booking with this reference. It may have been cancelled."
      >
        <Link to="/my-bookings" className="btn btn-primary">
          View my bookings
        </Link>
      </EmptyState>
    )
  }

  const movie = movies.find((item) => item.id === booking.movieId)

  return (
    <section className="confirmation">
      <p className="confirmation-badge">✓ Booking confirmed</p>
      <h1 className="page-title">Enjoy the movie!</h1>
      <p className="page-subtitle">Show your booking reference at the cinema.</p>

      <div className="confirmation-ticket">
        {movie && (
          <div className="confirmation-poster">
            <MoviePoster src={movie.poster} title={movie.title} />
          </div>
        )}

        <div>
          <p className="confirmation-reference-label">Booking reference</p>
          <p className="confirmation-reference">{booking.reference}</p>
          <BookingDetails booking={booking} />
        </div>
      </div>

      <div className="confirmation-actions">
        <Link to="/my-bookings" className="btn btn-primary">
          View my bookings
        </Link>
        <Link to="/" className="btn btn-secondary">
          Back to movies
        </Link>
      </div>
    </section>
  )
}

export default Confirmation
