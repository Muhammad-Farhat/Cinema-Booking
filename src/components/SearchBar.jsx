import '../styles/SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar" role="search">
      {/* Screen readers need a label even though it is hidden on screen */}
      <label htmlFor="movie-search" className="visually-hidden">
        Search movies by title
      </label>
      <input
        id="movie-search"
        className="search-bar-input"
        type="search"
        placeholder="Search movies by title..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
