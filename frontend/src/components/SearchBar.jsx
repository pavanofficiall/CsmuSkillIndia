"use client"
import React from "react"
import { useState } from "react"
import { Search, Briefcase } from "react-feather"
import Button from "./Button"



function SearchBar() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-8">
          <Briefcase color="blue" className=""/>

            <div className="search-bar flex justify-center items-center border border-gray-200 rounded-lg gap-4 "> 
                <Search/>
                <input name="" id="" placeholder="Job title,Companey" className="h-9 no-underline w-[900px]"></input>
            </div>
        <Button className="bg-blue-500 py-2 px-5 text-white text-xl rounded-lg">Search</Button>
        </div>

    
      </div>
    </nav>
  )
}

export default SearchBar

