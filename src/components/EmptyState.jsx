import '../styles/EmptyState.css'

// "children" is whatever is placed between the tags, such as a button or link
function EmptyState({ title, message, children }) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <p>{message}</p>
      {children}
    </div>
  )
}

export default EmptyState
