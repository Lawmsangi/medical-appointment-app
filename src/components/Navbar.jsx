import React, { useCallback, useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  const dynamicStyles = {
    left: isClicked ? '0' : '-300px',
    background: isClicked ? 'white' : 'white',
    transition: 'left 0.7s ease-in-out',
  };

  const closeSidebar = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsClicked(false);
    }
  }, []); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        isClicked(false);
      } else {
        isClicked(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${isClicked ? 'open' : ''}`}>
      <div className="nav-menu" onClick={handleClick}>
        <IoMenu />
      </div>

      <div className='menu' style={dynamicStyles}>
        <div className="nav-header">
        <h1 className='color-blue'>HealHub</h1>
      </div>

      <ul className='nav-categories' onClick={closeSidebar}>
        <li>
          <NavLink to="/" className="icon-link" >
            <FaUserDoctor /> Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" className="icon-link">
            <BiCategory />Category
          </NavLink>
        </li>
        <li>
          <NavLink to="/appointment" className="icon-link">
            <MdOutlineMedicalServices />My Appointments
          </NavLink>
        </li>
      </ul>

      <div className="nav-footer">
        <ul className='nav-links'>
          <li>
            <NavLink className="icon-link">
              <FaFacebookF />
            </NavLink>
            <NavLink className="icon-link">
              <FaTwitter />
            </NavLink>
            <NavLink className="icon-link">
              <TiSocialGooglePlus />
            </NavLink>
            <NavLink className="icon-link">
              <FaTelegramPlane />
            </NavLink>
            <NavLink className="icon-link">
              <FaPinterestP />
            </NavLink>
          </li>
        </ul>
        <span>© 2024 All Rights Reserved</span>
      </div>
      </div>

      
    </div>
  )
}

export default Navbar