// Dependencies
import React, { useState, useEffect, Fragment } from 'react';
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';

// Middlewares
import { useAuth } from '../../middlewares/AuthContext';

// Components
import LayOut from '../LayOut';
import Widget from '../LayOut/Widget';
import ProjectShow from './ProjectShow';
import ProjectCreate from './ProjectCreate';
import ProjectCard from './ProjectCard';
import ProjectSearch from './ProjectSearch';
import Avatar from '../Avatar/Avatar';
import JournalShow from '../Journal/JournalShow';
import UserCreate from '../Users/UserCreate';

// Styles
import './_index.css';

// Media
import imgEmptyProfile from '../../assets/img/EmptyProfile.png';

const db = getFirestore();


// TODO: Default IMG from the DB optionally

// const { company } = useAuth(); // poner mas abajo con una coma, donde esta clientAgenda al lado separado con coma
  // var placeholderImg = company.DefaultProjectImage;
  // console.log(company.DefaultProjectImage);
  // 'https://res.cloudinary.com/dhsm3hy5s/image/upload/v1632307596/Medina/Proyectos/Mesa_de_trabajo_1_ijenfk.png';
  //used to store and show the result of the two live querys

const Projects = () => {
  // Retrivign client agenda from the context
  const { clientAgenda } = useAuth();
  // Used to store and show the result of project query
  const [data, setData] = useState([]);
  // Used to filter the projects or make a search
  const [clientSelected, setClientSelected] = useState(false);
  const [clientProjects, setClientProjects] = useState([]);
  const [search, setSearch] = useState("");
  //used to pass the selected Project info with props to ProjectShow modal
  const [projectSelected, setProjectSelected] = useState({});
  const [jorunalSelected, setJournalSelected] = useState({});
  const [showProject, setShowProject] = useState(false);
  const [showJournal, setShowJournal] = useState(false);


  // SETING THE LIVE PROJECT QUERY
  useEffect(() => {
    // Describe the projects query
    const q = query(collection(db, 'proyectos'), orderBy('Name'));
    // Create the first observable onSnapshot using the query
    const unsubscribe = onSnapshot(q, (data) => {
      let proyectos = [];
      data.forEach((querySnapshot) =>
        proyectos.push({
          ...querySnapshot.data(),
          FireId: querySnapshot.id,
          Rute: '/project/' + querySnapshot.id,
        })
      );
      setData(proyectos);
    });
    // Unsubscribe to the observable on destroy
    return function cleanup() {
      unsubscribe();
    };
  }, []); // The ending array is for runin useEffect only once


  // FUCNTION TO PASS DATA AN OPEN MODAL PROJECTSHOW
  const projectShowModal = (project) => {
    setProjectSelected(project);
    setShowProject(true);
  }
  const hideProjectShowModal = () => {
      setShowProject(false);
  }

  // FUCNTION TO PASS DATA AN OPEN MODAL JOURNAL
  const journalShowModal = (jounal) => {
    setShowProject(false);//cierro modal de project
    setJournalSelected (jounal);
    setTimeout(function(){setShowJournal(true)}, 500);//abro el modal de journal despues de un tiempo
  }
  const hideJournalShowModal = () => {
    setShowJournal(false);
    setTimeout(function(){setShowProject(true)}, 500);//abro el modal de journal despues de un tiempo
  }

  // FUNCTION TO FILTER PROJECTS BY CLIENTS
  const filterProjectsByClients = (clientFireId) => {
    if (clientFireId !== clientSelected) {
      setClientSelected(clientFireId);
      setClientProjects(
        data.filter((project) => project.ClientsArray.includes(clientFireId))
      );
      if (search !== '') setSearch('');
    } else {
      setClientSelected(false);
      setClientProjects([]);
    }
  };

  // FUNCTION TO FILTER BY TEXT FIELD
  const searchFunction = (newValue) => {
    setSearch(newValue);
    if (newValue !== '') {
      setClientSelected(9000);
      setClientProjects(
        // We use toLowerCase in order to perform case-INsensitive searches using indexOf
        data.filter(
          (project) =>
            project.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
      );
    } else {
      if (clientSelected === 9000) {
        setClientSelected(false);
        setClientProjects([]);
      }
    }
  };

  // HTML RENDER
  return (
    <Fragment>

      <ProjectShow project={projectSelected} show={showProject} hideFunction={hideProjectShowModal} showJournal={journalShowModal}/>
      <JournalShow journal={jorunalSelected} show={showJournal} hideFunction={hideJournalShowModal}/>
        
      <LayOut>
        {/* WIDGET TO FILTER BY CUSTOMER */}
        <Widget widht="full" height="full">
          {/* DIV FOR STYLES */}
          <div className="w-full flex overflow-x-auto space-x-1 md:space-x-3 lg:space-x-4 xl:space-x-2 bg-white border1 ScrollbarsOut">
            {/* CREATE USER FOR AGENDA */}
            <UserCreate/>
            {/* MAP OF AGENDA */}
            {clientAgenda.map((client, index) => (
              <div
                key={index + 'client'}
                onClick={() => filterProjectsByClients(client.FireId)}
              >
                <Avatar
                  name={client.Name}
                  surname={client.Surname}
                  imgUrl={client.ImgUrl || imgEmptyProfile}
                  initials="JP"
                  selected={client.FireId === clientSelected}
                />
              </div>
            ))}
          </div>
        </Widget>

        <ProjectSearch
          value={search}
          placeHolderText="Buscar Projecto"
          onChange={searchFunction}
        />

        {/* MAP OF PROJECTS WITH WIDGETS INSIDE */}
        {clientSelected /* IF I GOT A CLIENT SELECTED I USE CLIENTPROJECTS ARRAY */
          ? clientProjects.map((project, index) => (
              <Widget widht="1" height="1" key={index + 'clientProjects'}>
                <div onClick={() => projectShowModal(project)}>
                  <ProjectCard project={project} />
                </div>
              </Widget>
            ))
          : /* IF NOT I RETURN THE FULL PROJECTS ARRAY */
            data.map((project, index) => (
              <Widget widht="1" height="1" key={index + 'projects'}>
                <div onClick={() => projectShowModal(project)}>
                  <ProjectCard project={project} />
                </div>
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