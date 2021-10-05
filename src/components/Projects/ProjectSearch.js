// Dependencies
import React, { Fragment } from 'react';

// Components

// Styles

// Media
import BuscarProjectoImg from '../../assets/img/corporate/search_model1-w600.png';

const ProjectSearch = () => {
  return (
    <Fragment>
      <div className="w-full h-full flex justify-center p-8 flex-col">
        <img
          src={BuscarProjectoImg}
          alt="Buscar proyecto"
          className="w-32 hero container max-w-screen-lg mx-auto pb-4"
        />
        <form>
          <div>
            <div className="flex flex-col ">
              <div className="relative">
                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  id="search"
                  className="w-full border text-gray-600 bg-white focus:outline-none focus:border focus:border-gray-400 pr-20 sm:pr-2 h-10 flex items-center pl-10 text-sm border-gray-300 rounded-full focus:shadow"
                  placeholder="Buscar Projecto"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProjectSearch;
