// Dependencies
import React, { Fragment } from 'react';

// Components

// Styles
import './_projectCard.css';

// Todo: 
// Agregar la actualización de la hora.
import Miguel from '../../assets/img/about/miguel.jpeg';
import JP from '../../assets/img/about/jp.jpg';
import Gon from '../../assets/img/about/gon.jpg';

const ProjectCard = ({ project }) => {
  var placeholderImg = 'https://res.cloudinary.com/dhsm3hy5s/image/upload/v1631805978/Medina/Proyectos/building-your-new-house-6AHW2QR_hipfkn_vtoj4n.jpg';
  return (
    <Fragment>
      <div className="flex items-center justify-center">
        <div className="mx-0 min-w-full shadow">
          <div class="h-full max-auto">
            <img
              src={project.ImgUrl || placeholderImg}
              alt="Proyecto "
              class="w-full max-h-36 object-cover min-h-0 sm:rounded-t-lg"
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
                  {project.City ||
                    'Mallorca'}
                </p>
              </div>
            </div>

            {/* Avatars & Status */}

            <div className="flex flex-row pt-4 ">
              <div className="flex-grow">
                <div className="flex items-center">
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
                    +4
                  </p>

                  {/* </div> */}
                </div>
              </div>
              <div className="flex-grow-0 self-center">
                {/*TO DO: SI STATUS = SIGNED COLOR = GREEN, SI STATUS = LOST, COLOR = RED, OTHER STATUS = GREY*/}
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
