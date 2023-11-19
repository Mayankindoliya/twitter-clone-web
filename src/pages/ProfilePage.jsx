import React from 'react'
import '../css/pages/Dashboard.css'
import Menu from '../components/Menu'
import RightSidebar from '../components/RightSidebar'
import Profile from '../components/Profile'

const ProfilePage = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        {/*  xs nav bar */}
        <nav className=" bg-light xs-nav fixed-bottom    d-sm-none">
          <div className="container-fluid">
            <div className="row h-50">
              <div className="col-3">
                <span><i className="fa-solid fa-house fs-3 py-3"></i></span>
              </div>
              <div className="col-3">
                <span><i className="fa-solid fa-magnifying-glass fs-2 py-3 "></i></span>
              </div>
              <div className="col-3">
                <span><i className="fa-solid fa-bell fs-2 py-3"></i></span>
              </div>
              <div className="col-3 ">
                <span><i className="fa-solid fa-envelope fs-2 py-3"></i></span>
              </div>
            </div>
          </div>
        </nav>
        <div className='row'>
          <Menu />
          <Profile />
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage