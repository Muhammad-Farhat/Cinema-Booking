import { useState } from 'react'
import '../styles/MoviePoster.css'

function MoviePoster({ src, title }) {
  const [imageFailed, setImageFailed] = useState(false)

  // If the image file is missing, show the title instead of a broken image icon
  if (imageFailed) {
    return (
      <div className="movie-poster movie-poster-fallback" role="img" aria-label={`${title} poster`}>
        <span aria-hidden="true">{title}</span>
      </div>
    )
  }

  return (
    <img
      className="movie-poster"
      src={src}
      alt={`${title} poster`}
      onError={() => setImageFailed(true)}
    />
  )
}

export default MoviePoster
