

export default function Count({
  number
}: 
{
  number: number
}) {
  return (
    <div className="counter--count">
        <h1>{number}</h1>
    </div>
  )
}
