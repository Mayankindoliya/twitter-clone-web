// ProfilePage.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector(state => state.user);

  return (
    <div className='col-12 col-sm-10 col-md-9 col-lg-6 '>
      <div className="container mt-3">
        {/* Cover Image */}
        <div className="row">
          <div className="col-md-12">
            <img src="https://images.unsplash.com/photo-1596097500554-30c105edacfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHdpdHRlciUyMGhlYWRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Cover" className="img-fluid w-100" />
          </div>
        </div>

        {/* Profile Header */}
        <div className="row mt-3">
          <div className="col-md-3">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Profile" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-9">
            <h2>{user.fullname}</h2>
            <p>@{user.username}</p>
            <p>Bio: Web Developer | Passionate about coding and design | #TechEnthusiast</p>
            <button className="btn btn-outline-primary">Edit Profile</button>
          </div>
        </div>

        {/* Tweets Section */}
        <div className="row mt-4">
          <div className="col-12">
            <div class="card">
              <h5 class="card-header">Who to Follow</h5>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <div>
                      <img className="rounded-circle" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" height="50px" />
                    </div>
                    <div className='p-2 d-flex flex-column'>
                      <span><strong>Name</strong></span>
                      <span class="">@username</span>
                    </div>
                  </div>
                  <div>
                    <button className='btn btn-primary'>Follow</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <div>
                      <img className="rounded-circle" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" height="50px" />
                    </div>
                    <div className='p-2 d-flex flex-column'>
                      <span><strong>Name</strong></span>
                      <span class="">@username</span>
                    </div>
                  </div>
                  <div>
                    <button className='btn btn-primary'>Follow</button>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <div>
                      <img className="rounded-circle" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" height="50px" />
                    </div>
                    <div className='p-2 d-flex flex-column'>
                      <span><strong>Name</strong></span>
                      <span class="">@username</span>
                    </div>
                  </div>
                  <div>
                    <button className='btn btn-primary'>Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profile;
