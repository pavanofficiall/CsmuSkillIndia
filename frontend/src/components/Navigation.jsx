// "use client"
import React from "react"
import { useState } from "react"
import { Phone, ChevronDown } from "react-feather"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Find Job", href: "/find-job" },
  { name: "Employers", href: "/employers" },
  { name: "Candidates", href: "/candidates" },
  { name: "Pricing Plans", href: "/pricing" },
  { name: "Customer Supports", href: "/support" },
]

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-8">
          <a href="/" className="font-bold text-xl text-[#18191c]">
            Jobpilot
          </a>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-5 px-1 text-sm font-medium transition-colors ${
                  activeItem === item.name ? "text-[#0a65cc]" : "text-[#5e6670] hover:text-[#0a65cc]"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveItem(item.name)
                }}
              >
                {item.name}
                {activeItem === item.name && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0a65cc]" />}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center text-[#18191c]">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">+1-202-555-0178</span>
          </div>

          <div className="flex items-center">
            <button className="flex items-center text-sm font-medium text-[#18191c]">
              <div className="flex items-center mr-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jobpilot___Job_Portal_Figma_UI_Template__Community___Community_-VVY48X4iLgi1HYV8yB6OfFYsRGyavJ.png"
                  alt="US Flag"
                  className="w-5 h-3.5 mr-2"
                />
                <span>English</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

