import { ArrowUpRight } from "lucide-react"

const CompanyProfiles = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-orange-500">Company profiles</span>
            <br />
            we work with
          </h2>
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-2 border-white rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">✦</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-light tracking-widest rotate-[-30deg]">DESIGN DESIGN DESIGN</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <ProfileStep
            step="Step 1"
            title="Veloxforce solutions"
            description="Veloxforce solutions provides a competitive advantage by enabling unique, value-adding features that differentiate"
            imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
          />
          <ProfileStep
            step="Step 2"
            title="Regular software"
            description="Cut through the years, grab your audience's attention, and turn passive attendees into active participants."
            imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <ProfileStep
            step="Step 3"
            title="Hiring more employees"
            description="Cut through the years, grab your audience's attention, and turn passive attendees into active participants."
            imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
      </div>
    </section>
  )
}

const ProfileStep = ({ step, title, description, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <div className="md:w-1/3">
        <p className="text-sm text-gray-400 mb-2">{step}</p>
        <h3 className="text-2xl font-bold mb-2 flex items-center">
          {title} <ArrowUpRight className="ml-2 w-5 h-5" />
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="md:w-2/3">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-3xl" />
      </div>
    </div>
  )
}

export default CompanyProfiles
