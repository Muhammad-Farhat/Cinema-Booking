import { ROWS, SEAT_NUMBERS } from '../data/seatLayout.js'
import { SEAT_PRICES, formatPrice, getSeatType } from '../utils/pricing.js'
import '../styles/SeatGrid.css'

function SeatGrid({ occupiedSeats, selectedSeats, onToggleSeat }) {
  return (
    <div>
      {/* Scrolls sideways on very narrow phones instead of shrinking the seats too far */}
      <div className="seat-map">
        <div className="seat-screen">Screen</div>

        {ROWS.map((row) => (
          <div key={row} className="seat-row" role="group" aria-label={`Row ${row}`}>
            <span className="seat-row-label" aria-hidden="true">
              {row}
            </span>

            {SEAT_NUMBERS.map((number) => {
              const seatId = `${row}${number}`
              const seatType = getSeatType(seatId)
              const isOccupied = occupiedSeats.includes(seatId)
              const isSelected = selectedSeats.includes(seatId)

              let className = `seat seat-${seatType}`
              if (isOccupied) className += ' seat-occupied'
              if (isSelected) className += ' seat-selected'

              return (
                <button
                  key={seatId}
                  type="button"
                  className={className}
                  // "disabled" is what stops occupied seats from being clicked
                  disabled={isOccupied}
                  aria-pressed={isSelected}
                  aria-label={`Seat ${seatId}, ${seatType}, ${formatPrice(SEAT_PRICES[seatType])}${isOccupied ? ', occupied' : ''}`}
                  onClick={() => onToggleSeat(seatId)}
                >
                  {isOccupied ? '✕' : number}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      <ul className="seat-legend">
        <li>
          <span className="seat-swatch seat-standard" />
          Standard {formatPrice(SEAT_PRICES.standard)}
        </li>
        <li>
          <span className="seat-swatch seat-premium" />
          Premium {formatPrice(SEAT_PRICES.premium)}
        </li>
        <li>
          <span className="seat-swatch seat-selected" />
          Selected
        </li>
        <li>
          <span className="seat-swatch seat-occupied" />
          Occupied
        </li>
      </ul>
    </div>
  )
}

export default SeatGrid
