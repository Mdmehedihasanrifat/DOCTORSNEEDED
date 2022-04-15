import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
const NavbarDark = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto text-brand-dark'>
          <li className='nav-item '>
            <Link to='/' className='nav-link mr-5'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link mr-2' to='/doctor'>
              Doctors
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link mr-5' to='/'>
              Blogs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/appointment' className='nav-link mr-2 '>
              Get Appointment
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/dashboard/appointment' className='nav-link mr-5'>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link mr-5 '>
              <p className="text-black-50">Login</p>
            </Link>
          </li>




        </ul>
      </div>
    </nav>
  );
};

export default NavbarDark;
