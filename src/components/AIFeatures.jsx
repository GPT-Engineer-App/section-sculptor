import { Brain, Zap, BarChart } from "lucide-react"

const AIFeatures = () => {
  return (
    <div className="bg-orange-500 text-white py-6 px-4 rounded-lg shadow-md mx-4 mt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="w-6 h-6" />
          <span>AI-Powered Insights</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="w-6 h-6" />
          <span>Real-time Processing</span>
        </div>
        <div className="flex items-center space-x-2">
          <BarChart className="w-6 h-6" />
          <span>Advanced Analytics</span>
        </div>
      </div>
    </div>
  )
}

export default AIFeatures
