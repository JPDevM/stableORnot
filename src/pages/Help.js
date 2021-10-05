// Dependencies
import React, { Fragment } from 'react';

// Components

// Styles

// Media
import Mario from '../assets/img/mario.png';

const Help = () => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <h1>This is Help</h1>
        <img src={Mario} alt="Mario está feliz" className="w-36" />
      </div>
    </Fragment>
  );
};

export default Help;
