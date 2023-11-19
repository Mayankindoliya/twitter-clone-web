import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logout } from '../redux/action'

const RightSidebar = () => {

  const [trends, setTrends] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTrending = () => {
    axios.get('http://localhost:4000/trending')
      .then(result => {
        setTrends(result.data.data);
      }).catch(err => {
        if (err.response.status === 401) {
          dispatch(logout());
          navigate('/login')
        }
        Swal.fire({
          icon: 'error',
          title: err.response.data.message || 'something went wrong'
        })
      })
  }

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <div className="col-lg-4 d-none d-lg-block h-25 right_side_bar">
      <div className="">
        <div className="bg-opacity-10 bg-black rounded-pill">
          <div className="row d-flex align-items-center ">
            <div className="col-2 text-end fs-4">
              <span><i className="fa-solid fa-magnifying-glass ps-4"></i></span>
            </div>
            <div className="col-10">
              <input type="text"
                className="form-control-lg border-0 me-1 w-75 bg-transparent"
                placeholder="Search Twitter" />
            </div>
          </div>
        </div>
        <div className='card mx-1 my-2 pb-3 rounded-3'>
          <h5 class="card-header">Trends for you</h5>
          <div className='card-body'>
            {trends.map((trend, index) => {
              return (
                <div className='trend d-flex justify-content-between mb-2'>
                  <div className='d-flex align-items-start flex-column'>
                    <div>{trend.category} . Trending</div>
                    <div><strong>{trend.hashtag}</strong></div>
                    <div>{trend.tweets_count} posts</div>
                  </div>
                  <div>
                    <span><i class="fa-solid fa-ellipsis pe-2"></i></span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* who to follow */}
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
        </div>
      </div>
    </div>
  )
}

export default RightSidebar