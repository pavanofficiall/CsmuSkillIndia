import {Image} from "react";
import React from "react";
// import { Search, MapPin, Briefcase, Users } from "lucide-react";
import { Search, MapPin, Briefcase, Users } from "react-feather";
import Card from "../components/Card";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#f1f2f4]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#18191c] mb-6 leading-tight">
              Find a job that suits
              <br /> your interest & skills.
            </h1>
            <p className="text-[#5e6670] mb-8 max-w-lg">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 p-2 bg-white rounded-lg shadow-sm">
              <div className="flex-1 flex items-center border rounded-md px-4 py-3">
                <Search className="w-5 h-5 text-[#9199a3] mr-2" />
                <input type="text" placeholder="Job title, Keyword..." className="w-full outline-none text-[#18191c]" />
              </div>
              <div className="flex-1 flex items-center border rounded-md px-4 py-3">
                <MapPin className="w-5 h-5 text-[#9199a3] mr-2" />
                <input type="text" placeholder="Your Location" className="w-full outline-none text-[#18191c]" />
              </div>
              <button className="bg-[#0066ff] hover:bg-[#0a65cc] text-white font-medium px-6 py-3 rounded-md transition-colors">
                Find Job
              </button>
            </div>
            
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-[#9199a3] text-sm">Suggestion:</span>
              <span className="text-[#18191c] text-sm">Designer,</span>
              <span className="text-[#18191c] text-sm">Programming,</span>
              <span className="text-[#18191c] text-sm">Digital Marketing,</span>
              <span className="text-[#18191c] text-sm">Video,</span>
              <span className="text-[#18191c] text-sm">Animation.</span>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img src="https://i.postimg.cc/BZYMpz6N/vector-1739369767440-117edfbe1c83-removebg-preview.png" alt="Person working on laptop" width={500} height={400} className="w-full" priority />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { count: "1,75,324", label: "Live Job", icon: <Briefcase className="w-6 h-6 text-[#0066ff]" /> },
            { count: "97,354", label: "Companies", icon: <Search className="w-6 h-6 text-white" />, bg: "bg-[#0066ff] text-white" },
            { count: "38,47,154", label: "Candidates", icon: <Users className="w-6 h-6 text-[#0066ff]" /> },
            { count: "7,532", label: "New Jobs", icon: <Briefcase className="w-6 h-6 text-[#0066ff]" /> },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
              <div className={`p-3 rounded-md ${stat.bg || "bg-[#e7f0fa]"}`}>{stat.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-[#18191c]">{stat.count}</h3>
                <p className="text-[#5e6670]">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-12 py-12 md:py-20 bg-white items-center">
        <h1 className="text-4xl font-semibold mb-8 ">Top Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <p className="text-xl uppercase font-semibold hover:text-blue-400 hover:cursor-pointer">marketing</p>
            <p className="text-gray-400">2000 students enrolled</p>
        </div>
        <div>
            <p className="text-xl uppercase font-semibold hover:text-blue-400 hover:cursor-pointer">marketing</p>
            <p className="text-gray-400">2000 students enrolled</p>
        </div>
        <div>
            <p className="text-xl uppercase font-semibold hover:text-blue-400 hover:cursor-pointer">marketing</p>
            <p className="text-gray-400">2000 students enrolled</p>
        </div>
        <div>
            <p className="text-xl uppercase font-semibold hover:text-blue-400 hover:cursor-pointer">marketing</p>
            <p className="text-gray-400">2000 students enrolled</p>
        </div>
        <div>
            <p className="text-xl uppercase font-semibold hover:text-blue-400 hover:cursor-pointer">marketing</p>
            <p className="text-gray-400">2000 students enrolled</p>
        </div>
        <div>
            <p className="text-xl uppercase font-semibold hover:text-blue-400 hover:cursor-pointer">marketing</p>
            <p className="text-gray-400">2000 students enrolled</p>
        </div>
        </div>
      </div>

     <div>  
        <h1>Trending Cources</h1> 
      <div className="trending cources flex flex-wrap justify-center gap-4">
      <Card 
    imageSrc="https://example.com/web-dev.jpg"
    title="Web Development"
    enrolled={1200}
    price={4.99}
    originalPrice={6.99}
    rating={4}
    reviews={42}
/>
      <Card 
    imageSrc="https://example.com/web-dev.jpg"
    title="AI Development"
    enrolled={200}
    price={2.99}
    originalPrice={4.99}
    rating={5}
    reviews={42}
/>
      <Card 
    imageSrc="https://example.com/web-dev.jpg"
    title="Blockchain"
    enrolled={1200}
    price={4.99}
    originalPrice={6.99}
    rating={4}
    reviews={42}
/>
      <Card 
    imageSrc="https://example.com/web-dev.jpg"
    title="ML"
    enrolled={1200}
    price={4.99}
    originalPrice={6.99}
    rating={4}
    reviews={42}
/>
      </div>
      </div>  
    </main>
  );
};

export default Home;
