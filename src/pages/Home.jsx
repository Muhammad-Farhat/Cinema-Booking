import { useState } from 'react'
import EmptyState from '../components/EmptyState.jsx'
import GenreFilter from '../components/GenreFilter.jsx'
import MovieCard from '../components/MovieCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { genres, movies } from '../data/movies.js'
import '../styles/Home.css'

const ALL_GENRES = 'All'

function Home() {
  const [searchText, setSearchText] = useState('')
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES)

  // Recalculated on every render, so the list always matches the search and genre
  const search = searchText.trim().toLowerCase()
  const visibleMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search)
    const matchesGenre = selectedGenre === ALL_GENRES || movie.genres.includes(selectedGenre)
    return matchesSearch && matchesGenre
  })

  function clearFilters() {
    setSearchText('')
    setSelectedGenre(ALL_GENRES)
  }

  return (
    <section>
      <h1 className="page-title">Now Showing</h1>
      <p className="page-subtitle">Find a movie and book your seats.</p>

      <div className="home-filters">
        <SearchBar value={searchText} onChange={setSearchText} />
        <GenreFilter
          genres={[ALL_GENRES, ...genres]}
          selectedGenre={selectedGenre}
          onSelect={setSelectedGenre}
        />
      </div>

      {/* aria-live makes screen readers announce the count when it changes */}
      <p className="home-count" aria-live="polite">
        Showing {visibleMovies.length} of {movies.length} movies
      </p>

      {visibleMovies.length > 0 ? (
        <ul className="movie-grid">
          {visibleMovies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState title="No movies found" message="Try a different title or genre.">
          <button type="button" className="btn btn-primary" onClick={clearFilters}>
            Clear search and filters
          </button>
        </EmptyState>
      )}
    </section>
  )
}

export default Home
