import { useParams } from 'react-router'

function MovieDetails() {
  // useParams reads the ":movieId" part of the URL, e.g. "/movies/inception" → "inception"
  const { movieId } = useParams()

  return (
    <section>
      <h1 className="page-title">Movie Details</h1>
      <p className="page-subtitle">Movie ID from the URL: {movieId}</p>
      <p className="page-subtitle">Movie information (Phase 3) and showtime selection (Phase 4) will appear here.</p>
    </section>
  )
}

export default MovieDetails
