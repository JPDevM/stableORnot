// Dependencies
import React, { Fragment } from 'react';
//import PropTypes from 'prop-types';

// Components

// Styles
import './_widget.css';

const HooksPatternsProps = ({ widht, height, children }) => {
  return (
    <Fragment>
      <div
        className={`justify-self-auto 
          col-span-${widht} sm:col-span-${widht} md:col-span-${widht} lg:col-span-${widht} xl:col-span-${widht} 2xl:col-span-${widht}
          row-span-${height} sm:row-span-${height} md:row-span-${height} lg:row-span-${height} xl:row-span-${height} 2xl:row-span-${height} 
          `}
      >
        {/* Your code here */}
        {children}
        {/* Your code here */}
      </div>
    </Fragment>
  );
};

HooksPatternsProps.propTypes = {};

export default HooksPatternsProps;
