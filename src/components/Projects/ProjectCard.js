// Dependencies
import React, { Fragment } from 'react';

// Components

// Styles
import './_projectCard.css';

// TODO:
// Add the time update. 
import AvatarGroup from '../Avatar/AvatarGroup';

const ProjectCard = ({ project }) => {
  var placeholderImg =
    'https://res.cloudinary.com/dhsm3hy5s/image/upload/v1632307596/Medina/Proyectos/Mesa_de_trabajo_1_ijenfk.png';
  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <div className="mx-0 min-w-full shadow">
          <div className="h-full max-auto">
            <img
              src={project.ImgUrl || placeholderImg}
              alt="Proyecto "
              className="w-full max-h-36 object-cover sm:rounded-t-lg setHeight"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-b sm:p-3 p-4">
            {/* Title and Subtitle */}
            <div className="flex items-center">
              <div className="border-gray-200 w-full">
                <p className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-100 truncate overflow-ellipsis w-full texTruncated">
                  {project.Name || 'Sin título'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate overflow-ellipsis w-full texTruncated">
                  {project.Address || 'Indeterminada'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate overflow-ellipsis w-full texTruncated ">
                  {project.City || 'Mallorca'}
                </p>
              </div>
            </div>

            <div className="flex flex-row pt-4 ">
              {/* Avatars & Status */}
              <AvatarGroup
                clientsInThisProject={project.ClientsArray}
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
    </Fragment>
  );
};

export default ProjectCard;
