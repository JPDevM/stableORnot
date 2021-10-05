// Resourses
// Tailwind UI Kit: Black Simple With Icons
// https://app.tailwinduikit.com/listing/webapp/navigation/horizontal_navigation

// Dependencies
import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

// Router
import NavBarRouter from '../../routers/NavBarRouter';

// Components
import MainMenu from '../Navbar/MainMenu'

// Styles
import './_navbar.css';

// Media
import Logo from '../../assets/img/logo/logo-white.png';
// TODO: Import avatar

const NavBar = () => {
  const [showUserMenu, setShowUserMenu] = useState(null);

  return (
    <Fragment>
      <Router>
        {/* Code block starts */}
        <header>
          <nav className="w-full bg-gray-800 shadow">
            <div className="h-16 flex justify-between items-center mx-4">
              {/* Logo */}
              <Link exact to="/" activeClassName="active" className="ml-2">
                <div className="flex items-center justify-self-start">
                  <img
                    className="logo object-scale-down w-10 h-10"
                    src={Logo}
                    alt="Logo Name"
                  />
                </div>
              </Link>

              <div className="h-full xl:flex items-center justify-end">
                <div className="h-full flex">
                  <div
                    className="flex items-center relative cursor-pointer"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    {showUserMenu && <MainMenu />}
                    {/* TODO: Import avatar */}
                    <img
                      className="rounded h-10 w-10 object-cover"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                      alt="profile logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Render Pages */}
        <section>
          <NavBarRouter />
        </section>
      </Router>
    </Fragment>
  );
}

export default NavBar;
