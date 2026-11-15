import { Link } from 'react-router'
import { createShowtimeId } from '../data/showtimes.js'
import { getNextSevenDays } from '../utils/dates.js'

function Navbar() {
  const tomorrow = getNextSevenDays()[1].value
  const seatsLink = `/showtimes/${createShowtimeId('inception', 'downtown', tomorrow, '19:30')}/seats`

  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/movies/inception">Movie Details</Link> |{' '}
      <Link to={seatsLink}>Seat Selection</Link> |{' '}
      <Link to="/confirmation/example">Confirmation</Link> |{' '}
      <Link to="/my-bookings">My Bookings</Link>
    </nav>
  )
}

export default Navbar
