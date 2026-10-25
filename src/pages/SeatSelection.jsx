import { useParams } from 'react-router'

function SeatSelection() {
  const { showtimeId } = useParams()

  return (
    <section>
      <h1 className="page-title">Choose Your Seats</h1>
      <p className="page-subtitle">Showtime ID from the URL: {showtimeId}</p>
      <p className="page-subtitle">The interactive seat map will appear here in Phase 4.</p>
    </section>
  )
}

export default SeatSelection
