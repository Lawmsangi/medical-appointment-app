import React from 'react';
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

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-header">
            <h1 className='color-blue'>HealHub</h1>
        </div>
        <ul className='nav-categories'>
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
  )
}

export default Navbar