// Shared layout: sticky heading on the left, content on the right (stacked on mobile).
export default function Section({ id, title, note, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section-grid">
        <div className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {note && <p>{note}</p>}
        </div>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
