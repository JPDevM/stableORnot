// Dependencies
import React, { useState, useEffect, Fragment } from 'react';

// Middlewares
import { useAuth } from '../../middlewares/AuthContext';

// Components

// Styles

// Media
import imgEmptyProfile from '../../assets/img/EmptyProfile.png';

const AvatarGroup = ({ clientsInThisProject, maxShow }) => {
  const [filtredAgenda, setFiltredAgenda] = useState([
    { ImgUrl: imgEmptyProfile },
  ]);

  const { clientAgenda } = useAuth();

  useEffect(() => {
    if(clientsInThisProject && clientsInThisProject.length > 0){ //fix because if came null it dosn't have to remplace the value of filtredAgenda
      setFiltredAgenda(
        clientAgenda.filter((contact) => clientsInThisProject.includes(contact.FireId))
      );
    }
  }, []); //to run only once

  // const [count, setCount] = useState([]);
  // const [filtredAgenda, setfiltredAgenda] = useState([]);

  // var { imgUrl } = clientsInThisProject;
  // var clientsNumber = clientsInThisProject.lenght;
  // var imgUrl = null;

  // const showSelected = (clientsNumber, maxShow) => {
  //   var count = 0;
  //   clientsNumber >= maxShow ? (count = maxShow) : (count = clientsNumber);
  //   setCount(count);
  //   console.log(count);

  //   var slicedArray = clientsInThisProject.slice(0, maxShow);
  //   setfiltredAgenda(slicedArray);
  //   console.log(slicedArray);
  // };

  // const calcRestOfClients = () => {};

  return (
    <Fragment>
      <div className="flex-grow">
        <div className="flex items-center">
          {/* Map of agenda */}
          {filtredAgenda.map((client, index) =>
            client.ImgUrl ? (
              <div
                key={index + 'client'}
                className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center"
              >
                <img
                  src={client.ImgUrl}
                  alt="User profile avatar"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            ) : (
              <div
                key={index + 'client'}
                className="w-9 h-9 bg-white shadow rounded-full flex items-center justify-center"
              >
                <img
                  src={imgEmptyProfile}
                  alt="User profile avatar"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            )
          )}

          {/* TODO: Implement calcRestOfClients() */}
          {/* <p className="text-sm font-medium leading-4 pl-2 cursor-pointer text-gray-500 dark:text-gray-400">
            +4
          </p> */}
        </div>
      </div>
    </Fragment>
  );
};

export default AvatarGroup;
