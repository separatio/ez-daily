export default function ChoiceCard({ title, text }) {
  return (
    <div className="col mb-4">
      <div className="sml-card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text">{text}</div>
        </div>
      </div>
    </div>
  )
}
