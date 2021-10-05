// Resourses
// Tailwind UI Kit: Black Simple With Icons
// https://app.tailwinduikit.com/listing/webapp/navigation/horizontal_navigation
// React Router:
// https://reactrouter.com/web/example/sidebar
// -------------------------------------------------------

// Dependencies
import React, { Fragment, useState } from 'react';
import { useAuth } from '../../middlewares/AuthContext';
import PrivateRoute from '../../middlewares/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  // Route,
  Link,
  useHistory,
} from 'react-router-dom';

// Components
import Projects from '../Projects';
import Profile from '../../pages/Profile';
import Help from '../../pages/Help';
import Settings from '../../pages/Settings';

// Styles
import './_navbar.css';

// Media
import Logo from '../../assets/img/logo/logo-white.png';

// User entity routes
const userRoutes = [
  {
    path: '/projects',
    exact: false,
    component: 'Projects',
  },
  {
    path: '/profile',
    exact: false,
    component: 'Profile',
  },
  {
    path: '/help',
    exact: false,
    component: 'Help',
  },
  {
    path: '/settings',
    exact: false,
    component: 'Settings',
  },
];

const NavBar = (Props) => {
  const [showUserMenu, setShowUserMenu] = useState(null);

  // Auth
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
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
      <Router>
        {/* Code block starts */}
        <header>
          <nav className="w-full bg-gray-800 shadow">
            <div className="h-16 flex justify-between items-center mx-4">
              {/* Logo */}
              <div className="flex items-center justify-self-start">
                <div className="mr-10 flex items-center">
                  <img
                    className="logo object-scale-down w-10 h-10"
                    src={Logo}
                    alt="Logo Name"
                  />
                </div>
              </div>

              <div className="h-full xl:flex items-center justify-end">
                <div className="h-full flex">
                  {/* Search */}
                  <div className="px-6 h-full flex items-center justify-center border-l border-gray-700 text-gray-400 flex items-center">
                    <input
                      type="text"
                      className="bg-transparent focus:outline-none text-xs w-0 transition duration-150 ease-in-out"
                      placeholder="Type something..."
                    />
                    <svg
                      onclick="searchHandler(this)"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-search cursor-pointer"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                    </svg>
                  </div>

                  <div
                    className="flex items-center pl-8 relative cursor-pointer"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    {showUserMenu && (
                      <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow mt-16 top-0 ">
                        {/* My Profile */}
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal md:py-1 lg:py-1 xl:py-2 2xl:py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <Link to="/profile" className="ml-2">
                            <div className="flex items-center">
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
                              <p className='ml-2'>My Profile</p>
                            </div>
                          </Link>
                        </li>
                        {/* Help Center */}
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal md:py-1 lg:py-1 xl:py-2 2xl:py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <Link to="/help" className="ml-2">
                            <div className="flex items-center">
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
                              <p className='ml-2'>Help Center</p>
                            </div>
                          </Link>
                        </li>

                        {/* Settings */}
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal md:py-1 lg:py-1 xl:py-2 2xl:py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <Link to="/settings" className="ml-2">
                            <div className="flex items-center">
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
                              <p className='ml-2'>Settings</p>
                            </div>
                          </Link>
                        </li>

                        {/* Logout */}
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal ml-1 md:py-1 lg:py-1 xl:py-2 2xl:py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <Link
                            to="/help"
                            className="ml-2"
                            onClick={handleLogout}
                          >
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-box-arrow-right"
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
                              <p className='ml-2'>Log Out</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    )}

                    <img
                      className="rounded h-10 w-10 object-cover"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Render Pages */}
        <section>
          <Switch>
            <PrivateRoute path="/projects">
              <Projects />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/help">
              <Projects />
            </PrivateRoute>
            <PrivateRoute path="/settings">
              <Settings />
            </PrivateRoute>
          </Switch>
          {/* <Switch>
          {userRoutes.map((route, index) => (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
            >
              <route.component />
            </PrivateRoute>
          ))}
        </Switch> */}
        </section>
      </Router>
    </Fragment>
  );
};

NavBar.propTypes = {};

export default NavBar;
