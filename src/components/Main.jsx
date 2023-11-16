import React, { useEffect, useState } from 'react'
import Tweet from './Tweet'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Main = () => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  const {token} = useSelector(state => state.user);

  const onsubmit = (event) => {
    axios.post('http://localhost:4000/tweets', {
      description: tweet
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      Swal.fire({
        icon: 'success',
        title: 'tweet added successfully'
      })
      setTweet('')
      fetchTweets();
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: err.response.message || 'something went wrong'
      })
    })
  }

  const fetchTweets = () => {
    axios.get('http://localhost:4000/tweets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
        setTweets(result.data.data)
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: err.response.message || 'something went wrong'
      })
    })
  }

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="col-12 col-sm-10 col-md-9 col-lg-6  main_bar ">
      <div className="row d-flex justify-content-between align-items-center ps-1">
        <div className="col-1 pt-2">
          <div><span className="fs-4 fw-bold">Home</span></div>
        </div>
        <div className="col-1 me-3">
          <div><span className="fs-4"><i className="fa-solid fa-star"></i> </span></div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col pt-2 ">
          <div className="row">
            <div className="col-2">
              <img className="rounded-circle" src="/profile.jfif" alt="" height="50px" />
            </div>
            <div className="col-9 col-sm-10 ">
              <input className="border-0 bg  form-control-lg" type="text" placeholder="What's happening?" 
                value={tweet} onChange={(ev) => setTweet(ev.target.value)}
              />
              <div className="ps-3 d-flex text-info">
                <p><span><i className="fa-solid fa-earth-americas "></i></span></p>
                <p className="fw-bold ps-1 ">Everyone can reply</p>
                <hr />
              </div>
              <div className="row pb-2 justify-content-center">
                <div className="col-9 text-info">
                  <span className="ps-3"><i className="fa-solid fa-image"></i></span>
                  <span className="ps-3"><i className="fa-solid fa-gift"></i></span>
                  <span className="ps-3"><i className="fa-solid fa-face-grin"></i></span>
                  <span className="ps-3"><i className="fa-solid fa-location-pin"></i></span>
                </div>
                <div className="col-3 col-sm-2  ">
                  <button className="text-decoration-none fs-6  fw-bold text-white bg-info py-1 px-3  rounded-pill"
                    onClick={onsubmit}>Tweet</button>
                </div>
              </div>


            </div>
          </div>
          <div className="row  d-flex  justify-content-between align-items-center border">
            <div className="col-11 col-sm-10 ps-5  pt-1 d-flex pt-2">
              <span><i className="fa-solid fa-comment"></i></span>
              <p className="ps-1">Bitcoin cryptocurrency. <span className="text-info fw-bold ">see
                more</span></p>
            </div>
            <div className="col-1 col-sm-2 text-end fs-5 pt-2 ps-2">
              <span><i className="fa-solid fa-xmark"></i></span>
            </div>
          </div>
        </div>
      </div>
      <Tweet tweets={tweets} />
    </div>
  )
}

export default Main