import React from "react";
export default function footer() {
  return (
    <section id="footer" className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto  p-5   md:flex-row ">
        
          
          <div className="bg-gray-00 relative flex flex-wrap py-6 justify-center grid grid-cols-4">
            <div></div>
            <div className="title-font font-medium text-white mb-4 md:mb-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-base justify-center">
                Direccion:
              </h2>
              <p className="mt-1">
                Hacia al norte!
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-base">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                edgar.rodriguez@sciodev.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-base mt-4 ">
                PHONE
              </h2>
              <p className="leading-relaxed">4431697081</p>
            </div>
            <div>
            <a >
            </a>
            </div>
          </div>
        
       
      </div>
    </section>
  );
}