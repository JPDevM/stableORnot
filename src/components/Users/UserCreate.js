// Dependencies
import React, { useState, useRef, Fragment } from 'react';
import { getFirestore, collection , addDoc } from 'firebase/firestore';

// Components
import Avatar from '../Avatar/Avatar';
import InputField from '../Forms/InputField';
import AnimationFramePopUp from '../Animations/AnimationFramePopUp';

// Styles

// Media
import imgEmptyProfile from '../../assets/img/EmptyProfile.png';

const db = getFirestore();

const UserCreate = () => {

  // Used for creating a new project
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Used for show or hide modal
  const [showModal, setShowModal] = useState(false);
  // Form values
  const [typology, setTypology] = useState(1); //roll came from this
  const name = useRef("");
    const surname = useRef(""); //just for the two typologys of persons
  const document = useRef(""); //DNI, NIE, NIF, Tax Number (string)
  const email = useRef("");
    const companyFireId = useRef(""); //just for the two typologys of persons
  //const nationality = useRef(""); //Alpha-2 Code Desplegable
  const address = useRef("");
  const city = useRef("");
  const postCode = useRef("");
  const province = useRef("");
  const country = useRef("");

  function showOrHide(){
    setShowModal(!showModal);
  }

  // FUNTION TO CREATE NEW PROJECTS
  /*async function createProject(e) {
    console.log("funcion de creación fue llamada");
    try {
      setError('');
      setLoading(true);
      const docRef = await addDoc(collection(db, "proyectos"), {
        Name: nameRef.current.value,
        Description: descriptionRef.current.value,
        Status: statusRef.current.value,
      });
      console.log("Proyecto creado con ID: ", docRef.id);
    } catch {
      setError('Failed to create a new project');
      console.log('Failed to create a new project');
    }
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    statusRef.current.value = '';
    setShowModal(false);
    setLoading(false);
  }*/

  return (
    <Fragment>

{/* WIDGET */}
      <div onClick={() => showOrHide()}>
        <Avatar
            name="Nuevo"
            surname=""
            imgUrl={imgEmptyProfile}
            //initials="Nuevo"
            selected={false}
        />
      </div>
      <AnimationFramePopUp showModal={showModal} showOrHide={showOrHide}>
                <div className="w-1/2 m-auto px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7 bg-gray-100 border-gray-300 border-2 rounded">
                  {/* <div className="flex items-center justify-center">
                      <div className="w-40 h-40 p-16 bg-gray-100 rounded-md flex items-center justify-center">
                          <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.5 12H22.515" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                      </div>
                  </div> */}
                      <div className="flex items-center space-x-9 mb-2">
                        <div className="w-1/3	 placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">Cliente</div>
                        <div className="w-1/3	 placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">Empresa</div>
                        <div className="w-1/3	 placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200">Contratista</div>
                      </div>
                      <div>
                        <InputField lableProp="Nombre:" refProp={name} placeholderProp="Nombre" />
                        <InputField lableProp="Apellido:" refProp={surname} placeholderProp="Apellido" />
                        <InputField lableProp="DNI NIE NIF:" refProp={document} placeholderProp="Documento" />
                        <InputField lableProp="Email:" refProp={email} placeholderProp="Email" />
                        <InputField lableProp="Compañia relacionada:" refProp={companyFireId} placeholderProp="$6%FG5$%" />
                        {/* <InputField lableProp="Nacionalidad:" refProp={nationality} placeholderProp="Nombre" /> */}
                        <InputField lableProp="Dirección:" refProp={address} placeholderProp="Dirección" />
                        <InputField lableProp="Ciudad:" refProp={city} placeholderProp="Ciudad" />
                        <InputField lableProp="Codigo Postal:" refProp={postCode} placeholderProp="Codigo Postal" />
                        <InputField lableProp="Provincia:" refProp={province} placeholderProp="Provincia" />
                        <InputField lableProp="País:" refProp={country} placeholderProp="País" />
                      </div>
                      {/* <div className="flex items-center space-x-9 mt-8">
                          <input placeholder="placeholder" className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                          <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                              <select ref={statusRef} className="text-sm text-gray-500 w-full focus:outline-none">
                                  <option selected>Opportunity</option>
                                  <option>Signed</option>
                                  <option>None</option>
                              </select>
                          </div>
                      </div> */}
                  <div className="flex items-center justify-between mt-9">
                      <button disabled={loading} onClick={() => showOrHide()} className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">Cancelar</button>
                      <button disabled={loading} className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Agendar</button>
                  </div>
                </div>


                </AnimationFramePopUp>

{/* MODAL */}


    </Fragment>
  );
};

export default UserCreate;