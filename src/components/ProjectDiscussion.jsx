import { Button } from "@/components/ui/button"

const ProjectDiscussion = () => {
  return (
    <section className="bg-black text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-5xl font-bold mb-4">
              Let's Discuss<br />Your Project
            </h2>
            <p className="text-gray-400 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              sed mauris ut id aliquet augue.
            </p>
          </div>
          <div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg">
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 C40,30 60,70 100,100 L100,0 Z" fill="none" stroke="white" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </section>
  )
}

export default ProjectDiscussion
