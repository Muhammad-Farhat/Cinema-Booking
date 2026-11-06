import { Link } from 'react-router'
import MoviePoster from './MoviePoster.jsx'
import { formatDuration } from '../utils/formatDuration.js'
import '../styles/MovieCard.css'

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card">
      <MoviePoster src={movie.poster} title={movie.title} />

      <div className="movie-card-body">
        <h2 className="movie-card-title">{movie.title}</h2>
        <p className="movie-card-genres">{movie.genres.join(' · ')}</p>
        <p className="movie-card-meta">
          <span>
            <span className="movie-card-star" aria-hidden="true">★</span>
            <span className="visually-hidden">Audience score </span>
            {movie.score.toFixed(1)}
          </span>
          <span>{formatDuration(movie.durationMinutes)}</span>
        </p>
      </div>
    </Link>
  )
}

export default MovieCard
