// Dependencies
import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, InformationCircleIcon } from '@heroicons/react/solid';

// Middlewares

// Components

// Styles

// Media

const ProjectInfoDisclosure = ({ data, title }) => {
  return (
    <Fragment>
      <div className="w-full shadow rounded">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full my-2 py-1 text-left text-gray-800 bg-gradient-to-t hover:from-gray-100 hover:via-gray-200 hover:to-gray-300 rounded-md  focus:outline-none">
                <span className="flex text-lg font-semibold leading-9 ml-4">
                  <InformationCircleIcon className="w-6 h-6 my-2 mr-2" />
                  {title}
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? '' : 'transform rotate-180'
                  } w-6 h-6 m-2`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 mx-4">
                {Object.keys(data).map((items, index) => (
                  <div
                    key={index + 'project'}
                    className="mt-6 pb-3 border-b border-gray-200"
                  >
                    <p className="text-xs font-semibold text-left leading-3 text-gray-800">
                      {items}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs leading-3 text-gray-500">
                        {data[items]}
                      </p>
                    </div>
                  </div>
                ))}

                <p className="float-right text-xs mt-4 font-semibold leading-none text-indigo-700">
                  Añadir nueva tarea
                </p>

                {/* clients div for avatars*/}
                <div>Avatar Component</div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </Fragment>
  );
};
export default ProjectInfoDisclosure;
