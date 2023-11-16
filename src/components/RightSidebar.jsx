import React from 'react'

const RightSidebar = () => {
  return (
    <div className="col-lg-3 d-none d-lg-block  w-25 h-25 right_side_bar">
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
        <div className="row bg-opacity-10 bg-black mx-1 my-2 pb-3 rounded-3">
          <div className="col">
            <div className="trending">
              <p className="fs-6 fw-bold py-2">Trends for you</p>
              <div className="row">
                <div className="col-9">
                  <p className="m-0">Trending in Pakistan</p>
                </div>
                <div className="col-3 text-end">
                  <span><i className="fa-solid fa-ellipsis pe-2"></i></span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-6 fw-bold mb-0">Nawaz Sharif</p>
                  <p className="">12.7k Tweets</p>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <p className="m-0">Technology . Trending</p>
                </div>
                <div className="col-3 text-end">
                  <span><i className="fa-solid fa-ellipsis pe-2"></i></span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-6 fw-bold mb-0">#TikTok</p>
                  <p className="">101k Tweets</p>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <p className="m-0">Trending in Pakistan</p>
                </div>
                <div className="col-3 text-end">
                  <span><i className="fa-solid fa-ellipsis pe-2"></i></span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-6 fw-bold mb-0">Audio</p>
                  <p className="">132k Tweets</p>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <p className="m-0">Trending in Pakistan</p>
                </div>
                <div className="col-3 text-end">
                  <span><i className="fa-solid fa-ellipsis pe-2"></i></span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-6 fw-bold mb-0">#Bajwa</p>
                  <p className="">8,104 Tweets</p>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <p className="m-0">Trending in Pakistan</p>
                </div>
                <div className="col-3 text-end">
                  <span><i className="fa-solid fa-ellipsis pe-2"></i></span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-6 fw-bold mb-0">Shame</p>
                  <p className="">141k Tweets</p>
                </div>
              </div>

              <div className="row">
                <div className="col-9">
                  <p className="m-0">Trending in Pakistan</p>
                </div>
                <div className="col-3 text-end">
                  <span><i className="fa-solid fa-ellipsis pe-2"></i></span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-6 fw-bold mb-0">#dollarvsrupee</p>
                  <p className="">2,449 Tweets</p>
                </div>
              </div>

              <span className="text-info">Show more</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RightSidebar