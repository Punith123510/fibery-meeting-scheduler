import React, { useState } from 'react';
import SchedulingForm from './SchedulingForm1';
import Login from './Login';
import Signup from './Signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const Header = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleDemoButtonClick = () => {
    setShowDemoModal(true);
  };

  const handleSignupButtonClick = () => {
    setShowSignupModal(true);
  };

  const handleSignupSuccess = () => {
    setShowLoginModal(true);
    setShowSignupModal(false); 
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Fibery" className="h-8 w-16 mr-4" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Solutions</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Product</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Resources</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a></li>
            </ul>
          </nav>
        </div>
        <div>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Log out</button>
          ) : (
            <>
              <button onClick={() => setShowLoginModal(true)} className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">Log in</button>
              <button onClick={handleDemoButtonClick} className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-green-600">Get a demo</button>
              <button onClick={handleSignupButtonClick} className="bg-green-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-green-600">Sign up</button>
            </>
          )}
        </div>
      </div>
      {showLoginModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <Login onSuccess={handleLoginSuccess} />
        </div>
      )}
      {showDemoModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-8 relative w-3/4 h-3/4 overflow-auto">
            <button
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
              onClick={() => setShowDemoModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <SchedulingForm onClose={() => setShowDemoModal(false)} />
          </div>
        </div>
      )}
      {showSignupModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-md p-8 relative w-3/4 h-3/4 overflow-auto">
            <button
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
              onClick={() => setShowSignupModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Signup onSignupSuccess={handleSignupSuccess} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
