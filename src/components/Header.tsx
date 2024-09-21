export default function Header() {
  return (
    <nav className="
    bg-gradient-to-r from-[#672280] to-[#A626D3] 
    flex justify-between items-center p-4
    ">
      <div className="flex items-center gap-1">
        <img className="w-7" src="/imgs/troll.png" />
        <div className="text-white">Meme Generator</div>
      </div>
      <div className="text-white text-xs">
        React Course - Project 3
      </div>
    </nav>
  )
}
