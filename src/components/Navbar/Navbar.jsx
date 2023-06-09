import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/Stackoverflowlogo.png';
import search from '../../Assets/magnifying-glass-solid.svg';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';


const Navbar = () => {

  var User = null;

  return (
    <nav>
      <div className="navbar">
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt="logo" height='40'/>
        </Link>
        <Link to='/' className="nav-item nav-btn">About</Link>
        <Link to='/' className="nav-item nav-btn">Products</Link>
        <Link to='/' className="nav-item nav-btn">For Teams</Link>
        <form>
          <input type="text" placeholder='Search...'/>
          <img src={search} alt="Search" width="18" className='search-icon '/>
        </form>
        { User === null ?
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
          <>
            <Avatar backgroundColor='#009dff' px="10px" py='10px' borderRadius="50%" color="white">
              <Link to='/User' style={{color:"white", textDecoration:'none'}}>R</Link>
            </Avatar>
            <button className='nav-item nav-links'>Log out</button>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar