// Dependencies
import React, { useState, useEffect, Fragment } from 'react';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

// Components
//import LayOut from '../LayOut/';
import Widget from '../LayOut/Widget';
import AvatarGroup from '../Avatar/AvatarGroup';
import SmallGalery from '../Galery/SmallGalery';
import ProjectInfoDisclosure from './ProjectInfoDisclosure';
import FilesDisclosure from './FilesDisclosure';
import AnimationFramePopUp from '../Animations/AnimationFramePopUp';

// Styles
import './_projectShow.css';

// Media

const db = getFirestore();

const ProjectShow = ({ project, show, hideFunction, showJournal }) => {
  //default IMG
  var placeholderImg =
    'https://res.cloudinary.com/dhsm3hy5s/image/upload/v1631805978/Medina/Proyectos/building-your-new-house-6AHW2QR_hipfkn_vtoj4n.jpg';
  //used to store and show the result of the two live querys
  const [journalsData, setJournalsData] = useState([]);
  //const [lastState, sestLastState] = useState(false);
  const [lastProject, setLastProject] = useState({});

  useEffect(() => {
    // TODO, tratar que en el primer render no pase el siguiente if.
    if (project != lastProject) {
      setJournalsData([]);
      // el if esta para evitar que lo anterior haga una query sin datos.
      if (project.IDProject) getJorunalsData();
      setLastProject(project);
    }
  });

  const getJorunalsData = async () => {
    const q = query(
      collection(db, 'journals'),
      where('ProjectId', '==', project.FireId)
    );
    const querySnapshot = await getDocs(q);
    let journalsArray = [];
    querySnapshot.forEach((journal) => {
      journalsArray.push(journal.data());
    });
    if (journalsArray.length > 0) setJournalsData(journalsArray);
    else
      setJournalsData([
        {
          Date: 'none',
          Description: 'none',
          EntryTitle: 'none',
        },
      ]);
    console.log(journalsData);
  };

  return (
    <Fragment>
      <AnimationFramePopUp showModal={show} showOrHide={hideFunction}>
        <div className="overflow-y-auto inline-block w-3/4 h-custom overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-md ">
          {/* The content of the modal starts here. */}

          {/* Header start here */}
          <div className="flex flex-row justify-between items-end w-full h-28 bg-gradient-to-l from-gray-700 via-gray-900 to-black">
            {/* Title */}
            <div className="float-left ml-8 mb-4">
              <p className="text-white text-3xl font-extralight">
                {project.Name || 'Sin nombre'}
              </p>
            </div>
          </div>
          {/* Header finish here */}

          {/* Content start here */}
          <div className="grid grid-cols-2 gap-2 grid-flow-col md:grid-cols-3 md:gap-3 bg-white mx-8">
            {/* Project */}
            <section className="text-left col-span-2 row-start-1 md:row-start-auto md:col-span-1 md:col-start-3 md:col-end-3  mt-14">
              {/* Image Galery */}
              <SmallGalery />

              {/* Project Info*/}
              <ProjectInfoDisclosure
                title="Información del proyecto"
                data={project}
              />

              {/* Shared Files */}
              <FilesDisclosure title="Documentos compartidos" />

              {/* Schedule Start here */}
              {/* TODO llevar esto a journalShow */}
              {/* Schedule Files end here */}
            </section>

            {/* Jorunals */}
            <section className="col-span-2 row-start-2 md:row-start-auto pt-14">
              {/* TODO: sacar layout y configurar la grilla a mano (revisar la que me paso Gon por ws) */}
              <div className="grid gap-2 grid-cols-3 grid-rows-2 content-start items-stretch justify-items-stretch pb-4">
                {journalsData.map((journal, index) => (
                  <Widget widht="1" height="1" key={index + 'journals'}>
                    {/* Code from projectCard Component start here TODO: compose */}
                    <div
                      className="flex items-center justify-center"
                      onClick={() => showJournal(journal)}
                    >
                      <div className="mx-0 min-w-full shadow">
                        <div className="h-full max-auto">
                          <img
                            src={journal.ImgUrl || placeholderImg}
                            alt="Proyecto "
                            className="w-full max-h-36 object-cover sm:rounded-t-lg setHeight"
                          />
                        </div>

                        <div className="bg-white rounded-b sm:p-3 p-4">
                          {/* Title and Subtitle */}
                          <div className="flex items-center">
                            <div className="border-gray-200 w-full text-left">
                              <p className="text-lg font-semibold leading-none text-gray-800 truncate overflow-ellipsis w-full texTruncated">
                                {journal.EntryTitle || 'Sin título'}
                              </p>
                              <p className="text-sm text-gray-500 truncate overflow-ellipsis w-full texTruncated">
                                {journal.VisitType || 'Indeterminada'}
                              </p>
                              <p className="text-sm text-gray-500 truncate overflow-ellipsis w-full texTruncated ">
                                {journal.Date || 'Mallorca'}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-row pt-4 ">
                            {/* Avatars & Status */}
                            <AvatarGroup
                              clientsInThisProject={project.MainCustomer}
                              maxShow={3}
                            />

                            {/* TODO: From code to component */}
                            <div className="flex-grow-0 self-center">
                              {/*TO DO: si status = signed color = green, si status = lost, color = red, other status = grey*/}
                              <div className="bg-green-50 h-6 mb-4 md:mb-0 rounded-full flex items-center justify-center">
                                <span className="text-xs mx-2 text-green-500 font-normal">
                                  {project.Status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Code from projectCard Component start here TODO: compose */}
                  </Widget>
                ))}{' '}
              </div>
            </section>
            {/* Contente finish here */}
          </div>
          {/* The content of the modal ends here. */}
        </div>
      </AnimationFramePopUp>
    </Fragment>
  );
};

export default ProjectShow;
