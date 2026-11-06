import '../styles/GenreFilter.css'

function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="genre-filter" role="group" aria-label="Filter movies by genre">
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          className={genre === selectedGenre ? 'genre-button active' : 'genre-button'}
          // aria-pressed tells screen readers which genre is currently selected
          aria-pressed={genre === selectedGenre}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default GenreFilter
