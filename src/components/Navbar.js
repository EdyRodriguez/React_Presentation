
import React from "react";
import Logo from './images/LogoEdy.png';
export default function Navbar() {
  
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 grid grid-cols-2 md:flex-row ">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          
          <div class="bg-gradient-to-l md:bg-gradient-to-r ">
          <img src= {Logo} alt="Logo" width='200' />
          </div>
            
          
        </a>
        <nav className="md:ml-auto  md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-right">
          <a href="#about" className="mr-5 hover:text-white">
            About Me
          </a>
          <a href="#hobbies" className="mr-5 hover:text-white">
            Hobbies
          </a>
        </nav>
        
      </div>
    </header>
  );
}