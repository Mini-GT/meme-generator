type SignupProps = {
  id: string
}

export default function Signup({
  id,
} : SignupProps) {
  return (
    <div className="flex justify-center">
      <button 
        className="text-white rounded px-6 py-1 bg-[#639]"
        id={id}
      >
        Signup
      </button>
    </div>
    
  )
}
