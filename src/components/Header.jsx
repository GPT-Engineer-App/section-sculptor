import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent">
      <div className="flex items-center">
        <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FF6B00"/>
          <path d="M2 17L12 22L22 17" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xl font-bold">VELOXFORCE</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
          <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
          <li><a href="#blog" className="hover:text-orange-500 transition-colors">Blog</a></li>
        </ul>
      </nav>
      <Button variant="default" className="bg-black text-white rounded-full px-6 py-2">Book a call</Button>
    </header>
  )
}

export default Header
