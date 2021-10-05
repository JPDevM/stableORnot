// Dependencies
import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, CloudIcon } from '@heroicons/react/solid';

// Middlewares

// Components

// Styles

// Media
const FilesDisclosure = ({ title }) => {
  var files = [
    {}, {}
  ]
  return (
    <Fragment>
      <div className="w-full shadow rounded">
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex justify-between w-full my-2 py-1 text-left text-gray-800 bg-gradient-to-t hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 rounded-md  focus:outline-none">
                <span className="flex text-lg font-semibold leading-9 ml-4">
                  <CloudIcon className="w-6 h-6 my-2 mr-2" />
                  {title}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? '' : 'transform rotate-180'
                  } w-6 h-6 m-2`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 mx-4">
                {/* Files start here */}

                <div className="bg-white pt-3">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          PPT
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          Wireframes.ppt
                        </p>
                        <p className="text-xs leading-3 text-gray-500 mt-2">
                          Shared by Ryan Renolds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white pt-3 border-t mt-3">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          DOC
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          Project Outline.doc
                        </p>
                        <p className="text-xs leading-3 text-gray-500 mt-2">
                          Shared by Ashley Wilson
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white pt-3 border-t mt-3">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          FIG
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          Project Outline.doc
                        </p>
                        <p className="text-xs leading-3 text-gray-500 mt-2">
                          Shared by Ashley Wilson
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white pt-3 border-t mt-3">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-400 rounded-sm flex items-center justify-center">
                        <p className="text-xs font-bold leading-3 text-white">
                          PPT
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          Wireframes.ppt
                        </p>
                        <p className="text-xs leading-3 text-gray-500 mt-2">
                          Shared by Ryan Renolds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white pt-3 border-t mt-3">
                  <p>Agregar nuevo archivo</p>
                </div>

                {/* Files finish here */}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </Fragment>
  );
};
export default FilesDisclosure;