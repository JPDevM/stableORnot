// Dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import LayOut from '../components/LayOut';
import Widget from '../components/LayOut/Widget';
import NavBar from '../components/Navbar';

// Styles

const Help = (props) => {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <LayOut>
        {/* WIDGET FOR CREATIN NEW PROJECT */}
        <Widget widht="1" height="1">
          {/* DIV FOR ERROR */}
          <div>
            <h1>Hola desde Help</h1>
          </div>
        </Widget>
      </LayOut>
    </Fragment>
  );
};

Help.propTypes = {};

export default Help;
