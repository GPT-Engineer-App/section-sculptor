import { Video, Megaphone } from "lucide-react"

const IntegrationsSection = () => {
  return (
    <section className="bg-gray-200 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-full p-4 flex items-center justify-center w-32 h-16 shadow-md">
                  <div className="bg-black rounded-full p-3 flex items-center justify-center w-24 h-12 transform rotate-90">
                    {index % 3 === 0 ? (
                      <img src="/favicon.ico" alt="Veloxforce icon" className="w-6 h-6 transform -rotate-90" />
                    ) : index % 3 === 1 ? (
                      <Megaphone className="w-6 h-6 text-purple-500 transform -rotate-90" />
                    ) : (
                      <Video className="w-6 h-6 text-blue-500 transform -rotate-90" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-5xl font-extrabold mb-4">
              Veloxforce
              <br />
              <span className="text-orange-500">integrations</span>
            </h2>
            <p className="text-2xl font-semibold mb-4">
              Leverage your existing marketing platforms and sync the data seamlessly
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
