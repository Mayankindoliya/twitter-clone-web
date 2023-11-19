import React from 'react'
import '../css/components/Menu.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/action'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout)
    navigate('/login')
  }

  return (
    <div
      className="d-none col-sm-2  d-sm-block  col-md-3 col-lg-2 d-flex flex-column text-sm-end text-md-start  align-items-lg-start left_sidebar border-end ">
      <div>
        <span><i className="fa-brands fa-twitter display-5 text-info py-3  "></i></span>

      </div>
      <div className="d-flex align-items-center justify-content-sm-end justify-content-md-start">
        <span><i className="fa-solid fa-house fs-3 py-3"></i></span>
        <NavLink to="/dashboard" className="nav-link">
          <p className="d-none d-md-block fs-4 pt-3 ps-2 fw-bold">Home</p>
        </NavLink>
      </div>
      <div className="d-flex align-items-center  justify-content-sm-end justify-content-md-start">
        <span><i className="fa-solid fa-hashtag fs-2 py-3 d-none d-md-block"></i></span>
        <p className="d-none d-md-block fs-4 pt-3 ps-2">Explore</p>
      </div>
      <div className="d-flex align-items-center  justify-content-sm-end justify-content-md-start">
        <span><i className="fa-solid fa-bell fs-2 py-3"></i></span>
        <p className="d-none d-md-block fs-4 pt-3 ps-2">Notifications</p>
      </div>
      <div className="d-flex align-items-center  justify-content-sm-end justify-content-md-start">
        <span><i className="fa-solid fa-envelope fs-2 py-3"></i></span>
        <p className="d-none d-md-block fs-4 pt-3 ps-2">Messages</p>
      </div>
      <div className="d-flex align-items-center  justify-content-sm-end justify-content-md-start">
        <span><i className="fa-solid fa-sign-out fs-2 py-3"></i></span>
        <p className="d-none d-md-block fs-4 pt-3 ps-2" style={{ cursor: 'pointer' }} onClick={onLogout}>Logout</p>
      </div>
      <div className="d-flex align-items-center  justify-content-sm-end justify-content-md-start">
        <span><i className="fa-solid fa-user fs-2 py-3"></i></span>
        <NavLink to="/profile" className="nav-link">
          <p className="d-none d-md-block fs-4 pt-3 ps-2">Profile</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Menu