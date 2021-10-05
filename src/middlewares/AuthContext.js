// Dependencies
import React, { useContext, useState, useEffect } from 'react';
import fire from '../firebase';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  sendPasswordResetEmail, } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, where, query, getDocs, orderBy } from 'firebase/firestore';

// Creating Auth and Database entities for export inside the context
const auth = getAuth(fire);
const db = getFirestore();

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [fullAgenda, setFullAgenda] = useState([]);
  const [clientAgenda, setClientAgenda] = useState([]);
  const [workerAgenda, setWorkerAgenda] = useState([]);
  const [company, setCompany] = useState({});

  function singup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function getAgendaData() {
    // Retriving agenda
      const agendaQuery = query(collection(db, 'agenda'),  orderBy("Name"));
      const unsubscribe2 = onSnapshot(agendaQuery, (data) => {
        let agenda = [];
        data.forEach((querySnapshot) => agenda.push({ ...querySnapshot.data(), FireId: querySnapshot.id }));
        //escribiendo los 3 arrays a exportar en el contexto
        setFullAgenda(agenda);
        setClientAgenda(
          agenda.filter((contact) => contact.Rol === "Cliente")
        );
        setWorkerAgenda(
          agenda.filter((contact) => contact.Rol !== "Cliente")
        );
      });
  }
  
  const getCompanyData = async () => {
    const q = query(collection(db, 'company'), where("Name", "==", "Medina Architecture")); //delete where to get all company
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((company) => setCompany({ ...company.data(), FireId: company.id }));
    //if we want to retrive an array of companies insted of only one company object.
        /*let companysArray = [];
        querySnapshot.forEach((data) => {
          companysArray.push(journal.data())
        });
        setJournalsData(companysArray);*/
  }

  useEffect(() => {
    const unsubscribe1 = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        getAgendaData();
        getCompanyData();
      }
    });
    //unsubscribe to the observable on destroy
    return function cleanup() {
      unsubscribe1();
    };
  }, []);

  const value = {
    currentUser,
    fullAgenda,
    workerAgenda,
    clientAgenda,
    company,
    login,
    singup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
