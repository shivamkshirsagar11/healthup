import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
  let user = JSON.parse(localStorage.getItem('login_user'));
  // let userD = JSON.parse(localStorage.getItem('user_user'));
  // console.log('from navbar',user);
  // console.log('from navbar',userD);
  // console.log('from navbar',userD);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Healthup/home">Healthup</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Healthup/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Healthup/home">Link</Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="aaa" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Healthup/register/patient">Book Appointment</Link></li>
            <li><Link className="dropdown-item" to="/Healthup/show/patient">Show Appointments</Link></li>
            <li><Link className="dropdown-item" to="/Healthup/user/appointments/history">History</Link></li>
            <li><Link className="dropdown-item" to="/Healthup/home">Settings</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/Healthup/home" tabIndex="-1" aria-disabled="true">Last Login: {user.lastLogin}</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}
