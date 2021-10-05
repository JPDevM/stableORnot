// Dependencies
import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, CalendarIcon } from '@heroicons/react/solid';


// Middlewares

// Components

// Styles

// Media

const JournalSchedule = ({title}) => {
  return (
    <Fragment>
      <div className="w-full shadow rounded">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full my-2 py-1 text-left text-gray-800 bg-gradient-to-t hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 rounded-md  focus:outline-none">
                <span className="flex text-lg font-semibold leading-9 ml-4">
                  <CalendarIcon className="w-6 h-6 my-2 mr-2" />
                  {title}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? '' : 'transform rotate-180'
                  } w-6 h-6 m-2`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 mx-4">
                {/* Meeting start here */}
                <div className="sm:flex justify-between items-end py-4 border-b">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-700 whitespace-nowrap">
                      Marketing Keynote Presentation
                    </p>
                    <div className="flex items-center space-x-5 mt-2">
                      Avatar. Nombre
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 focus:outline-none px-5 py-2 bg-green-50 hover:bg-green-100 text-green-500 rounded-full text-sm leading-none">
                    Completed
                  </button>
                </div>
                <div className="sm:flex justify-between items-end py-4 border-b">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-700">
                      UX Wireframes
                    </p>
                    <div className="flex items-center space-x-5 mt-2">
                      Avatar. Nombre
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 focus:outline-none px-5 py-2 bg-green-50 hover:bg-green-100 text-green-500 rounded-full text-sm leading-none">
                    Completed
                  </button>
                </div>
                <div className="sm:flex justify-between items-end py-4 border-b">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-700">
                      Vue integration
                    </p>
                    <div className="flex items-center space-x-5 mt-2">
                      Avatar. Nombre
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 focus:outline-none px-7 py-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-full text-sm leading-none">
                    Pending
                  </button>
                </div>
                <div className="sm:flex justify-between items-end py-4 border-b">
                  <p>Agregar nueva tarea</p>
                </div>
                {/* Meeting finish here */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </Fragment>
  );
};
export default JournalSchedule;
