// Dependencies;
import React, { Fragment } from 'react';
//import PropTypes from 'prop-types';

// Components
import NavBar from '../Navbar';
  //import Widget from './Widget';

// Styles
import './_LayOut.css';


const LayOut = (props) => {
  return (
    <Fragment>
      {/* <header>
        <NavBar />
      </header> */}

      <main
        className="grid gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6  
      grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5
      grid-rows-6 
      content-start items-stretch justify-items-stretch pb-4"
      >

      {props.children}

      </main>
    </Fragment>
  );
};

LayOut.propTypes = {};

export default LayOut;

// Styles
