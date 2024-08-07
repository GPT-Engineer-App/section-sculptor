import { Card, CardContent } from "@/components/ui/card"

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">What can you expect ?</h2>
        <h3 className="text-6xl font-bold text-orange-500 mb-8">Services</h3>
        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 w-full">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Consultation</h4>
              <p className="text-sm">We start with a thorough consultation to understand your needs and goals.</p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-orange-100 to-orange-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Development</h4>
                <p className="text-sm mb-4">Our expert team develops custom solutions tailored to your requirements.</p>
                <div className="bg-black text-green-400 p-4 rounded">
                  <pre className="text-xs">
                    <code>
                      {`function develop() {
  // Magic happens here
  return amazingSolution;
}`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Pre-Development</h4>
                <p className="text-sm">We plan and design the project before diving into development.</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Long-term collaboration</h4>
              <p className="text-sm">We believe in building lasting relationships with our clients for ongoing support and growth.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
