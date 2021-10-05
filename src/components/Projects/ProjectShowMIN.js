// Dependencies
import React, { useState, useEffect, Fragment } from 'react';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react';

// Components
import Widget from '../LayOut/Widget';

// Styles

// Media

const db = getFirestore();

const ProjectShow = ({ project, show, hideFunction, showJournal }) => {
  //default IMG
  var placeholderImg =
    'https://res.cloudinary.com/dhsm3hy5s/image/upload/v1631805978/Medina/Proyectos/building-your-new-house-6AHW2QR_hipfkn_vtoj4n.jpg';
  //used to store and show the result of the two live querys
  const [journalsData, setJournalsData] = useState([]);
  //const [lastState, sestLastState] = useState(false);
  const [lastProject, setLastProject] = useState({});

  useEffect(() => {
    //TODO, tratar que en el primer render no pase el siguiente if
    if (project != lastProject) {
      setJournalsData([]);
      if (project.IDProject) getJorunalsData(); //el if esta para evitar que lo anterior haga una query sin datos
      setLastProject(project);
    }
  });

  const getJorunalsData = async () => {
    const q = query(
      collection(db, 'journals'),
      where('IDP', '==', project.IDProject)
    );
    const querySnapshot = await getDocs(q);
    let journalsArray = [];
    querySnapshot.forEach((journal) => {
      journalsArray.push(journal.data());
    });
    if (journalsArray.length > 0) setJournalsData(journalsArray);
    else
      setJournalsData([
        {
          Date: 'none',
          Description: 'none',
          EntryTitle: 'none',
        },
      ]);
  };

  // HTML RENDER
  return (
    <Fragment>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={hideFunction}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={hideFunction}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default ProjectShow;
