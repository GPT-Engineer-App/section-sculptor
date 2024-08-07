import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <img src="/placeholder.svg" alt="VeloxForce Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">VELOXFORCE</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
      <Button variant="default">Book a call</Button>
    </header>
  )
}

export default Header
