import { useParams } from 'react-router'

function Confirmation() {
  const { reference } = useParams()

  return (
    <section>
      <h1 className="page-title">Booking Confirmation</h1>
      <p className="page-subtitle">Booking reference from the URL: {reference}</p>
      <p className="page-subtitle">The booking summary will appear here in Phase 5.</p>
    </section>
  )
}

export default Confirmation
