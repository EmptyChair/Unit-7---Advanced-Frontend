import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
    //3. UI of Routing
  return (
    <div className="fixed-top border border-dark px-3 py-2 col-1 mx-3 my-3 ">
      <ul className="nav flex-column nav-tabs">
        <h4 className='fw-bold'>Navigation</h4>
        <li className="nav-item">
        <a className="nav-link active" href="/">Tasks</a>  
        </li>
        <li className="nav-item">
        <a className="nav-link active" href="/users">Users</a>  
        </li>
      </ul>
    </div>
  )
}

/*
<NavLink to="/">Tasks</NavLink>
<NavLink to="/users">Users</NavLink>
fixed-bottom mx-3 d-flex justify-content-end
fw-bold border border-dark px-3 py-2

<div className="fixed-bottom mx-3 d-flex justify-content-end ">
        <p className="fw-bold border border-dark px-3 py-2">
          <div className="d-flex justify-content-end">
            Author: Roman Sheludko
          </div>
          <div className="d-flex justify-content-end">Group FS-40-2</div>
          <div className="d-flex justify-content-end">July 2024</div>
        </p>
      </div>
*/

export default Navigation