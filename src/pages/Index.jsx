import Header from '../components/Header';
import Hero from '../components/Hero';
import AIFeatures from '../components/AIFeatures';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CoursePricing = () => {
  const courses = [
    { title: "Basic", price: "$99", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { title: "Pro", price: "$199", features: ["All Basic features", "Feature 4", "Feature 5"] },
    { title: "Enterprise", price: "Custom", features: ["All Pro features", "Feature 6", "Feature 7"] },
  ]

  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Course Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{course.price}</p>
              <ul className="space-y-2">
                {course.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <Button className="mt-4 w-full">Choose Plan</Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <AIFeatures />
      <Hero />
      <CoursePricing />
    </div>
  );
};

export default Index;
