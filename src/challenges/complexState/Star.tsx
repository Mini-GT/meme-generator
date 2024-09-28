export default function Star({
  isFilled,
  onClick
}: {
  isFilled: boolean
  onClick: () => void;
}) {

  return (
    <button 
      onClick={onClick}
      aria-label={isFilled ? "Mark as favorite" : "Unmark as favorite"}
      aria-pressed={isFilled}
    >
      <img
        src={isFilled ? "/svg/star-filled.svg" : "/svg/star.svg"}
        alt="star icon"
        className="card--favorite w-8"
      />
    </button>
    
  )
}
