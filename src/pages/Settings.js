// Dependencies
import React, { Fragment } from 'react';

// Components

// Styles

// Media
import Bob from '../assets/img/spongebob.png';

const Settings = () => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <h1>Hola desde Settings</h1>
        <img src={Bob} alt="Bob Sponja esta feliz" className="w-36" />
      </div>
    </Fragment>
  );
};

export default Settings;
