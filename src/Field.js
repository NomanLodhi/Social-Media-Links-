import React from 'react'
import Profile from './Profile.jpg'
export default function Field() {
  return (
  <>
  <div className="d-flex align-item-center justify-content-center p-5 my-5 ">
    <div className="card bg-card border border-light text-light border-3 w-card">
<div className="card-header fs-4 text-center  py-2">Connect On Social Platforms</div>
      <img src={Profile} alt="" className='card-img-top' />
      <p className="text-warning mx-auto fw-bold fs-1">Noman Lodhi</p>
     <div className="text-light fs-5 py-1 text-center">Social Media Links</div>
      <div className="card-text text-justify p-2  py-3">
      Unlock a world of connections at your fingertips! Join me on my social media journey and stay engaged.
      </div>
      <div className="d-flex align-item-center justify-content-center my-3">
        <a className="bg-light mx-1 text-center fs-4 d-flex justify-content-center align-items-center rounded-circle size-icon text-custom-blue" href='https://www.facebook.com/noman.lodhi.733' target='_main'><i class="bi bi-facebook"></i></a>
        <a className="bg-light mx-1 text-center fs-4 d-flex justify-content-center align-items-center rounded-circle size-icon text-custom-blue" href='https://www.instagram.com/nomanlodhi348/' target='_main'><i class="bi bi-instagram"></i></a>
        <a className="bg-light mx-1 text-center fs-4 d-flex justify-content-center align-items-center rounded-circle size-icon text-custom-blue" href='#' target='_main'><i class="bi bi-twitter-x"></i></a>
        <a className="bg-light mx-1 text-center fs-4 d-flex justify-content-center align-items-center rounded-circle size-icon text-custom-blue" href='https://www.threads.net/@nomanlodhi348' target='_main'><i class="bi bi-threads"></i></a>
        <a className="bg-light mx-1 text-center fs-4 d-flex justify-content-center align-items-center rounded-circle size-icon text-custom-blue" href='https://github.com/NomanLodhi' target='_main'><i class="bi bi-github"></i></a>
        <a className="bg-light mx-1 text-center fs-4 d-flex justify-content-center align-items-center rounded-circle size-icon text-custom-blue" href='https://www.linkedin.com/in/noman-lodhi-274313247/' target='_main'><i class="bi bi-linkedin"></i></a>
      </div>
  
    </div>
  </div>
  </>
  )
}
