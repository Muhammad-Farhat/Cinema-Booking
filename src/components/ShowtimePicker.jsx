import { useState } from 'react'
import { useNavigate } from 'react-router'
import { cinemas } from '../data/cinemas.js'
import { createShowtimeId, getAvailableTimes } from '../data/showtimes.js'
import { getNextSevenDays } from '../utils/dates.js'
import '../styles/ShowtimePicker.css'

function ShowtimePicker({ movieId }) {
  const navigate = useNavigate()
  const days = getNextSevenDays()

  const [cinemaId, setCinemaId] = useState(cinemas[0].id)
  const [date, setDate] = useState(days[0].value)
  const [time, setTime] = useState('')

  const availableTimes = getAvailableTimes(cinemaId, date)

  // Times differ per cinema and day, so a new choice clears the selected time
  function handleCinemaChange(event) {
    setCinemaId(event.target.value)
    setTime('')
  }

  function handleDateChange(newDate) {
    setDate(newDate)
    setTime('')
  }

  function handleChooseSeats() {
    navigate(`/showtimes/${createShowtimeId(movieId, cinemaId, date, time)}/seats`)
  }

  return (
    <div className="showtime-picker">
      <h2>Book tickets</h2>

      <label htmlFor="cinema-select" className="showtime-picker-label">
        Cinema
      </label>
      <select
        id="cinema-select"
        className="showtime-picker-select"
        value={cinemaId}
        onChange={handleCinemaChange}
      >
        {cinemas.map((cinema) => (
          <option key={cinema.id} value={cinema.id}>
            {cinema.name}
          </option>
        ))}
      </select>

      <fieldset className="showtime-picker-group">
        <legend className="showtime-picker-label">Date</legend>
        <div className="showtime-picker-options">
          {days.map((day) => (
            <button
              key={day.value}
              type="button"
              className={day.value === date ? 'showtime-option active' : 'showtime-option'}
              aria-pressed={day.value === date}
              onClick={() => handleDateChange(day.value)}
            >
              {day.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="showtime-picker-group">
        <legend className="showtime-picker-label">Time</legend>
        {availableTimes.length > 0 ? (
          <div className="showtime-picker-options">
            {availableTimes.map((availableTime) => (
              <button
                key={availableTime}
                type="button"
                className={availableTime === time ? 'showtime-option active' : 'showtime-option'}
                aria-pressed={availableTime === time}
                onClick={() => setTime(availableTime)}
              >
                {availableTime}
              </button>
            ))}
          </div>
        ) : (
          <p className="page-subtitle">No more showings today. Please choose another date.</p>
        )}
      </fieldset>

      <button
        type="button"
        className="btn btn-primary"
        disabled={!time}
        onClick={handleChooseSeats}
      >
        Choose seats
      </button>
    </div>
  )
}

export default ShowtimePicker
