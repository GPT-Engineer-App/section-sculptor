import { ArrowUpRight } from "lucide-react"

const ImageCard = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <div className="relative rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Automated systems visualization" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white rounded-tr-3xl">
          <span className="text-sm uppercase">Web Development</span>
        </div>
        <button 
          className="absolute bottom-4 right-4 bg-white text-black hover:bg-gray-200 rounded-full p-2"
        >
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default ImageCard
