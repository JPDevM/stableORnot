// Dependencies
import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { getFirestore, collection, onSnapshot, query, where } from 'firebase/firestore';

// Components
import Widget from '../LayOut/Widget';

// Styles

// Media

const db = getFirestore();

const ProjectShow = () => {
  //default IMG
  var placeholderImg = 'https://res.cloudinary.com/dhsm3hy5s/image/upload/v1631805978/Medina/Proyectos/building-your-new-house-6AHW2QR_hipfkn_vtoj4n.jpg';
  //used to store and show the result of the two live querys
  const [projectData, setProjectData] = useState({});
  const [journalsData, setJournalsData] = useState([]);
  const { id } = useParams();


// SETING THE LIVE PROJECT QUERY
  useEffect(() => {

  //PROJECTS DB
    //describe the first query
    const q = query(collection(db, 'proyectos'), where("IDProject", "==", id));
    //create the first observable onSnapshot using the query
    const unsubscribe = onSnapshot(q, (unfilterData) => {
      let projectArray = [];
      unfilterData.forEach((querySnapshot) => projectArray.push(querySnapshot.data()));
      if (projectArray.length > 0) setProjectData(projectArray[0]);
    });

  //JOURNALS DB
    //describe the first query
    const q2 = query(collection(db, 'journals'), where("IDP", "==", id));
    //create the first observable onSnapshot using the query
    const unsubscribe2 = onSnapshot(q2, (unfilterData) => {
      let journalsArray = [];
      unfilterData.forEach((querySnapshot) => journalsArray.push(querySnapshot.data()));
      if (journalsArray.length > 0)
        setJournalsData(journalsArray);
        else
        setJournalsData([{
          Date: "none",
          Description: "none",
          EntryTitle: "none",
        }]);
    });

  //UNSUBSCRIBE to the observable on destroy
    return function cleanup() {
      unsubscribe();
      unsubscribe2();
    };
  }, []); //the ending array is for run useEffect only once


// HTML RENDER
  return (
    <Fragment>
      <div className="flex items-center justify-center w-full">
        {/* Card code block start */}
        <div className="bg-white dark:bg-gray-800 shadow rounded">

{/* Header */}
            <div className="w-full h-28 bg-gray-900">
            <div className="w-28 h-28 float-right mt-10 -mb-10 mr-10  rounded border-2 shadow border-white">
                <img
                  src={projectData.ImgUrl || placeholderImg}
                  alt="Main Project Foto"
                  className="w-full h-full overflow-hidden object-cover rounded"
                />
              </div>
            </div>


{/* Body Cols and Rows - custom lines */}
          <div className="grid grid-cols-2 gap-2 grid-flow-col md:grid-cols-3 md:gap-3 bg-gray-300">

        {/* project div - custom lines */}
            <div className="col-span-2 row-start-1 md:row-start-auto md:col-span-1 md:col-start-3 md:col-end-3">
              <div className="w-full flex items-center justify-center mt-14">
                  <div className="w-full bg-white dark:bg-gray-800 shadow rounded py-6 px-4">

                    {/* title and icon */}
                    <div className="w-full flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-semibold leading-9 text-gray-800 dark:text-gray-100">{projectData.Name}</p>
                      </div>
                      <div className="w-10 h-10 bg-indigo-700 rounded-full flex items-center justify-center ml-48 sm:ml-56">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                          <path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z" fill="white" />
                        </svg>
                      </div>
                    </div>


                    {
                    Object.keys(projectData).map((items, index) => (
                        <div key={index + "project"} className="mt-6 pb-3 border-b border-gray-200">
                          <p className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">{items}</p>
                          <div className="flex justify-between items-center mt-2">
                            <p className="text-xs leading-3 dark:text-gray-400 text-gray-500">{projectData[items]}</p>
                          </div>
                        </div>
                    ))
                    }

                  <p className="float-right text-xs mt-4 font-semibold leading-none text-indigo-700">+12 more</p>

              {/* clients div for avatars*/}
                  <div className="float-left flex items-center pt-4">
                    <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg" alt="avatar" />
                    </div>
                    <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg" alt="avatar" />
                    </div>
                    <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg" alt="avatar" />
                    </div>
                    <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg" alt="avatar" />
                    </div>
                    <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                        <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg" alt="avatar" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-normal ml-1">+12 Attendees</p>
                  </div>


                </div>
              </div>
            </div>
        {/* jorunals div */}
          <div className="col-span-2 row-start-2 md:row-start-auto pt-14">
            <div
              className="grid gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6
            grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5
            grid-rows-6
            content-start items-stretch justify-items-stretch pb-4">
                  {journalsData.map((journal, index) => (
                    <Widget widht="1" height="1" key={index + "journals"}>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-sm p-2 overflow-hidden max-h-32 rounded">
                        <p className="text-base font-bold leading-none text-gray-700">{journal.EntryTitle}</p>
                        <p className="text-xs leading-3 text-gray-600 dark:text-gray-400">{journal.Date}</p>
                        <p className="text-xs leading-tight text-gray-600 dark:text-gray-400">{journal.Description}</p>
                      </div>
                    </Widget>
                  ))}
              </div>
            </div>
          </div>





        {/* Card code block end */}
        </div>
      </div>







    </Fragment>
  );
};

export default ProjectShow;