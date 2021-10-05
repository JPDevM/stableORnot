// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components

// Styles
import './_smallGalery.css';

// Media

const SmallGalery = () => {
  return (
    <Fragment>
      {/* Image Galery start here */}
      {/* TODO: slice img tiene que pasar una imagen al contenedor anterior o siguiente (over image) */}
      <div className="semiCirculo-l border border-white">x</div>
      <div className="semiCirculo-r border border-white">x</div>
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2 mb-4 h-56">
        <div class="relative col-span-3 row-span-2 md:col-span-2">
          <img
            src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
          />
        </div>
        <div class="relative hidden md:block">
          <img
            src="https://tailwindcss.com/_next/static/media/beach-house-interior.13945f821153afd28151b5dac3e5d713.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-200"
          />
        </div>
        <div class="md:block border-dashed border-2 rounded-md">
          {/* TODO background con ícon de la cámara */}
          <p className="flex flex-wrap content-center relative w-full h-full text-center align-middle font-light text-xs overflow-ellipsis overflow-hidden text-gray-500 bg-gray-100">
            Puedes subir más imagenes o videos arrastrandolos sobre la ficha.
          </p>
        </div>
      </div>
      <p className="w-full text-right text-gray-400 font-light text-sm pt-0 pb-4">
        . . . hay otras x-2 imagenes disponibles.
      </p>
      {/* Image Galery end here */}
    </Fragment>
  );
};
export default SmallGalery;
