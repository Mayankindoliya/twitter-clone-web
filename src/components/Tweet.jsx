import React from 'react'
import moment from 'moment-timezone';

const Tweet = (props) => {

  const timeCalculation = (time) => {
    const currentTimestamp = moment().tz('Asia/Kolkata');
    const targetDate = moment(time).tz('Asia/Kolkata');
    const timeDifference = currentTimestamp.diff(targetDate);
    const duration = moment.duration(timeDifference);

    // Access individual components of the duration
    const days = duration.days();
    const hours = duration.hours();
    return days ? `${days} days ${hours}h`: `${hours}h`
  }

  return (
    <div>
      {props.tweets.map((tweet) => {
        return (
          <div className="row mt-1 border d-flex " key={tweet._id}>
            <div className="col-3 mt-2">
              <img className="rounded-circle" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" height="50px" />
            </div>
            <div className="col-9 ">
              <div className="row d-flex justify-content-between align-items-center ps-1">
                <div className="col-10 pt-2 ">
                  <div>
                    <p><span className="fw-bold">{tweet.user.fullname} </span>@{tweet.user.username} . {timeCalculation(tweet.updated_at)}</p>
                  </div>
                </div>
                <div className="col-1 me-2 ps-0">
                  <div><span><i className="fa-solid fa-ellipsis fs-5 py-3"></i></span></div>
                </div>
              </div>
              <div className="col">
                {tweet.description}
                <br></br>
                <div className="row pt-4">
                  <div className="col"><span><i className="fa-solid fa-comment"></i></span></div>
                  <div className="col"><i className="fa-solid fa-heart"></i></div>
                </div>

              </div>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Tweet