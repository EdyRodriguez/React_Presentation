
import React from "react";
import { hobbies } from "./datos";

export default function Hobbies() {
  return (<section id="hobbies" className="text-gray-400 bg-gray-900 body-font">
  <div className="container py-10 mx-auto text-center ">
    <div className="flex flex-col w-full mb-20">
      
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        Cosas que me gustan!!
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Te dejo un poco de mis pasatiempos favoritos! hay muchos mas pero no te quiero sobrecargar XD 
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      {hobbies.map((hobby) => (
          
        <a

          href={hobby.link}
          key={hobby.image}
          className="sm:w-1/2 w-100 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={hobby.image}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h1 className="tracking-widest text-2xl title-font font-medium text-green-400 mb-5">
                {hobby.title}
              </h1>
              
              <p className="leading-relaxed">{hobby.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
  );
}