import React, { Fragment } from 'react';
import DragAndDrop from '../components/DragDropAndUpload/DragAndDrop';

const App = () => {

  return (
    <Fragment>
      <DragAndDrop>
        <div className="w-1/2 m-auto mt-10 text-justify p-2 bg-green-200	rounded">
          <p>Drag and Drop IMGs Here </p>
          <p>
            You can drop more then 1 jpg at the same time, they upload to server
            and return URL in the console to use and be render in the app.{' '}
          </p>
          <button className="w-1/2 bg-red-200	rounded">
            Click Me, because I do nothing lol
          </button>
        </div>
      </DragAndDrop>
    </Fragment>
  );

}

export default App;