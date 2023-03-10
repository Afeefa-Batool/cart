import React from 'react'
import{ Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {




  return (
    <div className='container'>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Faiz Jewellers</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/cart">Cart   {'        '} 
                <button className='badge text-dark'>{props.productsCount}</button>
                </NavLink>
              </li>
 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
