// import { useState } from "react"

type ImageContentProps = {
  imgUrl: string
}

export default function ImageContent({imgUrl}: ImageContentProps) {
  // const [memeImg, setMemeImg] = useState("/imgs/meme.png")

  return (
    <div className="m-4 flex justify-center items-center">
      <img className="w-3/4" src={imgUrl} alt="meme" />
    </div>
  )
}
