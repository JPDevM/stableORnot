// Dependencies
import React, { useState, useEffect, Fragment } from 'react';
import { getFirestore, collection, onSnapshot, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 

// Components
import LayOut from '../LayOut';
import Widget from '../LayOut/Widget';
import ProjectCreate from './ProjectCreate';
import ProjectCard from './ProjectCard';
import ProjectSearch from './ProjectSearch';

// Styles
import './_index.css'

// Media
import imgEmptyProfile from '../../assets/img/EmptyProfile.png';
import { withRouter } from 'react-router';

const db = getFirestore();

const Projects = () => {
  //used to store and show the result of the two live querys
  const [data, setData] = useState([]);
  const [dataAgenda, setDataAgenda] = useState([]);
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
      proyectos.forEach((projecto) => {
          projecto.Rute = "/project/"+projecto.IDProject;
      });
      setData(proyectos);
    });
  //AGENDA DB
    //describe the second query
    const q2 = query(collection(db, 'agenda'), where("Rol", "==", "Cliente"));
    //create the second observable onSnapshot using the query
    const unsubscribe2 = onSnapshot(q2, (data) => {
      let agenda = [];
      //forEach to push clean clients data to agenda array
      data.forEach((querySnapshot) => agenda.push(querySnapshot.data()));
      //forEach to add clients Initials to agenda array
      agenda.forEach((cliente) => {
        if (cliente.Surname && cliente.Name){
            cliente.Initials = cliente.Name.slice(0, 1) + cliente.Surname.slice(0, 1);
        } else {
          cliente.Initials = "NN";
          if (cliente.Name)cliente.Initials = cliente.Name.slice(0, 1);
          if (cliente.Surname)cliente.Initials = cliente.Surname.slice(0, 1);  
        }
        cliente.Initials.toUpperCase();
      });
      //recording the agenda to dataAgenda
      setDataAgenda(agenda);
    });
    //unsubscribe to the observable on destroy
    return function cleanup() {
      unsubscribe();
      unsubscribe2();
    };
  }, []); //the ending array is for runin useEffect only once

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

// HTML RENDER
  return (
    <Fragment>
      <LayOut>
        {/* WIDGET TO FILTER BY CUSTOMER */}
        <Widget widht="full" height="full">
          {/* DIV FOR STYLES */}
          <div className="w-full flex overflow-x-auto space-x-1 md:space-x-3 lg:space-x-4 xl:space-x-2 bg-white border1 ScrollbarsOut">
            {/* MAP OF AGENDA */}
            {dataAgenda.map((client, index) => (
              //IMPORTANT: Everything between the curly braces gets evaluated immediately. This causes the function to be called in every render loop crashing the app.
              //By wrapping the function with an arrow function, the evaluated code will result in a function that can be called whenever the user clicks on the button.
              //https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in?rq=1
              <div
                key={index + 'client'}
                className="flex-shrink-0 inline-block flex-col text-center w-14 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16"
              >
                <div
                  onClick={() => filterProjectsByClients(client.IdUser)}
                  style={{
                    backgroundImage: `url(${client.ImgUrl || imgEmptyProfile})`,
                  }}
                  className={`borderWhite flex h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-14 lg:w-14 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2 2xl:mt-2 shadow-md items-center justify-center text-gray-600 bg-cover rounded-full ${
                    client.IdUser === clientSelected
                      ? 'border-green-500 border-solid border-2'
                      : 'border-white border-solid border-2'
                  }`}
                >
                  {!client.ImgUrl ? <p>{client.Initials}</p> : <p></p>}
                </div>
                <p className="fontSmall text-xs sm:text-xs md:text-xm lg:text-lg xl:text-xl 2xl:text-2x my-1 sm:my-1 md:my-2 lg:my-2 xl:my-3 2xl:my-3 truncate">
                  {client.Name} {client.Surname}
                </p>
              </div>
            ))}
          </div>
        </Widget>

      <ProjectSearch />

        {/* MAP OF PROJECTS WITH WIDGETS INSIDE */}
        {clientSelected /* IF I GOT A CLIENT SELECTED I USE CLIENTPROJECTS ARRAY */
          ? clientProjects.map((project, index) => (
              <Widget widht="1" height="1" key={index + 'clientProjects'}>
                <Link to={project.Rute}>
                  <ProjectCard project={project} />
                </Link>
              </Widget>
            ))
          : /* IF NOT I RETURN THE FULL PROJECTS ARRAY */
            data.map((project, index) => (
              <Widget widht="1" height="1" key={index + 'projects'}>
                <Link to={project.Rute}>
                  <ProjectCard project={project} />
                </Link>
              </Widget>
            ))}

        {/* WIDGET FOR CREATIN NEW PROJECT */}
        {!clientSelected && (
          <Widget widht="1" height="1">
            <ProjectCreate />
          </Widget>
        )}
      </LayOut>
    </Fragment>
  );
};

export default Projects;