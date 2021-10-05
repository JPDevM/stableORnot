import React from 'react';

import Miguel from '../assets/img/about/miguel.jpeg';
import JP from '../assets/img/about/jp.jpg';
import Gon from '../assets/img/about/gon.jpg';

export default function SandBoxJP() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="max-w-sm shadow">
        <div className="bg-indigo-500 bg-opacity-10 rounded-tl rounded-tr px-4 sm:px-20 pt-2 object-cover object-center">
          <img src={Gon} alt="User profile avatar" className="" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-b sm:p-3 p-4">
          {/* Title and Subtitle */}
          <div className="flex items-center">
            <div className="border-gray-200">
              <p className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                {/* {project.Name} */}
              </p>
              <p className="text-sm leading-4 pt-2 text-gray-500 dark:text-gray-400">
                {/* {/* {project.Description} {project.Description}{' '} */}
                {/* {project.Description}{' '} */}
              </p>
            </div>
          </div>

          {/* Avatars & Status */}
          <div className="pt-4 flex items-center">
            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center">
              <img
                src={Miguel}
                alt="User profile avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center -ml-2.5">
              <img
                src={JP}
                alt="User profile avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center -ml-2.5">
              <img
                src={Gon}
                alt="User profile avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <p className="text-sm font-medium leading-4 pl-2 cursor-pointer text-gray-500 dark:text-gray-400">
              +42
            </p>
            {/*TO DO: SI STATUS = SIGNED COLOR = GREEN, SI STATUS = LOST, COLOR = RED, OTHER STATUS = GREY*/}
            <div className=""></div>
            <div className="">
              <div className="bg-red-200 h-6 mb-4 md:mb-0 rounded-full flex items-center justify-center shadow-md">
                <span className="text-xs mx-2 text-red-500 font-normal">
                  {/* {project.Status} */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
