// Dependencies
import React, { Fragment, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

// Middlewares
import { useAuth } from '../../middlewares/AuthContext';

const MainMenu = () => {
  
  // Auth
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  // LogAuth Function
  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to LogOut from NavBar');
      console.log(error);
    }
  }

  return (
    <Fragment>
      <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow mt-16 top-0 ">
        {/* My Profile */}
        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal  hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <NavLink exact to="/profile" activeClassName="active">
            <div className="flex items-center mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={7} r={4} />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <p className="ml-2">My Profile</p>
            </div>
          </NavLink>
        </li>
        {/* Help Center */}
        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal  hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <NavLink exact to="/help" activeClassName="active">
            <div className="flex items-center mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-help"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <line x1={12} y1={17} x2={12} y2="17.01" />
                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
              </svg>
              <p className="ml-2">Help Center</p>
            </div>
          </NavLink>
        </li>

        {/* Settings */}
        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal  hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <NavLink exact to="/settings" activeClassName="active">
            <div className="flex items-center mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              <p className="ml-2">Settings</p>
            </div>
          </NavLink>
        </li>

        {/* Logout */}
        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal ml-1  hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
          <button onClick={handleLogout}>
            <div className="flex items-center my-1 sm:my-1 md:my-2 lg:my-2 xl:my-2 2xl:my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              <p className="ml-2">Log Out</p>
            </div>
          </button>
        </li>
      </ul>
    </Fragment>
  );
};
export default MainMenu;
