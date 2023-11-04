import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../styles/Header.css'

function Header() {

    return (
<div className="header">
  <img src={logo} alt="kasa" id="header__logo" />

  <nav className="nav__header">
    <ul className="nav__link">
        
      <li><NavLink className="sign" to="/"> 
        Accueil 
        </NavLink></li> 

     <li><NavLink className="sign__up" to="/about">
        A Propos
      </NavLink></li> 
    </ul>
  </nav>
</div>

    )
}

export default Header 