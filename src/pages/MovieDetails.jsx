import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import EmptyState from '../components/EmptyState.jsx'
import MoviePoster from '../components/MoviePoster.jsx'
import { movies } from '../data/movies.js'
import { formatDuration } from '../utils/formatDuration.js'
import '../styles/MovieDetails.css'

function MovieDetails() {
  // useParams reads the ":movieId" part of the URL, e.g. "/movies/inception" → "inception"
  const { movieId } = useParams()
  const movie = movies.find((item) => item.id === movieId)

  // Without this, the page would open at the scroll position of the movie grid
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [movieId])

  if (!movie) {
    return (
      <EmptyState title="Movie not found" message="We couldn't find the movie you're looking for.">
        <Link to="/" className="btn btn-primary">
          Back to movies
        </Link>
      </EmptyState>
    )
  }

  return (
    <section>
      <Link to="/" className="movie-details-back">
        ← Back to movies
      </Link>

      <div className="movie-details">
        <div className="movie-details-poster">
          <MoviePoster key={movie.id} src={movie.poster} title={movie.title} />
        </div>

        <div>
          <h1 className="page-title">{movie.title}</h1>

          <p className="movie-details-meta">
            <span>
              <span className="movie-details-star" aria-hidden="true">★</span>
              <span className="visually-hidden">Audience score </span>
              {movie.score.toFixed(1)}
            </span>
            <span>{movie.year}</span>
            <span>{formatDuration(movie.durationMinutes)}</span>
          </p>

          <ul className="movie-details-genres" aria-label="Genres">
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>

          <p>{movie.overview}</p>
          <p className="page-subtitle">Showtime selection will appear here in Phase 4.</p>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails
