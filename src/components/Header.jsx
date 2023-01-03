import './Header.css'
import LOGO_Header from '../assets/images/LOGO_Header.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
  let activeStyle = { textDecoration: 'underline' }

  return (
    <>
      <nav>
        <div className="navLeft">
          <a href="/" rel="noreferrer" className="logo_header">
            <img src={LOGO_Header} alt="logo"></img>
          </a>
        </div>

        <div className="navRight">
          <div>
            <NavLink
              to="/"
              className="linkHome"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/apropos"
              className="linkPropos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              A propos
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}
