import { Globe } from "lucide-react"

const WorldUsersSection = () => {
  return (
    <div className="bg-black text-white py-20 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-orange-500 mb-2">Benefits</h2>
          <h3 className="text-4xl font-bold mb-4">
            We have many users <br />
            all over the <span className="text-orange-500">world</span>
          </h3>
          <p className="mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam,
            purus sit amet luctus venenatis, lectus magna.
          </p>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-3xl font-bold text-orange-500">10K+</h4>
              <p>User active</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-orange-500">30+</h4>
              <p>Country</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-orange-500">50K+</h4>
              <p>Feedbacks</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://img.freepik.com/free-vector/worldwide-global-map-outline-black-background_1017-46153.jpg" 
            alt="World map"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default WorldUsersSection
