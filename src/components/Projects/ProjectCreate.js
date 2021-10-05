// Dependencies
import React, { useState, useRef, Fragment } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Components

// Styles

// Media
import NuevoProjecto from '../../assets/img/corporate/new-project_model1-w600.png'
const db = getFirestore();

const ProjectCreate = () => {

  //used for creating a new project
  const projectRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <Fragment>
      <div className="w-full h-full flex justify-center p-8 flex-col">
        {/* div error */}
        <div>{error && <div className="danger">{error}</div>}</div>
        <img
          src={NuevoProjecto}
          alt="Nuevo proyecto"
          className="w-32 hero container max-w-screen-lg mx-auto"
        />
        <form onSubmit={createProject}>
          <div>
            <input
              className="w-full text-start border border-gray-300 pl-3 py-2 rounded-full text-sm focus:outline-none bg-transparent focus:border-gray-400 focus:shadow-md text-gray-600 my-4"
              placeholder="Nuevo Projecto"
              type="text"
              ref={projectRef}
              required
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProjectCreate;
