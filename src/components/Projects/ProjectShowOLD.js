// Dependencies
import React, { useState, useEffect, Fragment } from 'react';
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

// Components
import Widget from '../LayOut/Widget';

// Styles


// Media

const db = getFirestore();

const ProjectShow = ({ project, show, hideFunction }) => {
  //default IMG
  var placeholderImg =
    'https://res.cloudinary.com/dhsm3hy5s/image/upload/v1631805978/Medina/Proyectos/building-your-new-house-6AHW2QR_hipfkn_vtoj4n.jpg';
  //used to store and show the result of the two live querys
  const [journalsData, setJournalsData] = useState([]);
  //const [lastState, sestLastState] = useState(false);
  const [lastProject, setLastProject] = useState({});

  useEffect(() => {
    //TODO, tratar que en el primer render no pase el siguiente if
    if (project != lastProject) {
      if (project.IDProject) getJorunalsData(); //el if esta para evitar que lo anterior haga una query sin datos
      setLastProject(project);
    }
  });

  function getJorunalsData() {
    const q2 = query(
      collection(db, 'journals'),
      where('IDP', '==', project.IDProject)
    );
    const unsubscribe = onSnapshot(q2, (unfilterData) => {
      let journalsArray = [];
      unfilterData.forEach((querySnapshot) =>
        journalsArray.push(querySnapshot.data())
      );
      if (journalsArray.length > 0) setJournalsData(journalsArray);
      else
        setJournalsData([
          {
            Date: 'none',
            Description: 'none',
            EntryTitle: 'none',
          },
        ]);
    });
  }

  return (
    <Fragment>
      {/* Modal */}
      {show && (
        <div
          id="popup"
          className="z-50 fixed w-full flex justify-start inset-0"
        >
          <div
            onClick={() => hideFunction()}
            className="w-full h-full bg-gray-800 bg-opacity-90 z-0 absolute inset-0"
          />
          <div className="mx-8 mx-modal container border-4 border-white my-8">
           
           
           
            <div className="flex items-start my-auto justify-start h-full w-full">
              <div className="mx-8 bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-8/10">
                
                
                <div className="flex items-center justify-start w-full">
                  {/* Card code block start */}
                  <div className="bg-white dark:bg-gray-800 shadow rounded">
                    {/* Header */}
                    <div className="w-full h-28 bg-blue-500">
                      <div className="w-28 h-28 float-right mt-10 -mb-10 mr-10  rounded border-2 shadow border-white">
                        <img
                          src={project.ImgUrl || placeholderImg}
                          alt="Main Project Foto"
                          className="w-full h-full overflow-hidden object-cover rounded"
                        />
                      </div>
                    </div>

                    {/* Body Cols and Rows - custom lines */}
                    <div className="grid grid-cols-2 gap-2 grid-flow-col md:grid-cols-3 md:gap-3 bg-white">
                      {/* project div - custom lines */}
                      <div className="col-span-2 row-start-1 md:row-start-auto md:col-span-1 md:col-start-3 md:col-end-3">
                        <div className="w-full flex items-center justify-start mt-14">
                          <div className="w-full bg-white dark:bg-gray-800 shadow rounded py-6 px-4">
                            {/* title and icon */}
                            <div className="w-full flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-semibold leading-9 text-gray-800 dark:text-gray-100">
                                  {project.Name}
                                </p>
                              </div>
                              <div className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center ml-48 sm:ml-56">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  height={18}
                                  viewBox="0 0 20 18"
                                  fill="none"
                                >
                                  <path
                                    d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>

                            {/* No Borrar */}
                            {Object.keys(project).map((items, index) => (
                              <div
                                key={index + 'project'}
                                className="mt-6 pb-3 border-b border-gray-200"
                              >
                                <p className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                                  {items}
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                  <p className="text-xs leading-3 dark:text-gray-400 text-gray-500">
                                    {project[items]}
                                  </p>
                                </div>
                              </div>
                            ))}
                            {/* No Borrar */}

                            <p className="float-right text-xs mt-4 font-semibold leading-none text-indigo-700">
                              +12 more
                            </p>

                            {/* clients div for avatars*/}
                            <div className="float-left flex items-center pt-4">
                              <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                <img
                                  className="w-full h-full overflow-hidden object-cover rounded-full"
                                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                <img
                                  className="w-full h-full overflow-hidden object-cover rounded-full"
                                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                <img
                                  className="w-full h-full overflow-hidden object-cover rounded-full"
                                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                <img
                                  className="w-full h-full overflow-hidden object-cover rounded-full"
                                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                <img
                                  className="w-full h-full overflow-hidden object-cover rounded-full"
                                  src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-xs font-normal ml-1">
                                +12 Attendees
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="shadow rounded-lg p-3 sm:p-6 max-w-md w-full">
                          <div className="flex items-center">
                            <p className="text-base font-semibold leading-none text-gray-800">
                              Shared Files
                            </p>
                            <button className="ml-3 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M12 10L8 6L4 10"
                                  stroke="#9CA3AF"
                                  strokeWidth="1.25"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="mt-5">
                            <div className="bg-white rounded shadow py-2 px-2">
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
                                <div className="relative">
                                  {/* {show == 0 ? ( */}
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(null)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  ) : (
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(0)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  )}
                                  {show == 0 && (
                                    <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                        <p>Edit</p>
                                      </div>
                                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                        <p>Delete</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded shadow py-2 px-2 mt-3">
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
                                <div className="relative">
                                  {/* {show == 1 ? ( */}
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(null)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  ) : (
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(1)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  {/* )} */}
                                  {/* {show == 1 && ( */}
                                  <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                      <p>Edit</p>
                                    </div>
                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                      <p>Delete</p>
                                    </div>
                                  </div>
                                  {/* )} */}
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded shadow py-2 px-2 mt-3">
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
                                <div className="relative">
                                  {/* {show == 2 ? ( */}
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(null)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  ) : (
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(2)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  {/* )} */}
                                  {/* {show == 2 && ( */}
                                  <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                      <p>Edit</p>
                                    </div>
                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                      <p>Delete</p>
                                    </div>
                                  </div>
                                  {/* )} */}
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded shadow py-2 px-2 mt-3">
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
                                <div className="relative">
                                  {/* {show == 3 ? ( */}
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(null)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  ) : (
                                  <button className="focus:outline-none">
                                    <svg
                                      // onClick={() => setShow(3)}
                                      className="dropbtn"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                    >
                                      <path
                                        d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  {/* )} */}
                                  {/* {show == 3 && ( */}
                                  <div className="dropdown-content bg-white shadow  w-24 absolute z-30 -ml-16 xl:-ml-10 2xl:ml-0">
                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                      <p>Edit</p>
                                    </div>
                                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                      <p>Delete</p>
                                    </div>
                                  </div>
                                  {/* )} */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* jorunals div */}
                      <div className="col-span-2 row-start-2 md:row-start-auto pt-14">
                        <div
                          className="grid gap-2
                        grid-cols-4 
                        grid-rows-2
                        content-start items-stretch justify-items-stretch pb-4"
                        >
                          {journalsData.map((journal, index) => (
                            <Widget
                              widht="1"
                              height="1"
                              key={index + 'journals'}
                            >
                              <div className="bg-gray-100 dark:bg-gray-700 rounded-sm p-2 overflow-hidden max-h-32 rounded">
                                <p className="text-base font-bold leading-none text-gray-700">
                                  {journal.EntryTitle}
                                </p>
                                <p className="text-xs leading-3 text-gray-600 dark:text-gray-400">
                                  {journal.Date}
                                </p>
                                <p className="text-xs leading-tight text-gray-600 dark:text-gray-400">
                                  {journal.Description}
                                </p>
                              </div>
                            </Widget>
                          ))}
                        </div>
                      </div>
                      {/* jorunals div */}
                    </div>

                    {/* Card code block end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProjectShow;
