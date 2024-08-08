import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const ComparisonTable = () => {
  const features = [
    {
      description: "Veloxforce solutions provides a competitive advantage by enabling unique, value-adding features that differentiate the company, attracting more customers and driving revenue growth.",
      veloxforce: true,
      regular: false,
      hiring: false
    },
    {
      description: "SaaS's one-size-fits-all approach limits customization, forcing businesses to adapt their processes to software constraints, leading to inefficiencies and reduced productivity.",
      veloxforce: false,
      regular: true,
      hiring: false
    },
    {
      description: "Hiring more employees to compensate for inefficiencies leads to increased salaries and overhead costs, reducing profit margins and limiting investment in innovation.",
      veloxforce: false,
      regular: false,
      hiring: true
    },
    {
      description: "Veloxforce software seamlessly integrates with existing workflows, automating data transfer and synchronization, reducing errors and increasing efficiency and productivity.",
      veloxforce: true,
      regular: false,
      hiring: false
    },
    {
      description: "24/7 customer support in case of any issues which will lead to downtime, loss of money and irritation.",
      veloxforce: true,
      regular: true,
      hiring: false
    }
  ]

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-orange-500">✦</span> What to choose ?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-4 py-2 text-left">What to choose ?</th>
                <th className="px-4 py-2 text-center text-orange-500">Veloxforce solutions</th>
                <th className="px-4 py-2 text-center">Regular software</th>
                <th className="px-4 py-2 text-center">Hiring more employees</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="px-4 py-2">{feature.description}</td>
                  <td className="px-4 py-2 text-center">
                    {feature.veloxforce ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {feature.regular ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {feature.hiring ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-700">
            SHOW MORE +
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
