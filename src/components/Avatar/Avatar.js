// Dependencies
import React, { Fragment } from 'react';

// Middlewares

// Components

// Styles

// Media
import imgEmptyProfile from '../../assets/img/EmptyProfile.png';

const Avatar = ({ name, surname, imgUrl, selected }) => {

  return (
    <Fragment>
      <div
        // key={index + 'client'} Abstraerlo en el map
        className="flex-shrink-0 inline-block flex-col text-center w-14 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16"
      >
        {/* Avatar */}
        <div
          // onClick={() => filterProjectsByClients(client.IdUser)} Abstraerlo fuera del Avatar
          style={{
            backgroundImage: `url(${imgUrl || imgEmptyProfile})`,
          }}
          className={`borderWhite flex h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2 2xl:mt-2 shadow-md items-center justify-center text-gray-600 bg-cover rounded-full ${
              selected
                ? 'border-green-500 border-solid border-2'
                : 'border-white border-solid border-2'
            }`}
        >
        </div>

        {/* Text */}
        {/* TODO: Opcional */}
        <p className="fontSmall text-xs sm:text-xs md:text-xm lg:text-lg xl:text-xl 2xl:text-2x my-1 sm:my-1 md:my-2 lg:my-2 xl:my-3 2xl:my-3 truncate">
          {name} {surname}
        </p>
      </div>
    </Fragment>
  );
};

export default Avatar;
