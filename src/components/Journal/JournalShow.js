// Dependencies
import React, { Fragment } from 'react';

// Components
import SmallGalery from '../Galery/SmallGalery';
import ProjectInfoDisclosure from '../Projects/ProjectInfoDisclosure';
import JournalText from './JournalText';
import FilesDisclosure from '../Projects/FilesDisclosure';
import JournalSchedule from './JournalSchedule';
import AnimationFramePopUp from '../Animations/AnimationFramePopUp';

// Styles

// Media

const JournalShow = ({ journal, show, hideFunction }) => {
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
                {journal.Project || 'Sin nombre'}
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
              {/* Project Info */}
              <ProjectInfoDisclosure
                title="Información de la agenda"
                data={journal}
              />
              {/* Shared Files */}
              <FilesDisclosure title="Documentos compartidos" />

              {/* Schedule */}
              <JournalSchedule title="Tareas" />
            </section>

            {/* Jorunals */}
            <section className="col-span-2 mt-14">
              <JournalText />
            </section>
            {/* Contente finish here */}
          </div>
          {/* The content of the modal ends here. */}
        </div>
      </AnimationFramePopUp>
    </Fragment>
  );
};

export default JournalShow;
