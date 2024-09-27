import { useState } from "react"
import data from "../backend/imageData"
import ImageContent from "./ImageContent"

export default function Form() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "/imgs/meme.png"
  })

  const [memesData, setMemesData] = useState(data)

 //const [memeImg, setMemeImg] = useState("/imgs/meme.png")

  function getRandomUrl(): void {
      // const randomNum = Math.floor(Math.random() * data.data.memes.length)
      const randomNum = Math.floor(Math.random() * memesData.data.memes.length)

      //gets random url from data
      const memeUrl = memesData.data.memes[randomNum].url
      console.log(memeUrl)
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: memeUrl
      }))
  }

  return (
    <form className="mx-4">

      <div className="md:flex gap-4">
        <div className="w-[70vw] md:flex-col md:items-start flex flex-wrap justify-between items-center gap-1 my-2">
          <label className="w-28" htmlFor="top-text">Top Text</label>
          <input
            id="top-text" 
            className="border border-slate-500 focus:border-slate-500 rounded-md px-2 py-1 w-full" 
            type="text" 
            placeholder="Shut Up"
          />
        </div>
        <div className="w-[70vw] md:flex-col md:items-start flex flex-wrap justify-between items-center gap-1 my-2">
          <label className="w-28" htmlFor="bottom-text">Bottom Text</label>
          <input
            id="bottom-text"
            className="border border-slate-500 focus:border-slate-500 rounded-md px-2 py-1 w-full" 
            type="text" 
            placeholder="And Take my money" 
          />
        </div>
      </div>
      
      <button 
        className="bg-gradient-to-r from-[#672280] to-[#A626D3] mt-2 border rounded-md w-full py-1" 
        onClick={getRandomUrl}
        type="button"
      >
        <div className="flex gap-2 items-center justify-center">
          <div className="text-white">Get a new meme image</div>
          <img className="w-5" src="/imgs/image.png" />
        </div>
      </button>

      <ImageContent
        imgUrl={meme.randomImage}
      />
    </form>
  )
}
