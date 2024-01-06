import React from 'react'
import Profile from './Profile.jpg'
export default function Field() {
  return (
  <>
  <div className="container d-flex align-item-center justify-content-center p-5 my-5 ">
    <div className="card bg-card border border-light text-light border-3 py-4 ">
      <img src={Profile} alt="" className='w-25 mx-auto rounded-circle my-4' />
      <p className="text-warning mx-auto fw-bold display-5">Noman Lodhi</p>
      <div className="rounded-pill btn btn-outline-light w-75 mx-auto my-3 btn-social fw-bold fs-5 "><a href="https://www.instagram.com/nomanlodhi348/" className=' text-decoration-none w-100' target='main'><i class="bi bi-instagram mx-2"></i> Instagram</a></div>
      <div className="rounded-pill btn btn-outline-light w-75 mx-auto my-3 btn-social fw-bold fs-5 "><a href="https://www.facebook.com/noman.lodhi.733/" target='main' className=' text-decoration-none w-100'> <i class="bi bi-facebook mx-2"></i>Facebook</a></div>
      <div className="rounded-pill btn btn-outline-light w-75 mx-auto my-3 btn-social fw-bold fs-5 "><a href="https://www.linkedin.com/in/noman-lodhi-274313247/" target='main' className=' text-decoration-none w-100'><i class="bi bi-linkedin mx-2"></i> LinkedIn</a></div>
      <div className="rounded-pill btn btn-outline-light w-75 mx-auto my-3 btn-social fw-bold fs-5 "><a href="https://www.threads.net/@nomanlodhi348" target='main' className=' text-decoration-none w-100'><i class="bi bi-threads mx-2"></i>Threads</a></div>
      <div className="rounded-pill btn btn-outline-light w-75 mx-auto my-3 btn-social fw-bold fs-5 "><a href="https://github.com/NomanLodhi" target='main' className=' text-decoration-none w-100'><i class="bi bi-github mx-2"></i>Githib</a></div>
    </div>
  </div>
  </>
  )
}
