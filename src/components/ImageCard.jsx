import { Button } from "@/components/ui/button"

const ImageCard = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <div className="relative rounded-lg overflow-hidden">
        <img 
          src="/placeholder.svg" 
          alt="Automated systems visualization" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
          <span className="text-sm uppercase">Web Development</span>
        </div>
        <Button 
          variant="outline" 
          className="absolute bottom-4 right-4 bg-white text-black hover:bg-gray-200"
        >
          View Details
        </Button>
      </div>
    </div>
  )
}

export default ImageCard
