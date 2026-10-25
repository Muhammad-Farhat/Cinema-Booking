import { Navigate, Route, Routes } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import SeatSelection from './pages/SeatSelection.jsx'
import Confirmation from './pages/Confirmation.jsx'
import MyBookings from './pages/MyBookings.jsx'

function App() {
  return (
    <div className="app">
      {/* Lets keyboard users jump straight past the navbar */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="main-content" tabIndex="-1">
        {/* Only the Route whose path matches the current URL is shown */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/showtimes/:showtimeId/seats" element={<SeatSelection />} />
          <Route path="/confirmation/:reference" element={<Confirmation />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          {/* Any unknown URL sends the user back to the home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

