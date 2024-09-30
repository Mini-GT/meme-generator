// type BoxProps = {
//   on: boolean
//   styles: string
// }

export default function Box({
  on,
} : {
  on: boolean
}) {

  const styles = {
    backgroundColor: on ? "#222222" : "none"
  }

  return (
    <div 
      className="border border-black w-4 p-5 m-1"
      style={styles}
    />
  )
}
