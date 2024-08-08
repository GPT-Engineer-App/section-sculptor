import { Video, Megaphone } from "lucide-react"

const IntegrationsSection = () => {
  return (
    <section className="bg-gray-200 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-black rounded-full p-4 flex items-center justify-center w-32 h-16 transform rotate-90">
                  {index % 3 === 0 ? (
                    <img src="/favicon.ico" alt="Veloxforce icon" className="w-8 h-8 transform -rotate-90" />
                  ) : index % 3 === 1 ? (
                    <Megaphone className="w-8 h-8 text-purple-500 transform -rotate-90" />
                  ) : (
                    <Video className="w-8 h-8 text-blue-500 transform -rotate-90" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-5xl font-bold mb-4">
              Veloxforce
              <br />
              <span className="bg-black text-white px-2">integrations</span>
            </h2>
            <p className="text-xl mb-4">
              Leverage your existing marketing platforms and sync the data seamlessly
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
