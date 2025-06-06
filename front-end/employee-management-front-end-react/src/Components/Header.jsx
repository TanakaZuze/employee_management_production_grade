import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          <h3 className='text-white px-2'>Employee Management System</h3>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link text-white"to='/'>Employees</NavLink>
            </li>

             <li class="nav-item">
              <NavLink className="nav-link text-white"to='/departments-list'>Departments</NavLink>
            </li>

          </ul>

        </div>


      </nav>
    </div>
  )
}

export default Header