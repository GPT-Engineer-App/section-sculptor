import { Instagram, Youtube, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm">FOLLOW US ON SOCIAL MEDIA • FOLLOW US ON SOCIAL MEDIA • FOLLOW US ON SOCIAL MEDIA</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">INSTAGRAM</h3>
            <p className="text-sm text-gray-400">Share visually appealing snippets of our projects.</p>
            <a href="#" className="mt-2 inline-block">
              <Instagram className="w-8 h-8 text-orange-500" />
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">YOUTUBE</h3>
            <p className="text-sm text-gray-400">Tweet about interesting coding challenges</p>
            <a href="#" className="mt-2 inline-block">
              <Youtube className="w-8 h-8 text-orange-500" />
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">LINKDEN</h3>
            <p className="text-sm text-gray-400">Showcase design elements of our web projects.</p>
            <a href="#" className="mt-2 inline-block">
              <Linkedin className="w-8 h-8 text-orange-500" />
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">TWITTER</h3>
            <p className="text-sm text-gray-400">Create detailed presentations for our projects.</p>
            <a href="#" className="mt-2 inline-block">
              <Twitter className="w-8 h-8 text-orange-500" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Home</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">What to choose</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">lorem</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="flex">
            <Input type="email" placeholder="Enter your email" className="bg-gray-800 text-white border-none mr-2" />
            <Button className="bg-orange-500 hover:bg-orange-600">
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="mt-12 flex justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 VELOXFORCE. All rights reserved.</p>
          <div>
            <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">Terms & Conditions</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
