import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mx-4 mt-4">
      <div className="flex items-center">
        <img src="/placeholder.svg" alt="VeloxForce Logo" className="h-8 w-8 mr-2 rounded-full" />
        <span className="text-xl font-bold">VELOXFORCE</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
          <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
          <li><a href="#blog" className="hover:text-orange-500 transition-colors">Blog</a></li>
        </ul>
      </nav>
      <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">Book a call</Button>
    </header>
  )
}

export default Header
