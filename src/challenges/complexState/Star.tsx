export default function Star({
  isFilled
}: {
  isFilled: boolean
}) {

  function toggleFavorite(){
    
  }
  return (
    <img
      src={isFilled ? "/svg/star-filled.svg" : "/svg/star.svg" }
      className="card--favorite w-8"
      onClick={toggleFavorite}
    />
  )
}
