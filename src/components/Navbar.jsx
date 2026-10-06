import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className='container'>
        <Link to='/' className="navbar-brand fw-bold">
          <i class="fa-solid fa-clapperboard"></i> Movie Explorer
        </Link>
      </div>
    </nav>
  )
}

export default Navbar