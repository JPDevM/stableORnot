// Dependencies
import React, { useState, useEffect, useRef, Fragment } from 'react';
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  doc,
  setDoc,
} from 'firebase/firestore';

// Components
import Widget from '../LayOut/Widget';
import LayOut from '../LayOut';

// Styles

const db = getFirestore();

const Projects = () => {
  //used to store and show the result of the two live querys
  const [data, setData] = useState([]);
  const [dataAgenda, setDataAgenda] = useState([]);
  //used for creating a new project
  const projectRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //used to select a client to filter the projects
  const [clientSelected, setClientSelected] = useState(false);
  const [clientProjects, setClientProjects] = useState([]);

  // SETING THE LIVE PROJECT QUERY
  useEffect(() => {
    //PROJECTS DB
    //describe the first query
    const q = query(collection(db, 'proyectos'));
    //create the first observable onSnapshot using the query
    const unsubscribe = onSnapshot(q, (data) => {
      let proyectos = [];
      data.forEach((querySnapshot) => proyectos.push(querySnapshot.data()));
      setData(proyectos);
    });
    //AGENDA DB
    //describe the second query
    const q2 = query(collection(db, 'agenda'));
    //create the second observable onSnapshot using the query
    const unsubscribe2 = onSnapshot(q2, (data) => {
      let agenda = [];
      data.forEach((querySnapshot) => agenda.push(querySnapshot.data()));
      setDataAgenda(agenda);
    });
    //unsubscribe to the observable on destroy
    return function cleanup() {
      unsubscribe();
      unsubscribe2();
    };
  }, []); //the ending array is for runin useEffect only once

  // FUNTION TO CREATE NEW PROJECTS
  async function createProject(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await setDoc(doc(db, 'proyectos', projectRef.current.value), {
        Name: projectRef.current.value,
        Description: 'proyecto de prueba creado desde la APP',
        Status: 'Signed',
      });
    } catch {
      setError('Failed to create a new project');
    }
    projectRef.current.value = '';
    setLoading(false);
  }
  //FUNCTION TO FILTER PROJECTS BY CLIENTS
  const filterProjectsByClients = (clientId) => {
    if (clientId !== clientSelected) {
      setClientSelected(clientId);
      setClientProjects(
        data.filter((project) => project.MainCustomer === clientId)
      );
    } else {
      setClientSelected(false);
      setClientProjects([]);
    }
  };

  // TODO
  const clearAll = () => {};
  return (
    <Fragment>
      <LayOut>
        {/* WIDGET TO FILTER BY CUSTOMER */}
        <Widget widht="full" height="1">
          <div className="flex flex-col bg-gray-100 px-4">
            {/* DIV FOR STYLES */}
            <div className="flex flex-row flex-wrap justify-between w-full h-full place-items-start ">
              {/* MAP OF AGENDA */}
              {dataAgenda.map((client, index) => (
                //IMPORTANT: Everything between the curly braces gets evaluated immediately. This causes the function to be called in every render loop crashing the app.
                //By wrapping the function with an arrow function, the evaluated code will result in a function that can be called whenever the user clicks on the button.
                //https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1
                <div className="flex flex-col text-center truncate w-16 sm:w-18 md:w-20 lg:w-22 xl:w-24 2xl:w-26">
                  <div
                    key={index}
                    onClick={() => filterProjectsByClients(client.IdUser)}
                    className={`flex flex-grow-0 h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-22 lg:w-22 xl:h-24 xl:w-24 2xl:h-26 2xl:w-26 mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-3 2xl:mt-3 shadow-md items-center justify-center text-gray-600 rounded-full ${
                      client.IdUser === clientSelected
                        ? 'bg-gray-200'
                        : 'bg-white'
                    }`}
                  >
                    {/* <img src="https://loremflickr.com/320/240/person" />*/}
                    <p>JP</p>
                    {/* <p className="text-xs sm:text-xs md:text-xm lg:text-lg xl:text-xl 2xl:text-2xl">
                    {client.Name} {client.Surname}
                  </p> */}
                  </div>
                  <p className="text-xs sm:text-xs md:text-xm lg:text-lg xl:text-xl 2xl:text-2x my-1 sm:my-1 md:my-2 lg:my-2 xl:my-3 2xl:my-3">
                    {client.Name}
                  </p>
                </div>
              ))}
            </div>
            {/* Filer options */}
            <div className=" flex flox-row justify-between my-1 sm:my-1 md:my-2 lg:my-2 xl:my-3 2xl:my-3">
              <h2 className="font-semibold text-gray-600">
                3 Filters Selected
              </h2>
              <div className="flex justify-center items-center cursor-pointer">
                <p
                  onClick={clearAll}
                  className="text-base font-medium leading-4 text-gray-600 underline mr-6 "
                >
                  Clear all
                </p>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13"
                    stroke="#1F2937"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1L13 13"
                    stroke="#1F2937"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Widget>

        {/* WIDGET FOR CREATIN NEW PROJECT */}
        <Widget widht="1" height="1">
          {/* DIV FOR STYLES */}
          <div className="w-full h-full flex p-2 flex-col items-center py-0 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
            {/* DIV FOR ERROR */}
            <div>{error && <div className="danger">{error}</div>}</div>
            {/* FORM */}
            <form onSubmit={createProject}>
              <div>
                <label className="text-gray-700">Proyecto:</label>
                <input
                  className="py-2 pl-10 border border-gray-200 w-full"
                  type="text"
                  ref={projectRef}
                  required
                />
              </div>
              <div className="w-full flex flex-row gap-2">
                <button
                  disabled={loading}
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-indigo-500 p-0 flex flex-row justify-center items-center gap-1"
                  type="submit"
                >
                  Crearlo
                </button>
              </div>
            </form>
          </div>
        </Widget>

        {/* MAP OF PROJECTS WITH WIDGETS INSIDE */}
        {clientSelected /* IF I GOT A CLIENT SELECTED I USE CLIENTPROJECTS ARRAY */
          ? clientProjects.map((project, index) => (
              <Widget widht="1" height="1" key={index}>
                <div className="w-full h-full flex p-2 flex-col items-center py-0 bg-grey-50 rounded-lg shadow-md">
                  <div className="w-full flex items-center justify-center">
                    <div className="mt-2 flex flex-col items-center">
                      <img
                        src="https://cdn.tuk.dev/assets/templates/olympus/profile.png"
                        alt="profile"
                        className="shadow-lg rounded-full border-2 border-white"
                      />
                      <p className="mt-2 text-base font-semibold text-center text-gray-600">
                        {project.Name}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-center text-center mt-7 mb-4">
                    <div className="w-1/2	">
                      <p className="text-xs text-gray-600">Firma</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-600">
                        {project.Status}
                      </p>
                    </div>
                    <div className="w-1/2	">
                      <p className="text-xs text-gray-600">Monto</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-600">
                        {project.AmountEUR}
                      </p>
                    </div>
                  </div>
                </div>
              </Widget>
            ))
          : /* IF NOT I RETURN THE FULL PROJECTS ARRAY */
            data.map((project, index) => (
              <Widget widht="1" height="1" key={index}>
                <div className="w-full h-full flex p-2 flex-col items-center py-0 bg-grey-50 rounded-lg shadow-md">
                  <div className="w-full flex items-center justify-center">
                    <div className="mt-2 flex flex-col items-center">
                      <img
                        src="https://cdn.tuk.dev/assets/templates/olympus/profile.png"
                        alt="profile"
                        className="shadow-lg rounded-full border-2 border-white"
                      />
                      <p className="mt-2 text-base font-semibold text-center text-gray-600">
                        {project.Name}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-center text-center mt-7 mb-4">
                    <div className="w-1/2	">
                      <p className="text-xs text-gray-600">Firma</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-600">
                        {project.Status}
                      </p>
                    </div>
                    <div className="w-1/2	">
                      <p className="text-xs text-gray-600">Monto</p>
                      <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-600">
                        {project.AmountEUR}
                      </p>
                    </div>
                  </div>
                </div>
              </Widget>
            ))}
      </LayOut>
    </Fragment>
  );
};

export default Projects;
