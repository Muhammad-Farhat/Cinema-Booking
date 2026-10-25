import { Link, NavLink } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          Cina<span className="navbar-logo-accent">verse</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="navbar-links">
            <li>
              {/* "end" makes this link active only on "/" itself, not on every page */}
              <NavLink to="/" end className="navbar-link">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-bookings" className="navbar-link">
                My Bookings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
