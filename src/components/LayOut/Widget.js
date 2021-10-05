// Dependencies
import React, { Fragment } from 'react';
  //import PropTypes from 'prop-types';

// Components

// Styles

const HooksPatternsProps = ({ widht, height, children }) => {
  return (
    <Fragment>
      <div
        className={`justify-self-auto 
          col-span-${widht} sm:col-span-${widht} md:col-span-${widht} lg:col-span-${widht} xl:col-span-${widht} 2xl:col-span-${widht}
          row-span-${height} sm:row-span-${height} md:row-span-${height} lg:row-span-${height} xl:row-span-${height} 2xl:row-span-${height}
          `}>{/* bg-blue-100e */}

        {/*<div className="m-1 sm:m-1 md:m-2 lg:m-2 xl:m-3 2xl:m-4">*/}

          {/* Your code here */}
            {children}
          {/* Your code here */}
          
        {/*</div>*/}
      </div>
    </Fragment>
  );
};

HooksPatternsProps.propTypes = {};

export default HooksPatternsProps;
