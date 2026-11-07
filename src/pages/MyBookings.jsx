import { useState } from 'react'
import { Link } from 'react-router'
import BookingDetails from '../components/BookingDetails.jsx'
import EmptyState from '../components/EmptyState.jsx'
import MoviePoster from '../components/MoviePoster.jsx'
import { movies } from '../data/movies.js'
import { cancelBooking, getBookings } from '../utils/bookingStorage.js'
import '../styles/MyBookings.css'

function MyBookings() {
  // Passing the function (not calling it) means the bookings are only read once
  const [bookings, setBookings] = useState(getBookings)

  function handleCancel(booking) {
    const confirmed = window.confirm(
      `Cancel booking ${booking.reference} for ${booking.movieTitle}? This can't be undone.`,
    )

    if (confirmed) {
      cancelBooking(booking.reference)
      setBookings(getBookings())
    }
  }

  // Newest bookings first
  const sortedBookings = [...bookings].sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  return (
    <section>
      <h1 className="page-title">My Bookings</h1>

      {sortedBookings.length === 0 ? (
        <EmptyState title="No bookings yet" message="When you book tickets, they will appear here.">
          <Link to="/" className="btn btn-primary">
            Browse movies
          </Link>
        </EmptyState>
      ) : (
        <ul className="booking-list">
          {sortedBookings.map((booking) => {
            const movie = movies.find((item) => item.id === booking.movieId)

            return (
              <li key={booking.reference} className="booking-card">
                {movie && (
                  <div className="booking-card-poster">
                    <MoviePoster src={movie.poster} title={movie.title} />
                  </div>
                )}

                <div className="booking-card-body">
                  <p className="booking-card-reference">{booking.reference}</p>
                  <BookingDetails booking={booking} />

                  <div className="booking-card-actions">
                    <Link to={`/confirmation/${booking.reference}`} className="btn btn-secondary">
                      View
                    </Link>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleCancel(booking)}
                    >
                      Cancel booking
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default MyBookings
