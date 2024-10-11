import { useState, useEffect } from "react"
import ImageContent from "./ImageContent"
import { MemeTypes, MemeApiDataType } from "./types"

export default function Form() {

  const [allMemesData, setAllMemesData] = useState<MemeApiDataType[]>([])

  const [meme, setMeme] = useState<MemeTypes>({
    topText: "",
    bottomText: "",
    randomImage: "",
  })

  //dont use async in useEffect. example `useEffect(async () => { })`
  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
  //for more explanation (https://v2.scrimba.com/learn-react-c0e/~045)
  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url)
        const res = await response.json()
        setAllMemesData(res.data.memes)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData("https://api.imgflip.com/get_memes");
  }, [])

  // const memesData = data;

 //const [memeImg, setMemeImg] = useState("/imgs/meme.png")

  function getRandomUrl(): void {
    if(!allMemesData) {
      throw console.error("empty data")
    }
    // const randomNum = Math.floor(Math.random() * data.data.memes.length)
    const randomNum = Math.floor(Math.random() * allMemesData.length)

    //gets random url from data
    const memeUrl = allMemesData[randomNum]
    console.log(memeUrl)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memeUrl.url
    }))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <form className="mx-10">
      <div className="md:flex gap-4">
        <div className="w-[70vw] md:flex-col md:items-start flex flex-wrap justify-between items-center gap-1 my-2">
          <label className="w-28" htmlFor="top-text">Top Text</label>
          <input
            id="top-text" 
            className="border border-slate-500 focus:border-slate-500 rounded-md px-2 py-1 w-full" 
            type="text" 
            placeholder="Shut Up"
            name="topText"
            onChange={handleChange}
          />
        </div>
        <div className="w-[70vw] md:flex-col md:items-start flex flex-wrap justify-between items-center gap-1 my-2">
          <label className="w-28" htmlFor="bottom-text">Bottom Text</label>
          <input
            id="bottom-text"
            className="border border-slate-500 focus:border-slate-500 rounded-md px-2 py-1 w-full" 
            type="text" 
            placeholder="And Take my money"
            name="bottomText"
            onChange={handleChange} 
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
      
      <div className="relative">
        <ImageContent
          imgUrl={meme.randomImage}
          memeData={meme}
        />
      </div>
    </form>
  )
}
