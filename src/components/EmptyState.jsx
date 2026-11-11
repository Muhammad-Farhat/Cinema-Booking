import '../styles/EmptyState.css'

// "children" is whatever is placed between the tags, such as a button or link.
// Use isPageTitle when the empty state is the whole page, so the page still has an <h1>.
function EmptyState({ title, message, isPageTitle = false, children }) {
  return (
    <div className="empty-state">
      {isPageTitle ? <h1>{title}</h1> : <h2>{title}</h2>}
      <p>{message}</p>
      {children}
    </div>
  )
}

export default EmptyState
