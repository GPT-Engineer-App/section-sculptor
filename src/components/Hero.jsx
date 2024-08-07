import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Build Business Foundations with next-gen
          <span className="text-orange-500"> Automated systems</span>
        </h1>
        <p className="text-lg mb-8 max-w-3xl">
          Build a system in which your administration will be processed from start to finish so your company can scale with ease.
          Automatically filter your leads to ensure you are only contacting the most qualified leads.
          Improve customer service with an AI trained on all your previous customer requests, providing instant and accurate responses.
        </p>
        <ArrowDown className="w-12 h-12 mx-auto mt-8 text-orange-500 animate-bounce" />
      </div>
    </div>
  )
}

export default Hero
