import { MemeTypes } from "./types"

type ImageContentProps = {
  imgUrl: string
  memeData: MemeTypes
}

export default function ImageContent({
  imgUrl,
  memeData
}: ImageContentProps) {
  // const [memeImg, setMemeImg] = useState("/imgs/meme.png")

  return (
    <div className="m-4 flex justify-center items-center">
      {
      //not showing any image if the url is empty
      imgUrl && <img className="w-3/4" src={imgUrl} alt="meme" />
      } 
      <h2 className="meme--text top-0">{memeData.topText}</h2>
      <h2 className="meme--text bottom-0">{memeData.bottomText}</h2>
    </div>
  )
}
