export default function Star({
  isFilled,
  onClick
}: {
  isFilled: boolean
  onClick: () => void;
}) {

  return (
    <img
      src={isFilled ? "/svg/star-filled.svg" : "/svg/star.svg" }
      className="card--favorite w-8"
      onClick={onClick}
    />
  )
}
