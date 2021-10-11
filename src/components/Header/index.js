import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="app-name">Wave</h1>
    </div>
    <div className="tabs-container">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-link">
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  </nav>
)

export default Header
