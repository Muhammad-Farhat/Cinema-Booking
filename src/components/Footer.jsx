import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {currentYear} Cinaverse · University project. Demo only, no real payments.</p>
        {/* Attribution required by TMDB's terms of use for the movie posters and data */}
        <p className="footer-attribution">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </footer>
  )
}

export default Footer
